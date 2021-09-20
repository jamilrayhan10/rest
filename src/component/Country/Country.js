import React from "react";
import "./Country.css";

const Country = (props) => {
  const { flag, name, capital } = props.country;
  return (
    <div className="countries">
      <div className="innerCountry">
        <img src={flag} alt="country" />
        <h3>Country Name: {name}</h3>
        <p>capital : {capital}</p>
      </div>
    </div>
  );
};

export default Country;
