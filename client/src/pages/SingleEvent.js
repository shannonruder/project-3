import React from "react";
import { ListGroup, Card, ListGroupItem } from 'react-bootstrap';


import Button from '@material-ui/core/Button';
import EventCard from '../components/EventCard/EventCard'
import AuthService from '../components/AuthService'
import axios from 'axios'
const Auth = new AuthService();
export default class SingleEvent extends React.Component {


  handleSave(event) {
    event['email'] = Auth.getProfile().email
    axios.post("/api/events/save", event).then(results=>{console.log(results)
   })   
  }

  render () {
    const artist = this.props.location.state.artist

  return (
    <EventCard event = {artist} handleSave={this.handleSave}/>
    // <Card style={{ width: '18rem' }}>
    //   <Card.Img variant="top" src={image.url} />
    //   <Card.Body>
    //     <Card.Title>{name}</Card.Title>
    //     <Card.Text>
    //       {address}
    //     </Card.Text>
    //   </Card.Body>
    //   <ListGroup className="list-group-flush">
    //     <ListGroupItem>Venue: {venue_name}</ListGroupItem>
    //     <ListGroupItem>Date: {date}</ListGroupItem>
    //     <ListGroupItem>Time: {time}</ListGroupItem>
    //   </ListGroup>
    //   <Card.Body>
    //     <Card.Link href="#">Card Link</Card.Link>
    //     <Card.Link href="#">Another Link</Card.Link>
    //   </Card.Body>
    // </Card>
  )
}