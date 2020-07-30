const BigNumber = require('bignumber.js');
require('@openzeppelin/test-helpers');
const Upstate = artifacts.require('Upstate');
const Contributions = artifacts.require('Contribution.sol');
require('chai')
    .use(require('chai-bignumber')(BigNumber))
    .should();
const {
    BN,
    constants,
    expectEvent,
    expectRevert,
} = require('@openzeppelin/test-helpers');
const time = require('@openzeppelin/test-helpers/src/time'); -

contract("Contribution", function([_, wallet, secondAccount]) {

    const _name = "Upstate";
    const _symbol = "UP";
    const now = new Date();
    const secondsSinceEpoch = Math.round(now.getTime() / 1000)
    const _lesserDate = secondsSinceEpoch - 1000;
    const _greaterDate = secondsSinceEpoch + 1000;
    const _rate = 1;
    const _weiRaised = 0;
    const _wallet = wallet;

    beforeEach(async function() {
        this.token = await Upstate.new(
            _name,
            _symbol,
            _lesserDate,
            _greaterDate
        );

        this.donation = await Contributions.new(
            _rate,
            _wallet,
            _token
        );

    });


})