import React from "react";
import * as ReactBootStrap from "react-bootstrap";

const Footer = () => {
  return (
    <>
      <ReactBootStrap.Jumbotron fluid className="footer">
        <ReactBootStrap.Container>
          <h6>Disclaimer</h6>
          <p className="small-p">
            This Is Not Tax Advice. For Educational Purposes Only.
          </p>
          <p className="small-p">© 2020 M. Brock Podgurski</p>
        </ReactBootStrap.Container>
      </ReactBootStrap.Jumbotron>
    </>
  );
};

export default Footer;
