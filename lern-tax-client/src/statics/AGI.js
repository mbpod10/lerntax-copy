import React from "react";
import * as ReactBootStrap from "react-bootstrap";
import { Link } from "react-router-dom";
const AGI = () => {
  return (
    <>
      <h1>Adjustments To Income</h1>
      <ReactBootStrap.ListGroup>
        <ReactBootStrap.ListGroup.Item variant="danger">
          <b>ADJUSTMENTS TO INCOME</b> <br />
          <a href="https://www.irs.gov/pub/irs-pdf/f1040s1.pdf">Schedule 1</a>
        </ReactBootStrap.ListGroup.Item>
      </ReactBootStrap.ListGroup>
      <ReactBootStrap.CardGroup>
        <ReactBootStrap.Card>
          <ReactBootStrap.Card.Body>
            <ReactBootStrap.Card.Title>
              Educator Expenses
            </ReactBootStrap.Card.Title>
            <ReactBootStrap.Card.Text>
              A taxpayer who is an eligible educator in 2019 may deduct up to
              $250 of qualified educator expenses paid in 2019; this is done on
              Schedule 1, line 10. An eligible educator is worked at least 900
              hours during the school year and is a teacher, aid, principal, or
              administrator. Qualified expenses include books, equipment,
              computer software, classroom supplies ect. (Schedule 1, line 10).
            </ReactBootStrap.Card.Text>
          </ReactBootStrap.Card.Body>
        </ReactBootStrap.Card>
        <ReactBootStrap.Card>
          <ReactBootStrap.Card.Body>
            <ReactBootStrap.Card.Title>
              Certain Business Expenses
            </ReactBootStrap.Card.Title>
            <ReactBootStrap.Card.Text>
              After the Tax Cuts and Jobs Act, only Armed Forces Reservists,
              Performing Artists, and goverment officials paid on fee basis are
              eligible for this adjustment. (Schedule 1, line 11).
            </ReactBootStrap.Card.Text>
          </ReactBootStrap.Card.Body>
        </ReactBootStrap.Card>
        <ReactBootStrap.Card>
          <ReactBootStrap.Card.Body>
            <ReactBootStrap.Card.Title>
              Health Savings Account Deduction
            </ReactBootStrap.Card.Title>
            <ReactBootStrap.Card.Text>
              An HSA is like a retirement account for your health. Well, not
              really. But it is treated like a retirement account in that any
              contributions to the account is tax deductible. This adjustment is
              made on Schedule 1, line 12.
            </ReactBootStrap.Card.Text>
          </ReactBootStrap.Card.Body>
        </ReactBootStrap.Card>
      </ReactBootStrap.CardGroup>
      <ReactBootStrap.CardGroup>
        <ReactBootStrap.Card>
          <ReactBootStrap.Card.Body>
            <ReactBootStrap.Card.Title>
              Moving Expenses
            </ReactBootStrap.Card.Title>
            <ReactBootStrap.Card.Text>
              This adjustment is only eligible for active-duty members of the
              Armed Forces who have a permanent change of station to do a
              military order. This adjustment is made on Schedule 1, line 13.
            </ReactBootStrap.Card.Text>
          </ReactBootStrap.Card.Body>
        </ReactBootStrap.Card>
        <ReactBootStrap.Card>
          <ReactBootStrap.Card.Body>
            <ReactBootStrap.Card.Title>
              Deductible Portion Of Self-Employment Tax
            </ReactBootStrap.Card.Title>
            <ReactBootStrap.Card.Text>
              Those who are self-employed can take half of their self-employment
              tax as an income adjustment. This adjustment is made on Schedule
              1, line 14.
            </ReactBootStrap.Card.Text>
          </ReactBootStrap.Card.Body>
        </ReactBootStrap.Card>
        <ReactBootStrap.Card>
          <ReactBootStrap.Card.Body>
            <ReactBootStrap.Card.Title>
              SEP, Other Self-Employed Retirement Account Contributions
            </ReactBootStrap.Card.Title>
            <ReactBootStrap.Card.Text>
              This is only eligible for those who are self-employed. Any
              contributions to these retirement accounts are taken as an income
              adjustment. This adjustment is made on Schedule 1, line 15.
            </ReactBootStrap.Card.Text>
          </ReactBootStrap.Card.Body>
        </ReactBootStrap.Card>
      </ReactBootStrap.CardGroup>
      <ReactBootStrap.CardGroup>
        <ReactBootStrap.Card>
          <ReactBootStrap.Card.Body>
            <ReactBootStrap.Card.Title>
              Penalty On Early Withdrawal Of Savings
            </ReactBootStrap.Card.Title>
            <ReactBootStrap.Card.Text>
              Those to cash out ceratin deposit accounts too early are subject
              to a penalty of early withdrawal. This penalty is tax deductible
              on Schedule 1, line 17.
            </ReactBootStrap.Card.Text>
          </ReactBootStrap.Card.Body>
        </ReactBootStrap.Card>
        <ReactBootStrap.Card>
          <ReactBootStrap.Card.Body>
            <ReactBootStrap.Card.Title>
              IRA Contributions
            </ReactBootStrap.Card.Title>
            <ReactBootStrap.Card.Text>
              Taxpayers under the age of 50 may deduct up to $6,000 as
              distrubtions to an IRA account. This is increased to $7,000 for
              taxpayers aged 50 and older. Note, there are certain income
              phaseouts that may disallow a taxpayer to receive this deduction.
              This adjustment is made on Schedule 1, line 19.
            </ReactBootStrap.Card.Text>
          </ReactBootStrap.Card.Body>
        </ReactBootStrap.Card>
        <ReactBootStrap.Card>
          <ReactBootStrap.Card.Body>
            <ReactBootStrap.Card.Title>
              Student Loan Interest Deduction
            </ReactBootStrap.Card.Title>
            <ReactBootStrap.Card.Text>
              Taxpayers who have student loans will receive a Form 1098-E from
              their lending institution. If certain qualifications are met, a
              taxpayer may deduct up to $2,500 as an adjustment. This adjustment
              is made on Schedule 1, line 20.
            </ReactBootStrap.Card.Text>
          </ReactBootStrap.Card.Body>
        </ReactBootStrap.Card>
      </ReactBootStrap.CardGroup>
      <ReactBootStrap.ListGroup>
        {/* ================================================================================= */}
        <ReactBootStrap.ListGroup.Item variant="danger">
          <b> ADDITIONAL INCOME</b>
        </ReactBootStrap.ListGroup.Item>
      </ReactBootStrap.ListGroup>
      <ReactBootStrap.CardGroup>
        <ReactBootStrap.Card>
          <ReactBootStrap.Card.Body>
            <ReactBootStrap.Card.Title>
              Taxable State Refunds
            </ReactBootStrap.Card.Title>
            <ReactBootStrap.Card.Text>
              You can't claim a deduction for your state income taxes then later
              receive a tax-free refund of the same money as well. This income
              is report on Schedule 1, line 1.
            </ReactBootStrap.Card.Text>
          </ReactBootStrap.Card.Body>
        </ReactBootStrap.Card>
        <ReactBootStrap.Card>
          <ReactBootStrap.Card.Body>
            <ReactBootStrap.Card.Title>
              Alimony Received
            </ReactBootStrap.Card.Title>
            <ReactBootStrap.Card.Text>
              Alimony is a payment made to a person as reported in a written
              agreement or a court decree of divorce or separation. If a
              taxpayer is receiving taxable alimony, it is included in gross
              income and included as taxable income on Schedule 1 (Form 1040),
              line 11. This is not child support.
            </ReactBootStrap.Card.Text>
          </ReactBootStrap.Card.Body>
        </ReactBootStrap.Card>
        <ReactBootStrap.Card>
          <ReactBootStrap.Card.Body>
            <ReactBootStrap.Card.Title>
              Business Income or Loss
            </ReactBootStrap.Card.Title>
            <ReactBootStrap.Card.Text>
              Self-employed taxpayers must file a Schedule C with the IRS.
              Schedule C takes gross receipts from business operations and
              reduces the income by the amount of busienss expenses. Whatever is
              left over is reportable as additional income on Schedule 1, line
              3. This number may be negative in some cases.
            </ReactBootStrap.Card.Text>
          </ReactBootStrap.Card.Body>
        </ReactBootStrap.Card>
      </ReactBootStrap.CardGroup>
      <ReactBootStrap.CardGroup>
        <ReactBootStrap.Card>
          <ReactBootStrap.Card.Body>
            <ReactBootStrap.Card.Title>
              Schedule E Income
            </ReactBootStrap.Card.Title>
            <ReactBootStrap.Card.Text>
              The result of Schedule E goes on Schedule 1, line 5. Schedule E
              takes into account rental income, royalties, partnerships, S
              corporations, and trusts among others.
            </ReactBootStrap.Card.Text>
          </ReactBootStrap.Card.Body>
        </ReactBootStrap.Card>
        <ReactBootStrap.Card>
          <ReactBootStrap.Card.Body>
            <ReactBootStrap.Card.Title>Farm Income</ReactBootStrap.Card.Title>
            <ReactBootStrap.Card.Text>
              Farmers are taxed differently than the average taxpayer. As a
              result, farmers must file Schedule F. The result of the income or
              loss goes on Schedule 1, line 6.
            </ReactBootStrap.Card.Text>
          </ReactBootStrap.Card.Body>
        </ReactBootStrap.Card>
        <ReactBootStrap.Card>
          <ReactBootStrap.Card.Body>
            <ReactBootStrap.Card.Title>
              Unemployment Compensation
            </ReactBootStrap.Card.Title>
            <ReactBootStrap.Card.Text>
              Unfortunately, unemployment insurance is federally taxable. It is
              recommended that you specify to your state unemployment agency
              that you wish have 10% withheld from your compensation to avoid a
              large tax bill at the end of the year. Note, unemployment is not
              taxable by the state. This is reported on Schedule 1, line 7.
            </ReactBootStrap.Card.Text>
          </ReactBootStrap.Card.Body>
        </ReactBootStrap.Card>
      </ReactBootStrap.CardGroup>
      <ReactBootStrap.CardGroup>
        <ReactBootStrap.Card>
          <ReactBootStrap.Card.Body>
            <ReactBootStrap.Card.Title>
              Schedule 1, Line 8 Other Income
            </ReactBootStrap.Card.Title>
            <ReactBootStrap.Card.Text>
              This line encompasses a lot of other income such as prizes and
              awards, jury duty, canceled debt, taxable distrubtions from HSA,
              credit card insurance, hobby income, and medical trial income
              among others.
            </ReactBootStrap.Card.Text>
          </ReactBootStrap.Card.Body>
        </ReactBootStrap.Card>
      </ReactBootStrap.CardGroup>
    </>
  );
};

export default AGI;
