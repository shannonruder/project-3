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
    const user = this.state.user
    console.log(user)
    const favs = user.favorites ? user.favorites.map((fav) => {
      console.log(fav)
      return <Link to={{
        pathname: "/singleEvent",
        state: {
          artist: fav
        }
      }}><ul>{fav.name}</ul></Link>
    }) : null

      <div className="container Profile">
        <h1>On the profile page!</h1>
        <p>Username: {user.username}</p>
        <p>Email: {user.email}</p>
        <p>Favorites: </p>
        {favs}

      <Wrapper>
        <Header>

        <h1>{this.state.username} profile page</h1>
       
        <p>Username: {this.state.username}</p> 
        <p>Email: {this.state.email}</p>

        <Link to="/">Go home</Link>
      
        </Header>
      </Wrapper>
    )
  }
}

export default withAuth(Profile);