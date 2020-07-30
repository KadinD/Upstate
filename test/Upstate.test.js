const BigNumber = require('bignumber.js');
require('@openzeppelin/test-helpers');
const Upstate = artifacts.require('Upstate');
require('chai')
    .use(require('chai-bignumber')(BigNumber))
    .should();
const {
    BN,
    constants,
    expectEvent,
    expectRevert,
} = require('@openzeppelin/test-helpers');
const time = require('@openzeppelin/test-helpers/src/time');

contract('Upstate', accounts => {
    const _name = 'Upstate';
    const _symbol = 'Up';
    const user1 = accounts[1];
    let _supply = 1000;
    const now = new Date();
    const secondsSinceEpoch = Math.round(now.getTime() / 1000)
    const _lesserDate = secondsSinceEpoch - 1000;
    const _greaterDate = secondsSinceEpoch + 1000;

    beforeEach(async function() {
        this.owner = accounts[0];
        this.token = await Upstate.new(_lesserDate, _greaterDate)
        this.underToken = await Upstate.new(_lesserDate + 10000, _greaterDate + 100000)
        await time.advanceBlock();
    });

    describe('basic token details', function() {
        it('has correct name', async function() {
            const name = await this.token.name();
            name.should.equal(_name);
        });

        it('has correct symbol', async function() {
            const symbol = await this.token.symbol();
            symbol.should.equal(_symbol);
        });

        it('has 1000 total supply', async function() {
            const supply = new BigNumber(await this.token.totalSupply());
            supply.should.be.bignumber.equal(_supply);
        });
    })

    describe('token transfer functionality', function() {
        const to = accounts[4]
        const amount = 100

        it('correct starting balance', async function() {
            const initialBalance = new BigNumber(await this.token.balanceOf(this.owner));
            initialBalance.should.be.bignumber.equal(1000);
        });


        it('transfer OK within time bounds', async function() {
            await this.token.increaseAllowance(to, amount);
            await this.token.transfer(to, amount, { from: this.owner })
            const senderBalance = new BigNumber(await this.token.balanceOf(this.owner))
            senderBalance.should.be.bignumber.equal(900);
            const recipientBalance = new BigNumber(await this.token.balanceOf(to))
            recipientBalance.should.be.bignumber.equal(100);
        });

        it('transfer fails below time bounds', async function() {
            await expectRevert(
                this.underToken.transfer(to, amount, { from: this.owner })
            );
        });

        it('transfer fails above time bounds', async function() {
            await expectRevert(
                this.overToken.transfer(to, amount, { from: this.owner })
            );
        });

    })


    /// should also test transferFrom
})