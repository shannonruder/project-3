import React, { Component } from "react";
import { Container, Col, Row, Image, Button, Form, FormGroup, FormControl } from 'react-bootstrap';
import API from '../../utils/API';
import { Link, withRouter } from 'react-router-dom';
import "./style.css";
import SingleEventOnLanding from "./SingleEventOnLanding";
import Utils from '../../utils/utilitieFunctions'

class Portraits extends Component {

  constructor(props) {
    super(props)
    this.state = {
      artists: [],
      query: "",
    }
    this.inputSearch = this.inputSearch.bind(this);

  }

  handleChange = (event) => {
    event.preventDefault()
    this.setState({
      query: event.target.value
    })
  }

  inputSearch = (event) => {
    event.preventDefault();

    API.searchArtist(this.state.query)
      .then((response) => {
        this.props.history.push({
          pathname: '/SearchResults',
          state: { results: response.data }
        })
      })
  }

  // on change function
  // everytime someone clicks, it should update the state

  componentDidMount() {
    API.getIndieArtistEvents()
      .then((results) => {
        const unique = Utils.uniqueImg(results.data)
        this.setState({ artists: unique })
      })
  }

  render() {
    return (
      <div>
        <Container>
          <Row className="search">
            <Col sm="12">
              <div className ="form">
                <form onSubmit={e => this.inputSearch(e)}>
                  <FormGroup controlId="formBasicText">
                    <FormControl size="lg" type="text" placeholder="Large text"
                      type="text"
                      onChange={this.handleChange}
                      value={this.state.value}
                      placeholder="Enter Artist Name Here"
                    />
                    <Button size="lg" variant="info" type="submit">Search</Button>
                  </FormGroup>
                </form>
              </div>
            </Col>
          </Row>
          <Row className="justify-content-md-center">
            <SingleEventOnLanding event={this.state.artists[1]} />
            <SingleEventOnLanding event={this.state.artists[2]} />
            <SingleEventOnLanding event={this.state.artists[4]} />
          </Row>
        </Container >
      </div>
    )
  }
}

export default withRouter(Portraits)
