const TetherToken = artifacts.require("./TetherToken");

module.exports = function(deployer, network) {
  deployer.deploy(TetherToken, Math.pow(10, 12), 'USDT', 'USDT', 6);
};
