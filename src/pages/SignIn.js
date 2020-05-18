import React from "react";
import { Link } from "react-router-dom";

import "./SignInSignUp.scss";

import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

const SignIn = () => {
  // const [loginInfoState, setLoginInfoState] = useState({
  //   email: null,
  //   password: null,
  // });

  // const handleInput = (e) => {
  //   setLoginInfoState({
  //     ...loginInfoState,
  //     [e.target.name]: e.target.value,
  //   });
  // };

  return (
    <div className="signin">
      <h1>Sign In</h1>

      <p>
        (or <Link to="/signup">create an account!</Link>)
      </p>

      <Form>
        <Form.Group controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="email"
            name="email"
            placeholder=""
            //  onChange={(e) => handleInput(e)}
          />
        </Form.Group>

        <Form.Group controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            name="password"
            placeholder=""
            // onChange={(e) => handleInput(e)}
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
