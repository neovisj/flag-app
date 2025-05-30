import { useParams, useNavigate, Link } from "react-router-dom";
import { useEffect, useState } from "react";
import "./CountryDetails.css";

const CountryDetails = () => {
  const { code } = useParams();
  const navigate = useNavigate();
  const [country, setCountry] = useState(null);

  useEffect(() => {
    fetch(`https://restcountries.com/v3.1/alpha/${code}`)
      .then((res) => res.json())
      .then((data) => setCountry(data[0]));
  }, [code]);

  if (!country) return <p>Loading...</p>;

  return (
    <div className="country-details-container">
      <button onClick={() => navigate(-1)} className="back-button">
        {" "}
        BACK
      </button>

      <div className="details-wrapper">
        <img
          src={country.flags?.svg || ""}
          alt={country.name?.common || "Country flag"}
          className="flag"
        />

        <div className="details-info">
          <h1>{country.name?.common || "No name available"}</h1>
          <div className="details-columns">
            <div className="column">
              <p>
                <strong>Population:</strong>{" "}
                {country.population
                  ? country.population.toLocaleString()
                  : "N/A"}
              </p>
              <p>
                <strong>Region:</strong> {country.region || "N/A"}
              </p>
              <p>
                <strong>Capital:</strong> {country.capital?.[0] || "N/A"}
              </p>
            </div>
            <div className="column">
              <p>
                <strong>Capital:</strong> {country.capital?.[0] || "N/A"}
              </p>
              <p>
                <strong>Currencies:</strong>{" "}
                {country.currencies
                  ? Object.values(country.currencies)[0]?.name
                  : "N/A"}
              </p>
              <p>
                <strong>Languages:</strong>{" "}
                {country.languages
                  ? Object.values(country.languages).join(", ")
                  : "N/A"}
              </p>
            </div>
          </div>

          {country.borders && (
            <div className="borders-section">
              <h3>Border Countries:</h3>
              <div className="borders-list">
                {country.borders.map((borderCode) => (
                  <Link key={borderCode} to={`/country/${borderCode}`}>
                    <button>{borderCode}</button>
                  </Link>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default CountryDetails;
