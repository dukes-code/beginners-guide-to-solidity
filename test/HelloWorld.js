const { expect } = require("chai");

describe("Hello World Contract", function () {

  let HelloWorldContract;
  let helloWorldContractDeployed;

  beforeEach(async function () {
    HelloWorldContract = await ethers.getContractFactory("HelloWorld");
    helloWorldContractDeployed = await HelloWorldContract.deploy();
  });

  describe("Call Function Say Hello", function () {

    it("Should be return Hello World Solidity when call the function sayHello", async function () {

      const helloWorldMessage = await helloWorldContractDeployed.sayHello();
      expect("Hello World Solidity").to.equal(helloWorldMessage);

    });

  });

});