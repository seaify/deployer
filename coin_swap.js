
var NonceTrackerSubprovider = require("web3-provider-engine/subproviders/nonce-tracker")
const HDWalletProvider = require("@truffle/hdwallet-provider");
const BigNumber = require('bignumber.js');

let provider = new HDWalletProvider('a8871fc3cf3b539030b66326f3e181a0d23c828421c2e09d6d2c9e873e7c85cc', "https://ropsten.infura.io/v3/d9a7d5047bc84292b634d4339c87f42a");
var nonceTracker = new NonceTrackerSubprovider()
provider.engine._providers.unshift(nonceTracker)
nonceTracker.setEngine(provider.engine)


var contract = require("@truffle/contract");
var Web3 = require("web3");
var web3 = new Web3(process.env.ETH_MAINNET_ENDPOINT)
var Contract = require('web3-eth-contract');
Contract.setProvider(provider);


var usdt_json = require('./build/contracts/TetherToken.json'); //with path
var usdt_abi = usdt_json['abi'];
const usdt_address = '0x5b74D355328134881B7Eb2d4A831d0D1d468F33D';
var usdt_contract = contract({
  abi: usdt_abi,
  address: usdt_address
})
usdt_contract.setProvider(provider);



const ETH_ADDRESS = '0x31b02728580d54d95b60E9e9D5bB0e28A0914B10'
const DAI_ADDRESS = '0xad6d458402f60fd3bd25163575031acdce07538d'
const WETH_ADDRESS = '0xc778417e063141139fce010982780140aa0cd5ab'
const CHI_ADDRESS = '0x063f83affbcf64d7d84d306f5b85ed65c865dca4'
DEFAULT_ABI = [{"constant":true,"inputs":[],"name":"name","outputs":[{"name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_spender","type":"address"},{"name":"_value","type":"uint256"}],"name":"approve","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"totalSupply","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_from","type":"address"},{"name":"_to","type":"address"},{"name":"_value","type":"uint256"}],"name":"transferFrom","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"INITIAL_SUPPLY","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"decimals","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_value","type":"uint256"}],"name":"burn","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"_owner","type":"address"}],"name":"balanceOf","outputs":[{"name":"balance","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_from","type":"address"},{"name":"_value","type":"uint256"}],"name":"burnFrom","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"symbol","outputs":[{"name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_to","type":"address"},{"name":"_value","type":"uint256"}],"name":"transfer","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"_owner","type":"address"},{"name":"_spender","type":"address"}],"name":"allowance","outputs":[{"name":"remaining","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"inputs":[{"name":"_name","type":"string"},{"name":"_symbol","type":"string"},{"name":"_decimals","type":"uint256"}],"payable":false,"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"name":"_burner","type":"address"},{"indexed":false,"name":"_value","type":"uint256"}],"name":"Burn","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"owner","type":"address"},{"indexed":true,"name":"spender","type":"address"},{"indexed":false,"name":"value","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"from","type":"address"},{"indexed":true,"name":"to","type":"address"},{"indexed":false,"name":"value","type":"uint256"}],"name":"Transfer","type":"event"}]

async function issue_usdt() {

  let instance = await usdt_contract.at(usdt_address);
  try {
    // var result = await instance.swap_with_eth(BigNumber(10).pow(0).toString(), [WETH_ADDRESS, CHI_ADDRESS], swap_name, 30, { value: BigNumber(10).pow(16).toString(), from: ETH_ADDRESS, gas: 2000000, gas_price: 2000000000 });
    var result = await instance.issue(BigNumber(10).pow(8).toString(), { from: ETH_ADDRESS, gas: 4000000, gas_price: 2 * Math.pow(10, 9)});
    console.log(result);
  }
  catch (error) {
    console.log(error);
  }

  return;

}


issue_usdt();