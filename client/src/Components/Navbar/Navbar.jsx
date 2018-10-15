import React, { Component } from 'react'
import {Link} from 'react-router-dom';
// import {HashLink as Link} from 'react-router-hash-link';
import './Navbar.css';

export class Navbar extends Component {
  render() {
    return (
      <div>
      <nav className="navbar fixed-top navbar-expand-sm navbar-light custom-upper-navbar navbar-fixed-top">
    <a className="navbar-brand" href="#"><img src = {require('../img/logo.png')} className="img-fluid"/></a>
    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbar-collapse">☰</button> 
    <div className="collapse navbar-collapse custom-below-navbar" id="navbar-collapse">
        <ul className="nav navbar-nav ml-auto">
            <Link to="/">
            <li class="nav-item dropdown">
        <a class="nav-link dropdown-toggle" href="" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          Home
        </a>
        <div class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
        <a className="dropdown-item" href="index.html">Default slider</a>
        <a className="dropdown-item" href="index_20.html">Basic slider</a>
        <a className="dropdown-item" href="index_14.html">Youtube Hero</a>
                                            
        </div>
      </li>
            </Link>
            <li className="nav-item nav-link">
            <Link to="/About">Tours</Link>
            </li>
            {/* <li className="nav-item nav-link"> <Link to="/#portfolio">Portfolio</Link>
            </li> */}
           <li className="nav-item nav-link">
           <Link to ="/Projects"> Hotel</Link>
            </li>
            <li class="nav-item dropdown">
        <a class="nav-link dropdown-toggle" href="" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          Transfers
        </a>
        <div class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
          <a class="dropdown-item" href="#">Action</a>
          <a class="dropdown-item" href="#">Another action</a>
          <a class="dropdown-item" href="#">Something else here</a>
        </div>
      </li>
            {/* <li className="nav-item"> <a className="nav-link" href="#price">Prices</a>
            </li> */}
            <li className="nav-item"> <a className="nav-link" href="#"><Link to ="/Career">Restaurents</Link></a>
            </li>
            <li className="nav-item"> <a className="nav-link" href="#"><Link to ="/Blog">Bonus</Link></a>
            </li>
            {/* <li className="nav-item">
             <a className="nav-link" href="/#contact">Contact</a>
            </li> */}
            {/* <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" data-toggle="dropdown" href="#" role="button" aria-haspopup="true" aria-expanded="false">Dropdown</a>
                <div className="dropdown-menu dropdown-menu-right">
                    <a className="dropdown-item" href="#">Action</a>
                    <a className="dropdown-item" href="#">Another action</a>
                    <a className="dropdown-item" href="#">Something else here</a>
                    <div className="dropdown-divider"></div>
                    <a className="dropdown-item" href="#">Separated link</a>
                </div>
            </li> */}
        </ul>
    </div>
</nav>

			
	
        
        
      </div>
    )
  }
}

export default Navbar
