import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import './Navbar.css';

class Navbar extends Component {
 
  render() {
    return (
      <div className="navroot">
        <nav>
            <div className="nav-wrapper deep-purple darken-1">
            <div className="container">
            <Link to="/" className="brand-logo">TwitPadi</Link>
            <a href="#fgd" data-target="mobile-demo" className="sidenav-trigger"><i className="material-icons">menu</i></a>
            <ul className="right hide-on-med-and-down">
            <li><a href="#features">Features</a></li>
            <li><a href="#how-it-works">How it works</a></li>
            <li ><a href="/auth/twitter" className="btn waves-effect waves-light btn-small light-blue accent-3">Log in with Twitter</a></li>
            </ul>
            </div>
            </div>
        </nav>

        <ul className="sidenav" id="mobile-demo">
        <li><a href="#features">Features</a></li>
            <li><a href="#how-it-works">How it works</a></li>
            <li ><a href="/auth/twitter" className="btn waves-effect waves-light btn-small light-blue accent-3">Log in with Twitter</a></li>
        </ul>
            
      </div>
    )
  }
}

export default Navbar;
