import React from "react";
import { ListGroup, Card, ListGroupItem, Button } from 'react-bootstrap';
import API from '../utils/API'

const addFavorite = async (event, user) => {
  console.log(user)
  await API.addFavorite(event,user.id)
}

export default function SingleEvent(props) {
  const artist = props.location.state.artist
   const user = props.location.state.user
  const { image, name, address, venue_name, date, time } = artist
  console.log('single event', artist)
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={image.url || image} />
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
        <Button onClick={() => addFavorite(artist, user)}> Favorite </Button>
      </Card.Body>
    </Card>
  )
}