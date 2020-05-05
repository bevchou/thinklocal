import React from "react";
import "./SignInSignUp.scss";

import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

const SignUp = () => {
  return (
    <div className="signin">
      <h1>Sign Up</h1>

      <p>
        (or <a href="/signin">log into your account!</a>)
      </p>

      <div style={{ width: "300px" }}>
        <Form>
          <Form.Group controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="" />
          </Form.Group>

          <Form.Group controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="" />
          </Form.Group>

          <Form.Group controlId="formGridZip">
            <Form.Label>Zip</Form.Label>
            <Form.Control />
          </Form.Group>

          <Form.Group controlId="formGridWhyJoin">
            <Form.Label>What's your primary reason for joining?</Form.Label>
            <Form.Control as="select">
              <option>...</option>
              <option>To help with existing efforts in my community</option>
              <option>To organize people within my community</option>
              <option>Not sure/Just want to check things out</option>
            </Form.Control>
          </Form.Group>

          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
      </div>
    </div>
  );
};

export default SignUp;
