//SPDX-License-Identifier: Unlicense
pragma solidity ^0.8.0;

import "hardhat/console.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

contract Child is Ownable {
    string public name;
    uint256 public age;
    bool public canDate;
    bool isGirl;

    constructor(
        string memory _name,
        uint256 _age,
        bool _isGirl
    ) {
        name = _name;
        age = _age;
        isGirl = _isGirl;
    }

    function permitDate() public onlyOwner {
        canDate = true;
    }
}
