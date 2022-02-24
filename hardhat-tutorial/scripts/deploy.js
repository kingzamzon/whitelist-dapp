const { ethers } = require("hardhat");

async function main() {
    /**
     * A contract factory in ethers.js is an abstraction used to deploy
     * new smart contract, so whitelistcontract here is a factory for
     * instances of our whitelist contract.
     */
    const whitelistcontract = await ethers.getContractFactory("Whitelist");

    // here we deploy the contract
    const deployedWhitelistContract = await whitelistcontract.deploy(10);
    // 10 is the maximum number of whitelisted addresses allowed

    // wait for it to finish deploying
    await deployedWhitelistContract.deployed();

    // print the address of the deployed contract
    console.log(
        "Whitelist Contract Address",
        deployedWhitelistContract.address
    );
}

main()
    .then(() => process.exit(0))
    .catch((error) => {
        console.error(error);
        process.exit(1);
    })