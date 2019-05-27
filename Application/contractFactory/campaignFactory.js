import web3 from '../config/web3'
import contract from '../contracts/campaignFactory.json'
//import contract from '../../Truffle/build/contracts/campaignFactory.json'
//console.log("contract == ",contract)

let address = "0x9D37eE6f5a8c2273AAFA01B73Cc5650280254229"

let abi = contract.abi;
let contractInstance = new web3.eth.Contract(abi,address)

export default contractInstance;
