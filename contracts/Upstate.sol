// SPDX-License-Identifier: MIT
// contracts/Upstate.sol
pragma solidity >=0.5.0 <0.7.0;

import '@openzeppelin/contracts/token/ERC20/ERC20.sol';

contract Upstate is ERC20 {
    uint256 private _startTime;
    uint256 private _endTime;
    uint256 public createTime;

    constructor(uint256 startTime, uint256 endTime) ERC20('Upstate', 'Up') public {
        _mint(msg.sender, 1000);
        _startTime = startTime;
        _endTime = endTime;
    }

    function _beforeTokenTransfer(address from, address to, uint256 amount) internal override {
        super._beforeTokenTransfer(from, to, amount); 
        uint256 time = block.timestamp;
        require(time >= _startTime, "can only send transactions after start time");
        // require(time <= _startTime, "can only send transactions before end time");  
    }
    
}
