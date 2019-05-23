import React from "react";
import Carousel from 'react-bootstrap/Carousel'
import Portraits from '../components/Portraits'
import Wrapper from '../components/Wrapper'


function Landing() {

  return (
    <div>
    
      <Carousel>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="/assets/images/audience-band-club-2091383.jpg"
            alt="First slide"
          />
          <Carousel.Caption>
            <h3>Find Live Upcoming Indie Music</h3>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="/assets/images/band-concert-indie-1691051.jpg"
            alt="Second slide"
          />

          <Carousel.Caption>
            <h3>Playing Near You</h3>
            {/* <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p> */}
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <img
            className="d-block w-100"
            src="/assets/images/artist-band-concert-1309238.jpg"
            alt="Third slide"
          />

          <Carousel.Caption>
            <h3>and explore.. </h3>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="/assets/images/bandonstage.jpg"
            alt="Third slide"
          />

          <Carousel.Caption>
            <h3> </h3>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <img
            className="d-block w-100"
            src="/assets/images/adult-attractive-band-1576280.jpg"
            alt="Third slide"
          />

          <Carousel.Caption>
            <h3> </h3>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
     <Wrapper>
      <Portraits />
 
      </Wrapper>
  
    </div> 
     
  );
}


export default Landing;
