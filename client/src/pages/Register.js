import React from "../../node_modules/react";
import Hero from "../components/Hero";
import Container from "../components/Container";
import Header from "../components/Header";
import Wrapper from "../components/Wrapper";
import FavoriteResult from "../components/FavoriteResult";
import RegisterForm from "../components/RegisterForm";



function Register() {
  return (
    <div>
  <Header backgroundImage="/assets/images/indiela.png" fluid>
  </Header>
        <RegisterForm />

     
    </div>
  );
}

export default Register;
