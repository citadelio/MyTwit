import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
//import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
//import HomeParallax from './components/HomeParallax/HomeParallax';
// import Profile from './components/Profile/Profile';

ReactDOM.render(
<App/>, document.getElementById('root'));
registerServiceWorker();

{/* <Router>
    <Switch>
<Route exact path="/" component={App}/>
<Route path="/new-tweet" component={HomeParallax}/>
<Route path="/profile" component={Profile}/>
</Switch>
</Router> */}