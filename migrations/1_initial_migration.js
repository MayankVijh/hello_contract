var Migrations = artifacts.require("./Migrations.sol");
var HelloEthContract = artifacts.require('./HelloEthContract.sol');
module.exports = function(deployer) {
  deployer.deploy(Migrations);
deployer.deploy(HelloEthContract);
};
