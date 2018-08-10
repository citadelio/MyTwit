import React, { Component } from 'react'
import CoverPic2 from '../CoverPic2/CoverPic2'
import './ScheduleTweet.css';
import axios from 'axios';
class ScheduleTweet extends Component {
scheduleTweet = (e) => {
  e.preventDefault();
  const time = document.querySelector('#time').value;
  const date = document.querySelector('#date').value;
  const tweet = document.querySelector('#textarea2').value;
  axios.post('/profile/scheduleTweet/', {
      time: time,
      date : date,
      tweet : tweet
  }).then(data => {
   console.log(`Your tweet has been scheduled to be sent on ${time}`)
  })
  .catch(err => console.log(err))
  alert(`Your tweet has been scheduled to be sent on ${time}`);
 }

 render() {

    return (
      <div id="scheduleTweet">
      <CoverPic2 cover_photo={this.props.cover_photo} profile_image={this.props.profile_image} screen_name={this.props.screen_name} />
        <div className="container">
            <h4>
                Schedule Tweet
            </h4>

            <div>
                <form onSubmit={this.scheduleTweet}>
                <div className="row">
                    <div className="input-field col s6">
                    <input placeholder="Choose date" id="date" type="date" className="validate" required="true"/>
                    <label htmlFor="date">Date</label>
                    </div>

                    <div className="input-field col s6">
                    <input placeholder="Choose time" id="time" type="time" className="validate"  required="true"/>
                    <label htmlFor="time">Time</label>
                    </div>

                    
          <div className="input-field col s12">
          <textarea id="textarea2" className="materialize-textarea" data-length="140" maxLength="140"  required="true"></textarea>
            <label htmlFor="textarea2">Tweet</label>
          </div>
        
          <button type="submit" id="scheduleTweetBtn" className="tweet waves-effect waves-light btn btn-small light-blue accent-3" >
          <i className=" fas fa-twitter"></i> Send Tweet
          </button>
          <br/>
            </div>
                </form>
            </div>
        </div>
      </div>
    )
  }
}
export default ScheduleTweet;