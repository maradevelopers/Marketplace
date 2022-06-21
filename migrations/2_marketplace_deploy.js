const Marketplace = artifacts.require("Marketplace");

module.exports = function (deployer) {
  // deployer.deploy(Workshop);
  deployer.deploy(Marketplace);
};
