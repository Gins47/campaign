const ConvertLib = artifacts.require("ConvertLib");
const MetaCoin = artifacts.require("MetaCoin");
const campaign = artifacts.require("campaign")

module.exports = function(deployer) {
  deployer.deploy(campaign);
  // deployer.link(ConvertLib, MetaCoin);
  // deployer.deploy(MetaCoin);
};
