import React, { Fragment, useState } from "react";
import "./Nav.css";
const Nav = () => {
  const [showMenu, setShowMenu]  = useState(false);
  const documentBody =  document.body;
  const toggleMenu= ()=>{
    setShowMenu(!showMenu);
    if(showMenu){
      documentBody.classList = `menu-active`
    }else{
      documentBody.classList = "";
    }
    console.log(showMenu);
  };
  return (
    <Fragment>
      <nav className="navbar">
        <div className="mobile-nav-btn">
          <a href="https://www.lifepoint18.com/NTC/lpi3/?event=auth.login">
            <button  className="btn btn-primary mobile-nav-btn-link">
              {" "}
              View Results
            </button>
          </a>
        </div>
        <div className="logo">
          <a href="/">
            <img
              src="/assets/img/ntc-logo.png"
              alt="LOGO"
              className="nav-logo-img"
            />
          </a>
        </div>
        <div className="push-left">
          <a href="#">
            <button
              id="menu-toggler"
              data-classname="menu-active"
              className="hamburger"
              onClick={toggleMenu}
            >
              <span className="hamburger-line hamburger-line-top"></span>
              <span className="hamburger-line hamburger-line-middle"></span>
              <span className="hamburger-line hamburger-line-bottom"></span>
            </button>
          </a>

          <ul id="primary-menu" className="menu nav-menu">
            <li className="menu-item current-menu-item">
              <a className="nav__link" href="/">
                Home
              </a>
            </li>
            <li className="menu-item dropdown">
              <a className="nav__link" href="/about">
                About
              </a>
              <ul className="sub-nav">
                <li>
                  <a className="sub-nav__link" href="/team">
                    Team
                  </a>
                </li>
              </ul>
            </li>
            <li className="menu-item dropdown">
              <a className="nav__link" href="#">
                Tests & Services
              </a>
              <ul className="sub-nav">
                <li>
                  <a className="sub-nav__link" href="/tests-directory">
                    Test Directory
                  </a>
                </li>
                <li>
                  <a className="sub-nav__link" href="/requisitions">
                    Requisitions
                  </a>
                </li>
              </ul>
            </li>
            <li className="menu-item dropdown">
              <a className="nav__link" href="/learning-center">
                Learning Center
              </a>
              <ul className="sub-nav">
                <li>
                  <a className="sub-nav__link" href="/publications">
                    Publications
                  </a>
                </li>
                <li>
                  <a className="sub-nav__link" href="/webinar-trianing">
                    Webinar Training
                  </a>
                </li>
                <li>
                  <a className="sub-nav__link" href="/posters">
                    Scientific Posters
                  </a>
                </li>
              </ul>
            </li>
            <li className="menu-item ">
              <a className="nav__link" href="/contact">
                Contact
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </Fragment>
  );
};

export default Nav;
