import React from "react";
import "./Countries.css";
import { useState, useEffect } from "react";
import Country from "../Country/Country";

const Countries = () => {
  const [countries, setCountries] = useState([]);
  // console.log(countries);
  useEffect(() => {
    fetch("https://restcountries.eu/rest/v2/all")
      .then((res) => res.json())
      .then((data) => setCountries(data));
  }, []);
  return (
    <div>
      <h2>Total Country {countries.length}</h2>
      <div className="displayCountry">
        {countries.map((country) => (
          <Country
            // flag={country.flag}
            // name={country.name}
            // capital={country.capital}
            key={country.name}
            country={country}
          ></Country>
        ))}
      </div>
    </div>
  );
};

export default Countries;
