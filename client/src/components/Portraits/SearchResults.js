import React from "react";
import { Col, Row, Card, ListGroup, ListGroupItem } from 'react-bootstrap';
import { forEach } from 'lodash';

function uniqueImg(arr) {
  const cache = {}
  arr.forEach(ele => {
    const url = ele.image.url
    if (!cache[url]) cache[url] = ele
  })
  const res = []
  forEach(cache, (value, key) => {
    res.push({
      ...value, key
    })
  })
  return res
}

export default function SearchResults(props) {
  const data = props.location.state.results
  const uniqieImgages = uniqueImg(data)
  return (
    uniqieImgages.length ?
      <Row>
        {uniqieImgages.map((value) => {
          return (
            <Col>
              <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={value.image.url} />
                <Card.Body>
                  <Card.Title>{value.name}</Card.Title>
                  <Card.Text>
                    {value.address}
                  </Card.Text>
                </Card.Body>
                <ListGroup className="list-group-flush">
                  <ListGroupItem>Venue: {value.venue_name}</ListGroupItem>
                  <ListGroupItem>Date: {value.date}</ListGroupItem>
                  <ListGroupItem>Time: {value.time}</ListGroupItem>
                </ListGroup>
              </Card>
            </Col>
          )
        })
        }
      </Row >
      : null
  )
}