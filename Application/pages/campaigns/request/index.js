import React ,{Component} from 'react'
import Layout from '../../../components/layout'
import {Link} from '../../../routes'
import { Card,Grid,Button  } from 'semantic-ui-react'

class Requests extends Component{

 static async getInitialProps(props){
     const {address} = props.query;
     return { address}
 }

    render(){
        return(
           // <div> hi </div>
            <Layout >
              <h3>Requests</h3>
               <Link route={`/campaigns/${this.props.address}/request/new`}>
               <a>
                   <Button primary>Add New Request</Button>
              </a>               
               </Link>
          
            </Layout>

        )}
}

export default Requests;