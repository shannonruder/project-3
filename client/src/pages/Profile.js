import React, { Component } from 'react';
import withAuth from './../components/withAuth';
import API from './../utils/API';
import { Link } from 'react-router-dom';

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
    return (
      <div className="container Profile">
        <h1>On the profile page!</h1>
        <p>Username: {user.username}</p>
        <p>Email: {user.email}</p>
        <p>Favorites: </p>
        {favs}
        <Link to="/">Go home</Link>
      </div>
    )
  }
}

export default withAuth(Profile);