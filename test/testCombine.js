const { expect } = require('chai')
const { parseEther } = require('ethers/lib/utils')
const { ethers, utils } = require('hardhat')

describe('Basic', function () {
  it('Should send to payer', async function () {
    const factory = await ethers.getContractFactory('Combine')
    const [owner, payer, ...addr] = await ethers.getSigners()
    const token = await factory.deploy(
      'TEST',
      'TST1',
      10000,
      payer.address,
      owner.address,
      {
        value: parseEther('1'),
      }
    )
    await token.deployed()

    const payer_bal = await token.balanceOf(payer.address)
    const owner_bal = await token.balanceOf(owner.address)

    console.log('payer', payer.address, payer_bal, await payer.getBalance())
    console.log('owner', owner.address, owner_bal, await owner.getBalance())
    // expect(payer_bal).to.equal('Hello, world!')

    // const setGreetingTx = await greeter.setGreeting('Hola, mundo!')

    // // wait until the transaction is mined
    // await setGreetingTx.wait()

    // expect(await greeter.greet()).to.equal('Hola, mundo!')
  })
})
