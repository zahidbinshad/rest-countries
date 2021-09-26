import logo from "./logo.svg";
import "./App.css";
import { useEffect, useState } from "react";
import Countries from "./components/Countries/Countries";

function App() {
  return (
    <div className="App">
      {/* <LoadCountries></LoadCountries> */}
      <Countries></Countries>
    </div>
  );
}

/* //load countries

function LoadCountries() {
  //state declaration
  const [countries, setCoutries] = useState([]);
  useEffect(() => {
    fetch("https://restcountries.com/v2/all")
      .then((res) => res.json())
      .then((data) => setCoutries(data));
  }, []);
  //react dom render
  return (
    <div>
      <h1>Let's visit the countries</h1>
      <h3 style={{ backgroundColor: "#eee" }}>
        Countries we got {countries.length}
      </h3>
      {countries.map((country) => (
        <Country name={country.name} capital={country.capital}></Country>
      ))}
    </div>
  );
}

function Country(props) {
  return (
    <div>
      <h2>Country Name:{props.name}</h2>
      <h2>Capital:{props.capital}</h2>
      <h2>Flag:{props.flag}</h2>
    </div>
  );
} */

export default App;
