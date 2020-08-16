import React, { useState } from "react";
import * as ReactBootStrap from "react-bootstrap";
import DependentCards from "./DependentCards";

const Dependents = () => {
  const [error, setError] = useState(null);
  const [dependentBool, setDependentBool] = useState(null);
  const [MFJBool, setMFJBool] = useState(null);
  const [citizen, setCitizen] = useState(null);
  const [relationship, setRelationship] = useState(null);
  const [age, setAge] = useState(null);
  const [residency, setResidency] = useState(null);
  const [support, setSupport] = useState(null);
  const [success, setSuccess] = useState(null);
  const [explaination, setExplaination] = useState(null);

  const handleChange1 = (event) => {
    if (event.target.value === "false") {
      setDependentBool(false);
      setError(
        "You Cannot Claim A Dependent If You Are Claimable As A Dependent"
      );
      setSuccess(null);
      setExplaination(null);
    } else if (event.target.value === "true") {
      setDependentBool(true);
      setError(null);
    }
  };
  const handleChange2 = (event) => {
    if (event.target.value === "false") {
      setMFJBool(false);
      setError(
        "You Cannot Claim A Dependent If They Filing As Married Filing Jointly"
      );
      setExplaination(null);
      setSuccess(null);
    } else if (event.target.value === "true") {
      setMFJBool(true);
      setError(null);
    }
  };

  const handleChange3 = (event) => {
    if (event.target.value === "true") {
      setCitizen(true);
      setError(null);
    } else if (event.target.value === "false") {
      setCitizen(false);
      setError("You Cannot Claim Someone Who is Not A US Citizen");
      setSuccess(null);
      setExplaination(null);
    }
  };
  const handleChange4 = (event) => {
    if (event.target.value === "true") {
      setRelationship(true);
      setError(null);
    } else if (event.target.value === "false") {
      setRelationship(false);
      setError("You Cannot Claim Someone Who is Not One Of The Preceeding");
      setSuccess(null);
      setExplaination(null);
    }
  };
  const handleChange5 = (event) => {
    if (event.target.value === "true") {
      setAge(true);
      setError(null);
    } else if (event.target.value === "false") {
      setAge(false);
      setError(
        "You Cannot Claim Someone Who is older than 17 and Not A Full-Time College Student Over The Age Of 24"
      );
      setSuccess(null);
      setExplaination(null);
    }
  };

  const handleChange6 = (event) => {
    if (event.target.value === "true") {
      setResidency(true);
      setError(null);
    } else if (event.target.value === "false") {
      setResidency(false);
      setError(
        "You Cannot Claim A Child Who Did Not Live With Taxpayer For More Than Half The Year "
      );
      setSuccess(null);
      setExplaination(null);
    }
  };

  const handleChange7 = (event) => {
    if (event.target.value === "true") {
      setSupport(true);
      setError(null);
    } else if (event.target.value === "false") {
      setSupport(false);
      setError(
        "You Cannot Claim A Child Who Provided More Than Half Their Support "
      );
      setSuccess(null);
      setExplaination(null);
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (
      dependentBool &&
      MFJBool &&
      citizen &&
      relationship &&
      age &&
      residency &&
      support
    ) {
      setSuccess(
        "Congratulations! You Have A Qualifying Child! Let's Get A Tax Break!"
      );
    }
  };

  const explainDep = () => {
    setExplaination(
      "Depending On The Age Of Your Dependent, You May Qualify As Head Of Household If You Are Not Married. If The Dependent Is Less Than 17 Years Old And Is Your Child, You May Take A $2,000 Child Tax Credit Regardless Of Filing Status. If The Qualifying Relative Is Under The Age of 24 And A Full Time Student, You May Take A $500 Credit. Credits Are Directly Subtracted From Your Tax Liability. In Other Words, If You Owed $5,000 In Federal Income Tax, The CTC (Child Tax Credit) Would Reduce Your Liability To $3,000."
    );
  };

  return (
    <>
      <h1>Dependents</h1>
      <p>
        Determining whether you have a qualifying dependent can be pretty tricky
        in some cases, and it is certainly worth finding out. Not only can you
        receive a higher standard deduction, you may be eligible for a credit to
        reduce your tax liability! Being single and having a qualifying
        dependent may allow you to file your taxes as head of household,
        bringing with it, a handful of favorable tax implications. However, it
        is vital to determine fully that you have a qualifying dependent before
        taking these credits as the IRS is very unforgiving when it comes to tax
        fraud!
      </p>
      <DependentCards />
      <h3>
        Let's Follow The Prompts To See If You Have A Qualifying Dependent{" "}
      </h3>
      <div className="lern-tax-about">
        <ReactBootStrap.Form onSubmit={handleSubmit}>
          <ReactBootStrap.Form.Group
            as={ReactBootStrap.Col}
            controlId="formGridState"
          >
            <ReactBootStrap.Form.Label>
              You Are Not Claimable As A Dependent
            </ReactBootStrap.Form.Label>
            <ReactBootStrap.Form.Control
              as="select"
              defaultValue=" "
              value={dependentBool}
              onChange={handleChange1}
              required
            >
              <option> </option>
              <option>true</option>
              <option>false</option>
            </ReactBootStrap.Form.Control>{" "}
            <br />
            {dependentBool ? (
              <>
                <ReactBootStrap.Form.Label>
                  The Person You Are Trying To Claim Does Not File As MFJ
                </ReactBootStrap.Form.Label>
                <ReactBootStrap.Form.Control
                  as="select"
                  defaultValue=" "
                  value={MFJBool}
                  onChange={handleChange2}
                  required
                >
                  <option> </option>
                  <option>true</option>
                  <option>false</option>
                </ReactBootStrap.Form.Control>{" "}
                <br />
              </>
            ) : null}
            {dependentBool && MFJBool ? (
              <>
                <ReactBootStrap.Form.Label>
                  The Person You Are Trying to Claim Is A US Citizen
                </ReactBootStrap.Form.Label>
                <ReactBootStrap.Form.Control
                  as="select"
                  defaultValue=" "
                  value={citizen}
                  onChange={handleChange3}
                  required
                >
                  <option> </option>
                  <option>true</option>
                  <option>false</option>
                </ReactBootStrap.Form.Control>{" "}
                <br />
              </>
            ) : null}
            {dependentBool && MFJBool && citizen ? (
              <>
                <ReactBootStrap.Form.Label>
                  Child Is Taxpayer's Son, Daughter, Stepchild, Foster Child,
                  Brother, Sister, Half-Brother, Half-Sister, Stepsister,
                  Stepbrother, or a Descendent of Any Of Them
                </ReactBootStrap.Form.Label>
                <ReactBootStrap.Form.Control
                  as="select"
                  defaultValue=" "
                  value={relationship}
                  onChange={handleChange4}
                  required
                >
                  <option> </option>
                  <option>true</option>
                  <option>false</option>
                </ReactBootStrap.Form.Control>{" "}
                <br />
              </>
            ) : null}
            {dependentBool && MFJBool && citizen && relationship ? (
              <>
                <ReactBootStrap.Form.Label>
                  Child Is Under The Age Of 17 OR Under The Age 24 And A Full
                  Time College Student OR Any Age AND Permanently and Totally
                  Disabled
                </ReactBootStrap.Form.Label>
                <ReactBootStrap.Form.Control
                  as="select"
                  defaultValue=" "
                  value={age}
                  onChange={handleChange5}
                  required
                >
                  <option> </option>
                  <option>true</option>
                  <option>false</option>
                </ReactBootStrap.Form.Control>{" "}
                <br />
              </>
            ) : null}
            {dependentBool && MFJBool && citizen && relationship && age ? (
              <>
                {" "}
                <ReactBootStrap.Form.Label>
                  The Child Lived With The Taxypayer For More Than Half The Full
                  Year
                </ReactBootStrap.Form.Label>
                <ReactBootStrap.Form.Control
                  as="select"
                  defaultValue=" "
                  value={residency}
                  onChange={handleChange6}
                  required
                >
                  <option> </option>
                  <option>true</option>
                  <option>false</option>
                </ReactBootStrap.Form.Control>{" "}
                <br />
              </>
            ) : null}
            {dependentBool &&
            MFJBool &&
            citizen &&
            relationship &&
            age &&
            residency ? (
              <>
                <ReactBootStrap.Form.Label>
                  The Child Did Not Provide More Than Half Of Their Own Support
                </ReactBootStrap.Form.Label>
                <ReactBootStrap.Form.Control
                  as="select"
                  defaultValue=" "
                  value={support}
                  onChange={handleChange7}
                  required
                >
                  <option> </option>
                  <option>true</option>
                  <option>false</option>
                </ReactBootStrap.Form.Control>{" "}
                <br />
                <ReactBootStrap.Form.Text className="text-muted">
                  <ReactBootStrap.ListGroup>
                    <ReactBootStrap.ListGroup.Item variant="success">
                      Support Is Classified As Food, Lodging, Clothing, Grooming
                      And Personal Care, Medical Expenses, Education Expenses,
                      Dependent Care, Transportation, Recreational Activites,
                      Capital Items Such As TVs, Computers ect.
                    </ReactBootStrap.ListGroup.Item>
                  </ReactBootStrap.ListGroup>
                </ReactBootStrap.Form.Text>
              </>
            ) : null}
          </ReactBootStrap.Form.Group>
          {dependentBool &&
          MFJBool &&
          citizen &&
          relationship &&
          age &&
          residency &&
          support ? (
            <>
              <ReactBootStrap.Button variant="primary" type="submit">
                Submit
              </ReactBootStrap.Button>{" "}
            </>
          ) : null}{" "}
        </ReactBootStrap.Form>{" "}
        <br />
        {success ? (
          <>
            <ReactBootStrap.ListGroup>
              <ReactBootStrap.ListGroup.Item variant="success">
                {success}{" "}
                <span onClick={() => explainDep()}>What Does This Mean?</span>
              </ReactBootStrap.ListGroup.Item>
            </ReactBootStrap.ListGroup>
          </>
        ) : null}
      </div>{" "}
      <br />
      {explaination ? (
        <>
          <ReactBootStrap.ListGroup>
            <ReactBootStrap.ListGroup.Item variant="success">
              {explaination}
            </ReactBootStrap.ListGroup.Item>
          </ReactBootStrap.ListGroup>
        </>
      ) : null}
      {error ? (
        <ReactBootStrap.ListGroup>
          <ReactBootStrap.ListGroup.Item variant="danger">
            {error}
          </ReactBootStrap.ListGroup.Item>
        </ReactBootStrap.ListGroup>
      ) : null}
    </>
  );
};

export default Dependents;
