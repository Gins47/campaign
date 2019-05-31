import React,{Component} from 'react'
import CampaignContract from '../../../contractFactory/campaigns'
import { Button,Form,Input,Message } from 'semantic-ui-react'
import Layout from '../../../components/layout'
import web3 from '../../../config/web3'
import {Router,Link} from '../../../routes'

class NewRequest extends Component{
    state = {
        Description :'',
        Value:'',
        Recipient: '',
        Loading: false,
        ErrorMsg:''
    }

    static async getInitialProps(props){
        const {address} = props.query;
        return { address}
    }

    onSubmit= async event =>{
        event.preventDefault();
        try{
            console.log("inside Onsubmit")
            this.setState({Loading:true,ErrorMsg:''})
            const campaign = CampaignContract(this.props.address)
            const {Description,Value,Recipient} = this.state;
            const accounts = await web3.eth.getAccounts();
            console.log(Description,Value,Recipient)
            await campaign.methods.createRequest(Description,Value,Recipient).send({
                from: accounts[0],
                gas: 999999
            });

           Router.pushRoute(`/campaign/${this.props.address}/requests`)
        }catch(err){
            console.log("Error == ",err)
            this.setState({ErrorMsg:err.message})
        }
        thsi.setState({Loading:false})
    }

    render(){
        return(
                <Layout >
                <h3> Create a Request  </h3>
                <Form onSubmit={this.onSubmit} error={!!this.state.ErrorMsg}>
                    <Form.Field>
                        <label>Description</label>
                        <Input 
                        placeholder='Description'
                        value = {this.state.Description}
                        onChange = {event => {this.setState({Description : event.target.value})}}
                        />
                    </Form.Field>
                     <Form.Field>
                        <label>Value</label>
                        <Input 
                        placeholder='Value'
                        value = {this.state.Value}
                        onChange = {event => {this.setState({Value : event.target.value})}}
                        />
                    </Form.Field>
                     <Form.Field>
                        <label>Recipient</label>
                        <Input 
                        placeholder='Recipient'
                        value = {this.state.Recipient}
                        onChange = {event => {this.setState({Recipient : event.target.value})}}
                        />
                    </Form.Field>
                <Message error header="Oops" content={this.state.ErrorMsg} />    
                <Button loading={this.state.Loading} primary type='submit'>Create</Button>
                </Form>

                </Layout >
            )
     }
}

export default NewRequest;