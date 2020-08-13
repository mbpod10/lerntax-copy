import React from "react";
import * as ReactBootStrap from "react-bootstrap";

const TaxInfoForm = ({ information, handleChange, handleSubmit }) => {
  //console.log(props.user.information);

  return (
    <>
      <ReactBootStrap.Form onSubmit={handleSubmit}>
        <ReactBootStrap.Form.Group controlId="formBasicEmail">
          <ReactBootStrap.Form.Label>W-2 Wages</ReactBootStrap.Form.Label>
          <ReactBootStrap.Form.Control
            type="text"
            placeholder="W-2 Wages"
            value={information.w2_wages}
            name="w2_wages"
            onChange={handleChange}
            required
          />
        </ReactBootStrap.Form.Group>

        <ReactBootStrap.Form.Group controlId="formBasicPassword">
          <ReactBootStrap.Form.Label>Capital Gains</ReactBootStrap.Form.Label>
          <ReactBootStrap.Form.Control
            type="text"
            placeholder="Capital Gains"
            value={information.capital_gains}
            name="capital_gains"
            onChange={handleChange}
            required
          />
        </ReactBootStrap.Form.Group>
        <ReactBootStrap.Form.Group controlId="formBasicPassword">
          <ReactBootStrap.Form.Label>
            Unemployment Insurance
          </ReactBootStrap.Form.Label>
          <ReactBootStrap.Form.Control
            type="text"
            placeholder="Unemployment Insurance"
            value={information.unemployment_insurance}
            name="unemployment_insurance"
            onChange={handleChange}
            required
          />
        </ReactBootStrap.Form.Group>
        <ReactBootStrap.Form.Group controlId="formBasicPassword">
          <ReactBootStrap.Form.Label>
            Self-Employed Income
          </ReactBootStrap.Form.Label>
          <ReactBootStrap.Form.Control
            type="text"
            placeholder="Self Employment Income"
            value={information.self_employment}
            name="self_employment"
            onChange={handleChange}
            required
          />
        </ReactBootStrap.Form.Group>

        <ReactBootStrap.Button variant="primary" type="submit">
          Submit Info
        </ReactBootStrap.Button>
      </ReactBootStrap.Form>
    </>
  );
};

export default TaxInfoForm;
