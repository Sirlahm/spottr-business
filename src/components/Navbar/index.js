import "./styles.css";
import React, { Component } from "react";
import { Container } from "react-bootstrap";
import Logo from "../../assets/Logo-White.svg";
import { Link, } from "react-router-dom";

import TempComp from "../TemporaryComponents";
import { AiOutlineMenu } from "react-icons/ai";
import { AiOutlineClose } from "react-icons/ai";
class Navbar extends Component {
  state = { clicked: false };

  handleClick = () => {
    this.setState({ clicked: !this.state.clicked });
  };

  render() {
    return (
      <div className="navBg">
        <Container className="sptr-navbar ">
          <span>
            <Link to="/">
              <img src={Logo} alt="Spottr" className="logo" />
            </Link>
          </span>
          <span className="mt-2">
            <TempComp />
          </span>
          {/* <span className="nav-links"></span> */}
          <span className="nav-md p-2">
            {this.state.clicked ? (
              <div className="svgBox">
                <AiOutlineClose
                  className="svgs opacity-0"
                  onClick={this.handleClick}
                />
              </div>
            ) : (
              <div className="svgBox">
                <AiOutlineMenu
                  className="svgs opacity-0"
                  onClick={this.handleClick}
                />
              </div>
            )}
          </span>
        </Container>
        <span
          className={
            this.state.clicked
              ? "nav-items text-center active"
              : "nav-items  text-center"
          }>
          <div className="mobile-links">
            <Link to="/about">About us</Link>
          </div>
          <div className="mobile-links">
            <Link to="/contact-us">Contact us</Link>
          </div>
          <div className="mobile-links">
            <Link to="/blog">Blog</Link>
          </div>
          <div className="mobile-links">
            <Link to="/privacy">Privacy Policy</Link>
          </div>
          <div className="mobile-links">
            <Link to="/faq">FAQ</Link>
          </div>
          <div className="mobile-links">
            <Link to="/terms">Terms and Conditions</Link>
          </div>
        </span>
      </div>
    );
  }
}

export default Navbar;
