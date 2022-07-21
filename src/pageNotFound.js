// @flow
import * as React from 'react';
import Customers from './Customers';
import { BrowserRouter as Router, Switch, Route, Redirect, NavLink} from 'react-router-dom';
import Button from 'react-bootstrap/lib/Button';

 
export class pageNotFound extends React.Component{
  render() {
    return (

       

  


            <div className="pageNotFound">

                <h1>Oops..! 404 Page Not Found</h1>
                <p>Looks like you came to wrong page on our server</p>
                <NavLink exact to="/customerlistings">Home</NavLink> <br/>
                <img src="https://static.vecteezy.com/system/resources/thumbnails/007/942/097/small_2x/illustration-of-page-not-found-vector.jpg" height="500" width="500" alt="not found" />
            </div>
 
    );
  };
};
