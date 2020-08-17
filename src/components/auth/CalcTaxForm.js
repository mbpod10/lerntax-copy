import React from "react";
import * as ReactBootStrap from "react-bootstrap";

const CalcTaxForm = ({ input, handleChange, handleSubmit }) => {
  return (
    <ReactBootStrap.Form onSubmit={handleSubmit}>
      <ReactBootStrap.Form.Group controlId="formBasicEmail">
        <ReactBootStrap.Form.Label>Email</ReactBootStrap.Form.Label>
        <ReactBootStrap.Form.Control
          value={input}
          name="income"
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
export default CalcTaxForm;
