import React, { Component } from 'react';
import Product from '../../components/Product/Product';
import { Route, Link } from 'react-router-dom';
import './ProdCollection.css'

const ProdCollection = (props) => {
    return (  
        <>
        <Link className="btn btn-primary addprodbtn" exact to="/add">Add Product</Link>
        <br/>

        {props.products ?
        <>
            {props.products.map((product)=> 
                <Product
                    key={product._id}
                    product={product}
                    user={props.user}
                    handleDeleteProd={props.handleDeleteProd}
                />)}
        </>
        :
        <p>No products yet</p> 
        }
        
        </>
    );
}
 
export default ProdCollection;