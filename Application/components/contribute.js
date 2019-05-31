import React,{Component} from 'react';
import web3 from '../config/web3'
import { Button,Form,Input,Message, } from 'semantic-ui-react'
import campaignInstance from '../contractFactory/campaigns'
import Router from '../routes'
class Contribute extends Component{

    state ={
        value:''
    }

    onSubmit = async (event)=>{
        event.preventDefault();
        try{
            const campaign = campaignInstance(this.props.address)
            const accounts = await web3.eth.personal.getAccounts();
            await campaign.methods.contribute().send({
    
                from : accounts[0],
                value : this.state.value,
                gas: 99999
            });
            Router.replaceRoute(`/campaigns/${this.props.address}`)
        }catch(err){

            console.log("Error == ",err)
        }
       

    }

 render(){
   return(
   <div>
       <Form onSubmit={this.onSubmit}>
       <Form.Field>
        <label>Amount to Contribute</label>
        <Input  
                value={this.state.value}
                onChange={event => this.setState({value:event.target.value})}
                label="ether" 
                labelPosition="right"
                placeholder='Contribution'
         />
                 
        <Button primary type='submit'>Contribute !!</Button>
        </Form.Field>
       </Form>
   </div>

   );
 }

}

export default Contribute;