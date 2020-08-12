import React from "react";
import * as ReactBootStrap from "react-bootstrap";

const TaxList = () => {
  return (
    <div className="tax-list">
      <h1>Tax List</h1>
      <ReactBootStrap.ListGroup>
        <ReactBootStrap.ListGroup.Item variant="primary">
          Standard Deduction
        </ReactBootStrap.ListGroup.Item>
        <ReactBootStrap.ListGroup.Item variant="secondary">
          What Is Income?
        </ReactBootStrap.ListGroup.Item>
        <ReactBootStrap.ListGroup.Item variant="success">
          Taxable Income
        </ReactBootStrap.ListGroup.Item>
        <ReactBootStrap.ListGroup.Item variant="danger">
          Danger
        </ReactBootStrap.ListGroup.Item>
        <ReactBootStrap.ListGroup.Item variant="warning">
          Warning
        </ReactBootStrap.ListGroup.Item>
        <ReactBootStrap.ListGroup.Item variant="info">
          Info
        </ReactBootStrap.ListGroup.Item>
        <ReactBootStrap.ListGroup.Item variant="light">
          Light
        </ReactBootStrap.ListGroup.Item>
        <ReactBootStrap.ListGroup.Item variant="dark">
          Dark
        </ReactBootStrap.ListGroup.Item>
      </ReactBootStrap.ListGroup>
    </div>
  );
};

export default TaxList;
