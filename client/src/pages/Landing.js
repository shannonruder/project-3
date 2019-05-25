import React from "react";
import Carousel from 'react-bootstrap/Carousel'
import Portraits from '../components/Portraits'
import Wrapper from '../components/Wrapper'
import Audience1 from '../assets/images/audience-band-club-2091383.jpg'
import Audience2 from '../assets/images/band-concert-indie-1691051.jpg'
import Audience3 from '../assets/images/artist-band-concert-1309238.jpg'
import Audience4 from '../assets/images/bandonstage.jpg'
import Audience5 from '../assets/images/adult-attractive-band-1576280.jpg'


import { Col, Row, Container } from "../components/Grid";

function Landing() {

  return (
    <div>
    
      <Carousel>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={Audience1}
            alt="First slide"
          />
          <Carousel.Caption>
            <h3>Find Live Upcoming Indie Music</h3>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={Audience2}
            alt="Second slide"
          />

          <Carousel.Caption>
            <h3>Playing Near Los Angeles</h3>
            {/* <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p> */}
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <img
            className="d-block w-100"
            src={Audience3}
            alt="Third slide"
          />

          <Carousel.Caption>
            <h3>and explore.. </h3>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={Audience4}
            alt="Third slide"
          />

          <Carousel.Caption>
            <h3> </h3>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <img
            className="d-block w-100"
            src={Audience5}
            alt="Third slide"
          />

          <Carousel.Caption>
            <h3> </h3>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
     <Wrapper>
       <h1>Coming Soon Near You !</h1>
       <Row>
      <Portraits />
      </Row>
      </Wrapper>
  
    </div> 
     
  );
}


export default Landing;
