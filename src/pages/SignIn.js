import React, { useState } from "react";
import { Link } from "react-router-dom";

import "./SignInSignUp.scss";

import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

const SignIn = () => {
  const [loginInfoState, setLoginInfoState] = useState({
    email: null,
    password: null,
  });

  const handleInput = (e) => {
    setLoginInfoState({
      ...loginInfoState,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('authenticate/sign in')
    const options = {
      method: "POST",
      headers: {
        "Accept": "application/json, text/plain, */*",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(loginInfoState)
    }
    //ADD CODE TO AUTHENTICATE
    fetch("http://127.0.0.1:8000/api/users/check_password/",options)
    .then((response) => {
      console.log(response);
      if(response.ok){
        return response.json();
      }else{
        throw new Error("Error in authentication")
      }
    })
    .then(status => {
      console.log(status);
      switch(status){
        case 'password does not match':
          console.log(status);
          break;
        case 'password match':
          console.log(status);
          break;
        default:
          console.log(status);
      }
    })
  };

  return (
    <div className="signin">
      <h1>Sign In</h1>

      <p>
        (or <Link to="/signup">create an account!</Link>)
      </p>

      <Form onSubmit={(e) => handleSubmit(e)}>
        <Form.Group controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="email"
            name="email"
            placeholder=""
            onChange={(e) => handleInput(e)}
          />
        </Form.Group>

        <Form.Group controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            name="password"
            placeholder=""
            onChange={(e) => handleInput(e)}
          />
        </Form.Group>
        <Button variant="primary" type="submit">
          Sign In
        </Button>
      </Form>
    </div>
  );
};

export default SignIn;
