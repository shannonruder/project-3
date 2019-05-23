import React from "react";
import { ListGroup, Card, ListGroupItem } from 'react-bootstrap';
import Button from '@material-ui/core/Button';

export default function SingleEvent(props) {
  const artist = props.location.state.artist
  const { image, name, address, venue_name, date, time, url } = artist
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
          <Button variant="contained">
              <a href={artist.url} target="_blank">
                Ticket Info
                </a>
            </Button>
      </Card.Body>
    </Card>
  )
}