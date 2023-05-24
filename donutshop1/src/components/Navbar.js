/** 

import React, { useState, useEffect } from "react";
import { slide as Menu } from "react-burger-menu";
import { Link, useLocation } from "react-router-dom";
import ReorderIcon from "@material-ui/icons/Reorder";
import "../styles/Navbar.css";

function Navbar() {
  const [expandNavbar, setExpandNavbar] = useState(false);
  const location = useLocation();


  useEffect(() => {
    setExpandNavbar(false);
  }, [location]);

  const toggleMenu = () =>{
    setExpandNavbar(!expandNavbar)
  }
  const stateChangeHandler = (newState)=>{
    setExpandNavbar(newState.isOpen)
  }

  
  return (
   <div className="navbar">
        <div className="toggleButton">
            {!expandNavbar && (
            <button onClick={toggleMenu}> <ReorderIcon/></button>
            )}
        <Menu 
        customBurgerIcon={false} 
        isOpen={expandNavbar } 
        onStateChange={stateChangeHandler} >
            <div className="links">
            <Link to="/" className="bm-item">Home</Link>
            <Link to="/donuts" className="bm-item">Donuts</Link>
            <Link to="/about" className="bm-item">About</Link>
            <Link to="/location" className="bm-item">Location</Link>
            <Link to="/contactform" className="bm-item">Contact Us</Link>
            <a onClick={toggleMenu} className="menu-item--small" href="a">Settings</a>
            </div>
        </Menu>
        </div>
      </div>
  )
}

export default Navbar

*/

import React, { useState, useEffect } from "react";
import { slide as Menu } from "react-burger-menu";
import { Link, useLocation } from "react-router-dom";
import ReorderIcon from "@material-ui/icons/Reorder";
import "../styles/Navbar.css";

function Navbar() {
  const [expandNavbar, setExpandNavbar] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setExpandNavbar(false);
  }, [location]);

  const toggleMenu = () => {
    setExpandNavbar(!expandNavbar);
  };
  const stateChangeHandler = (newState) => {
    setExpandNavbar(newState.isOpen);
  };

  return (
    <div className="navbar">
      <div className="header">
        <div className="toggleButton">
          {!expandNavbar && (
            <button onClick={toggleMenu}>
              {" "}
              <ReorderIcon />
            </button>
          )}
        </div>
        <h1>Donut Shop</h1>
      </div>
      <Menu
        customBurgerIcon={false}
        isOpen={expandNavbar}
        onStateChange={stateChangeHandler}
      >
        <div className="links">
          <Link to="/" className="bm-item">
            Home
          </Link>
          <Link to="/donuts" className="bm-item">
            Donuts
          </Link>
          <Link to="/about" className="bm-item">
            About
          </Link>
          <Link to="/location" className="bm-item">
            Location
          </Link>
          <Link to="/contactform" className="bm-item">
            Contact Us
          </Link>
          <a onClick={toggleMenu} className="bm-item" href="a">
            Settings
          </a>
        </div>
      </Menu>
    </div>
  );
}

export default Navbar;
