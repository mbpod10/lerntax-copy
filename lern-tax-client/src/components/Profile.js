import React, { useState, useEffect } from "react";
import Registration from "../components/auth/Registration";
import axios from "axios";
import { Link } from "react-router-dom";
import * as ReactBootStrap from "react-bootstrap";

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
          `http://localhost:3000/users/${props.match.params.id}}`
        );
        //console.log("response", response);
        console.log("response", response);
        setInfo(response.data.information);
        setName(response.data.information.name);
        console.log(response.data.information.name);
      } catch (err) {
        console.error(err);
      }
    };
    makeAPICall();
  }, []);
  console.log("information", information);

  const informationArray = information.map((element, index) => {
    return (
      <>
        <ReactBootStrap.Table striped bordered hover variant="dark">
          <thead>
            <tr>
              <th>Name</th>
              <th>Marital Staus</th>
              <th>Dependent</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>{element.name}</td>
              <td>{element.marital_status}</td>
              <td>{JSON.stringify(element.dependent)}</td>
            </tr>
          </tbody>
        </ReactBootStrap.Table>
        <ReactBootStrap.Table striped bordered hover variant="dark">
          <thead>
            <tr>
              <th>Age</th>
              <th>State</th>
              <th>Dependent</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>{element.age}</td>
              <td>{element.state}</td>
              <td>{JSON.stringify(element.dependent)}</td>
            </tr>
          </tbody>
        </ReactBootStrap.Table>
      </>
    );
  });

  return (
    <>
      {props.email ? <h5>{props.email} Logged In</h5> : null}
      <h1>Profile</h1>
      <h1>Page</h1>
      <h4>Status: {props.loggedInStatus}</h4>
      <Link to="/">Home</Link> <br />
      {user ? informationArray : null}
    </>
  );
};

export default Profile;
