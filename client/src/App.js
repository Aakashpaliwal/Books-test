import React, { Component } from 'react';
// import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap';
import 'react-popper';
import {Route,Link} from  'react-router-dom'
import Navbar from './Components/Navbar/Navbar';
import Footer from './Components/Footer/Footer';
import Home from './Components/Home/Home';
import About from './Components/About/About';
import Career from './Components/Career/Career';
import Blog from './Components/Blog/Blog';
import AddLogin from './Components/Login/AddLogin';
import Cart from './Components/Cart/Cart';
import Shop from './Components/Shop/Shop';
import Checkout from './Components/Checkout/Checkout';
import Single from './Components/Single/Single';
import Admin from './Components/Admin/Admin';
import Wishlist from './Components/Wishlist/Wishlist';
class App extends Component {
  render() {
    return (
      <div>
       <Navbar />
       <Route path = "/" exact component = {Home} />
        <Route path = "/About" exact = {true} component = {About} />
        <Route path = "/Career" exact = {true} component = {Career} />
        <Route path = "/Blog" exact = {true} component = {Blog} />
        <Route path = "/AddLogin" exact = {true} component = {AddLogin} />
        <Route path = "/Cart" exact = {true} component = {Cart} />
        <Route path = "/Shop" exact = {true} component = {Shop} />
        <Route path = "/Checkout" exact = {true} component = {Checkout} />
        <Route path = "/Single" exact = {true} component = {Single} />
        <Route path = "/Admin" exact = {true} component = {Admin} />
        <Route path = "/Wishlist" exact = {true} component = {Wishlist} />
      <Footer />
      </div>
    );
  }
}

export default App;
