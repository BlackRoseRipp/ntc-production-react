import React from "react";
import "./Footer.css";
const Footer = () => {
  return (
    <footer style={{ overflowX: "hidden" }} className="footer-dark">
      <div className="container">
        <div className="row">
          {" "}
          <div className="col-md-4 item  align-self-center">
            <img
              src="/assets/img/ntc-logo-white.png"
              width="250px"
              style={{ margin: "auto", display: "block" }}
            />
          </div>
          <div className="col-sm-6 col-md-4 item">
            
            <ul className="footer-menu" ><h3>Menu</h3>
              <li className="menu-item current-menu-item">
                <a className="nav__link" href="/">
                  Home
                </a>
              </li>
              <li className="menu-item">
                <a className="nav__link" href="/about">
                  About
                </a>
              </li>

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

              <li className="menu-item">
                <a className="nav__link" href="/webinar-trianing">
                  Webinar Training
                </a>
              </li>
              <li className="menu-item">
                <a className="nav__link" href="/blog">
                  Blog
                </a>
              </li>
              <li className="menu-item ">
                <a className="nav__link" href="/contact">
                  Contact
                </a>
              </li>
            </ul>
          </div>
          <div className="col-md-4 item text">
            <ul className="contact-footer-list" >
            <h3>Contact</h3>
              <li>
                <a href="#">
                  <b>Address:</b> Center for Medical Science Building, 150 New
                  Scotland Avenue, Albany, New York, 12208
                </a>
              </li>
              <li>
                <a href="#">
                  <b>Phone:</b> 518-293-0204
                </a>
              </li>
              <li>
                <a href="#">
                  <b>Fax:</b> 518-293-0208
                </a>
              </li>
              <li>
                <a href="#">
                  <b>Email:</b> drugtest@ntclab.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        <p className="copyright">National Toxicoogy Center © 2022</p>
      </div>
    </footer>
  );
};

export default Footer;
