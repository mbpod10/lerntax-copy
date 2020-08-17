import React, { useState } from "react";
import { Link } from "react-router-dom";
import * as ReactBootStrap from "react-bootstrap";

const AddInfo = ({ information, handleChange, handleSubmit }) => {
  let ageArray = [];
  for (let i = 17; i < 101; i++) ageArray.push(i);
  //console.log(ageArray);

  const ageArrayOption = ageArray.map((element, index) => {
    return (
      <option key={index} value={parseInt(element, 10)}>
        {parseInt(element, 10)}
      </option>
    );
  });
  const states = [
    "AL",
    "AK",
    "AS",
    "AZ",
    "AR",
    "CA",
    "CO",
    "CT",
    "DE",
    "DC",
    "FM",
    "FL",
    "GA",
    "GU",
    "HI",
    "ID",
    "IL",
    "IN",
    "IA",
    "KS",
    "KY",
    "LA",
    "ME",
    "MH",
    "MD",
    "MA",
    "MI",
    "MN",
    "MS",
    "MO",
    "MT",
    "NE",
    "NV",
    "NH",
    "NJ",
    "NM",
    "NY",
    "NC",
    "ND",
    "MP",
    "OH",
    "OK",
    "OR",
    "PW",
    "PA",
    "PR",
    "RI",
    "SC",
    "SD",
    "TN",
    "TX",
    "UT",
    "VT",
    "VI",
    "VA",
    "WA",
    "WV",
    "WI",
    "WY",
  ];

  const mappedStates = states.map((element, index) => {
    return (
      <option key={index} value={element}>
        {element}
      </option>
    );
  });

  return (
    <ReactBootStrap.Form onSubmit={handleSubmit}>
      <ReactBootStrap.Form.Row>
        <ReactBootStrap.Form.Group
          as={ReactBootStrap.Col}
          controlId="formGridEmail"
        >
          <ReactBootStrap.Form.Label>Name</ReactBootStrap.Form.Label>
          <ReactBootStrap.Form.Control
            type="name"
            placeholder=""
            value={information.name}
            name="name"
            onChange={handleChange}
            // required
          />
        </ReactBootStrap.Form.Group>
        <ReactBootStrap.Form.Group
          as={ReactBootStrap.Col}
          controlId="formGridState"
        >
          <ReactBootStrap.Form.Label>
            <Link to="/marital-status">Marital Status*</Link>
          </ReactBootStrap.Form.Label>
          <ReactBootStrap.Form.Control
            as="select"
            defaultValue=""
            value={information.marital_status}
            name="marital_status"
            onChange={handleChange}
            // required
          >
            <option></option>
            <option>Single</option>
            <option>Head Of Household</option>
            <option>Married Filing Jointly</option>
            <option>Married Filing Seperately</option>
          </ReactBootStrap.Form.Control>
        </ReactBootStrap.Form.Group>
      </ReactBootStrap.Form.Row>

      <ReactBootStrap.Form.Row>
        <ReactBootStrap.Form.Group
          as={ReactBootStrap.Col}
          controlId="formGridState"
        >
          <ReactBootStrap.Form.Label>State</ReactBootStrap.Form.Label>
          <ReactBootStrap.Form.Control
            as="select"
            defaultValue=""
            value={information.state}
            name="state"
            onChange={handleChange}
            // required
          >
            <option></option>
            {mappedStates}
          </ReactBootStrap.Form.Control>
        </ReactBootStrap.Form.Group>
        <ReactBootStrap.Form.Group
          as={ReactBootStrap.Col}
          controlId="formGridState"
        >
          <ReactBootStrap.Form.Label>Age</ReactBootStrap.Form.Label>
          <ReactBootStrap.Form.Control
            as="select"
            className="mr-sm-2"
            defaultValue=""
            value={information.age}
            name="age"
            onChange={handleChange}
            // required
          >
            <option></option>
            {ageArrayOption}
          </ReactBootStrap.Form.Control>
        </ReactBootStrap.Form.Group>

        <ReactBootStrap.Form.Group
          as={ReactBootStrap.Col}
          controlId="formGridState"
        >
          <ReactBootStrap.Form.Label>
            <Link to="/dependent">Dependent*</Link>
          </ReactBootStrap.Form.Label>
          <ReactBootStrap.Form.Control
            as="select"
            defaultValue=" "
            value={information.dependent}
            name="dependent"
            onChange={handleChange}
            // required
          >
            <option> </option>
            <option>true</option>
            <option>false</option>
          </ReactBootStrap.Form.Control>
        </ReactBootStrap.Form.Group>
      </ReactBootStrap.Form.Row>

      <ReactBootStrap.Button variant="primary" type="submit">
        Submit
      </ReactBootStrap.Button>
    </ReactBootStrap.Form>
  );
};

export default AddInfo;
