import React, { Component } from 'react';
import './App.css';
import Status from '../../pages/Status/Status';
import Login from '../Login/Login';
import Signup from "../Signup/Signup";
import userService from "../../utils/userService";
import { Route, Switch } from 'react-router-dom';

// handleSignupOrLogin = () => {
//   this.setState({user: userService.getUser()});	    
// };	  

class App extends React. Component {
  
  render() {
    return (
<div className="App">
        
        <Switch>
          <Route exact path='/' render={() =>
            <Status />
          } />
          <Route exact path='/signup' render={({ history }) => 
            <Signup
              history={history}
              handleSignupOrLogin={this.handleSignupOrLogin}
              />
            }
          
              
            />
          }/>
          <Route exact path='/login' render={({ history }) => 
            <Login history={history}
            handleSignupOrLogin={this.handleSignupOrLogin}
          />
        }
              
            />
          }/>
        </Switch>
            </div>
          
          );
        }
      
      }
    
      
      

export default App;