import React, { Component } from 'react'
import './CoverPic.css';
import Axios from 'axios';
import Link from 'react-router-dom/Link';
class CoverPic extends Component {
  logOut = ()=>{
    Axios.get('/profile/logout')
        .then(data=>console.log(data))
  }
  
  render() {
    return (
      <div id="CoverPic">
           <div className="main-cover-photo" style={{backgroundImage : 'url(' +this.props.cover_photo+ ')'}}>
           </div>
           <div className="container detailsSec">
           <div id="profilePic">
                <img src={this.props.profile_image} alt=""/>
           </div>
           <span>@{this.props.screen_name}</span>
           <Link  to="/">
           <button onClick={this.logOut} className="btn waves-effect waves-light btn-small light-blue accent-3 logout">LogOut</button>
          </Link>
           </div>
      </div>
    )
  }
}

export default CoverPic;