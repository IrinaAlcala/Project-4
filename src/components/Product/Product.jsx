import React from 'react';
//import './Product.css'
import {Link} from 'react-router-dom';

const Product = (props) => {
  {if(props.product.user === props.user._id) 
    return (
      <div className="panel panel-default">
        <h3 clasName="panel-title">{props.product.name} ---No. {props.product.price}</h3>
        <div className="panel-body">
          {/* <p>Price: {props.Product.price}</p> */}
          <p>Comment: {props.product.comment}</p>
          <Link 
            className="btn btn-primary btn-sm"
            to={{
              pathname: "/edit",
              state: props.product
          }}>  
          UPDATE</Link>
          <button
            className="btn btn-danger btn-sm"
            onClick={()=> props.handleDeleteProd(props.product._id)}
          >DELETE</button>
        </div>
      </div>
    )
  else return (<> </>)
  }
}
 
export default Product;