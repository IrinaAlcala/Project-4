import React, { Component } from 'react';
//import '../AddProd/AddProd.css'

class UpdateProd extends Component {
    state = {  
        formData: this.props.location.state
    }

    formRef = React.createRef();

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.handleUpdateProd(this.state.formData)
    }
    handleChange = (e) => {
        const formData = {...this.state.formData, [e.target.name]: e.target.value}
        this.setState({formData})
    }

    render() { 
        return ( 
        <>  
            <h3>Update below Product</h3>
            <form onSubmit={this.handleSubmit} className="panel panelform">
                <label >Name </label> &nbsp;&nbsp;
                <input 
                    type="text"
                    name="name"
                    value={this.state.formData.name}
                    onChange={this.handleChange} /><br/>
                <label >Price </label> &nbsp;&nbsp;
                <input 
                    type="text"
                    name="price"
                    value={this.state.formData.price}
                    onChange={this.handleChange} /><br/>
                <label >Comment </label> &nbsp;&nbsp;
                <input 
                    type="text" 
                    name="comment"
                    value={this.state.formData.comment}
                    onChange={this.handleChange} /><br/>
                
                
                <button className="btn btn-primary addprodbtn" type="submit">Update Product</button>
            </form>
        </>
        );
    }
}
 
export default UpdateProd;