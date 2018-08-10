import React, { Component } from 'react';
import './Action.css';
class Action extends Component {
  render() {
    return (
      <div id="features" className="container">
      <center>
        <h3 id="majorFeatures">
          Core Features
        </h3>
      </center>
      <div className="action-container" >
        <div className="row action-papers">
        <div className="img-item">
            <img src={'https://image.ibb.co/heJB8d/img7.jpg'} alt=""></img>
        </div>
        
        <div className="text-item">
        <h6><b>See Non-Followers</b></h6>
        <p>
        Hunting through your twitter account and finding those who don't follow back can be a tough task, well it used to be with this simple tool you generate a list of those who you follow but do not follow back.
            </p>
            <a href="/#" className="waves-effect waves-light btn light-blue accent-3 btn-small">See Non-Followers</a>
        
        </div>
        <div className="img-item">
        <img src={'https://image.ibb.co/b1LPTd/img11.jpg'} alt=""></img>
        </div>
        </div>

         <div className="row action-papers">
         <div className="text-item">
         <h6><b>Schedule Tweets</b></h6>
        <p>
          Compose a new tweet now and have it get sent at a later time. By scheduling tweets, your twitter account still gets to be active even while you are busy
        </p>
        <a href="/#" className="waves-effect waves-light  light-blue accent-3 btn-small">Tweet Now!</a>

        </div>
        <div className="img-item">
            <img src={'https://image.ibb.co/jZOpuJ/img9.jpg'} alt=""></img>
        </div>
        <div className="text-item">
        <h6><b>See who Unfollowed you</b></h6>
        <p>
        This tool gives you a full report on who has unfollowed your twitter account recently.
</p>
        <a href="/#" className="waves-effect waves-light btn light-blue accent-3 btn-small">Check it out</a>

        </div>
        </div>
      </div>
      </div>
    )
  }
}

export default Action;