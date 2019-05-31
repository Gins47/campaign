import React,{Component} from 'react'
import Layout from '../../components/layout'
import campaign from '../../contractFactory/campaigns'
import { Card,Grid,Button  } from 'semantic-ui-react'
import web3 from '../../config/web3'
import Contribute from '../../components/contribute'
import { Link } from '../../routes'
class show extends Component {

    static async getInitialProps(props){
          console.log(props.query.address)
         const campaignInstance = campaign(props.query.address)
         let summary = await campaignInstance.methods.getSummary().call()
         console.log("Summary = ",summary)


        return {
            address : props.query.address,
            minimumContribution : web3.utils.hexToNumberString(summary[0]),
            balance : web3.utils.hexToNumberString(summary[1]),
            requestCount : web3.utils.hexToNumberString(summary[2]),
            approversCount : web3.utils.hexToNumberString(summary[3]),
            manager : summary[4]
        }
    }

    renderCard(){
      
        const {
            minimumContribution,
            balance,
            requestCount,
            approversCount,
            manager
        } = this.props;

      //  console.log("Minimum Contribution == ",web3.utils.hexToNumberString(minimumContribution));
       const items = [
          {
            header: manager,
            description: 'Manager created campagin and can withdraw money',
            meta: 'Address of manager',
            style: {overflowWrap:'break-word'}
          },
          {
            header: minimumContribution,
            description: 'Minimum Contribution required (wei)',
            meta: 'Minimum Contribution',
           // style: {overflowWrap:'break-word'}
          },
          {
            header: approversCount,
            description: 'The number of approvers',
            meta: 'Number of Approvers',
          //  style: {overflowWrap:'break-word'}
          },
          {
            header: requestCount,
            description: 'Total number of request in this campaign',
            meta: 'Number of requests',
           // style: {overflowWrap:'break-word'}
          },
          {
            header: balance,
            description: 'Manager created campagin and can withdraw money',
            meta: 'Balance of the contract (wei)',
           // style: {overflowWrap:'break-word'}
          }

       ]

       return <Card.Group items={items} />;
    }


 render(){
     return(
         <Layout>
         <h3> Campaign Details</h3>
         <Grid>
             <Grid.Row>
             <Grid.Column width={10}>         
                {this.renderCard()}
                
                </Grid.Column>
                <Grid.Column width={6}>         
                <Contribute address={this.props.address} />
                </Grid.Column>
             </Grid.Row>
             <Grid.Row>
             <Grid.Column>
                <Link route={`/campaigns/${this.props.address}/requests`} >
                    <a>
                    <Button primary> View Request </Button> 
                    </a> 
                </Link>
            </Grid.Column>
             </Grid.Row>
        
         </Grid>
         </Layout>
     )
 }
}

export default show;