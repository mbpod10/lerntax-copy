import React, { useState } from "react";
import CalcTaxForm from "../components/auth/CalcTaxForm";
import * as ReactBootStrap from "react-bootstrap";

const CalcTax = () => {
  const [error, setError] = useState("");
  const [w2Income, setw2Income] = useState(null);
  const [addIncome, setAddIncome] = useState(null);
  const [adjustments, setAdjustments] = useState(null);
  const [standardDeduction, setStandardDeduction] = useState("");
  const [taxableIncome, setTaxableIncome] = useState(null);

  const handleChange1 = (event) => {
    if (isNaN(event.target.value)) {
      setError("Input Must Be A Number");
      setw2Income(null);
    } else {
      setw2Income(event.target.value);
      parseInt(w2Income, 10);
      setError("");
      console.log(w2Income);
    }
  };
  const handleChange2 = (event) => {
    if (isNaN(event.target.value)) {
      setError("Input Must Be A Number");
      setAddIncome(null);
    } else {
      setAddIncome(event.target.value);
      setError("");
    }
  };
  const handleChange3 = (event) => {
    if (isNaN(event.target.value)) {
      setError("Input Must Be A Number");
      setAddIncome(null);
    } else {
      setAdjustments(event.target.value);
      setError("");
    }
  };

  const handleChange4 = (event) => {
    setStandardDeduction(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const parsedW2 = parseInt(w2Income, 10);
    const parsedAdd = parseInt(addIncome, 10);
    const parseAdjustments = parseInt(adjustments, 10);
    let parsedStandardDeduction = 0;
    if (
      standardDeduction === "Single $12,200" ||
      standardDeduction === "Married Filing Seperately $12,200"
    ) {
      parsedStandardDeduction = 12200;
    } else if (standardDeduction === "Head Of Household $18,350") {
      parsedStandardDeduction = 18350;
    } else if (standardDeduction === "Married Filing Jointly $24,400") {
      parsedStandardDeduction = 24400;
    } else {
      parsedStandardDeduction = null;
    }
    setTaxableIncome(
      parsedW2 + parsedAdd - parseAdjustments - parsedStandardDeduction
    );

    console.log(parsedW2, parsedAdd, parseAdjustments, parsedStandardDeduction);
  };

  return (
    <div className="form-div">
      <h1>Progress Through The Forms</h1>
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
          <ReactBootStrap.Form.Group controlId="formBasicEmail">
            <ReactBootStrap.Form.Label>
              Additional Income
            </ReactBootStrap.Form.Label>
            <ReactBootStrap.Form.Control
              value={addIncome}
              name="adittional income"
              onChange={handleChange2}
              required
            />
          </ReactBootStrap.Form.Group>
        ) : null}
        {addIncome ? (
          <ReactBootStrap.Form.Group controlId="formBasicEmail">
            <ReactBootStrap.Form.Label>
              Additional Income
            </ReactBootStrap.Form.Label>
            <ReactBootStrap.Form.Control
              value={adjustments}
              name="adittional income"
              onChange={handleChange3}
              required
            />
          </ReactBootStrap.Form.Group>
        ) : null}
        {adjustments ? (
          <ReactBootStrap.Form.Group
            as={ReactBootStrap.Col}
            controlId="formGridState"
          >
            <ReactBootStrap.Form.Label>
              Standard Deduction
            </ReactBootStrap.Form.Label>
            <ReactBootStrap.Form.Control
              as="select"
              defaultValue=""
              value={standardDeduction}
              name="marital_status"
              onChange={handleChange4}
              // required
            >
              <option></option>
              <option>Single $12,200</option>
              <option>Head Of Household $18,350</option>
              <option>Married Filing Jointly $24,400</option>
              <option>Married Filing Seperately $12,200</option>
            </ReactBootStrap.Form.Control>
          </ReactBootStrap.Form.Group>
        ) : null}
        <ReactBootStrap.Button variant="primary" type="submit">
          Calculate
        </ReactBootStrap.Button>
      </ReactBootStrap.Form>
      {error} {taxableIncome}
    </div>
  );
};

export default CalcTax;
