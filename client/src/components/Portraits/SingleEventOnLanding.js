import React, { Component } from "react";
import { Col, Image, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import withAuth from '../withAuth';

class SingleEventOnLanding extends Component {
  render() {
    let pic;
    let name;
    if (this.props.props.event) {
      pic = this.props.props.event.image.url
      name = this.props.props.event.name
    }
    return (
      this.props.props.event ?
        <Col md="auto">
          <p className="justify-content-md-center" size="lg" block >{name}</p>
          <Image style={{ width: 300, height: '300' }} src={pic} rounded />
          <Link to={{
            pathname: "/singleEvent",
            state: {
              artist: this.props.props.event,
              user: this.props.user
            }
          }}><Button variant="outline-primary" size="lg" block >More Info</Button></Link>
        </Col>
        : null
    )
  }
}

export default withAuth(SingleEventOnLanding);