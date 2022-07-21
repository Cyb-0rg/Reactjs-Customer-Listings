import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Customers from './Customers';
import { BrowserRouter as Router, Switch, Route, Redirect} from 'react-router-dom';
import { pageNotFound } from './pageNotFound';



class App extends Component {
  render() {
    console.log("Host URL"+process.env.PUBLIC_URL);
    return (

      <Router basename={process.env.PUBLIC_URL}>
        <div className="App">

        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Simple React App</h1>
        </header>



          <Switch>
                <Route exact path= "/" render={() => (
                  <Redirect to="/customerlistings"/>
                )}/>
                
                 <Route exact  path='/customerlistings'  component={Customers}  />

                 <Route exact  path='/*' component={pageNotFound} />

          </Switch>



      </div>
    </Router>

    );
  }
}

export default App;
