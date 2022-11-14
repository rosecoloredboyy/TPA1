import React from "react";
import Navbar from "./Navbar";
import Home from "./component/Home";
import About from "./component/About";
import Portfolio from "./component/Portfolio";
import Artikel from "./component/Artikel";
import { Route, Routes } from "react-router-dom";

const App = () => {
  return (
    <>
      <Navbar />
      <div className="container">
        <Routes>
          <Route path="home" element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="portfolio" element={<Portfolio />} />
          <Route path="artikel" element={<Artikel />} />
        </Routes>
      </div>
    </>
  );
};

export default App;
