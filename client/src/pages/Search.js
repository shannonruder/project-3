import React from "react";
import API from "../utils/API";
import EventCard from "../components/EventCard/EventCard";
import Wrapper from "../components/Wrapper";
import axios from "axios";
import List from "../components/List";
import { Col, Row, Container } from "../components/Grid";

import { FormHelperText } from "@material-ui/core";

export default class Search extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            artists: []
        };
        this.handleSave = this.handleSave.bind(this) 
    }

  componentDidMount() {
    API.getIndieArtistEvents().then(results => {
      this.setState({ artists: results });
    });
  }
  handleSave(event) {
      console.log(event)
      //add to the event object a key called user
      //get the current user (maybe use their token)
      // You need to find the user_id which matches the user in mongo
      // Then add the user_id to to the new user key we made in the event object
   axios.post("/api/events/save", event).then(results=>{console.log(results)
   })   
  }

  render() {
    console.log(this.state);
    return (
      <Wrapper>
        <Row>
          <Col size="md-12">
            <h1 className="text-center">
              <strong>Explore IndieEvents</strong>
            </h1>
            <h2 className="text-center">
              Search and save upcoming indie events
            </h2>
          </Col>
        </Row>
        <div>
          <Row>
            {/* <Col size="md-6" > */}
            {this.state.artists.data &&
              this.state.artists.data.map((event, i) => {
                return <EventCard event={event} key={i} handleSave={this.handleSave}/>;
              })}

            {/* </Col> */}
          </Row>
        </div>
      </Wrapper>
    );
  }
}
