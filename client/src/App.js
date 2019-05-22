import React, { Component } from "react";
import AuthService from "./components/AuthService";
import withAuth from "./components/withAuth";
import Wrapper from "./components/Wrapper";
import Header from "./components/Header";
import Container from "./components/Container";
import "./main.css";

const Auth = new AuthService();

class App extends Component {


  handleLogout = () => {
    Auth.logout();
    this.props.history.replace('/signup');
  };

  goToEditProfile = () => {
    this.props.history.replace('/profile');
  };

  render() {
    console.log(process.env.REACT_APP_SECRET_CODE);
    return (
      <Wrapper>
             <Container>
      <div className="App">
       
     
          <Header>
        <div className="App-header">
    
          <h2>Welcome {this.props.user.email}</h2>
          
        </div>
        </Header>
        <p className="App-intro">
          <p>
          <button type="button" className="btn btn-primary" onClick={this.goToEditProfile}>Go to Profile</button>
          <button type="button" className="btn btn-danger" onClick={this.handleLogout}>Logout</button>
          </p>
        </p>
       
       
    
       
      </div>
      </Container>
      </Wrapper>
     
    );
  }
}

export default withAuth(App);

