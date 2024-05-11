const hre = require('hardhat');

async function main() {
  const ownerAdress = '';
  const tokenAddress = '';

  //Deploy vesting schedule
  const VestingSchedule = await hre.ethers.getContractFactory(
    'VestingSchedule',
  );

  const vestingSchedule = await VestingSchedule.deploy(
    ownerAdress,
    tokenAddress,
  );

  console.log(
    'VestingSchedule Contract Address',
    await vestingSchedule.getAddress(),
  );
}

main().catch((error) => {
  console.log(error);
  process.exitCode = 1;
});
