import React, {Component} from 'react';
import Panel from 'react-bootstrap/lib/Panel'
import axios from 'axios'

//This Component is a child Component of Customers Component
export default class CustomerPic extends Component {

  constructor(props) {
    super(props);
    this.state = {}
  }

  //Function which is called when the component loads for the first time
  componentDidMount() {
    this.getCustomerPic(this.props.val)
  }

  //Function whic h is called whenver the component is updated
  componentDidUpdate(prevProps) {

    //get Customer Details only if props has changed
    if (this.props.val !== prevProps.val) {
      this.getCustomerPic(this.props.val)
    }
  }

  //Function to Load the customerdetails data from json.
  getCustomerPic(id) {
    axios.get('assets/samplejson/customer' + id + '.json').then(response => {
      this.setState({customerDetails: response})
    })
  };

  render() {
    if (!this.state.customerDetails)
      return (<p>Loading Data</p>)
    return (<div className="customerDetails">
      <Panel bsStyle="info" className="centeralign">

            <Panel.Heading>
            <Panel.Title componentClass="h3">{this.state.customerDetails.data.name}</Panel.Title>
            </Panel.Heading>

            <Panel.Body>
            <img src= {this.state.customerDetails.data.pic} ></img>
            </Panel.Body>

        
      </Panel>
      
    </div>)
  }
}