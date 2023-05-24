import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home.js";
import About from "./pages/About.js";
import ContactForm from "./pages/ContactForm.js";
import Donuts from "./pages/Donuts.js";
import Location from "./pages/Location.js";
import Navbar from "./components/Navbar.js";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/donuts" element={<Donuts />} />
          <Route path="/about" element={<About />} />
          <Route path="/location" element={<Location />} />
          <Route path="/contactform" element={<ContactForm />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;

//front-end
//pages: home, location(gps?), donuts
//components: navbar, footer, donutitem?
//helper: donutlist?
//assets: all donut pictures 10? same size
//styles css?
//contact page with form.

//back-end
// user authorization & pass?
//testing?
