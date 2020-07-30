const Contributions = artifacts.require("./Contribution.sol");
const Upstate = artifacts.require("./Upstate")

module.exports = async function(deployer, accounts) {
    const now = new Date();
    const secondsSinceEpoch = Math.round(now.getTime() / 1000);
    const _lesserDate = secondsSinceEpoch - 1000;
    const _greaterDate = secondsSinceEpoch + 1000;
    let _upstate = await Upstate.new("Upstate", "Up", _lesserDate + 10000, _greaterDate + 100000)
    deployer.deploy(Contributions, 1, accounts[1], _upstate);
};