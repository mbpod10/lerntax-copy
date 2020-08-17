import React from "react";
import * as ReactBootStrap from "react-bootstrap";

const ItemizedDeductions = () => {
  return (
    <>
      <h1>Itemized Deductions</h1>
      <a href="https://www.irs.gov/pub/irs-pdf/f1040sa.pdf">Schedule A</a>

      <p>
        Some taxpayers, usually homeowners, opt to take Itemized Deductions
        instead of the Standard Deduction. Since the Tax And Jobs Act of 2017,
        fewer people itemized because of the increased standard deduction as
        well as the cap on state and local tax deductions. Itemized deductions
        are calculated on Schedule A and have various sections. Let's take a
        look.
        <b>
          <i>
            Note: when doing your taxes, you can only take the standard
            deduction or the itemized deduction, not both.
          </i>
        </b>
      </p>
      <div className="dependent-cards">
        <ReactBootStrap.Card bg="dark" text="white">
          <ReactBootStrap.Card.Header>
            Section 1: Medical and Dental Expenses
          </ReactBootStrap.Card.Header>
          <ReactBootStrap.Card.Body>
            <blockquote className="blockquote mb-0">
              <p className="small-p2">
                This is the section that takes into account unreimbursable
                medical expenses. So if you paid for your medical expenses with
                an HSA or any equivalent, do not include those expenses in the
                calculation.
              </p>
            </blockquote>
            <ReactBootStrap.Card.Header>
              Line 1: Total Unreimbursable Medical Expenses: Schedule A, Line 1
            </ReactBootStrap.Card.Header>
            <blockquote className="blockquote mb-0">
              <p className="small-p2">
                You want to add all unreimbursable expenses and insert it on
                Schedule A, line 1. Such expenses include dental insurance,
                health insurance (not through employer), prescriptions ect{" "}
                <i>that were not reimbursed.</i>
              </p>
            </blockquote>
            <ReactBootStrap.Card.Header>
              Line 2: Enter amount from Form 1040 line 8b: Schedule A, Line 2
            </ReactBootStrap.Card.Header>
            <blockquote className="blockquote mb-0">
              <p className="small-p2">
                You want your <i>Adjusted Gross Income</i> on this line. Make
                sure it is your AGI and not your taxable income.
              </p>
            </blockquote>
            <ReactBootStrap.Card.Header>
              Line 3: Multiply Line 2 by 7.5% Schedule A, Line 3
            </ReactBootStrap.Card.Header>
            <blockquote className="blockquote mb-0">
              <p>Simply multiply your AGI by 7.5%</p>
            </blockquote>
            <ReactBootStrap.Card.Header>
              Line 4: Subtract Line 3 From Line 1
            </ReactBootStrap.Card.Header>
            <blockquote className="blockquote mb-0">
              <p className="small-p2">
                Tax law states that anything above 7.5% of you gross income
                could qualify as a itemized deduction. In other words, if you
                had $100,000 in AGI, you would need over $7,500 in
                unreimbursable medical expenses. Even then, the deductible
                portion would only be in excess of $7,500. Therefore, in the
                above example, one who had $7,501 in unreimbursable medical
                expenses would only be allow to deduct $1.
              </p>
            </blockquote>
          </ReactBootStrap.Card.Body>
        </ReactBootStrap.Card>
      </div>
      <div className="dependent-cards">
        <ReactBootStrap.Card bg="dark" text="white">
          <ReactBootStrap.Card.Header>
            Section 2: Taxes You Paid
          </ReactBootStrap.Card.Header>
          <ReactBootStrap.Card.Body>
            <blockquote className="blockquote mb-0">
              <p className="small-p2">
                This is the section that takes into account unreimbursable
                medical expenses. So if you paid for your medical expenses with
                an HSA or any equivalent, do not include those expenses in the
                calculation.
              </p>
            </blockquote>
            <ReactBootStrap.Card.Header>
              Line 1: Total Unreimbursable Medical Expenses: Schedule A, Line 1
            </ReactBootStrap.Card.Header>
            <blockquote className="blockquote mb-0">
              <p className="small-p2">
                You want to add all unreimbursable expenses and insert it on
                Schedule A, line 1. Such expenses include dental insurance,
                health insurance (not through employer), prescriptions ect{" "}
                <i>that were not reimbursed.</i>
              </p>
            </blockquote>
            <ReactBootStrap.Card.Header>
              Line 2: Enter amount from Form 1040 line 8b: Schedule A, Line 2
            </ReactBootStrap.Card.Header>
            <blockquote className="blockquote mb-0">
              <p className="small-p2">
                You want your <i>Adjusted Gross Income</i> on this line. Make
                sure it is your AGI and not your taxable income.
              </p>
            </blockquote>
            <ReactBootStrap.Card.Header>
              Line 3: Multiply Line 2 by 7.5% Schedule A, Line 3
            </ReactBootStrap.Card.Header>
            <blockquote className="blockquote mb-0">
              <p>Simply multiply your AGI by 7.5%</p>
            </blockquote>
            <ReactBootStrap.Card.Header>
              Line 4: Subtract Line 3 From Line 1
            </ReactBootStrap.Card.Header>
            <blockquote className="blockquote mb-0">
              <p className="small-p2">
                Tax law states that anything above 7.5% of you gross income
                could qualify as a itemized deduction. In other words, if you
                had $100,000 in AGI, you would need over $7,500 in
                unreimbursable medical expenses. Even then, the deductible
                portion would only be in excess of $7,500. Therefore, in the
                above example, one who had $7,501 in unreimbursable medical
                expenses would only be allow to deduct $1.
              </p>
            </blockquote>
          </ReactBootStrap.Card.Body>
        </ReactBootStrap.Card>
      </div>
    </>
  );
};

export default ItemizedDeductions;
