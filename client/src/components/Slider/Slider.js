import React, { Component } from 'react';
import './Slider.css';
 class Slider extends Component {
  render() {
    return (
        <div className="slider">
        <div className="opct"></div>
        <ul className="slides">
          <li>
            <div className="cover"></div>
            <img src={"https://image.ibb.co/dEfYod/img1.jpg"} alt=""></img>
            <div className="caption left-align">
              <h3>Have the right people in your Life</h3>
              <p className="light grey-text text-lighten-3">
                Easily view and unfollow Non-followers, Follow new and interesting people, See mutual friends...
              </p>
            </div>
          </li>
          <li>
            <div className="cover"></div>
            <img src={"https://image.ibb.co/gtnJMy/img2.jpg"} alt=""></img>
            <div className="caption right-align">
              <h3>Don't miss the right timing</h3>
              <p className="light grey-text text-lighten-3">
              With this tool, you can schedule tweets and have them get sent at a later time.</p>
              <div className="clear"></div>
            </div>
          </li>
          <li>
            <div className="cover"></div>
            <img src={"https://image.ibb.co/myMdMy/img3.jpg"} alt=""></img>
            <div className="caption left-align">
              <h3>Be in control of who your friends are</h3>
              <p className="light grey-text text-lighten-3">Follow and Unfollow people with a click.</p>
            </div>
          </li>
          <li>
            <div className="cover"></div>
            <img src={"https://image.ibb.co/mFK9Td/img4.jpg"} alt=""></img>
            <div className="caption right-align">
              <h3>Be part of what's trending</h3>
              <p className="light grey-text text-lighten-3">Follow recent tweets and updates around you.</p>
              <div className="clear"></div>
            </div>           
          </li>
        </ul>
        <a href="/auth/twitter" className="cta-btn waves-effect waves-light btn btn-large light-blue accent-3">
         Log in with <i className="fab fa-twitter"></i> </a>
        
      </div>
          
    )
  }
}

export default Slider;