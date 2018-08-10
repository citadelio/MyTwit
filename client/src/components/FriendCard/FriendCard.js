import React, { Component } from 'react'
import './FriendCard.css';
import CoverPic2 from '../CoverPic2/CoverPic2'

class FriendCard extends Component {
  render() {
    return (
        <div>
                <CoverPic2 cover_photo={this.props.cover_photo} profile_image={this.props.profile_image} screen_name={this.props.screen_name} />
        <div className="container friendCard">
        <div className="col s12 m7">
   <div className="card horizontal">
   <div class="card-image">
        <img src="https://image.ibb.co/myMdMy/img3.jpg" alt=""/>
      </div>
     <div className="card-stacked">
       <div className="card-content">
       <h6><b>@{this.props.title}</b></h6>
        <ul>
            <li>
                <div>Tweets</div>
                <div>145</div>
            </li>
            <li>
            <div>Followers</div>
                <div>35</div>
            </li>
            <li>
            <div>Following</div>
                <div>11</div>
            </li>
        </ul>
       </div>
       </div>
     </div>
   </div>
 </div>
     </div>
    )
  }
}

export default  FriendCard;