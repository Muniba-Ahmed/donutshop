import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home.js";
import MenuTabs from "./pages/MenuTabs.js";
import Contact from "./pages/Contact.js";
import Location from "./pages/Location.js";
import Navbar from "./components/Navbar.js";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/menu" element={<MenuTabs />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/location" element={<Location />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
