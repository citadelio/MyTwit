import React, { Component } from 'react'
import './HomeParallax.css';
 class HomeParallax extends Component {
  render() {
    return (
      <div id="parallax-body">
        <center id="how-it-works">
            <div id="title">How it works</div>
            <p>We made a short video, showing how TwitPadi works </p>

            <a href="https://youtube.com">
                <i className="fa fa-play fa-5x"></i>
            </a>
        </center>
      </div>
    )
  }
}

export default HomeParallax;