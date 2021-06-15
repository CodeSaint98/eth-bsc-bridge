pragma solidity ^0.6.12;

import './BridgeBase.sol';

contract BridgeEth is BridgeBase{
    constructor(address token) BridgeBase(token) public {}
}