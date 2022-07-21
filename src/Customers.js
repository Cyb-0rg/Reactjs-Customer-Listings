import React, {Component} from 'react';
import Panel from 'react-bootstrap/lib/Panel';
import Button from 'react-bootstrap/lib/Button';
import CustomerDetails from './CustomerDetails';
import CustomerPic from './customersPic';
import axios from 'axios';

export default class Customers extends Component {

  constructor(props) {
    super(props)
    this.state = {
      selectedCustomer: 1
    }
  }

  //function which is called the first time the component loads
  componentDidMount() {
    this.getCustomerData();
  }

  //Function to get the Customer Data from json
  getCustomerData() {
    axios.get('assets/samplejson/customerlist.json').then(response => {
      this.setState({customerList: response})
    })
  };

  render() {
    if (!this.state.customerList)
      return (<p>Loading data</p>)


    return (
      <div className="addmargin">

       {/* the left side inculues the: 1. NAVBAR 2. click fpr Details Button */}
      {/* notice the 6 in the mid-col -6 bootstrap section  */}

      <div className="col-md-3">
        {

          this.state.customerList.data.map(customer => 
              <Panel bsStyle="info" key={customer.name} className="centeralign">
                  <Panel.Heading>
                    <Panel.Title componentClass="h3">{customer.name}</Panel.Title>
                  </Panel.Heading>

                  <Panel.Body>
                    <p>{customer.email}</p>
                    <p>{customer.phone}</p> 
                    <p>{customer.jobProfile}</p>
                    <Button bsStyle="info" onClick={() => this.setState({selectedCustomer: customer.id})}>

                      Click to View Details

                    </Button>

                  </Panel.Body>
              </Panel>)
        } 
         {/* the left side inculues the: 1. NAVBAR 2. click fpr Details Button */}


       
      </div>


        {/* this is the middle dection for the datials redering  */}
        {/* notice the 6 in the mid-col -6 bootstrap section  */}
      <div className="col-md-6">
        <CustomerDetails val={this.state.selectedCustomer}/>
      </div>
        {/* this is the middle section for the datails redering  */}








    {/* this is the experimental version for the right col */}
    <div className="col-md-3"  >



    <CustomerPic val={this.state.selectedCustomer}/>

    </div> {/*  this is the end of the right section fr pic div tag */} 




</div>); {/*  this is the end of the render return div tag */}
       















  }

}
