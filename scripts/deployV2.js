const { ethers, upgrades } = require("hardhat");

// TO DO: Place the address of your proxy here!
const proxyAddress = "0xB9adBCc257658c2dc8a87794e37f0FAd29C23FE5";

async function main() {
  const contractV2 = await ethers.getContractFactory("contractV2");
  const upgraded = await upgrades.upgradeProxy(proxyAddress, contractV2);
  console.log("The upgraded contract address is:");
  console.log(upgraded.address);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
