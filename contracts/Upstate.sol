// SPDX-License-Identifier: MIT
// contracts/Upstate.sol
pragma solidity >=0.5.0 <0.7.0;

import '@openzeppelin/contracts/token/ERC20/ERC20.sol';

/// @title A mintable ERC20 token "Upstate" with restricted transfer times
/// @notice The token can only be transferred between the startTime and endTime. 1000 tokens intialized
contract Upstate is ERC20 {
    uint256 private startTime;
    uint256 private endTime;
    uint256 public createTime;

    /// @param _name name of the token - set by parent constructor
    /// @param _symbol symbol of the token - set by parent constructor
    /// @param _endTime the last time at which tokens should be sent
    /// @param _startTime the first time at which tokens can be sent
    /// @dev uses default 18 decimals defined by parent
    constructor(string memory _name, string memory _symbol, uint256 _startTime, uint256 _endTime) 
        ERC20(_name, _symbol) 
        public {
            _mint(msg.sender, 1000);
            startTime = _startTime;
            endTime = _endTime;
        }

    /// @notice overrides function such that before any token transfer takes place it checks valid time
    /// @param _from address sending the tokens
    /// @param _to address receiving the tokens
    /// @param _amount amount of token sent in this transasction
    function _beforeTokenTransfer(address _from, address _to, uint256 _amount) internal override {
        super._beforeTokenTransfer(_from, _to, _amount); 
        uint256 time = block.timestamp;
        require(time >= startTime, "can only send transactions after start time");
        require(time <= endTime, "can only send transactions before end time");  
    }
    
}
