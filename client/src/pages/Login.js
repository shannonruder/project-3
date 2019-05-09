import React from "react";
import Hero from "../components/Hero";
import Container from "../components/Container";
import Header from "../components/Header";
import Wrapper from "../components/Wrapper";
import LoginForm from "../components/LoginForm";

function Login() {
  return (
    <div>
      <Wrapper>
      <Header backgroundImage="/assets/images/indiela.png" fluid>
  </Header>
        <LoginForm />

      </Wrapper>
    </div>
  );
}

export default Login;