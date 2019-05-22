import React from "react";
import { Col, Row, Card, ListGroup, ListGroupItem } from 'react-bootstrap';
import Utils from '../../utils/utilitieFunctions'


export default function SearchResults(props) {
  const data = props.location.state.results
  const uniqieImgages = Utils.uniqueImg(data)
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
                  <Card.Text style={{color:'black'}}>
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
