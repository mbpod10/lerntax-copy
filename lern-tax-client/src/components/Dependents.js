import React, { useState } from "react";
import * as ReactBootStrap from "react-bootstrap";

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

  const handleChange1 = (event) => {
    if (event.target.value === "false") {
      setDependentBool(false);
      setError(
        "You Cannot Claim A Dependent If You Are Claimable As A Dependent"
      );
      setSuccess(null);
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
    }
  };
  const handleChange5 = (event) => {
    if (event.target.value === "true") {
      setAge(true);
      setError(null);
    } else if (event.target.value === "false") {
      setAge(false);
      setError(
        "You Cannot Claim Someone Who is older than 17 and Not A Full-Time College Student"
      );
      setSuccess(null);
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
      <h3>
        Let's Follow The Prompts To See If You Have A Qualifying Dependent{" "}
      </h3>
      <div className="form-div">
        <ReactBootStrap.Form onSubmit={handleSubmit}>
          <ReactBootStrap.Form.Group
            as={ReactBootStrap.Col}
            controlId="formGridState"
          >
            <ReactBootStrap.Form.Label>
              Are You Not Claimable As A Dependent
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
            </ReactBootStrap.Form.Control>
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
                </ReactBootStrap.Form.Control>
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
                </ReactBootStrap.Form.Control>
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
                </ReactBootStrap.Form.Control>
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
                </ReactBootStrap.Form.Control>
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
                  The Child Lived Did Not Provide More Than Half Of Their
                  Support
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
                </ReactBootStrap.Form.Control>
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
              </ReactBootStrap.Button>
            </>
          ) : null}{" "}
          <br />
        </ReactBootStrap.Form>
        {success ? (
          <>
            <ReactBootStrap.ListGroup>
              <ReactBootStrap.ListGroup.Item variant="success">
                {success}
              </ReactBootStrap.ListGroup.Item>
            </ReactBootStrap.ListGroup>
          </>
        ) : null}
      </div>
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
