import React, { Component } from 'react'
import './SearchFriends.css';
import CoverPic2 from '../CoverPic2/CoverPic2'
import axios from 'axios';
var Card;
class SearchFriends extends Component {
  state = {
    friends:''
  }
  getFriends = (e) => {
    e.preventDefault();
    const handle = document.querySelector('#icon_prefix').value;
    axios.get(`/friendsof/${handle}`)
        .then(data => {
          console.log(data);
          this.setState({
            friends:data.data.users
          })
          
        })
  }
 
  render() {
    if(this.state.friends === ""){
      Card = "";
    }else if(this.state.friends === "No user found"){
      Card = 
      <center>
     <div className="NUD">
          <div className="innerNUD">
            <center>
            <p> 
              <i className="fas fa-exclamation-circle"></i>
              This user does not exist</p>
            </center>
          </div>
    </div> </center>;
    }
    else{
         // #########################
         
         if(this.state.friends.length > 0){
          var  friendsArray = this.state.friends;
            Card =  friendsArray.map(user => (
              <div className="col s12 m7">
              <div className="card horizontal">
              <div className="card-image">
                   <img src={user.profile_image_url} alt=""/>
                 </div>
                <div className="card-stacked">
                  <div className="card-content">
                  <h5><b>{user.name}</b></h5>
                  <div id="Tdiv">
                  <h6 id="Thandle">@{user.screen_name}</h6>
                  
                  {user.following ? <span id="Tbadge" className="light-blue accent-3 badge white-text ">following</span> :
                  <span id="Tbadge" className="purple darken-2 badge white-text ">follow</span> }
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
            ));
            
          } else {
             Card = 
             <center>
            <div className="NUD">
                 <div className="innerNUD">
                   <center>
                   <p> 
                     <i className="fas fa-exclamation-circle"></i>
                     This user does not have a friend</p>
                   </center>
                 </div>
           </div> </center>;
          }
          // #########################
    }
    return (
        <div>
      <CoverPic2 cover_photo={this.props.cover_photo} profile_image={this.props.profile_image} screen_name={this.props.screen_name} />
      <div className="container searchFriends">

      <center>
        You can find friends of a friend here. Just Enter the <b className="hiTitle">Twitter handle </b>
          of your friend to see his/her friend.
      </center>
      <div className="row">
      <form onSubmit={this.getFriends}>
        <div className="input-field col s12 deep-purple-text">
          <i className="material-icons prefix">alternate_email</i>
          <input id="icon_prefix" type="text" className="validate"/>
          <label htmlFor="icon_prefix">Enter Handle</label>
        </div>
        <div className="input-field input-btn col s12 deep-purple-text">
          <input type="submit" className="btn btn-small waves-effect white waves-light" value="Go"/>
        </div>
        </form>
</div>
 {Card}
        </div>
      </div>
    )
  }
}

export default SearchFriends;