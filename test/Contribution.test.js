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