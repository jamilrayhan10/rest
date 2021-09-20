// import logo from './logo.svg';
import "./App.css";
import Countries from "./component/Countries/Countries";
import Menu from "./component/Menubar/Menu";

function App() {
  return (
    <div className="App container">
      <h2>Hello Rest countrise</h2>
      <Menu></Menu>

      <Countries></Countries>
    </div>
  );
}

/* 
import { useState, useEffect } from "react";

        <RestCountrise />

function RestCountrise() {
  const [countris, setCountris] = useState([]);
  useEffect(() => {
    fetch("https://restcountries.eu/rest/v2/all")
      .then((res) => res.json())
      .then((data) => setCountris(data));
  }, []);
  return (
    <div className="country">
      <h2>hello</h2>
      {countris.map((counjtry) => (
        <DisplayCountry
          name={counjtry.name}
          capital={counjtry.capital}
        ></DisplayCountry>
      ))}
    </div>
  );
}
function DisplayCountry(props) {
  return (
    <div className="displaycountry">
      <h2>{props.name}</h2>
      <p>{props.capital}</p>
    </div>
  );
} */
export default App;
