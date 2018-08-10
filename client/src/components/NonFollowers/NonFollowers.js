import React, { Component } from 'react'
import './NonFollowers.css';
import CoverPic2 from '../CoverPic2/CoverPic2';
import axios from 'axios';

class NonFollowers extends Component {

  render() {
    var Card;
    var usersArray = this.props.non_followers_array;
    if(usersArray.length > 0 ){
      Card = usersArray.map(user => (
        <div className="col s12 m7">
    <div className="card horizontal">
    <div className="card-image">
         <img src={user.profile_background_image_url} alt=""/>
       </div>
      <div className="card-stacked">
        <div className="card-content">
        <h5><b>{user.name}</b></h5>
        <div id="Tdiv">
        <h6 id="Thandle">@{user.screen_name}</h6>
        {user.following ?
          <span id="Tbadge" className="light-blue accent-3 badge white-text "> following</span> 
       :  <span id="Tbadge" className="purple darken-2 badge white-text ">follow</span>
        }
        </div>
         <ul>
             <li>
                 <div>Tweets</div>
                 <div><b>{user.statuses_count}</b></div>
             </li>
             <li>
             <div>Followers</div>
                 <div><b>{user.followers_count}</b></div>
             </li>
             <li>
             <div>Following</div>
                 <div><b>{user.friends_count}</b></div>
             </li>
         </ul>
        </div>
        </div>
      </div>
    </div>
      ))
    } else{
      Card =  <center>
      <div className="NUD">
           <div className="innerNUD">
             <center>
             <p> 
               <i className="fas fa-exclamation-circle"></i>
                No new unfollower at the moment</p>
             </center>
           </div>
     </div> </center>;
    }
    
    return (
      <div>
           <CoverPic2 cover_photo={this.props.cover_photo} profile_image={this.props.profile_image} screen_name={this.props.screen_name} />
      <div id="followers-cont" className="container">
      <center>Here is a list of people who you follow but do not follow you back<br/>
         
      </center>
          {Card}  
 </div>
      </div>
    )
  }
}
export default  NonFollowers;