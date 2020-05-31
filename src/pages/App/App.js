import React, { Component } from 'react';
import './App.css';
import { Route, Switch, Redirect } from 'react-router-dom';
import SignupPage from '../SignupPage/SignupPage';
import LoginPage from '../LoginPage/LoginPage';
import AddProd from '../AddProd/AddProd';
import UpdateProd from '../UpdateProd/UpdateProd';
import AddWishlistProd from '../AddWishlistProd/AddWishlistProd';
import * as productAPI from '../../services/product-api';
import * as wishlistAPI from '../../services/wishlist-api';
import * as userAPI from '../../services/user-api';
import NavBar from '../../components/NavBar/NavBar'
import Wishlist from '../Wishlist/Wishlist';
import ProdCollection from '../ProdCollection/ProdCollection';
import WishlistProd from '../../components/WishlistProd/WishlistProd';

class App extends Component {
  state = {

    user: userAPI.getUser(),
    products: [],
    wishlistProds: []
  };

  /*--------------------------- Callback Methods ---------------------------*/

  handleLogout = () => {
    userAPI.logout();
    this.setState({ user: null });
  }
  handleSignupOrLogin = () => {
    this.setState({user: userAPI.getUser()});
  }

/////////////collection functions
  getProdCollection = async () => {
    const products = await productAPI.index();
    this.setState({products});
  }
  handleAddProd = async (newProdData) => {
    const newProd = await productAPI.create(newProdData);
    this.setState(state => ({
      products: [...state.products, newProd]
    }), () => this.props.history.push('/prods'));
  }
  handleDeleteProd = async (prodId) => {
    await productAPI.deleteOne(prodId);
    this.setState(state => ({
      products: state.products.filter(p => p._id !== prodId)
    }), ()=> this.props.history.push('/prods'));
  }
  handleUpdateProd = async (updatedProdData) => {
    const updatedProd = await productAPI.update(updatedProdData);
    console.log(updatedProd)
    const newProductsArr = this.state.products.map(p =>
      p._id === updatedProd._id ? updatedProd : p);
      this.setState(
        {products: newProductsArr},
        ()=> this.props.history.push('/prods')
      );
  }
////////////////WISHLIST functions
  getWishlist = async () => {
    const wishlistProds = await wishlistAPI.index();
    this.setState({wishlistProds})
  }
  handleAddWishlistProd = async (newProdData) => {
    const newProd = await wishlistAPI.create(newProdData);
    this.setState(state => ({
      wishlistProds: [...state.wishlistProds, newProd]
    }), () => this.props.history.push('/wishlist'));
  }
  handleDeleteWishlistProd = async (prodId) => {
    await wishlistAPI.deleteOne(prodId);
    this.setState(state => ({
      wishlistProds: state.wishlistProds.filter(p => p._id !== prodId)
    }), ()=> this.props.history.push('/wishlist'));
  }
  handleUpdateWishlistProd = async (updatedProdData) => {
    const updatedWishlistProd = await wishlistAPI.update(updatedProdData);
    const newWishlistArr = this.state.wishlistProds.map(p =>
      p._id === updatedWishlistProd._id ? updatedWishlistProd : p);
      this.setState(
        {wishlistProds: newWishlistArr},
        ()=> this.props.history.push('/wishlist')
      );
  }
  handleMove = (wishlistProd) => {
    this.handleDeleteWishlistProd(wishlistProd._id);
    this.handleAddProd(wishlistProd);
  }

  /*-------------------------- Lifecycle Methods ---------------------------*/

  //this, as a componentDidMount func doesn't help with the display on the product collection page
  //bc I have to click on the page before it will display. but this func is needed to setstate.
   async componentDidMount() {
     const products = await productAPI.index(); 
     this.setState({ products });
     this.getProdCollection();
   this.getWishlist();
    }

  /*-------------------------------- Render --------------------------------*/

  render() {
    return (
      <div className="App">
        <h1>Beauty Secrets</h1>
        <NavBar
          user={this.state.user}
          handleLogout={this.handleLogout}
        />
        <br/>
          <Route exact path='/login' render={({ history }) => 
            <LoginPage
              history={history}
              handleSignupOrLogin={this.handleSignupOrLogin}
            />
          }/>
          <Route exact path='/signup' render={({ history }) => 
            <SignupPage
              history={history}
              handleSignupOrLogin={this.handleSignupOrLogin}
            />
          }/>

          <Route exact path="/prods" render={({history}) => 
            <ProdCollection
              user={this.state.user}
              products={this.state.products}
              handleDeleteProd={this.handleDeleteProd} />
          }/>
          <Route path="/add" render={({history}) =>
            <AddProd 
              handleAddProd={this.handleAddProd}
            />
          } />
          <Route path="/edit" render={({history, location}) =>
            <UpdateProd 
              handleUpdateProd={this.handleUpdateProd}
              location={location}
            />
          } />

           <Route exact path="/wishlist" render={({history}) =>
            <Wishlist 
              user={this.state.user}
              wishlistProds={this.state.wishlistProds}
              handleDeleteWishlistProd={this.handleDeleteWishlistProd}
              handleMove={this.handleMove}
            />
          } />
          <Route path="/addToWishlist" render={({history}) =>
            <AddWishlistProd
              handleAddWishlistProd={this.handleAddWishlistProd}
            />
          }/>
          <Route path="/editWishlistProd" render={({history, location}) =>
            <UpdateProd 
              handleUpdateProd={this.handleUpdateWishlistProd}
              location={location}
            />
          } /> 
         
      </div>
    );
  }
}

export default App;