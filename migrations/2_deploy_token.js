const Upstate = artifacts.require("./Upstate.sol");

module.exports = function(deployer) {
    let lesserDate = new Date().getTime() - 100000000;
    let greaterDate = new Date().getTime() + 10000000;
    deployer.deploy(Upstate, "Upstate", "UP", lesserDate, greaterDate);

};