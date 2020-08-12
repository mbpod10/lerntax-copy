import React from "react";
import * as ReactBootStrap from "react-bootstrap";

const About = (props) => {
  console.log(props);
  return (
    <>
      <h1>Welcome To LernTax</h1>
      <h3>Where We Make Taxes Easy to Understand</h3>

      <div className="about-car">
        <ReactBootStrap.Carousel>
          <ReactBootStrap.Carousel.Item>
            <img
              className="d-block w-100"
              src="https://specials-images.forbesimg.com/imageserve/5d2c7c4f142c500008c92dd7/960x0.jpg?fit=scale"
              alt="First slide"
            />
          </ReactBootStrap.Carousel.Item>
          <ReactBootStrap.Carousel.Item>
            <img
              className="d-block w-100"
              src="https://specials-images.forbesimg.com/imageserve/5d2c7c784c687b00085cb0bb/960x0.jpg?fit=scale"
              alt="Third slide"
            />
          </ReactBootStrap.Carousel.Item>
        </ReactBootStrap.Carousel>
      </div>
    </>
  );
};

export default About;
