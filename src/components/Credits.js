import React, { useState } from "react";
import { Link } from "react-router-dom";
import * as ReactBootStrap from "react-bootstrap";

const Credits = () => {
  return (
    <>
      <div className="">
        <div>
          <h1>Credits </h1>
        </div>
        <ul className="list-unstyled ">
          <ReactBootStrap.Media as="li">
            <ReactBootStrap.Media.Body>
              <h4>Credits vs. Deductions</h4>
              <p>
                Before we delve into the world of credits, it is imperative that
                we discern the difference between credits and deductions. Both
                reduce taxes but they are treated very differently. Deductions,
                such as the standard deduction or itemized deductions, lower the
                tax by reducing the amount of income that would otherwise be
                taxable on Form 1040, line 10. Unlike deductions, credits do not
                come into play until after taxable income has been computed and
                the tax determined. Then, credits may be used to reduce the tax
                already determined dollar for dollar.
              </p>
              <h5>Deduction Example</h5>
              <p>
                <span>
                  D= Deduction, C= Credit, TI = Taxable Income, TL = Tax
                  Liability, AGI = Adjusted Gross Income, HOH = Head Of
                  Household, CTC= Child Tax Credit
                </span>
              </p>
              <p>
                Bill has just calculated his Adjust Gross Income of $56,000.
                Bill is not married and will file his taxes with a filing status
                of single. The single filing STANDARD DEDUCTION is $12,200 in
                2020. This deduction reduces Bill's <i>taxable income </i> to
                $43,800. Thus leaving him with a tax liability of $5,500
                according to IRS tax tables. Remember that tax liability is
                calculate based on taxable income, not gross income.
              </p>
              <ReactBootStrap.Container className="example-con">
                <ReactBootStrap.Row className="example">
                  <ReactBootStrap.Col sm>AGI: $56,000</ReactBootStrap.Col>
                  <ReactBootStrap.Col sm>-</ReactBootStrap.Col>
                  <ReactBootStrap.Col sm>D: $12,000</ReactBootStrap.Col>
                  <ReactBootStrap.Col sm> = </ReactBootStrap.Col>
                  <ReactBootStrap.Col sm>TI: $43,800</ReactBootStrap.Col>
                  <ReactBootStrap.Col sm>TL: $5,500</ReactBootStrap.Col>
                </ReactBootStrap.Row>
              </ReactBootStrap.Container>
              <h5>Credit Example</h5>

              <p>
                Jasper has just calculated his Adjust Gross Income of $56,000.
                Jasper's wife died in 2012 leaving behind their daughter Erin.
                Erin is a qualifying child for the child tax credit of $2,000.
                Jasper will file his taxes as Head Of Household as Erin is a
                qualifying dependent. The HOH filing STANDARD DEDUCTION is
                $18,350 in 2020. This deduction reduces Jasper's{" "}
                <i>taxable income </i> to $37,650. Thus leaving him with a tax
                liability of $4,244 according to IRS tax tables. Because Erin is
                Jasper's qualifying dependent, the CTC will deduce Jasper's{" "}
                <i>TAX LIABILITY</i> dollar for dollar. Jasper's new tax
                liability is now $2,244.{" "}
                <Link to="dependents">Who Is A Dependent?</Link>
              </p>
              <ReactBootStrap.Container className="example-con">
                <ReactBootStrap.Row className="example">
                  <ReactBootStrap.Col sm>AGI: $56,000</ReactBootStrap.Col>
                  <ReactBootStrap.Col sm>-</ReactBootStrap.Col>
                  <ReactBootStrap.Col sm>D: $18,3500</ReactBootStrap.Col>
                  <ReactBootStrap.Col sm> = </ReactBootStrap.Col>
                  <ReactBootStrap.Col sm>TI: $37,650</ReactBootStrap.Col>
                  <ReactBootStrap.Col sm>~~</ReactBootStrap.Col>
                  <ReactBootStrap.Col sm>TL: $4,244</ReactBootStrap.Col>
                  <ReactBootStrap.Col sm>-</ReactBootStrap.Col>
                  <ReactBootStrap.Col sm>$2,000 CTC</ReactBootStrap.Col>
                  <ReactBootStrap.Col sm>~~</ReactBootStrap.Col>
                  <ReactBootStrap.Col sm>TL: $2,244</ReactBootStrap.Col>
                </ReactBootStrap.Row>
              </ReactBootStrap.Container>
            </ReactBootStrap.Media.Body>
          </ReactBootStrap.Media>
          <ReactBootStrap.Media as="li">
            <ReactBootStrap.Media.Body>
              <h4>Nonrefundable Credits vs. Refundable Credits</h4>
              <p>
                Now that we know the difference between credits and deductions,
                we now need to discern the difference between nonrefundable
                credits and refundable credits.
              </p>
              <h5>Nonrefundable Credits</h5>
              <p>
                Nonrefundable credits simply mean that combined value of credits
                cannot reduce a taxpayer's tax liabilty below $0. Examples of
                such credits include Saver's credit, Lifetime learning credit
                (LLC), Adoption credit Child, dependent care credit, Foreign tax
                credit (FTC), Elderly and disabled credit, Residential energy
                efficient property credit, and the Child tax credit.
              </p>
              <h5>Nonrefundable Credit Example</h5>
              <p>
                Sheryl is a single mother with two 12 year old daughters who are
                qualifying dependents for the Child Tax Credit. Sheryl has an
                AGI of $24,000 during the year. She will file as Head of
                Household because of her qualifying children. The HOH filing
                STANDARD DEDUCTION is $18,350 in 2020. This deduction reduces
                Sheryl's <i>taxable income </i> to $5,650. Thus leaving her with
                a tax liability of $568 according to IRS tax tables. Because
                Sheryl has two qualifying children the CTC will deduce Sheryl's{" "}
                <i>TAX LIABILITY</i> dollar for dollar. Sheryl would normally be
                able to take a credit of $4,000 for the CTC, however her tax
                liabilty is only $568. Because the CTC is nonrefundable, her tax
                liability can only go to $0. HOWEVER based on her tax situation,
                she may qualify for additional refundable credits. See below.
              </p>
              <ReactBootStrap.Container className="example-con">
                <ReactBootStrap.Row className="example">
                  <ReactBootStrap.Col sm>AGI: $24,000</ReactBootStrap.Col>
                  <ReactBootStrap.Col sm>-</ReactBootStrap.Col>
                  <ReactBootStrap.Col sm>D: $18,3500</ReactBootStrap.Col>
                  <ReactBootStrap.Col sm> = </ReactBootStrap.Col>
                  <ReactBootStrap.Col sm>TI: $5,650</ReactBootStrap.Col>
                  <ReactBootStrap.Col sm>~~</ReactBootStrap.Col>
                  <ReactBootStrap.Col sm>TL: $568</ReactBootStrap.Col>
                  <ReactBootStrap.Col sm>-</ReactBootStrap.Col>
                  <ReactBootStrap.Col sm>$4,000 CTC</ReactBootStrap.Col>
                  <ReactBootStrap.Col sm>~~</ReactBootStrap.Col>
                  <ReactBootStrap.Col sm>TL: $0</ReactBootStrap.Col>
                </ReactBootStrap.Row>
              </ReactBootStrap.Container>
              <h5>Refundable Credits</h5>
              <p>
                Refundable credits may reduce the taxpayer’s tax liability below
                zero, and the difference is refunded to the taxpayer. Examples
                of refundable credits include: American Opportunity Tax Credit,
                Earned Income Tax Credit, Addiitonal Child Tax Credit, and the
                Premium Tax Credit. These refundable credits are very lucrative
                and in some cases can be very generous. That's why paid
                preparers are forced to fill out Due Diligence papers when
                preparing taxes for taxpayers who are eligible for these
                credits. If a preparer does not do their due diligence, the IRS
                may find the preparer up to $500 per offense per credit.
                Moreover, calculating these credits can be complicated and
                require numerous forms to complete and vary based on a
                taxpayer’s situation. Sometimes, a taxpayer may end up with a
                negative federal income tax for the year.{" "}
                <i>
                  Note: Child Tax Credit and Additonal Child Tax Credit are two
                  different tax credits.
                </i>
              </p>
              <h5>Refundable Credit Example</h5>
              <p>
                Sheryl from the previous example ended with a tax liability of
                $0 after the CTC. Because she was unable to capture the full
                value of the credit, Sheryl is eligible for the Additional Child
                Tax Credit, a refundable credit. After completing{" "}
                <a href="https://www.irs.gov/pub/irs-pdf/f1040s8.pdf">
                  Schedule 8812
                </a>
                , it turns out that Sheryl will receive a refundable Addiitonal
                Child Tax Credit of $2,800. Sheryl's Schedule 8812 can be found{" "}
                <a href="https://i.imgur.com/xVp9vOh.jpg"> here </a>. This means
                that when it comes to refund time, Sheryl will not only get back
                what was withheld from her employer but also receive $2,800 on
                top of it. Say Sheryl had $1,000 withheld from her employer.
                Sheryl's tax refund is now $3,800!{" "}
                <i>
                  Sheryl may be eligible for other refundable credits such as
                  the Earned Income Credit, thus adding to her refund.
                </i>
              </p>
              <ReactBootStrap.Container className="example-con">
                <ReactBootStrap.Row className="example">
                  <ReactBootStrap.Col sm>AGI: $24,000</ReactBootStrap.Col>
                  <ReactBootStrap.Col sm>-</ReactBootStrap.Col>
                  <ReactBootStrap.Col sm>D: $18,3500</ReactBootStrap.Col>
                  <ReactBootStrap.Col sm> = </ReactBootStrap.Col>
                  <ReactBootStrap.Col sm>TI: $5,650</ReactBootStrap.Col>
                  <ReactBootStrap.Col sm>~~</ReactBootStrap.Col>
                  <ReactBootStrap.Col sm>TL: $568</ReactBootStrap.Col>
                  <ReactBootStrap.Col sm>-</ReactBootStrap.Col>
                  <ReactBootStrap.Col sm>$4,000 CTC</ReactBootStrap.Col>
                  <ReactBootStrap.Col sm>~~</ReactBootStrap.Col>
                  <ReactBootStrap.Col sm>TL: $0</ReactBootStrap.Col>
                  <ReactBootStrap.Col sm>ACTC: $2,800</ReactBootStrap.Col>
                </ReactBootStrap.Row>
              </ReactBootStrap.Container>
              <ReactBootStrap.Container>
                <ReactBootStrap.Row>
                  <ReactBootStrap.Col sm>
                    ACTC $2,800 + Withholding $1,000 = Refund $3,800
                  </ReactBootStrap.Col>
                </ReactBootStrap.Row>
              </ReactBootStrap.Container>
              <ReactBootStrap.Container>
                <ReactBootStrap.Row>
                  <ReactBootStrap.Col sm>
                    Effective Tax Rate = TL: -$2,800 / TI: $5,650 = -49.56%
                  </ReactBootStrap.Col>
                </ReactBootStrap.Row>
              </ReactBootStrap.Container>
            </ReactBootStrap.Media.Body>
          </ReactBootStrap.Media>{" "}
          <br />
        </ul>
      </div>
    </>
  );
};

export default Credits;
