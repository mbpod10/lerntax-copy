import React, { useState } from "react";
import * as ReactBootStrap from "react-bootstrap";
import { Route, Link } from "react-router-dom";
import IncomeNum from "./routes/IncomeNum";
import GrossTaxableIncome from "./GrossTaxableIncome";

const TaxList = () => {
  function GrossTaxableIncome2() {
    const [open, setOpen] = useState(false);
    return (
      <>
        <div
          onClick={() => setOpen(!open)}
          aria-controls="example-collapse-text"
          aria-expanded={open}
        >
          Step 1: Determine Gross Taxable Income
        </div>
        <ReactBootStrap.Collapse in={open}>
          <div id="example-collapse-text">
            Section 61(a) of the Internal Revenue Code defines gross income as
            income from whatever source derived, including (but not limited to)
            “compensation for services, including fees, commissions, fringe
            benefits, and similar items.” <br /> Basically anything you receive
            as compensation. However, there an extensive list determined by the
            IRS as to what is classified as income. <br />
            <Link to="/gross-taxable-income">More Here</Link>
          </div>
        </ReactBootStrap.Collapse>
      </>
    );
  }
  function AGI() {
    const [open, setOpen] = useState(false);
    return (
      <>
        <div
          onClick={() => setOpen(!open)}
          aria-controls="example-collapse-text"
          aria-expanded={open}
        >
          Step 2: Calculate Adjusted Gross Income
        </div>
        <ReactBootStrap.Collapse in={open}>
          <div id="example-collapse-text">
            Adjusted Gross Income (AGI) is defined as gross income minus
            adjustments to income. Adjustments to Income include such items as
            Educator expenses, Student loan interest, Alimony payments or
            contributions to a retirement account. Your AGI will never be more
            than your Gross Total Income on you return and in some cases may be
            lower. <br /> Like the determination of income, the IRS aslso
            provides an extensive list of what adjustements can be made to your
            income. <br />
            <Link to="/adjustable-gross-income">More Here</Link>
          </div>
        </ReactBootStrap.Collapse>
      </>
    );
  }
  function Deductions() {
    const [open, setOpen] = useState(false);
    return (
      <>
        <div
          onClick={() => setOpen(!open)}
          aria-controls="example-collapse-text"
          aria-expanded={open}
        >
          Step 3: Itemized Deductions
        </div>
        <ReactBootStrap.Collapse in={open}>
          <div id="example-collapse-text">
            Itemized deductions include amounts you paid for state and local
            income or sales taxes, real estate taxes, personal property taxes,
            mortgage interest, and disaster losses from a Federally declared
            disaster. <br /> This deduction is more straitforward, however,
            since the new tax law, a lot less taxpayers have been opting for the
            itemized deductions. This deduction reduces your taxable income!{" "}
            <br />
            <Link to="/itemized-deductions">More Here</Link>
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
          Step 4: Standard Deduction
        </div>
        <ReactBootStrap.Collapse in={open}>
          <div id="example-collapse-text">
            The standard deduction has increased since the new tax law. This
            deduction reduces your taxable income! <br />
            <Link to="/standard-deduction">More Here</Link>
            {/* <a href="#SD">More Here</a> */}
          </div>
        </ReactBootStrap.Collapse>
      </>
    );
  }
  function CalculateTax() {
    const [open, setOpen] = useState(false);
    return (
      <>
        <div
          onClick={() => setOpen(!open)}
          aria-controls="example-collapse-text"
          aria-expanded={open}
        >
          Step 5: Calculate Tax Liability
        </div>
        <ReactBootStrap.Collapse in={open}>
          <div id="example-collapse-text">
            After you have calculated the four previous steps, it is now time to
            calculate your tax liability for the year. This can be a little
            confusing at first but tax rates differ between filing statuses. For
            self-preparers, the IRS has provided a tax table for those whose
            taxable income is less than $100,000 and a simple calculation for
            those with more than $100,000.
            <br />
            <Link to="/tax-liability">More Here</Link>
          </div>
        </ReactBootStrap.Collapse>
      </>
    );
  }
  function SubtractCredits() {
    const [open, setOpen] = useState(false);
    return (
      <>
        <div
          onClick={() => setOpen(!open)}
          aria-controls="example-collapse-text"
          aria-expanded={open}
        >
          Step 6: Subtract Credits
        </div>
        <ReactBootStrap.Collapse in={open}>
          <div id="example-collapse-text">
            A credit reduces your tax liability dollar for dollar. Note that it
            reduces your TAX LIABILITY, not your taxable income. That's a great
            thing! There are multiple credits that one could possibly qualify
            for, and some are refundable: meaning that the IRS has to pay you
            back the credit in excess of tax liability! <br />
            <Link to="/credits">More Here</Link>
          </div>
        </ReactBootStrap.Collapse>
      </>
    );
  }
  function DetermineOwe() {
    const [open, setOpen] = useState(false);
    return (
      <>
        <div
          onClick={() => setOpen(!open)}
          aria-controls="example-collapse-text"
          aria-expanded={open}
        >
          Step 7: Determine If You Owe
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
    <>
      <div className="tax-steps">
        <h1>The Basics</h1>
        <ReactBootStrap.ListGroup>
          <ReactBootStrap.ListGroup.Item variant="secondary">
            <GrossTaxableIncome2 />
          </ReactBootStrap.ListGroup.Item>
          <ReactBootStrap.ListGroup.Item variant="info">
            <AGI />
          </ReactBootStrap.ListGroup.Item>
          <ReactBootStrap.ListGroup.Item variant="secondary">
            <Deductions />
          </ReactBootStrap.ListGroup.Item>
          <ReactBootStrap.ListGroup.Item variant="info">
            <StandardDeduction />
          </ReactBootStrap.ListGroup.Item>
          <ReactBootStrap.ListGroup.Item variant="secondary">
            <CalculateTax />
          </ReactBootStrap.ListGroup.Item>
          <ReactBootStrap.ListGroup.Item variant="info">
            <SubtractCredits />
          </ReactBootStrap.ListGroup.Item>
          <ReactBootStrap.ListGroup.Item variant="secondary">
            <DetermineOwe />
          </ReactBootStrap.ListGroup.Item>
        </ReactBootStrap.ListGroup>
      </div>
      {/* <IncomeNum /> */}
    </>
  );
};

export default TaxList;
