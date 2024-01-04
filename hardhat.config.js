require("@nomiclabs/hardhat-waffle");
require("@nomiclabs/hardhat-etherscan");
require("@openzeppelin/hardhat-upgrades");
require("dotenv").config();
require("@nomiclabs/hardhat-ethers");

const { API_URL, PRIVATE_KEY } = process.env;

task("accounts", "Prints the list of accounts", async () => {
  const accounts = await ethers.getSigners();

  for (const account of accounts) {
    console.log(account.address);
  }
});

module.exports = {
  solidity: "0.8.11",
  defaultNetwork: "matic",
  networks: {
    hardhat: {
      //throwOnTransactionFailures: true,
      //throwOnCallFailures: true,
      //allowUnlimitedContractSize: true,
      //timeout: 1800000,
    },
    matic: {
      allowUnlimitedContractSize: true,
      url: API_URL,
      accounts: [`0x${PRIVATE_KEY}`],
      gas: 2100000,
      gasPrice: 8000000000,
      //gas: 4200000,
      //gasPrice: 16000000000,
      //allowUnlimitedContractSize: true,
    },
  },
};
