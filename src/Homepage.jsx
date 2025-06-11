import { useEffect, useState } from "react";
import CountryCard from "./CountryCard";
import "./App.css";
import CountryCardSkeleton from "./countryCardSkeleton";

const Homepage = () => {
  const [searchText, setSearchText] = useState("");
  const [selectedRegion, setSelectedRegion] = useState("");
  const [countries, setCountries] = useState([]);
  const [loading, setLoading] = useState(true);


useEffect(() => {
  fetch("https://restcountries.com/v3.1/all?fields=name,flags,population,region,capital,cca2")
    .then((res) => {
      if (!res.ok) throw new Error("API-fel: " + res.status);
      return res.json();
    })
    .then((data) => {
      setLoading(true)
      if (Array.isArray(data)) {
        setCountries(data);
      } else {
        throw new Error("Svar var inte en array");
      }
      setLoading(false);
    })
    .catch((error) => {
      console.error("Något gick fel:", error);
      setCountries([]);
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
        {loading ? (
    Array.from({ length: 12 }).map((_, index) => (
      <CountryCardSkeleton key={index} />
    ))
  ) : (
    countries
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
      ))
  )}
      </div>
    </>
  );
};

export default Homepage;
