//SPDX-License-Identifier: Unlicense
pragma solidity ^0.8.4;

// import 'hardhat/console.sol';

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";

contract Combine is ERC721 {
    constructor() ERC721("Combinable", "CBT") {}

    function mint(address payable owner) {
        _safeMint(owner, tokenId);
    }
}
