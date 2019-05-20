import React, { Component } from "react";
import API from "../utils/API";
import Hero from "../components/Hero";
import Modal from "../components/Modal";
import SpanningTable from "../components/SpanningTable";
import Grid from '@material-ui/core/Grid';
import EventCard from "../components/GlobalCard";
import Container from "../components/Container";
import FavCard from "../components/FavCard";
import Wrapper from "../components/Wrapper";
import FavoriteResult from "../components/FavoriteResult";
import RegContainer from "../components/RegContainer";


class EventList extends Component {
  state = {
    indieArtists: []
  };

  // When the component mounts, load the next artist to be displayed
  componentDidMount() {
    this.loadNextIndieEvent();
  }

  loadNextIndieEvent = () => {
    API.getIndieArtistEvents()
      .then(res =>
        this.setState({
          indieArtists: res.data
        })
      )
      .catch(err => console.log(err));
  };

  render() {
    // console.log(this.state)
    return (

      <Wrapper>
      <div>
     
            <p>
        <h1>Events Happening in LA</h1>
        <p> Below you will find a list of upcoming events in LA </p>
        <p> You can sort by date 
        </p>
        </p>
        

<SpanningTable artists={this.state.indieArtists}/>



  
      </div>
      </Wrapper>
    )
  }
}

export default EventList;
