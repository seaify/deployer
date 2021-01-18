const HDWalletProvider = require("@truffle/hdwallet-provider");
require('dotenv').config();
console.log(process.env.TESTNET_PRIVATE_KEY);

module.exports = {

  networks: {
    development1: {
      host: "127.0.0.1",
      port: 7545,
      network_id: "*"
    },
    development: {
      provider: () => new HDWalletProvider(process.env.TESTNET_PRIVATE_KEY, `http://149.28.192.121:10854`),
      network_id: 3,       // Ropsten's id
      gasPrice: 6 * Math.pow(10, 9),
      gas: 8000000,        // Ropsten has a lower block limit than mainnet
      confirmations: 0,    // # of confs to wait between deployments. (default: 0)
      timeoutBlocks: 200,  // # of blocks before a deployment times out  (minimum/default: 50)
      networkCheckTimeout: 1000000000,
      websockets: true,
      skipDryRun: true     // Skip dry run before migrations? (default: false for public nets )
    },
    mainnet: {
      provider: () => new HDWalletProvider(process.env.MAINNET_PRIVATE_KEY, `http://149.28.192.121:10853`),
      network_id: 1,       // mainnet
      gasPrice: 56 * Math.pow(10, 9),
      gas: 6000000,        // Ropsten has a lower block limit than mainnet
      confirmations: 0,    // # of confs to wait between deployments. (default: 0)
      timeoutBlocks: 200,  // # of blocks before a deployment times out  (minimum/default: 50)
      networkCheckTimeout: 1000000000,
      websockets: true,
      skipDryRun: true
    }
  //  test: {
  //    host: "127.0.0.1",
  //    port: 7545,
  //    network_id: "*"
  //  }
  },
  compilers: {
    solc: {
      version: "0.4.17",    // Fetch exact version from solc-bin (default: truffle's version)
      // docker: true,        // Use "0.5.1" you've installed locally with docker (default: false)
      // settings: {          // See the solidity docs for advice about optimization and evmVersion
      optimizer: {
        enabled: false,
        runs: 200
      },
      //  evmVersion: "byzantium"
      // }
    },
  },
  //
};
