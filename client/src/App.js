import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import HomePage from './components/HomePage/HomePage';
import Profile from './components/Profile/Profile';
class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/" component={HomePage}/>
          <Route strict exact path="/profile" component={Profile}/>
        </Switch>
      </Router>
    );
  }
}

export default App;
