import React, { useState } from "react";
import * as ReactBootStrap from "react-bootstrap";
import { Link } from "react-router-dom";

const TaxList = () => {
  function EITC() {
    const [open, setOpen] = useState(false);
    return (
      <>
        <div
          onClick={() => setOpen(!open)}
          aria-controls="example-collapse-text"
          aria-expanded={open}
        >
          EITC
        </div>
        <ReactBootStrap.Collapse in={open}>
          <div id="example-collapse-text">
            Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus
            terry richardson ad squid. Nihil anim keffiyeh helvetica, craft beer
            labore wes anderson cred nesciunt sapiente ea proident. <br />
            <Link to="/EITC">More Here</Link>
          </div>
        </ReactBootStrap.Collapse>
      </>
    );
  }
  function StandardDeduction() {
    const [open, setOpen] = useState(false);
    return (
      <>
        <div
          onClick={() => setOpen(!open)}
          aria-controls="example-collapse-text"
          aria-expanded={open}
        >
          Standard Deduction
        </div>
        <ReactBootStrap.Collapse in={open}>
          <div id="example-collapse-text">
            Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus
            terry richardson ad squid. Nihil anim keffiyeh helvetica, craft beer
            labore wes anderson cred nesciunt sapiente ea proident. <br />
            <Link to="/standard-deduction">More Here</Link>
          </div>
        </ReactBootStrap.Collapse>
      </>
    );
  }
  function WhatIsIncome() {
    const [open, setOpen] = useState(false);
    return (
      <>
        <div
          onClick={() => setOpen(!open)}
          aria-controls="example-collapse-text"
          aria-expanded={open}
        >
          What Is Income?
        </div>
        <ReactBootStrap.Collapse in={open}>
          <div id="example-collapse-text">
            Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus
            terry richardson ad squid. Nihil anim keffiyeh helvetica, craft beer
            labore wes anderson cred nesciunt sapiente ea proident. <br />
            <Link to="/income">More Here</Link>
          </div>
        </ReactBootStrap.Collapse>
      </>
    );
  }
  function Example2() {
    const [open, setOpen] = useState(false);
    return (
      <>
        <div
          onClick={() => setOpen(!open)}
          aria-controls="example-collapse-text"
          aria-expanded={open}
        >
          Standard Deduction
        </div>
        <ReactBootStrap.Collapse in={open}>
          <div id="example-collapse-text">
            Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus
            terry richardson ad squid. Nihil anim keffiyeh helvetica, craft beer
            labore wes anderson cred nesciunt sapiente ea proident. <br />
            <Link to="/standard-deduction">More Here</Link>
          </div>
        </ReactBootStrap.Collapse>
      </>
    );
  }
  function Example2() {
    const [open, setOpen] = useState(false);
    return (
      <>
        <div
          onClick={() => setOpen(!open)}
          aria-controls="example-collapse-text"
          aria-expanded={open}
        >
          Standard Deduction
        </div>
        <ReactBootStrap.Collapse in={open}>
          <div id="example-collapse-text">
            Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus
            terry richardson ad squid. Nihil anim keffiyeh helvetica, craft beer
            labore wes anderson cred nesciunt sapiente ea proident. <br />
            <Link to="/standard-deduction">More Here</Link>
          </div>
        </ReactBootStrap.Collapse>
      </>
    );
  }
  function Example2() {
    const [open, setOpen] = useState(false);
    return (
      <>
        <div
          onClick={() => setOpen(!open)}
          aria-controls="example-collapse-text"
          aria-expanded={open}
        >
          Standard Deduction
        </div>
        <ReactBootStrap.Collapse in={open}>
          <div id="example-collapse-text">
            Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus
            terry richardson ad squid. Nihil anim keffiyeh helvetica, craft beer
            labore wes anderson cred nesciunt sapiente ea proident. <br />
            <Link to="/standard-deduction">More Here</Link>
          </div>
        </ReactBootStrap.Collapse>
      </>
    );
  }
  return (
    <div className="tax-list">
      <h1>Tax List</h1>
      <ReactBootStrap.ListGroup>
        <ReactBootStrap.ListGroup.Item variant="secondary">
          <StandardDeduction />
        </ReactBootStrap.ListGroup.Item>
        <ReactBootStrap.ListGroup.Item variant="info">
          <WhatIsIncome />
        </ReactBootStrap.ListGroup.Item>
        <ReactBootStrap.ListGroup.Item variant="secondary">
          Taxable Income
        </ReactBootStrap.ListGroup.Item>
        <ReactBootStrap.ListGroup.Item variant="info">
          Danger
        </ReactBootStrap.ListGroup.Item>
        <ReactBootStrap.ListGroup.Item variant="secondary">
          Warning
        </ReactBootStrap.ListGroup.Item>
        <ReactBootStrap.ListGroup.Item variant="info">
          Info
        </ReactBootStrap.ListGroup.Item>
        <ReactBootStrap.ListGroup.Item variant="secondary">
          Light
        </ReactBootStrap.ListGroup.Item>
        <ReactBootStrap.ListGroup.Item variant="info">
          <EITC />
        </ReactBootStrap.ListGroup.Item>
      </ReactBootStrap.ListGroup>
    </div>
  );
};

export default TaxList;
