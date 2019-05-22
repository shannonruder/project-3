import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import "./style.css";

export default function EventCard(props) {
  console.log(props.event)
  return (
    <div className="eventCard">
      <Card>
        <Card.Title style={{ width: "18rem" }} className="margin15">{props.event.name}</Card.Title>

        <Card.Body className="event-card-body">
          <Card.Subtitle style={{color:'black'}} className="margin15">{props.event.venue_name}</Card.Subtitle>
          <Card.Img src={props.event.image.url} />
          <Card.Text style={{color:'black'}} className="margin15">
            {props.event.name}
            <br /> <strong>Date: </strong>
            {props.event.date}
            <br /> <strong>Time: </strong>
            {props.event.time}
            <br /> <strong>Venue:</strong> {props.event.venue_name}
            <br /> <strong>Location: </strong> {props.event.address}
            <br /> <strong>Zip Code: </strong> {props.event.zipcode}
          </Card.Text>
          <div className="margin15">
            <Button variant="outline-primary mb-2 mr-2" size="lg" block>
                <a href={props.event.url} target="_blank">
                Ticket Info
                </a>
            </Button>

            <Button variant="primary" size="lg" block onClick={() => props.handleSave(props.event)}>Save this Event</Button>
          </div>
        </Card.Body>
      </Card>
    </div>
  );
}
