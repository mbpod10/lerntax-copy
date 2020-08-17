import React, { useState, useEffect } from "react";
import Registration from "../components/auth/Registration";
import axios from "axios";
import { Link } from "react-router-dom";
import * as ReactBootStrap from "react-bootstrap";
import APIConfig from "../APIConfig";

const Profile = (props) => {
  const [user, setUser] = useState({});
  const [id, setID] = useState(props.user.id);
  const [information, setInfo] = useState([]);
  const [name, setName] = useState("");
  //   console.log("user", user);
  //   console.log("id", id);
  console.log(props);

  useEffect(() => {
    setUser(props.user);
    console.log("user", user);
    const makeAPICall = async () => {
      //console.log(props.match.params);
      try {
        const response = await axios(
          `${APIConfig}/users/${props.match.params.id}}`
        );
        //console.log("response", response);
        console.log("response", response);
        setInfo(response.data.information);
        console.log("taxstuff", response.data.information);
        setName(response.data.information.name);
        console.log(response.data.information.name);
      } catch (err) {
        console.error(err);
      }
    };
    makeAPICall();
  }, []);
  console.log("information", information);

  const deleteAccount = (event) => {
    event.preventDefault();
    console.log("delete");
    props.handleLogoutClick();
    axios
      .delete(`${APIConfig}/users/${props.match.params.id}.json`)
      .then((response) => {
        console.log("res from  destroy", response);
        props.history.push(`/`);
        window.location.reload();
      })
      .catch((error) => {
        console.log("login error", error);
      });
  };

  const informationArray = information.map((element, index) => {
    return (
      <div className="info-div">
        <ReactBootStrap.ListGroup className="list-group2">
          <ReactBootStrap.ListGroup.Item variant="dark">
            Name:
          </ReactBootStrap.ListGroup.Item>

          <ReactBootStrap.ListGroup.Item variant="danger">
            Marital Status:
          </ReactBootStrap.ListGroup.Item>

          <ReactBootStrap.ListGroup.Item variant="dark">
            Age:
          </ReactBootStrap.ListGroup.Item>

          <ReactBootStrap.ListGroup.Item variant="danger">
            Dependent:
          </ReactBootStrap.ListGroup.Item>

          <ReactBootStrap.ListGroup.Item variant="dark">
            State Of Residence:
          </ReactBootStrap.ListGroup.Item>
        </ReactBootStrap.ListGroup>

        <ReactBootStrap.ListGroup className="list-group2">
          <ReactBootStrap.ListGroup.Item variant="dark">
            {element.name}
          </ReactBootStrap.ListGroup.Item>

          <ReactBootStrap.ListGroup.Item variant="danger">
            {element.marital_status}
          </ReactBootStrap.ListGroup.Item>

          <ReactBootStrap.ListGroup.Item variant="dark">
            {element.age}
          </ReactBootStrap.ListGroup.Item>

          <ReactBootStrap.ListGroup.Item variant="danger">
            {JSON.stringify(element.dependent)}
          </ReactBootStrap.ListGroup.Item>

          <ReactBootStrap.ListGroup.Item variant="dark">
            {element.state}
          </ReactBootStrap.ListGroup.Item>
        </ReactBootStrap.ListGroup>
      </div>
    );
  });

  return (
    <>
      {/* {props.email ? <h5>{props.email} Logged In</h5> : null} */}
      <h1>Profile</h1>
      {/* 
      <h4>Status: {props.loggedInStatus}</h4> */}
      {user ? informationArray : null}
      <Link to={`/information/${props.user.id}`}>Edit Profile Here</Link> <br />
      <Link to={`/tax-information`}>Add Tax Information Here</Link> <br />{" "}
      <br />
      <ReactBootStrap.Form onSubmit={deleteAccount}>
        <ReactBootStrap.Button variant="primary" type="submit">
          Delete Account
        </ReactBootStrap.Button>{" "}
      </ReactBootStrap.Form>
    </>
  );
};

export default Profile;
