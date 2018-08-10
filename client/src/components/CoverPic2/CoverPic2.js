import React, { Component } from 'react'
import './CoverPic2.css';
import Link from 'react-router-dom/Link';
class CoverPic2 extends Component {
  render() {
    return (
      <div id="CoverPic">
           <div id="coverPhoto"style={{backgroundImage : 'url(' +this.props.cover_photo+ ')'}}>
           </div>
           <div className="container detailsSec">
           <div id="profilePic">
                <img src={this.props.profile_image} alt=""/>
           </div>
           <span>@{this.props.screen_name}</span>
           <Link to="/">
           <button className="btn waves-effect waves-light btn-small light-blue accent-3 logout">LogOut</button>
            </Link>
           </div>
      </div>
    )
  }
}

export default CoverPic2;