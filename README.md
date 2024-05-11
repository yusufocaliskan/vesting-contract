# Hardhat Project

This is an upgradable staking contract developed in Solidity. To deploy the staking contract on the Sepolia network, execute the following command:

## Upgradable Stake Contract

Deploy: Stake Contract
`npx hardhat run scripts/deployUpgradeableStakeContract.js  --network bscMainnet`

Upgrade: The upgradable Stake Contrat
`npx hardhat run scripts/upgradeStakeContract.js --network bscTestnet`

Testing comman
`npx hardhat test test/StakeContract.js`

Start the hardhat node on local (if you wish)
`npx hardhat node`

Others

```shell
npx hardhat help
REPORT_GAS=true npx hardhat test
```
