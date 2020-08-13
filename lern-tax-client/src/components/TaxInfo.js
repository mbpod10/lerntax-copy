import React, { useState, useEffect } from "react";
import TaxInfoForm from "../components/auth/TaxInfoForm";
import APIConfig from "../APIConfig";
import axios from "axios";

const TaxInfo = (props) => {
  console.log(props);
  const [input, setInput] = useState({
    w2_wages: null,
    capital_gains: null,
    unemployment_insurance: null,
    self_employment: null,
  });

  const [infoId, setId] = useState(null);

  //   useEffect(() => {
  //     const makeAPICall = async () => {
  //       try {
  //         const response = await axios(`${APIConfig}/users/${props.user.id}`);
  //         console.log("response", response);
  //       } catch (err) {
  //         console.error(err);
  //       }
  //     };
  //     makeAPICall();
  //   }, []);

  const handleChange = (event) => {
    console.log("event", event.target.name, event.target.value);
    setInput({
      ...input,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = (event) => {
    console.log("here");
    event.preventDefault();
    let parsedW2 = parseInt(input.w2_wages, 10);
    let parsedCapitalGains = parseInt(input.capital_gains, 10);
    let parsedUnemployment = parseInt(input.unemployment_insurance, 10);
    let parsedSelfEmployment = parseInt(input.self_employment, 10);
    let infoID = props.user.information[0].id;
    console.log(
      parsedW2,
      parsedUnemployment,
      parsedSelfEmployment,
      parsedCapitalGains,
      infoID
    );
    axios
      .post(`${APIConfig}/tax_informations`, {
        w2_wages: parsedW2,
        capital_gains: parsedCapitalGains,
        unemployment_insurance: parsedUnemployment,
        self_employment: parsedSelfEmployment,
        information_id: infoID,
      })
      .then((resonse) => {
        console.log("res from  login", resonse);
        //props.history.push(`/profile/${props.user.id}`);
      })
      .catch((error) => {
        console.log("login error", error);
      });
  };

  return (
    <div className="form-div">
      <h1>Add Tax Information</h1>
      {props.match.params.id === "undefined" ? (
        <h4>Please Insert Profile Information First</h4>
      ) : (
        <TaxInfoForm
          handleChange={handleChange}
          handleSubmit={handleSubmit}
          information={input}
        />
      )}
    </div>
  );
};

export default TaxInfo;
