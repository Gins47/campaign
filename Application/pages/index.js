import React,{Component} from 'react';
import campaignFactory from '../contractFactory/campaignFactory'
import { Card,Button } from 'semantic-ui-react'
import Layout from '../components/layout'

import {Link} from '../routes'
class campaignIndex extends Component {
   

    static async getInitialProps(){
        const campaign = await campaignFactory.methods.getAllDeployedCampaign().call();
        console.log("Campaign = ",campaign)
        return { campaign }
    }

    renderCampaign(){
        const item = this.props.campaign.map(address =>{
           return {
            header : address,
            description : (
                <Link route={`/campaigns/${address}`}>
                   <a>View Campaign</a>
                 </Link>
            ),
            fluid : true
           } 
        })

        return <Card.Group items={item} />;
    }

    render(){
       return(
           <Layout>
               <div>
         
            <h3> Open Campaigns </h3>
            <Link route="/campaigns/new">
                <a> 
                    
                <Button floated="right" content='Add Campaign' icon='add circle' labelPosition='left'  primary/>
                </a>
            </Link>
                {this.renderCampaign()} 
          </div>
        
         </Layout>
       )    
    }
}

export default campaignIndex;