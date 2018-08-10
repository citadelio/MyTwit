import React, { Component } from 'react'
import './ProfileNav.css';
import {NavLink} from 'react-router-dom';
class ProfileNav extends Component {
  render() {
    return (
      <div>
          <div className="navroot">
        <nav>
            <div className="nav-wrapper deep-purple darken-1">
            <div className="container">
            <NavLink to="/profile" exact className="brand-logo" activeClassName="active">{this.props.name}</NavLink>
            <a href="#fgd" data-target="mobile-demo" className="sidenav-trigger"><i className="material-icons">menu</i></a>
            <ul className="right hide-on-med-and-down">
            <li><NavLink to="/profile/search"  activeClassName="active">Search Friends</NavLink></li>            
            <li><NavLink to="/profile/schedule-tweet"  activeClassName="active">Schedule Tweet</NavLink></li>
            <li><NavLink to="/profile/non-followers" activeClassName="active">See Non-followers</NavLink></li>
            <li><NavLink to="/profile/padi" activeClassName="active">See Padis</NavLink></li>
            </ul>
            </div>
            </div>
        </nav>

        <ul className="sidenav profile-sidenav" id="mobile-demo" >
        <li className="collection-item avatar">
          <img src={this.props.profile_image} alt="" className=""/>
                <span className="user"> {this.props.name} </span>
                
              </li>
            <li className="collection-item">
            <NavLink to="/profile" exact activeClassName="active">
                <i className="fas fa-tachometer-alt"></i>
                <span className="title">Dashboard</span>
                </NavLink>
              </li>
              <li className="collection-item">
              <NavLink to="/profile/schedule-tweet" activeClassName="active">
                <i className="fas fa-clock"></i>
                <span className="title">Schedule Tweet</span>
                </NavLink>
              </li>

              <li className="collection-item">
              <NavLink to="/profile/search" activeClassName="active">
                <i className="fas fa-search"></i>
                <span className="title">Search Friends</span>
                </NavLink>
               
              </li>
              <li className="collection-item">
              <NavLink to="/profile/my-followers" activeClassName="active">
                <i className="fas fa-user-friends"></i>
                <span className="title">Followers</span>
                <span className="white-text deep-purple badge">{this.props.followers}</span>
                </NavLink>
              </li>

               <li className="collection-item">
               <NavLink to="/profile/following" activeClassName="active">
                <i className="fas fa-user-tie"></i>
                <span className="title">Following</span>
                <span className="white-text deep-purple badge">{this.props.friends}</span>
                </NavLink>
              </li>

              <li className="collection-item">
              <NavLink to="/profile/non-followers" activeClassName="active">
                <i className="fas fa-user-times"></i>
                <span className="title">Non-Followers</span>
                <span className="white-text deep-purple badge">{this.props.non_followers_count}</span>
                </NavLink>
              </li>

              <li className="collection-item">
              <NavLink to="/profile/yet-to-follow" activeClassName="active">
                <i className="fas fa-user-plus"></i>
                <span className="title">You do not Follow</span>
                <span className="white-text deep-purple badge">{this.props.pending_followers_count}</span>
                </NavLink>
              </li>

              <li className="collection-item">
              <NavLink to="/profile/padi" activeClassName="active">
                <i className="fas fa-users"></i>
                <span className="title">Mutual Padis</span>
                <span className="white-text deep-purple badge">{this.props.mutual}</span>
                </NavLink>
              </li>

              <li className="collection-item">
              <NavLink to="/profile/unfollowers" activeClassName="active">
                <i className="fas fa-user-alt-slash"></i>
                <span className="title">Who just Unfollowed</span>
                <span className="white-text deep-purple badge">{this.props.unfollowed}</span>
                </NavLink>
              </li>

              
            
         </ul>
            
      </div>
      </div>
    )
  }
}

export default ProfileNav;