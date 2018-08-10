import React, {Component} from 'react';
import axios from 'axios'
import ProfileNav from '../ProfileNav/ProfileNav';
import ProfileMenu from '../ProfileMenu/ProfileMenu';
import {BrowserRouter as Router, Route, Switch, Redirect} from 'react-router-dom';
import Dashboard from '../Dashboard/Dashboard';
import ScheduleTweet from '../ScheduleTweet/ScheduleTweet';
import SearchFriends from '../SearchFriends/SearchFriends';
import Followers from '../Followers/Followers';
import Following from '../Following/Following';
import NonFollowers from '../NonFollowers/NonFollowers';
import DontFollow from '../DontFollow/DontFollow';
import Mutual from '../Mutual/Mutual';
import UnFollowed from '../UnFollowed/UnFollowed';

export default class Profile extends Component {
  state = {
        name: '',
        screen_name: '',
        profile_image: '',
        cover_photo: '',
        followers:'',
        friends:'',
        non_followers_count:'',
        non_followers_array:'',
        pending_followers_count:'',
        pending_followers_array:'',
        mutual:'',
        mutual_array:'',
        unfollowed:'',
        unfollowed_array:'',
        followersArray : '',
        followingArray :''  ,
        auth: true  
      }
  componentDidMount= () =>{
        axios.get('/profile')
            .then(data => {
              if(data.data.status === "not authenticated"){
               this.setState({
                 auth: false
               })
              } else{
              this.setState({
                name: data.data.name,
                screen_name: data.data.screen_name,
                profile_image: data.data.profile_image_url,
                cover_photo: data.data.profile_banner_url,
                followers: data.data.followers_count,
                friends: data.data.friends_count
              });
              console.log(data)
            }
            });
           
            axios.get('/profile/not_follower')
                  .then(data => {
                    if(data.data.length > 0){
                      this.setState({
                        non_followers_count: data.data.length,
                        non_followers_array: data.data
                      })
                    }else{
                      this.setState({
                        non_followers_count: 0,
                      })
                    }
                   
                    console.log(data)
                  })

                  axios.get('/profile/i_dont_follow')
                  .then(data => {
                    if(data.data.length > 0){
                      this.setState({
                        pending_followers_count: data.data.length,
                        pending_followers_array: data.data
                      })
                    }else{
                      this.setState({
                        pending_followers_count: 0,
                      })
                                        }
                   
                    console.log(data)
                  })
                  axios.get('/profile/padi')
                  .then(data => {
                    if(data.data.length > 0){
                      this.setState({
                        mutual: data.data.length,
                        mutual_array : data.data
                      })
                    }else{
                      this.setState({
                        mutual: 0,
                      })
                    }
                    console.log(data)
                  })
                  axios.get('/profile/unfollowed')
                  .then(data => {
                    if(data.data.length > 0){
                      this.setState({
                        unfollowed: data.data.length,
                        unfollowed_array: data.data
                      })
                    }else{
                      this.setState({
                        unfollowed: 0,
                      })
                    }
                   
                    console.log(data)
                  })
                  axios.get('/profile/fanatics')
                  .then(users => {
                    this.setState({
                      followersArray : users.data.users
                    })
                  })
                  axios.get('/profile/leads')
                .then(users => {
                  this.setState({
                     followingArray : users.data.users
                  })
                })
        }
  render() {
    return (
      <Router>
      <div>
        <ProfileNav 
        name={this.state.name}
         screen_name={this.state.screen_name}
          profile_image={this.state.profile_image} 
          followers={this.state.followers} 
          friends={this.state.friends} 
          non_followers_count={this.state.non_followers_count}
           pending_followers_count={this.state.pending_followers_count}
            mutual={this.state.mutual} 
            unfollowed={this.state.unfollowed}/>
          <Switch>
      <Route exact path='/profile' render={(props) => ( this.state.auth ? <Dashboard {...props} 
      followers={this.state.followers} 
      friends={this.state.friends}
       non_followers_count={this.state.non_followers_count} 
       pending_followers_count={this.state.pending_followers_count} 
       mutual={this.state.mutual}
        unfollowed={this.state.unfollowed} 
        profile_image={this.state.profile_image} 
        cover_photo={this.state.cover_photo} 
        screen_name={this.state.screen_name} /> : <Redirect to="/" />)}/>
             
      <Route path={`/profile/schedule-tweet`} render={(props) => (<ScheduleTweet {...props}
        profile_image={this.state.profile_image} 
        cover_photo={this.state.cover_photo} 
        screen_name={this.state.screen_name}
      />)}/>
              <Route path={`/profile/search`}  render={(props) => (<SearchFriends {...props}
        profile_image={this.state.profile_image} 
        cover_photo={this.state.cover_photo} 
        screen_name={this.state.screen_name}
      />)}/>
              <Route path={`/profile/my-followers`}  render={(props) => (<Followers {...props}
        profile_image={this.state.profile_image} 
        cover_photo={this.state.cover_photo} 
        screen_name={this.state.screen_name}
        followersArray={this.state.followersArray}
      />)}/>
              <Route path={`/profile/following`}  render={(props) => (<Following {...props}
        profile_image={this.state.profile_image} 
        cover_photo={this.state.cover_photo} 
        screen_name={this.state.screen_name}
        followingArray={this.state.followingArray}
      />)}/>
              <Route path={`/profile/non-followers`}  render={(props) => (<NonFollowers {...props}
        profile_image={this.state.profile_image} 
        cover_photo={this.state.cover_photo} 
        screen_name={this.state.screen_name}
        non_followers_array={this.state.non_followers_array}
      />)}/>
              <Route path={`/profile/yet-to-follow`} render={(props) => (<DontFollow {...props}
        profile_image={this.state.profile_image} 
        cover_photo={this.state.cover_photo} 
        screen_name={this.state.screen_name}
        pending_followers_array={this.state.pending_followers_array}
      />)}/>
              <Route path={`/profile/padi`} render={(props) => (<Mutual {...props}
        profile_image={this.state.profile_image} 
        cover_photo={this.state.cover_photo} 
        screen_name={this.state.screen_name}
        mutual_array = {this.state.mutual_array}
      />)}/>
              <Route path={`/profile/unfollowers`} render={(props) => (<UnFollowed {...props}
        profile_image={this.state.profile_image} 
        cover_photo={this.state.cover_photo} 
        screen_name={this.state.screen_name}
        unfollowed_array={this.state.unfollowed_array}
      />)}/>
          </Switch>
          <br/>
          <br/>
          <br/>
          <br/>
        <ProfileMenu/>
      </div>
      </Router>
    )
  }
}
