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
  const [taxLiability, setTaxLiability] = useState(null);

  let formatter = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  });

  const data = {
    single: {
      bracket1: {
        bracketTop: 9701,
        taxRate: 0.1,
        prevTax: null,
      },
      bracket2: {
        bracketTop: 39476,
        taxRate: 0.12,
        prevTax: 970,
      },
      bracket3: {
        bracketTop: 84201,
        taxRate: 0.22,
        prevTax: 4543,
      },
      bracket4: {
        bracketTop: 100001,
        taxRate: 0.24,
        prevTax: 14383,
      },
      bracket5: {
        bracketTop: 160725,
        taxRate: 0.24,
        prevTax: 5826,
      },
      bracket6: {
        bracketTop: 204100,
        taxRate: 0.32,
        prevTax: 18684,
      },
      bracket7: {
        bracketTop: 510300,
        taxRate: 0.35,
        prevTax: 24807,
      },
      bracket8: {
        bracketTop: null,
        taxRate: 0.37,
        prevTax: 35013,
      },
    },
  };

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

    let taxInVar =
      parsedW2 + parsedAdd - parseAdjustments - parsedStandardDeduction;

    let parsedTL = 0;
    if (taxInVar < 0) {
      setTaxableIncome(0);
    } else if (taxInVar < data.single.bracket1.bracketTop) {
      setTaxableIncome(taxInVar);
      parsedTL = taxInVar * data.single.bracket1.taxRate;
    } else if (taxInVar < data.single.bracket2.bracketTop) {
      setTaxableIncome(taxInVar);
      let temp = taxInVar - data.single.bracket1.bracketTop;
      parsedTL =
        data.single.bracket2.prevTax + temp * data.single.bracket2.taxRate;
    } else if (taxInVar < data.single.bracket3.bracketTop) {
      setTaxableIncome(taxInVar);
      let temp = taxInVar - data.single.bracket2.bracketTop;
      parsedTL =
        data.single.bracket3.prevTax + temp * data.single.bracket3.taxRate;
    } else if (taxInVar < data.single.bracket4.bracketTop) {
      setTaxableIncome(taxInVar);
      let temp = taxInVar - data.single.bracket3.bracketTop;
      parsedTL =
        data.single.bracket4.prevTax + temp * data.single.bracket4.taxRate;
    } else if (taxInVar < data.single.bracket5.bracketTop) {
      setTaxableIncome(taxInVar);
      parsedTL =
        taxInVar * data.single.bracket5.taxRate - data.single.bracket5.prevTax;
    } else if (taxInVar < data.single.bracket6.bracketTop) {
      setTaxableIncome(taxInVar);
      parsedTL =
        taxInVar * data.single.bracket6.taxRate - data.single.bracket6.prevTax;
    } else if (taxInVar < data.single.bracket7.bracketTop) {
      setTaxableIncome(taxInVar);
      parsedTL =
        taxInVar * data.single.bracket7.taxRate - data.single.bracket7.prevTax;
    } else {
      setTaxableIncome(taxInVar);
      parsedTL =
        taxInVar * data.single.bracket8.taxRate - data.single.bracket8.prevTax;
    }

    setTaxLiability(parsedTL);
    console.log(
      parsedW2,
      parsedAdd,
      parseAdjustments,
      parsedStandardDeduction,
      taxLiability
    );
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
      <br />
      {taxableIncome ? (
        <>
          <ReactBootStrap.ListGroup>
            <ReactBootStrap.ListGroup.Item variant="success">
              Taxable Income: {formatter.format(taxableIncome)}
            </ReactBootStrap.ListGroup.Item>
          </ReactBootStrap.ListGroup>
          <br />
          <ReactBootStrap.ListGroup>
            <ReactBootStrap.ListGroup.Item variant="danger">
              Tax Liability: {formatter.format(Math.ceil(taxLiability))}
            </ReactBootStrap.ListGroup.Item>
          </ReactBootStrap.ListGroup>
        </>
      ) : null}

      {error ? (
        <ReactBootStrap.ListGroup>
          <ReactBootStrap.ListGroup.Item variant="danger">
            {error}
          </ReactBootStrap.ListGroup.Item>
        </ReactBootStrap.ListGroup>
      ) : null}
    </div>
  );
};

export default CalcTax;
