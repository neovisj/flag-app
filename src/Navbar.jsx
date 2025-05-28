import "./Navbar.css";
import { Link } from "react-router-dom";

const Navbar = ({ darkMode, setDarkMode }) => {
  return (
    <div className="Navbar">
      <div className="navbar-content-wrapper">
        <Link to="/" className="logo">
          <h1>Flag App</h1>
        </Link>
        <img
          className="nav-logo"
          src={
            darkMode
              ? "assets/techover-logo.png"
              : "assets/techover-logo-dark.png"
          }
          alt="Techover logo"
        />
        <div className="button-mode-container">
          <button
            onClick={() => setDarkMode((prev) => !prev)}
            className="dark-toggle"
          >
            {darkMode ? "Light mode" : "Dark mode"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
