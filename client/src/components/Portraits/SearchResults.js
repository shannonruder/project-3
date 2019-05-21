import React from "react";
import { Col, Image } from 'react-bootstrap';

export default function SearchResults(props) {
  return (
    props.length ?
    <Col>
      <Image style={{ width: 300, height: '300' }} src={props.search[0].image.url} rounded />
    </Col>
    : null
  )
}