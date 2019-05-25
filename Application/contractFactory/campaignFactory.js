import web3 from '../config/web3'
import contract from '../contracts/campaignFactory.json'
//import contract from '../../Truffle/build/contracts/campaignFactory.json'
//console.log("contract == ",contract)

let address = "0x5EE3414b4b02C92fA9EBEE8dA22761544A08Ea8a"

let abi = contract.abi;
let contractInstance = new web3.eth.Contract(abi,address)

export default contractInstance;
