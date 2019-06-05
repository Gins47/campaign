import React ,{Component} from 'react'
import Layout from '../../../components/layout'
import {Link} from '../../../routes'
import { Card,Grid,Button,Table  } from 'semantic-ui-react'
import Campaign from '../../../contractFactory/campaigns'
import RequestRow from '../../../components/requestRow'
class Requests extends Component{

 static async getInitialProps(props){
     const {address} = props.query;
     const campaign = Campaign(address);
     const requestCount = await campaign.methods.getRequestsCount().call;
     const approversCount = await campaign.methods.approversCount().call();
     const requests = await Promise.all(
         Array(requestCount)
         .fill()
         .map((element,index)=>{
             return campaign.methods.request(index).call();
         })
     );
     
     console.log("Requests == ",requests)
     console.log("approversCount = ",approversCount)
     return {address,requests,requestCount,approversCount}
 }

 renderRow(){
     return this.props.requests.map((request,index)=>{
         console.log("INDEX == ",typeof index)
         return(
             <RequestRow 
             key={index}
             id={index}
             request={request}
             address={this.props.address}
             approversCount={this.props.approversCount}
             />
         )
     })
 }

    render(){
        const {Header,Row,HeaderCell,Body} = Table;
        return(
           // <div> hi </div>
            <Layout >
              <h3>Requests</h3>
               <Link route={`/campaigns/${this.props.address}/request/new`}>
               <a>
                   <Button primary>Add New Request</Button>
              </a>               
               </Link>
               <Table>
                   <Header>
                       <Row>
                           <HeaderCell>ID</HeaderCell>
                           <HeaderCell>Description</HeaderCell>
                           <HeaderCell>Amount</HeaderCell>
                           <HeaderCell>Recipient</HeaderCell>
                           <HeaderCell>Approval Count</HeaderCell>
                           <HeaderCell>Approve</HeaderCell>
                           <HeaderCell>Finalize</HeaderCell>
                       </Row>
                   </Header>
                   
                   <Body>
                      {this.renderRow()}     
                   </Body>
               </Table>
          
            </Layout>

        )}
}

export default Requests;