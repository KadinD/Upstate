// SPDX-License-Identifier: MIT
// contracts/Upstate.sol

pragma solidity >=0.5.0 <0.7.0;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import "@openzeppelin/contracts/math/SafeMath.sol";
import "./Crowdsale.sol";

/// @title A Contribution contract which allows users to donate ETH tokens and receive Upstate in return
/// @notice The donations are capped after 1000 ETH have been donated
contract Contribution is Crowdsale {

    // stores the amount that each address has donated to this contract
    mapping(address => uint) private donationAmounts;


    constructor(uint256 _rate, address payable _wallet, ERC20 _token) 
        Crowdsale(_rate, _wallet, _token) public  {
    }


    /// @notice this overrides the parent crowdsale function to retain the total donation amt for each user
    /// @dev modifies the state of the donationAmounts mapping 
    /// @param beneficiary address of the donor of the ETH
    /// @param weiAmount is the new wei amount donated by this donor, *not* cumulative amount
    /// test commment 
    function _updatePurchasingState(address beneficiary, uint256 weiAmount) internal override {
        uint256 oldAmount = donationAmounts[beneficiary];
        donationAmounts[beneficiary] = oldAmount + weiAmount;
    }  

    /// @param donor the address of the donor 
    /// @return uint256 the amount of wei donated so far by this donor   
    function returnDonationAmount(address donor) public view returns (uint256) {
        require(donor != address(0), "zero address");
        return donationAmounts[donor];
    }

}

