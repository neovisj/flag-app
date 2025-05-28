import { Link } from "react-router-dom";
import './CountryCard.css';

const CountryCard = ({ name, flag, population, region, capital, code }) => {
  return (
    <Link
      to={`/country/${code}`}
      className="country-card-link"
    >
      <div
        className="country-card"
      >
        <img src={flag} alt={`Flag of ${name}`}/>
        <h2>{name}</h2>
        <p>
          <strong>Population:</strong> {population.toLocaleString()}
        </p>
        <p>
          <strong>Region:</strong> {region}
        </p>
        <p>
          <strong>Capital:</strong> {capital}
        </p>
      </div>
    </Link>
  );
};

export default CountryCard;
