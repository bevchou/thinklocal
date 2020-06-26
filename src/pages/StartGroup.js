import React, { useState, useContext } from "react";
import { Link, useHistory } from "react-router-dom";
import Cookies from 'js-cookie';
import { UserContext } from "../UserContext";

import "./StartGroup.scss";

import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

const StartGroup = () => {
  const {user} = useContext(UserContext);
  const [groupFormState, setGroupFormState] = useState({
      group_name: null,
      description: null,
  });
  const history = useHistory();

  const handleInput = (e) => {
      setGroupFormState({
          ...groupFormState,
          [e.target.name]: e.target.value
      })
  }
  const getTime = () => {
    const time = new Date();
    const now = time.toISOString();

    return now;
  }

  const handleSubmit = (e) => {
      e.preventDefault();
      const now = getTime();
      
      const groupObj = {
        ...groupFormState,
        creator: user.pk,
        create_by: user.fields.user_name,
        create_date: now
      }
      console.log("form", groupFormState);
      console.log("groupObj", groupObj);
      console.log(user);
      console.log(now);
      const options = {
        method: "POST",
        headers: {
          "Accept": "application/json, text/plain, */*",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(groupObj),
      }
      fetch("http://localhost:8000/api/groups/", options)
      .then((response) => {
        console.log(response)
          if(response.ok){
            return response.json();
          }else{
            throw new Error("something went wrong");
          }
        }
      )
      .then((data) => {
        console.log("Success:", data);
        history.push("/groups");
      })
      .catch((error) => {
        console.error("Error:", error);
      });
      
      
  }
  return(
    <div className="startgroup">
    <h1>Start Your Group</h1>
  {/* <pre>{user.pk}{user.fields.user_name}</pre> */}

    <Form onSubmit={(e) => handleSubmit(e)}>
      <Form.Group controlId="formName">
        <Form.Label>Group Name</Form.Label>
        <Form.Control name="group_name" onChange={(e) => handleInput(e)} />
      </Form.Group>

      <Form.Group controlId="formDiscription">
        <Form.Label>Description</Form.Label>
        <textarea
          name="description"
          placeholder=""
          onChange={(e) => handleInput(e)}
        />
      </Form.Group>
      <Button variant="primary" type="submit">
          Submit
      </Button>
    </Form>
    </div>
    );
};

export default StartGroup;