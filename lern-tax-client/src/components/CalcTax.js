import React, { useState } from "react";
import CalcTaxForm from "../components/auth/CalcTaxForm";
import * as ReactBootStrap from "react-bootstrap";

const CalcTax = () => {
  const [w2Income, setw2Income] = useState(null);

  const handleChange1 = (event) => {
    setw2Income(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const parsedInt = parseInt(w2Income, 10);
    console.log(parsedInt);
  };

  return (
    <>
      <h1>Calculate Tax</h1>
      <ReactBootStrap.Form onSubmit={handleSubmit}>
        <ReactBootStrap.Form.Group controlId="formBasicEmail">
          <ReactBootStrap.Form.Label>W2 Income</ReactBootStrap.Form.Label>
          <ReactBootStrap.Form.Control
            value={w2Income}
            name="income"
            onChange={handleChange1}
            required
          />
        </ReactBootStrap.Form.Group>
        {w2Income ? (
          <ReactBootStrap.Button variant="primary" type="submit">
            Calculate
          </ReactBootStrap.Button>
        ) : null}
      </ReactBootStrap.Form>
    </>
  );
};

export default CalcTax;
