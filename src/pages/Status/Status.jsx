import React, { Component } from 'react';
import { Link } from "react-router-dom";
import NavBar from "../../components/NavBar/NavBar";



const Status = (props) => {
  return (
    <div className="Status">
      <NavBar user={props.user} handleLogout={props.handleLogout} />
      <div className="flex-h align-flex-end">
        </div>
        </div>

  )
  }
    
export default Status;
       
    
    
  
