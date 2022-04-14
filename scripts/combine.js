const hre = require('hardhat')

async function main() {
  // Hardhat always runs the compile task when running scripts with its command
  // line interface.
  //
  // If this script is run directly using `node` you may want to call compile
  // manually to make sure everything is compiled
  await hre.run('compile')

  // We get the contract to deploy
  const IToken = await hre.ethers.getContractFactory('Combine')
  const token = await IToken.deploy()

  await token.deployed()

  console.log(`deployed to:`, token.address)
  // setTimeout(async () => {
  //   const r = await hre.run('verify:verify', {
  //     address: token.address,
  //     contract: 'contracts/Basic.sol:Basic',
  //     constructorArguments: [name, symbol, supply],
  //   })
  //   console.log(`${name} verified `, r)
  // }, 2000)
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error)
    process.exit(1)
  })
// npx hardhat compile
// npx hardhat run scripts/deploy.js --network ropsten
// npx hardhat verify --contract contracts/Basic.sol:Basic --network ropsten 0xcCdc843c203BC629Af04FA01046Ae8b340da2644 Basic0 MTK0 10000
