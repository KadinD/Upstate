// SPDX-License-Identifier: MIT
// contracts/Upstate.sol
pragma solidity >=0.5.0 <0.7.0;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

contract Upstate is ERC20 {
    uint256 private _startTime;
    uint256 private _endTime;

    constructor(uint256 startTime, uint256 endTime) ERC20("Upstate", "Up") public {
        _mint(msg.sender, 1000);
        _startTime = startTime;
        _endTime = endTime;
    }

    function transfer(address recipient, uint256 amount) public virtual override returns (bool) {
        if (now > _startTime && now < _endTime) {
            _transfer(_msgSender(), recipient, amount);
        }  
        return true;
    }
}
