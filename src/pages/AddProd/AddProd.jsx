import React, { Component } from 'react';
import './AddProd.css'

class AddProd extends Component {
    state = {  

        formData:{
            name: "",
            price: "",
            comment: ""
            
        }
    }

    formRef = React.createRef();

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.handleAddProd(this.state.formData)
    }
    handleChange = (e) => {
        const formData = {...this.state.formData, [e.target.name]: e.target.value}
        this.setState({
            formData,
    
        })
    }

    render() { 
        return ( 
        <> 
            
            <form onSubmit={this.handleSubmit} className="panel panelform" >
                <label >Name </label> &nbsp;&nbsp;
                <input 
                    type="text"
                    name="name"
                    onChange={this.handleChange} /><br/>
                <label >Price </label> &nbsp;&nbsp;
                <input 
                    type="text"
                    name="price"
                    onChange={this.handleChange} /><br/>
                <label >Comment</label> &nbsp;&nbsp;
                <input 
                    type="text" 
                    name="comment"
                    onChange={this.handleChange} /><br/>
                
                
                <button className="btn btn-primary addprodbtn" type="submit">Add Product</button>
            </form>
        </>
        );
    }
}
 
export default AddProd;