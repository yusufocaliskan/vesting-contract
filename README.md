# Hardhat Project

Welcome to our token distribution guide! Here’s how it works: After our Token Generation Event (TGE) kicks off, you can start claiming tokens based on a carefully designed schedule. Initially, your claimable tokens increase second by second once the event starts. However, you'll need to wait out the cliff period before making any claims. After this, the amount you can claim grows steadily until you've accessed your full allocation. It’s a smooth and transparent way to manage your tokens!

## Upgradable Vesting Contract

Deploy: Vesting Contract

```shell
npx hardhat run scripts/deployVestingContract.js  --network bscMainnet
```

Testing comman

```shell
npx hardhat test test/VestingTest.js
```

Start the hardhat node on local (if you wish)

```shell
npx hardhat node
```

Others

```shell
npx hardhat help
REPORT_GAS=true npx hardhat test
```

# Usage

Create a new Event

```shell
await vestingContract.createNewEvent(
      'Test Event', //name
      'event1', //id
      50, //the percentage of the allocated resource that would be giving to the user in tge
      6000, //vesting
      30, //cliff
      '0x0', //privateAccount
    );
```

You can also create a private event for your customer.

```shell
await vestingContract.createNewEvent(
      'Test Event', //name
      'event1', //id
      50, //the percentage of the allocated resource that would be giving to the user in tge
      6000, //vesting
      30, //cliff
      '0x0', //privateAccount
    );
```

Allocate resource for user by giving her/his wallet address

```shell
const resp = await vestingContract.addPrivateVestingSchedule(
      user1.address, //id
      parseEther('1'),
      'event1',
      0, //leave it a 0, the event vesting time will be used.
      0, //leave it a 0, the event cliff time will be used.
    );
```

1. Users can access their allocated resources after the scheduled start time. The claimableAmount will be recalculated every second during the vesting period.
2. Users can only claim resources up to the percentage specified at the Token Generation Event (TGE) once the event has commenced.
3. Users will not be able to claim any tokens until the cliff period has elapsed.
4. After the cliff period, the claimableAmount will begin to increase until it reaches the total allocated amount.

```shell
    const resp = await vestingContract.claim(
      'event1',
      user1.address, //id
    );
```

check the test file for more functions.
