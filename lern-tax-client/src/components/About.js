import React from "react";
import * as ReactBootStrap from "react-bootstrap";
import { Link } from "react-router-dom";

const About = (props) => {
  console.log(props);
  return (
    <div className="lern-tax-about">
      <div>
        <h1>
          Welcome To
          <ReactBootStrap.Badge variant="secondary">
            <span> LernTax </span>
          </ReactBootStrap.Badge>
        </h1>
      </div>
      <ul className="list-unstyled form-div">
        <ReactBootStrap.Media as="li">
          <ReactBootStrap.Media.Body>
            <h5>The Problem</h5>
            <p>
              According to a study done by NerdWallet in 2015,
              <i>
                the average U.S. adult scores about 50% on personal finance
                questions related to U.S. federal income tax returns.
              </i>
              The study also goes to say that
              <i>
                most American adults get an “F” in understanding income tax
                basics, according to a NerdWallet survey of 1,015 people across
                the U.S. in early February
              </i>
              of 2015.{" "}
              <a href="https://www.csmonitor.com/Business/Saving-Money/2015/0224/Americans-get-an-F-in-understanding-taxes-study-finds">
                More On This Here
              </a>
            </p>
          </ReactBootStrap.Media.Body>
        </ReactBootStrap.Media>

        <ReactBootStrap.Media as="li">
          <ReactBootStrap.Media.Body>
            <h5>Our Mission</h5>
            <p>
              We know the IRS tax code is larger than the Bible, the Koran, and
              the Torah combined, but don't fear! We are here to explain tax
              laws as simply as possible. Though the dynamics of tax law is
              constantly changing, Lern tax is your one stop shop to explain the
              basics. If we can teach one person one new thing about taxes then
              we have completed our mission!
            </p>
          </ReactBootStrap.Media.Body>
        </ReactBootStrap.Media>

        <ReactBootStrap.Media as="li">
          <ReactBootStrap.Media.Body>
            <h5>How We Do It</h5>
            <p>
              We know that ignorance of tax law is not about intelligence,
              rather, it's a symptom of a lack of exposure. Tax time only shows
              up once every year after all! We have tax professionals designing
              this website to make your understanding as simple as possible.
              Feel free to check out our multiple pages such as{" "}
              <Link to="/dependents">dependents</Link>, or our{" "}
              <Link to="/tax-basics">tax basics</Link> which explains how a
              return is prepared, filled with definitions and examples. Or
              perhaps you want to try our{" "}
              <Link to="calc-tax">tax calculator </Link> powered by a
              state-of-the-art algorithm for the 2020 tax season.
            </p>
          </ReactBootStrap.Media.Body>
        </ReactBootStrap.Media>
      </ul>
    </div>
  );
};

export default About;
