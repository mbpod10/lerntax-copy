import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import AddInfo from "../components/info/AddInfo";
import axios from "axios";
import * as ReactBootStrap from "react-bootstrap";
const EditInformation = (props) => {
  console.log("user", props);
  const [info, setInfo] = useState(null);
  const [userId, setUserId] = useState(props.user.id);
  // console.log(userId);
  const [error, setError] = useState("");
  const [user, setUser] = useState({});
  const [userInfo, setUserInfo] = useState([]);
  console.log("usestate user", user);
  const [input, setInput] = useState({
    name: "",
    state: "",
    age: null,
    marital_status: "",
    dependent: null,
  });

  //console.log(input);
  console.log("Dashboard user", props.user);

  useEffect(() => {
    const createUser = () => {
      setUser(props.user);
    };
    createUser();
  }, []);

  const handleChange = (event) => {
    console.log("event", event.target.name, event.target.value);
    setInput({
      ...input,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = (event) => {
    console.log("form submitted");
    event.preventDefault();
    setUser(props.user);

    // if (props.user.information.length > 0) {
    //   setError("You Already Have Information");
    // } else {
    console.log(input.age);
    let parsedAge = parseInt(input.age, 10);
    //console.log(parsedAge);
    console.log("Dependent!!!", input.dependent);
    let dependency;
    if (input.dependent === "true") {
      dependency = true;
    } else if (input.dependent === "false") {
      dependency = false;
    }
    axios
      .put(`http://localhost:3000/information/${props.match.params.id}`, {
        name: input.name,
        state: input.state,
        age: parsedAge,
        marital_status: input.marital_status,
        dependent: dependency,
        user_id: props.user.id,
      })
      .then((resonse) => {
        console.log("res from  login", resonse);
        props.history.push(`/profile/${props.user.id}`);
      })
      .catch((error) => {
        console.log("login error", error);
      });
    //}
  };
  console.log("PROPS USER", user);

  return (
    <>
      {/* {props.email ? <h5>{props.email} Logged In</h5> : null}
      <h4>Status: {props.loggedInStatus}</h4> */}
      <h1>Edit Profile</h1>

      <br />

      {/* {props.user.information ? ( */}
      <div className="form-div2">
        <AddInfo
          handleChange={handleChange}
          handleSubmit={handleSubmit}
          information={input}
        />
      </div>
      {/* ) : (
          <>
            <h4>You Have Sucessfully Loged Info</h4>
            <Link to={`/profile/${props.user.id}`}>View Profile</Link>
          </>
        )} */}
      {error ? error : null}
    </>
  );
};

export default EditInformation;
