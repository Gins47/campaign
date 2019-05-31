import React,{Component} from 'react'
import Layout from '../../components/layout'
import { Button,Form,Input,Message } from 'semantic-ui-react'
import {Personal} from 'web3-eth-personal';
import campaignFactory from '../../contractFactory/campaignFactory'
import web3 from '../../config/web3'
import {Router} from '../../routes'
class CampaignNew extends Component {
 state = {
     minimumContribution :'',
     errorMessage:'',
     loading: false
 }

 onSubmit = async (event) =>{
   event.preventDefault();

   this.setState({loading:true,errorMessage:''})
   try{
    const accounts = await web3.eth.personal.getAccounts();
    console.log("Accounts == ",accounts[0])
    let value =  this.state.minimumContribution; 
    console.log("Value = ",value)
    await campaignFactory.methods
          .deployCampaignContract(this.state.minimumContribution)
          .send({
             from : accounts[0],
             gas : 999999 
          });
 
     //console.log("Address == ",address)
      Router.push('/');
   }catch(err){
       this.setState({errorMessage: err.message})
   }
   this.setState({loading:false})
 }

    render(){
        return(
            <Layout>
            <div>
                <h3>Create a new Campaign </h3>
                <Form onSubmit={this.onSubmit} error={!!this.state.errorMessage}>
                <Form.Field>
                <label>Minimum Contribution</label>
                <Input label="wei" 
                labelPosition="right"
                 placeholder='Minimum Contribution'
                 value = {this.state.minimumContribution}
                 onChange = {event => {this.setState({minimumContribution : event.target.value})}}
                 />
                </Form.Field>
                <Message error header="Oops" content={this.state.errorMessage} />
                
                <Button loading={this.state.loading} primary type='submit'>Create</Button>
                </Form>
                </div>
            </Layout>
        )
    }

}

export default CampaignNew;