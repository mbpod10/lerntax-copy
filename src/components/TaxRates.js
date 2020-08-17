import React from "react";
import { Link } from "react-router-dom";
import * as ReactBootStrap from "react-bootstrap";

const TaxRates = () => {
  return (
    <>
      <h1>Tax Rates</h1> <br />
      <ReactBootStrap.Media as="li">
        <ReactBootStrap.Media.Body>
          <p>
            There is a common misconception that all you need to do to calculate
            your tax liability is to take your income and simply multiply it by
            a certain tax rate depending on your income level. However, it is
            vital to understand that these rates are used against your{" "}
            <b>taxable income</b>, not your gross income. Deductions such as
            standard deductions need to be taken into account. The following
            tables will show the IRS marginal tax rates and standard deductions
            for 2019.
          </p>
        </ReactBootStrap.Media.Body>
      </ReactBootStrap.Media>{" "}
      <h4>Marginal Tax Rates</h4> <br />
      <p id="SD">2019 / 2020 Tax Season Brackets </p>
      <ReactBootStrap.Table striped bordered hover variant="dark">
        <thead>
          <tr>
            <th>Rates</th>
            <th>Single</th>
            <th>Married Filing Jointly</th>
            <th>Head of Household</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>10%</td>
            <td>0</td>
            <td>0</td>
            <td>0</td>
          </tr>
          <tr>
            <td>12%</td>
            <td>$9,700</td>
            <td>$19,400</td>
            <td>$13,850</td>
          </tr>
          <tr>
            <td>22%</td>
            <td>$39,475</td>
            <td>$78,950</td>
            <td>$52,850</td>
          </tr>
          <tr>
            <td>24%</td>
            <td>$84,200</td>
            <td>$168,400</td>
            <td>$84,200</td>
          </tr>
          <tr>
            <td>32%</td>
            <td>$160,725</td>
            <td>$321,450</td>
            <td>$160,700</td>
          </tr>
          <tr>
            <td>35%</td>
            <td>$204,100</td>
            <td>$408,200</td>
            <td>$204,100</td>
          </tr>
          <tr>
            <td>37%</td>
            <td>$510,300</td>
            <td>$612,350</td>
            <td>$510,300</td>
          </tr>
          <tr>
            <td colSpan="4">
              <b>Standard Deduction</b>
            </td>
          </tr>
          <tr>
            <td></td>
            <td>$12,200</td>
            <td>$24,400</td>
            <td>$18,350</td>
          </tr>
        </tbody>
      </ReactBootStrap.Table>
      <ReactBootStrap.Media as="li">
        <ReactBootStrap.Media.Body>
          <h4>Tax Calculations</h4>
          <p>
            When making a tax calculation, it is imperative that you use the
            taxable income on a marginal basis. That means for every incremental
            dollar above a marginal tax rate, that marginal tax rate should be
            applied to that dollar. Let's go to an example to further understand
            this.
          </p>
          <h4>Example 1</h4>
          <p>
            Philip files his taxes as single because he is not married and does
            not have a qualifying dependent. Philip calculated his adjusted
            gross income of $56,000. The single standard deduction is $12,200
            which leaves Philip with taxable income of $43,800.
          </p>
        </ReactBootStrap.Media.Body>
      </ReactBootStrap.Media>{" "}
      <ReactBootStrap.Table striped bordered hover variant="dark">
        <tbody>
          <tr>
            <td>Remember, Philip is filing as single</td>
          </tr>
          <tr>
            {" "}
            <td>First $9,700 @ 10% tax rate = $970</td>
          </tr>
          <tr>
            {" "}
            <td>Next $29,775 @ 12% tax rate = $3,573</td>
          </tr>
          <tr>
            {" "}
            <td>Next $4,325 @ 22% tax rate = $952</td>
          </tr>
          <tr>
            {" "}
            <td>Total = $970 + $3,573 + $952 = $5,495</td>
          </tr>
        </tbody>
      </ReactBootStrap.Table>
      <ReactBootStrap.Media as="li">
        <ReactBootStrap.Media.Body>
          <h4>Example 2</h4>
          <p>
            Kelly and Brad are married and going to file as married filing
            jointly. Kelly and Brad calculated their adjusted gross income of
            $200,000. The MFJ standard deduction is $24,400 which leaves Kelly
            and Brad with taxable income of $175,600.
          </p>
        </ReactBootStrap.Media.Body>
      </ReactBootStrap.Media>{" "}
      <ReactBootStrap.Table striped bordered hover variant="dark">
        <tbody>
          <tr>
            <td>Remember, Kelly and Brad are MFJ</td>
          </tr>
          <tr>
            {" "}
            <td>First $19,400 @ 10% tax rate = $1,940</td>
          </tr>
          <tr>
            {" "}
            <td>Next $59,550 @ 12% tax rate = $7,146</td>
          </tr>
          <tr>
            {" "}
            <td>Next $89,450 @ 22% tax rate = $19,679</td>
          </tr>
          <tr>
            {" "}
            <td>Next $7,200 @ 24% tax rate = $1,728</td>
          </tr>
          <tr>
            {" "}
            <td>Total = $1,940 + $7,146 + $19,679 + $1,728 = $30,493</td>
          </tr>
        </tbody>
      </ReactBootStrap.Table>
      <ReactBootStrap.Media as="li">
        {" "}
        <br />
        <ReactBootStrap.Media.Body>
          <h4>Marginal Tax Rates</h4>
          <p>
            Once you have your tax liability it's easy to find your effective
            tax rate. It is a simple calcuation of{" "}
            <b>
              <i>(Tax Liability / Taxable Income)</i>
            </b>
            . Here are the effective rates for the previous examples.
          </p>
        </ReactBootStrap.Media.Body>
      </ReactBootStrap.Media>{" "}
      <ReactBootStrap.Table striped bordered hover variant="dark">
        <tbody>
          <tr>
            <td>Philip</td>
          </tr>
          <tr>
            {" "}
            <td>$5,495 TL / $43,800 TI = 12.55% effective</td>
          </tr>
          <tr>
            <td>Kelly and Brad</td>
          </tr>
          <tr>
            {" "}
            <td>$30,493 TL / $175,600 TI = 17.37% effective</td>
          </tr>
        </tbody>
      </ReactBootStrap.Table>
      <h4>
        Check Out Different Effective Rates and Filing Statuses Based On Income{" "}
        <Link to="calc-tax">Here</Link>
      </h4>
    </>
  );
};
export default TaxRates;
