import React from "react";
import { ListGroup, Card, ListGroupItem } from 'react-bootstrap';

export default function SingleEvent(props) {
  const artist = props.location.state.artist
  const { image, name, address, venue_name, date, time } = artist
  console.log(artist)
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={image.url} />
      <Card.Body>
        <Card.Title>{name}</Card.Title>
        <Card.Text>
          {address}
        </Card.Text>
      </Card.Body>
      <ListGroup className="list-group-flush">
        <ListGroupItem>Venue: {venue_name}</ListGroupItem>
        <ListGroupItem>Date: {date}</ListGroupItem>
        <ListGroupItem>Time: {time}</ListGroupItem>
      </ListGroup>
      <Card.Body>
        <Card.Link href="#">Card Link</Card.Link>
        <Card.Link href="#">Another Link</Card.Link>
      </Card.Body>
    </Card>
  )
}