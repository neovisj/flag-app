import { useEffect, useState } from "react";
import Navbar from "./Navbar";
import CountryCard from "./CountryCard";
import CountryDetails from "./CountryDetails";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Homepage from "./Homepage";

function App() {
    const [darkMode, setDarkMode] = useState(false);

  return (
    <div className={darkMode ? "app dark" : "app"}>
      <BrowserRouter>
        <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />
        <div className="main-content">
          <div className="container">
            <Routes>
              <Route path="/" element={<Homepage />} />
              <Route path="/country/:code" element={<CountryDetails />} />
            </Routes>
          </div>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
