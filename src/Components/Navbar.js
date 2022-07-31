import React, { useState } from "react";
import { Button } from "./Button";
import { Link } from "react-router-dom";
import "./Navbar.css";
import { CgDesignmodo } from "react-icons/cg";
import { FaBars, FaTimes } from "react-icons/fa";
import { IconContext } from "react-icons/lib";

function Navbar() {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  window.addEventListener("resize", showButton);

  return (
    <>
      <IconContext.Provider value={{ color: "#fff" }}>
        <nav className="navbar">
          <div className="navbar-container container">
            <Link to="/" className="navbar-logo" onClick={closeMobileMenu}>
              <CgDesignmodo className="navbar-icon" />
              Fares Mansouri
            </Link>
            <div className="menu-icon" onClick={handleClick}>
              {click ? <FaTimes /> : <FaBars />}
            </div>
            <ul className={click ? "nav-menu active" : "nav-menu"}>
              <li className="nav-item">
                <Link to="/" className="nav-links" onClick={closeMobileMenu}>
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  to="/Service"
                  className="nav-links"
                  onClick={closeMobileMenu}
                >
                  Service
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  to="/Portfolio"
                  className="nav-links"
                  onClick={closeMobileMenu}
                >
                  Portfolio
                </Link>
              </li>
              <li className="nav-btn">
                {button ? (
                  <Link to="/Contact" className="btn-link">
                    <Button buttonStyle="btn--outline">Contact</Button>
                  </Link>
                ) : (
                  <Link to="/Contact" className="btn-link">
                    <Button
                      buttonStyle="btn--outline"
                      buttonSize="btn--mobile"
                      onClick={closeMobileMenu}
                    >
                      Contact
                    </Button>
                  </Link>
                )}
              </li>
            </ul>
          </div>
        </nav>
      </IconContext.Provider>
    </>
  );
}

export default Navbar;
