import React, { useState } from "react";
import CalcTaxForm from "../components/auth/CalcTaxForm";

const CalcTax = () => {
  const [input, setInput] = useState({
    income: null,
  });

  const handleChange = (event) => {
    console.log("event", event.target.name, event.target.value);
    setInput({ [event.target.name]: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    //const parseInt = parseInt(input.income, 10);
    //console.log(parseInt);
    console.log(input);
  };

  return (
    <>
      <h1>Calculate Tax</h1>
      <h1>Num</h1>
      {/* <input
        type="text"
        onChange={() => handleChange()}
        value={taxableIncome}
        information={input}
      /> */}
      <CalcTaxForm
        handleChange={handleChange}
        handleSubmit={handleSubmit}
        information={input}
      />
    </>
  );
};

export default CalcTax;
