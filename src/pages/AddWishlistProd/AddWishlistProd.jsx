import React, { Component } from 'react';
//mport './AddWishlistProd.css'

class AddWishlistProd extends Component {
    state = {  
        // invalidForm: true,
        formData:{
            name: "",
            price: "",
            comment: "",
           
        }
    }
    formRef = React.createRef();

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.handleAddWishlistProd(this.state.formData)
    }
    handleChange = (e) => {
        const formData = {...this.state.formData, [e.target.name]: e.target.value}
        this.setState({
            formData,
            // invalidForm: !this.formRef.current.checkValidity()
        })
    }

    render() { 
        return ( 
        <> 
            <form onSubmit={this.handleSubmit} className="panel panelform" >
                <label >Name (required) </label> &nbsp;&nbsp;
                <input 
                    type="text"
                    name="name"
                    onChange={this.handleChange} /><br/>
                <label >Price </label> &nbsp;&nbsp;
                <input 
                    type="text"
                    name="price"
                    onChange={this.handleChange} /><br/>
                <label >Comment </label> &nbsp;&nbsp;
                <input 
                    type="text" 
                    name="comment"
                    onChange={this.handleChange} /><br/>
                
                
                <button className="btn btn-primary addprodbtn" type="submit">Add Product to Wishlist</button>
            </form>
        </>
        );
    }
}
 
export default AddWishlistProd;