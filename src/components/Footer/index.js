import React from "react";
import { Link } from "react-router-dom";
import { Row, Col } from "react-bootstrap";
import { Container } from "react-bootstrap";
import Logo from "../../assets/logoBlack.svg";
import Zoom from "react-reveal/Zoom";

import "./styles.css";

import Ring from "../../assets/ring-1.svg";
import sRing from "../../assets/ring-2.svg";
import Character from "../../assets/superhero.png";
import Fb from "../../assets/Fbook.svg";
import Insta from "../../assets/Insta.svg";
import LinkedIn from "../../assets/LinkedInn.svg";
import Twitter from "../../assets/Twitter.svg";

import "react-multi-carousel/lib/styles.css";
import ReadyToStart from "./ReadyToStart";

const Footer = () => {
  return (
    <>
      <ReadyToStart />
      <div className="footer-wrapper">
        <Container>
          <div className="flex-f footer">
            <div className="sectionLogo">
              <img src={Logo} alt="Spottr Logo" />
              <p className="aa-text mt-4">
                We care about the businesses that care about sales by building a
                relationship with them.
                <br />
                Get started today!
              </p>
            </div>
            <div className=" half   mt-2">
              <p className=" aa-title ">About us</p>
              <div>
                <Link to="/blog" className="aa-sub">
                  Blog
                </Link>
              </div>
              <div>
                <a
                  href="https://cliqtoken.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="CLIQ">
                  CLIQ Token
                </a>
              </div>
              <div>
                <a
                  href="https://www.google.com/search?q=SpottR&oq=SpottR&aqs=chrome..69i57j35i39j0i10i433j69i60l5.6110j0j7&sourceid=chrome&ie=UTF-8"
                  className="aa-sub"
                  target="_blank"
                  rel="noopener noreferrer">
                  Press
                </a>
              </div>

              <div>
                <Link to="/about" className="aa-sub">
                  About
                </Link>
              </div>
            </div>
            <div className=" half mt-2">
              <p className=" aa-title ">Services</p>
              <div>
                <a
                  href="https://play.google.com/store/apps/details?id=com.spottr.android.app"
                  className="aa-sub">
                  Go Premium
                </a>
              </div>
              <div>
                <Link to="/contact-us" className="aa-sub">
                  Affiliate Programs
                </Link>
              </div>
              <div>
                <Link to="/contact-us" className="aa-sub">
                  Advertising
                </Link>
              </div>
              <div>
                <Link to="/contact-us" className="aa-sub">
                  Prebuilt E-store
                </Link>
              </div>
              <div>
                <Link to="/contact-us" className="aa-sub">
                  Ambassador
                </Link>
              </div>
            </div>
          </div>
          <div className="bottomFooter">
            <div className="d-flex justify-content-center mb">
              <Link to="/terms" className="ab-sub ml-4">
                Terms
              </Link>
              <Link to="/privacy" className="ab-sub ml-4">
                Privacy
              </Link>
              <Link to="/" className="ab-sub ml-4">
                Cookies
              </Link>
              <Link to="/contact-us" className="ab-sub ml-4">
                Contact
              </Link>
            </div>

            <div>
              <a
                href="https://www.linkedin.com/company/thespottrapp/mycompany"
                target="_blank"
                rel="noopener noreferrer">
                <img src={LinkedIn} alt="" className="ml-3" />
              </a>
              <a
                href="https://www.facebook.com/theSpottrApp"
                target="_blank"
                rel="noopener noreferrer">
                <img src={Fb} alt="" />
              </a>
              <a
                href="https://www.twitter.com/theSpottrApp_"
                target="_blank"
                rel="noopener noreferrer">
                <img src={Twitter} alt="" className="ml-3" />
              </a>

              <a
                href=" https://instagram.com/thespottrapp "
                target="_blank"
                rel="noopener noreferrer">
                <img src={Insta} alt="" className="ml-3" />
              </a>
            </div>
          </div>
        </Container>
      </div>
    </>
  );
};

export default Footer;
