import React from "react";
import * as ReactBootStrap from "react-bootstrap";

const Registration = ({ user, handleChange, handleSubmit }) => {
  return (
    <ReactBootStrap.Form onSubmit={handleSubmit}>
      <ReactBootStrap.Form.Group controlId="formBasicEmail">
        <ReactBootStrap.Form.Label>Email</ReactBootStrap.Form.Label>
        <ReactBootStrap.Form.Control
          type="email"
          placeholder="Email"
          value={user.email}
          name="email"
          onChange={handleChange}
          required
        />
      </ReactBootStrap.Form.Group>

      <ReactBootStrap.Form.Group controlId="formBasicPassword">
        <ReactBootStrap.Form.Label>Password</ReactBootStrap.Form.Label>
        <ReactBootStrap.Form.Control
          type="password"
          placeholder="Password"
          value={user.password}
          name="password"
          onChange={handleChange}
          required
        />
      </ReactBootStrap.Form.Group>

      <ReactBootStrap.Form.Group>
        <ReactBootStrap.Form.Label>
          Password Confirmation
        </ReactBootStrap.Form.Label>
        <ReactBootStrap.Form.Control
          type="password"
          placeholder="Password Confirmation"
          type="password"
          value={user.password_confirmation}
          name="password_confirmation"
          onChange={handleChange}
          required
        />
      </ReactBootStrap.Form.Group>

      <ReactBootStrap.Button variant="primary" type="submit">
        Register
      </ReactBootStrap.Button>
    </ReactBootStrap.Form>
  );
};
export default Registration;
