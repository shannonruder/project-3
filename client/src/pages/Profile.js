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
    user: {}
  };

  componentDidMount() {
    API.getUser(this.props.user.id).then(res => {
      this.setState({
        username: res.data.username,
        email: res.data.email,
        user: res.data
      })
    });
  }

  render() {
    return (
      <Wrapper>
      <Header>
   
      <h1>{this.state.username} profile page</h1>
      </Header>
      <Container>
      <p>Username: {this.state.username}</p> 
      <p>Email: {this.state.email}</p>
      <Link to="/">Go home</Link>

      </Container>
    </Wrapper>
   

    )
  }
}
export default Profile;
