// SPDX-License-Identifier: MIT
pragma solidity ^0.8.9;

import "hardhat/console.sol";

contract HelloWorld {

   function sayHello() external view returns(string memory) {
      console.log("Function sayHello foi invocada.");
      return "Hello World Solidity";
   }

}