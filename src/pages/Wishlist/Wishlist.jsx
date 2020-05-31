import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import WishlistProd from '../../components/WishlistProd/WishlistProd';
//import './Wishlist.css'

const Wishlist = (props) => {
    return (  
        <>
        <Link className="btn btn-primary addprodbtn" exact to="/addToWishlist">Add Product to Wishlist</Link>
        <br/>
        {/* conditional rendering */}
        {props.wishlistProds ?
        <>
            {props.wishlistProds.map((wishlistProd)=> 
                <WishlistProd
                    key={wishlistProd._id}
                    wishlistFunko={wishlistProd}
                    user={props.user}
                    handleDeleteWishlistFunko={props.handleDeleteWishlistProd}
                    handleMove={props.handleMove}
                />
            )}
        </>
        :
        <p>No products in your wishlist yet</p> 
        }
        </>
    );
}
 
export default Wishlist;