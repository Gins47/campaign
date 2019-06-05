import React,{Component} from 'react'
import {Table,Button} from 'semantic-ui-react'
import web3 from '../config/web3'
import Campaign from '../contractFactory/campaigns'

class RequestRow extends Component {
    onApprove = async ()=>{
        console.log("HELLO")
    const campaign = Campaign(this.props.address);
    const accounts = await web3.eth.getAccounts();
    
    await campaign.methods.approve(this.props.id).send({
        from:accounts[0],
        gas:99999
    })
    };


    onFinalize = async ()=>{
        console.log("HELLO")
    const campaign = Campaign(this.props.address);
    const accounts = await web3.eth.getAccounts();
    
    await campaign.methods.finalizeRequest(this.props.id).send({
        from:accounts[0],
        gas:99999
    })

    };

    render(){
        const {Row,Cell} = Table;
        const {id,request,approversCount} = this.props;
        console.log("approversCount  == ",web3.utils.hexToNumberString(approversCount));
        return(
        <Row>
            <Cell>{id}</Cell>
            <Cell>{request.description}</Cell>
            <Cell>{web3.utils.hexToNumberString(request.value)}</Cell> 
            <Cell>{request.recipent}</Cell>
            <Cell>{web3.utils.hexToNumberString(request.approvalCount)}/{web3.utils.hexToNumberString(approversCount)}</Cell> 
            <Cell>
                {request.complete ? null :(
                   <Button color="green" basic onClick={this.onApprove}>Approve</Button>
                )}
            </Cell>
            <Cell>
              {request.complete ? null :(
                <Button color="teal" basic onClick={this.onFinalize}>Finalize</Button>
                )}
            </Cell>


        </Row>    
        )
    }
}

export default RequestRow;