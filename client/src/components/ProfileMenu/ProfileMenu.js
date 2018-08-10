import React, { Component } from 'react'
import './ProfileMenu.css';
import {NavLink} from 'react-router-dom';

export default ({match}) => {
  return (
    <div className="container nav-icons hide-on-large-only">
          <ul id="icon-nav">
          <li> <NavLink to="/profile" exact activeClassName="active"><i className="fa fa-tachometer-alt fa-2x "></i> <span>Dashboard</span></NavLink></li>

          <li> <NavLink to={`/profile/search`} activeClassName="active"> <i className="fas fa-search fa-2x"></i><span>Search</span> </NavLink></li>

          <li> <NavLink to="/profile/schedule-tweet" activeClassName="active"> <i className="fas fa-clock fa-2x"></i><span>Tweet </span></NavLink></li>

          <li> <NavLink to="/profile/non-followers" activeClassName="active">  <i className="fas fa-user-times fa-2x"></i><span>Non-Followers</span></NavLink></li>

          <li><NavLink to="/profile/padi" activeClassName="active"> <i className="fas fa-users fa-2x"></i><span> Padis</span></NavLink></li>
          </ul>
      </div>
  )
}
