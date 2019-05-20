import React from "react"
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'


export default function EventCard(props) {
    console.log(props)
    return (
        <Card style={{ width: '35rem' }}>
            <Card.Img variant="top mt-3" src={props.event.image.url} />
            <Card.Body>
                <Card.Title style={{ width: '18rem' }}>{props.event.name}</Card.Title>
                <Card.Subtitle>{props.event.venue}</Card.Subtitle>
                <Card.Text>{props.event.name}</Card.Text>
                <Button variant="primary mr-2"><a href={props.event.url} target="_blank">Ticket Info</a></Button>
                
                <Button variant="primary mr-2">Dates</Button>
                <Button variant="primary">Save this Artist</Button>

            </Card.Body>
        </Card>
    )
}

