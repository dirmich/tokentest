//SPDX-License-Identifier: Unlicense
pragma solidity ^0.8.0;

import "hardhat/console.sol";
import "./Child.sol";

contract Mom {
    string _name;
    uint256 _age;

    Child[] _children;

    constructor(string memory name, uint256 age) {
        _name = name;
        _age = age;
    }

    function createChild(string memory name, uint256 age) public {}
}
