import React, { Component } from 'react';
import CoverPic from '../CoverPic/CoverPic';
import './Dashboard.css';
import {Link} from 'react-router-dom'
class Dashboard extends Component {
  render() {
    return (
        <div>
        <CoverPic cover_photo={this.props.cover_photo} profile_image={this.props.profile_image} screen_name={this.props.screen_name} />
      <div className="container">
             <div className="col s12 m7">
                        <div className="card horizontal">
                        <Link to="/profile/my-followers">  
                            <div className="card-count deep-purple-text darken-1">
                              {this.props.followers}
                            </div>
                    <div className="card-stacked">
                      <div className="card-content">
                      <h6><b>Followers</b></h6>
                        <p>These are the people that follow you</p>
                      </div>
                    </div>
                    </Link>
                  </div>
                </div>
           
                <div className="col s12 m7">
                <div className="card horizontal">
                <Link to="/profile/following">  <div className="card-count deep-purple-text darken-1">
                      {this.props.friends}
                    </div>
                    <div className="card-stacked">
                      <div className="card-content">
                      <h6><b>Followings</b></h6>
                        <p>These are the people you follow</p>
                      </div>
                    </div> </Link>
                  </div>
                </div> 

                 <div className="col s12 m7">
                <div className="card horizontal">
                <Link to="/profile/non-followers">  <div className="card-count deep-purple-text darken-1">
                      {this.props.non_followers_count}
                    </div>
                    <div className="card-stacked">
                      <div className="card-content">
                      <h6><b>Non-Follower</b></h6>
                        <p>These are people you follow but do not follow you back</p>
                      </div>
                    </div> </Link>
                  </div>
                </div> 

                 <div className="col s12 m7">
                <div className="card horizontal">
                <Link to="/profile/yet-to-follow">  <div className="card-count deep-purple-text darken-1">
                      {this.props.pending_followers_count}
                    </div>
                    <div className="card-stacked">
                      <div className="card-content">
                      <h6><b>You do not Follow</b></h6>
                        <p>These are people that follow you but you do not follow back</p>
                      </div>
                    </div> </Link>
                  </div>
                </div> 

                 <div className="col s12 m7">
                <div className="card horizontal">
                <Link to="/profile/padi">   <div className="card-count deep-purple-text darken-1">
                      {this.props.mutual}
                    </div>
                    <div className="card-stacked">
                      <div className="card-content">
                      <h6><b>Mutual Padis</b></h6>
                        <p>These are people you follow and who follows you in return</p>
                      </div>
                    </div> </Link>
                  </div>
                </div> 

                 <div className="col s12 m7">
                <div className="card horizontal">
                <Link to="/profile/unfollowers">    <div className="card-count deep-purple-text darken-1">
                      {this.props.unfollowed}
                    </div>
                    <div className="card-stacked">
                      <div className="card-content">
                      <h6><b>Who just Unfollowed</b></h6>
                        <p>These are  people who were once following you but have unfollowed</p>
                      </div>
                    </div> </Link>
                  </div>
                </div> 
      </div>
      </div>
    )
  }
}

export default Dashboard;