import { useEffect, useState } from "react";
import CountryCard from "./CountryCard";
import "./App.css";


const Homepage = () => {
  const [searchText, setSearchText] = useState("");
  const [selectedRegion, setSelectedRegion] = useState("");
  const [countries, setCountries] = useState([]);
  const [loading, setLoading] = useState(true);


  useEffect(() => {
    fetch("https://restcountries.com/v3.1/all")
      .then((res) => res.json())
      .then((data) => {
        setCountries(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Något gick fel:", error);
        setLoading(false);
      });
  }, []);

  return (
    <>
      <div className="filters">
        <input
          type="text"
          placeholder="Search for a country..."
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
          className="search-bar"
        />

        <select
          value={selectedRegion}
          onChange={(e) => setSelectedRegion(e.target.value)}
          className="region-filter"
        >
          <option value="">Regions</option>
          <option value="Africa">Africa</option>
          <option value="Americas">Americas</option>
          <option value="Asia">Asia</option>
          <option value="Europe">Europe</option>
          <option value="Oceania">Oceania</option>
        </select>
      </div>

      <div className="country-list">
        {countries
          .filter((country) =>
            country.name.common.toLowerCase().includes(searchText.toLowerCase())
          )
          .filter((country) =>
            selectedRegion ? country.region === selectedRegion : true
          )
          .map((country) => (
            <CountryCard
              key={country.name.common}
              name={country.name.common}
              flag={country.flags.svg}
              population={country.population}
              region={country.region}
              capital={country.capital?.[0] || "N/A"}
              code={country.cca2}
            />
          ))}
      </div>
    </>
  );
};

export default Homepage;
