import React, {Component} from 'react';
import Panel from 'react-bootstrap/lib/Panel'
import axios from 'axios'

//This Component is a child Component of Customers Component
export default class CustomerDetails extends Component {

  constructor(props) {
    super(props);
    this.state = {}
  }

  //Function which is called when the component loads for the first time
  componentDidMount() {
    this.getCustomerDetails(this.props.val)
  }

  //Function whic h is called whenver the component is updated
  componentDidUpdate(prevProps) {

    //get Customer Details only if props has changed
    if (this.props.val !== prevProps.val) {
      this.getCustomerDetails(this.props.val)
    }
  }

  //Function to Load the customerdetails data from json.
  getCustomerDetails(id) {
    axios.get('assets/samplejson/customer' + id + '.json').then(response => {
      this.setState({customerDetails: response})
    })
  };

  render() {
    if (!this.state.customerDetails)
      return (<p>Loading Data</p>)
    return (<div className="customerdetails">
      <Panel bsStyle="info" className="centeralign">
        <Panel.Heading>
          <Panel.Title componentClass="h3">{this.state.customerDetails.data.name}</Panel.Title>
        </Panel.Heading>
        <Panel.Body>
          <p> <b>Name :</b> {this.state.customerDetails.data.name}</p>
          <p> <b>Email :</b> {this.state.customerDetails.data.email}</p>
          <p><b>Phone : </b>{this.state.customerDetails.data.phone}</p>
          <p><b>City :</b> {this.state.customerDetails.data.city}</p>
          <p><b>State : </b>{this.state.customerDetails.data.state}</p>
          <p><b>Country : </b>{this.state.customerDetails.data.country}</p>
          <p><b>Organization : </b>{this.state.customerDetails.data.organization}</p>
          <p><b>Job Profile : </b>{this.state.customerDetails.data.jobProfile}</p>
          <p><b>Additional Info : </b>{this.state.customerDetails.data.additionalInfo}</p>
        </Panel.Body>

        <Panel.Footer>
             <p>Name : I am panel Footer</p>
        </Panel.Footer>

        
      </Panel>
      
    </div>)
  }
}