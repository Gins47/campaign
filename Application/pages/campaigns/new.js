import React,{Component} from 'react'
import Layout from '../../components/layout'
import { Button,Form,Input } from 'semantic-ui-react'

import {Personal} from 'web3-eth-personal';
import campaignFactory from '../../contractFactory/campaignFactory'
import web3 from '../../config/web3'
class CampaignNew extends Component {
 state = {
     minimumContribution :''
 }

 onSubmit = async (event) =>{
   event.preventDefault();
   const accounts = await web3.eth.personal.getAccounts();
   console.log("Accounts == ",accounts)
//    let address = await campaignFactory.methods
//          .deployCampaignContract(this.state.minimumContribution)
//          .send({

//             from : accounts[0],
//             value : 10,
//             gas : 470000 
//          });

//     console.log("Address == ",address)

 }

    render(){
        return(
            <Layout>
            <div>
                <h3>Create a new Campaign </h3>
                <Form onSubmit={this.onSubmit}>
                <Form.Field>
                <label>Minimum Contribution</label>
                <Input label="wei" 
                labelPosition="right"
                 placeholder='Minimum Contribution'
                 value = {this.state.minimumContribution}
                 onChange = {event => {this.setState({minimumContribution : event.target.value})}}
                 />
                </Form.Field>
                
                
                <Button primary type='submit'>Create</Button>
                </Form>
                </div>
            </Layout>
        )
    }

}

export default CampaignNew;