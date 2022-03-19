//SPDX-License-Identifier: Unlicense
pragma solidity ^0.8.4;

// import 'hardhat/console.sol';

import '@openzeppelin/contracts/token/ERC20/ERC20.sol';

contract Basic is ERC20 {
    constructor(
        string memory name,
        string memory symbol,
        uint256 supply,
        address payable target,
        address owner
    ) payable ERC20(name, symbol) {
        _mint(owner, supply * 10**decimals());
        target.transfer(msg.value);
    }
}
