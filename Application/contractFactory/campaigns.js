import web3 from '../config/web3'
import contract from '../contracts/campaign.json'
//import contract from '../../Truffle/build/contracts/campaignFactory.json'
//console.log("contract == ",contract)

//let address = "0x202a8C83D5721aC1F3e98c79FbFeDBe5cDFBA2ba"

export default (address) => {

    let abi = contract.abi;
    let contractInstance = new web3.eth.Contract(abi,address)
    
    return contractInstance;
}
