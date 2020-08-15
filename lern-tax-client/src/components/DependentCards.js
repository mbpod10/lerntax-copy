import React from "react";
import * as ReactBootStrap from "react-bootstrap";

const DependentCards = () => {
  return (
    <>
      <div className="dependent-cards">
        <ReactBootStrap.Card bg="dark" text="white">
          <ReactBootStrap.Card.Header>
            Example 1 - Tanya and Brian Tax Liability: $5,200
          </ReactBootStrap.Card.Header>
          <ReactBootStrap.Card.Body>
            <blockquote className="blockquote mb-0">
              <p>
                Tanya and Brian are filing as Married Filing Jointly. They have
                two children, Brianna and Anna. They both were born on October
                11, 2012. Tanya and Brian provided over half of their daughters'
                support,they are US citizens, and they lived with their parents
                all year. Brianna and Anna are qualifying children of Tanya and
                Brian and may take the CTC of $4,000.
              </p>
              <footer className="blockquote-footer">
                $5,200 - $4,000(CTC) ={" "}
                <cite title="Source Title">$1,200 Tax Liability</cite>
              </footer>
            </blockquote>
          </ReactBootStrap.Card.Body>
        </ReactBootStrap.Card>
      </div>
      <div className="dependent-cards">
        <ReactBootStrap.Card bg="dark" text="white">
          <ReactBootStrap.Card.Header>
            Example 2 - Sally Tax Liability: $1,200
          </ReactBootStrap.Card.Header>
          <ReactBootStrap.Card.Body>
            <blockquote className="blockquote mb-0">
              <ReactBootStrap.Card.Text>
                Sally lives in Delaware and has two children, two sons named
                Juan and Barry. She is not married. Juan is 23 years old and
                attends college full time at the University of Arizona. When
                Juan isn't at school, he would live with Sally. Juan is a US
                citizen, and does not provide over half of his own support.
                Barry is 32 years old and is completely and totally disabled.
                Because Juan is under the age of 24, Sally may claim Juan as a
                dependent on her tax return and may file as Head Of Household.
                The HOH standard deduction is $18,350. Moreover, Sally may take
                a Child Tax Credit of $500 as Juan is over the age of 17 but
                under the age of 24 as a full time college student. Sally may
                also take an additional $500 as Barry is completely and totally
                disabled regardless of his age.
              </ReactBootStrap.Card.Text>
              <footer className="blockquote-footer">
                $1,200 - $1,000(CTC) ={" "}
                <cite title="Source Title">$200 Tax Liability</cite>
              </footer>
            </blockquote>
          </ReactBootStrap.Card.Body>
        </ReactBootStrap.Card>
      </div>
      <div className="dependent-cards">
        <ReactBootStrap.Card bg="dark" text="white">
          <ReactBootStrap.Card.Header>
            Example 3 - Jorge Tax Liability: $10,000
          </ReactBootStrap.Card.Header>
          <ReactBootStrap.Card.Body>
            <blockquote className="blockquote mb-0">
              <ReactBootStrap.Card.Text>
                Jorge lives alone and is not married. However, Jorge's father
                Pedro is 82 years old and lives in a nursing home. Pedro is a US
                citizen and his only source of income is $10,000 in Social
                Security. Jorge pays for all of Pedro's nursing home expenses.
                Though Pedro's income exceeds $4,200, the IRS does not count
                Social Security distributions as gross income. Though Pedro does
                not live with Jorge, Jorge is able to count Pedro as a
                dependent. Jorge may file as Head Of Household and take a $500
                credit for his father.
              </ReactBootStrap.Card.Text>
              <footer className="blockquote-footer">
                $10,000 - $500(CTC) ={" "}
                <cite title="Source Title">$9,500 Tax Liability</cite>
              </footer>
            </blockquote>
          </ReactBootStrap.Card.Body>
        </ReactBootStrap.Card>
      </div>
      {/* <div className="depend-cards">
        <ReactBootStrap.Card bg="dark" text="white">
          <ReactBootStrap.Card.Header>Example 4</ReactBootStrap.Card.Header>
          <ReactBootStrap.Card.Body>
            <blockquote className="blockquote mb-0">
              <ReactBootStrap.Card.Text>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
                posuere erat a ante.
              </ReactBootStrap.Card.Text>
              <footer className="blockquote-footer">
                Someone famous in <cite title="Source Title">Source Title</cite>
              </footer>
            </blockquote>
          </ReactBootStrap.Card.Body>
        </ReactBootStrap.Card>
      </div>{" "} */}
      <br />
    </>
  );
};

export default DependentCards;
