import React from "react";
import { Link } from "react-router-dom";
import "./SignInSignUp.scss";

import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

const SignUp = () => {
  return (
    <div className="signup">
      <h1>Sign Up</h1>

      <p>
        (or <Link to="/signin">log into your account!</Link>)
      </p>

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

        <Form.Group controlId="formInterests">
          <Form.Label>
            I'm interested in getting involved with the following:{" "}
          </Form.Label>
          {["checkbox"].map((type) => (
            <div key={`inline-${type}-1`} className="checkboxes">
              <Form.Check
                inline
                label="COVID-19 Help"
                type={type}
                id={`inline-${type}-1`}
              />
              <Form.Check
                inline
                label="Environment"
                type={type}
                id={`inline-${type}-2`}
              />
              <Form.Check
                inline
                label="Local politcs"
                type={type}
                id={`inline-${type}-1`}
              />
              <Form.Check
                inline
                label="Housing"
                type={type}
                id={`inline-${type}-2`}
              />
              <Form.Check
                inline
                label="Other"
                type={type}
                id={`inline-${type}-1`}
              />
            </div>
          ))}
        </Form.Group>

        <Button variant="primary" type="submit">
          Sign Up
        </Button>
      </Form>
    </div>
  );
};

export default SignUp;
