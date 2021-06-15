const TokenEth = artifacts.require('./TsukiBasicERC20.sol');

module.exports = async done => {
    const [sender, _] = await web3.eth.getAccounts();
    const tokenEth = await TokenEth.deployed();
    const balance = await tokenEth.balanceOf(sender);
    console.log(balance.toString());
    done();
}