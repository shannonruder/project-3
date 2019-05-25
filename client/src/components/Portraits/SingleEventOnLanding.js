import React from "react";
import { Col, Image, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

export default function SingleEventOnLanding(props) {
  console.log(props)
  let pic;
  let name;
  if(props.event) {
    pic = props.event.image.url
    name = props.event.name
  }
  return (
    props.event ?
      <Col md="auto">
        <p className="justify-content-md-center" size="lg" block >{name}</p>
        <Image style={{ width: 300, height: '300' }} src={pic} rounded />
        <Link to={{
          pathname: "/singleEvent",
          state: { artist: props.event }
        }}><Button variant="outline-primary" size="lg" block >More Info</Button></Link>
      </Col>
      : null
  )
}