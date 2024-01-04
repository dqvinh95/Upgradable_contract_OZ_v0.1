const { ethers, upgrades } = require("hardhat");

async function main() {
  const contractV1 = await ethers.getContractFactory("contractV1");
  console.log("Ethers function executed...");
  const proxy = await upgrades.deployProxy(contractV1, [23]);
  console.log("Upgrade function executed...");
  await proxy.deployed();

  console.log(proxy.address);
}

main();
