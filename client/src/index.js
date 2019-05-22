import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import registerServiceWorker from './registerServiceWorker';
import { Route, BrowserRouter as Router } from 'react-router-dom';
import axios from "axios";
import Login from './pages/Login';
import Signup from './pages/Signup';
import Profile from './pages/Profile';
import EventList from "./pages/EventList";
import Favorites from "./pages/Favorites";
import SingleEvent from "./pages/SingleEvent";
import Landing from "./pages/Landing";
import Search from "./pages/Search";
import Navbar from './components/Navbar';
import SearchResults from './components/Portraits/SearchResults'
import Footer from './components/Footer';

// Here is if we have an id_token in localStorage
if(localStorage.getItem("id_token")) {
  // then we will attach it to the headers of each request from react application via axios
  axios.defaults.headers.common['Authorization'] = `Bearer ${localStorage.getItem('id_token')}`;
}

ReactDOM.render(
    <Router>
        <div>
            <Navbar />
              <Route exact path="/" component={App} />
              <Route exact path="/Landing" component={Landing} />
              <Route exact path="/Login" component={Login} />
              <Route exact path="/Signup" component={Signup} />
              <Route exact path="/EventList" component={EventList} />
              <Route exact path="/Search" component={Search} />
              <Route exact path="/Favorites" component={Favorites} />
              <Route exact path="/SingleEvent" component={SingleEvent} />
              <Route exact path="/Profile" component={Profile} />
              <Route exact path="/SearchResults" component={SearchResults} />
              <Footer />
        </div>

    </Router>

    , document.getElementById('root')
);
registerServiceWorker();
