//SPDX-License-Identifier: Unlicense
pragma solidity ^0.8.0;

abstract contract ChildInterface {
    function isChildInterface() public pure virtual returns (bool);

    function isGirl() public pure virtual returns (bool);
}
