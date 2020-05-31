import React, {Component} from 'react';
import './WishlistProd.css'
import {Link} from 'react-router-dom';

const WishlistProd = (props) => {
  {if(props.wishlistProd.user === props.user._id) 
    return (
      <div className="panel panel-default">
        <h3 className="panel-title">{props.wishlistProd.name} ---No. {props.wishlistProd.price}</h3>
        <div className="panel-body">
          <p>Comment: {props.wishlistProd.comment}</p>
          

          <Link 
            className="btn btn-primary btn-sm"
            to={{
              pathname: "/editWishlistProd",
              state: props.wishlistProd
          }}>  
          UPDATE</Link>

          <button
            className="btn btn-danger btn-sm"
            onClick={()=> props.handleDeleteWishlistProd(props.wishlistProd._id)}
          >DELETE</button>

          <button
            className="btn btn-warning btn-sm"
            onClick={() => props.handleMove(props.wishlistProd)}
          >MOVE TO COLLECTION</button>

        </div>
      </div>
    )
  else return (<> </>)
  }
}
 
export default WishlistProd;