import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./SignInSignUp.scss";

import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

const SignUp = () => {
  //CURRENT REQUEST STRUCTURE
  const testForm = {
    id: 3,
    user_name: "bev",
    first_name: "beverly",
    last_name: "test",
    email: "hi@hi.com",
    zipcode: "12345",
    join_reason: "test",
    password: "lol",
  };

  // NEED TO SWITCH TO FORM STATE STRUCTURE
  const [formState, setFormState] = useState({
    id: null,
    name: null,
    email: null,
    password: null,
    zipcode: null,
    join_reason: null,
    interests: {
      covid: false,
      environment: false,
      local_politics: false,
      housing: false,
      other: false,
    },
  });

  const handleInput = (e) => {
    setFormState({
      ...formState,
      [e.target.name]: e.target.value,
    });
  };

  const handleCheckbox = (e) => {
    setFormState({
      ...formState,
      interests: {
        ...formState.interests,
        [e.target.name]: e.target.checked,
      },
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    //get the user list to determine user id
    fetch(
      "http://ec2-54-193-65-86.us-west-1.compute.amazonaws.com:8000/api/users?format=json"
    )
      .then((response) => response.json())
      .then((userList) => {
        setFormState({
          ...formState,
          id: userList.length,
        });

        // POST new user data
        fetch(
          "http://ec2-54-193-65-86.us-west-1.compute.amazonaws.com:8000/api/users/",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(formState),
          }
        )
          .then((response) => response.json())
          .then((data) => {
            console.log("Success:", data);
          })
          .catch((error) => {
            console.error("Error:", error);
          });
      });
  };

  return (
    <div className="signup">
      <h1>Sign Up</h1>

      <p>
        (or <Link to="/signin">log into your account!</Link>)
      </p>

      <Form onSubmit={(e) => handleSubmit(e)}>
        <Form.Group controlId="formName">
          <Form.Label>Name</Form.Label>
          <Form.Control name="name" onChange={(e) => handleInput(e)} />
        </Form.Group>

        <Form.Group controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            name="email"
            type="email"
            placeholder=""
            onChange={(e) => handleInput(e)}
          />
        </Form.Group>

        <Form.Group controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            name="password"
            type="password"
            placeholder=""
            onChange={(e) => handleInput(e)}
          />
        </Form.Group>

        <Form.Group controlId="formZip">
          <Form.Label>Zip Code</Form.Label>
          <Form.Control name="zipcode" onChange={(e) => handleInput(e)} />
        </Form.Group>

        <Form.Group controlId="formWhyJoin">
          <Form.Label>What's your primary reason for joining?</Form.Label>
          <Form.Control
            as="select"
            name="join_reason"
            onChange={(e) => handleInput(e)}
          >
            <option>...</option>
            <option>To help with existing efforts in my community</option>
            <option>To organize people within my community</option>
            <option>Not sure/Just want to check things out</option>
          </Form.Control>
        </Form.Group>

        <Form.Group controlId="formInterests">
          <Form.Label>
            I'm interested in getting involved with the following:
          </Form.Label>
          {["checkbox"].map((type) => (
            <div key={`interests-${type}`} className="checkboxes">
              <Form.Check
                inline
                label="COVID-19 Help"
                type={type}
                id="covid"
                name="covid"
                onChange={(e) => handleCheckbox(e)}
              />
              <Form.Check
                inline
                label="Environment"
                type={type}
                id="environment"
                name="environment"
                onChange={(e) => handleCheckbox(e)}
              />
              <Form.Check
                inline
                label="Local politcs"
                type={type}
                id="local_politcs"
                name="local_politcs"
                onChange={(e) => handleCheckbox(e)}
              />
              <Form.Check
                inline
                label="Housing"
                type={type}
                id="housing"
                name="housing"
                onChange={(e) => handleCheckbox(e)}
              />
              <Form.Check
                inline
                label="Other"
                type={type}
                id="other"
                name="other"
                onChange={(e) => handleCheckbox(e)}
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