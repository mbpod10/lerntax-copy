import React, { useState } from "react";
import LoginForm from "../components/auth/LoginForm";
import axios from "axios";
import { Link } from "react-router-dom";
import * as ReactBootStrap from "react-bootstrap";
import APIConfig from "../APIConfig";

const Login = (props) => {
  //console.log("Add props", props.match.params.id);
  console.log("user", props.user);
  console.log(props);
  const [input, setInput] = useState({
    user: {
      email: "",
      password: "",
    },
  });
  //const [user, setReview] = useState(null);
  const [errorStatus, setErrorStatus] = useState("");

  const handleSuccessfulAuth = (data) => {
    props.handleLogin(data);
    window.location.reload();
    props.history.push("/dashboard");
  };

  const handleChange = (event) => {
    console.log("event", event.target.name, event.target.value);
    setInput({
      ...input,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = (event) => {
    console.log("form submitted");
    event.preventDefault();
    axios
      .post(
        `${APIConfig}/sessions`,
        {
          user: {
            email: input.email,
            password: input.password,
          },
        },
        { withCredentials: true }
      )
      .then((resonse) => {
        console.log("res from  login", resonse);
        if (resonse.data.logged_in) {
          handleSuccessfulAuth(resonse.data);
          // window.location.reload();
          // props.history.push(`/dashboard`);
        } else {
          setErrorStatus(resonse.data.status);
        }
      })
      .catch((error) => {
        console.log("login error", error);
      });
  };
  return (
    <div>
      <h4>Status: {props.loggedInStatus}</h4>
      <h1>Login</h1>
      {props.loggedInStatus === "LOGGED_IN" ? (
        "Successful Login!"
      ) : (
        <div className="form-div">
          <LoginForm
            user={input}
            handleChange={handleChange}
            handleSubmit={handleSubmit}
            handleSuccessfulAuth={handleSuccessfulAuth}
          />
          <br />
          <h5>Don't Have An Account?</h5>
          <h5>
            Register <Link to="/">Here</Link>
          </h5>
        </div>
      )}
      <br />
      {errorStatus ? (
        <ReactBootStrap.ListGroup>
          <ReactBootStrap.ListGroup.Item variant="danger">
            {errorStatus}
          </ReactBootStrap.ListGroup.Item>
        </ReactBootStrap.ListGroup>
      ) : null}
    </div>
  );
};

export default Login;
