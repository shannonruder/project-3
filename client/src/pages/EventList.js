import React, { Component } from "react";
import API from "../utils/API";

import SpanningTable from "../components/SpanningTable";
import Modal from "../components/Modal";
import Wrapper from "../components/Wrapper";



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
