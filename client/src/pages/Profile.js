import React, { Component } from 'react';
import withAuth from './../components/withAuth';
import API from './../utils/API';
import { Link } from 'react-router-dom';
import Header from "../components/Header";
import Wrapper from "../components/Wrapper";
import Container from "../components/Container";
class Profile extends Component {

  state = {
    username: "",
    email: "",
    events: []
  };

  componentDidMount() {
    API.getUser(this.props.user.id).then(res => {
      this.setState({
        username: res.data.username,
        email: res.data.email
      })
      API.getProfileEvents(res.data.email).then(res2 => {
        console.log(res2)
         this.setState({
        events:res2.data
        })
      })
    });
  }

  render() {
    return (
      <Wrapper>
        <Header>

        <h1>{this.state.username} profile page</h1>
       
        <p>Username: {this.state.username}</p> 
        <p>Email: {this.state.email}</p>
        Favorites: 
          {this.state.events.map((event, i) => {
                return <p>{event.name}</p>
              })}

        <Link to="/">Go home</Link>
      
        </Header>
      </Wrapper>
    )
  }
}

export default withAuth(Profile);