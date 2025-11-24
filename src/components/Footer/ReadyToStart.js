import React from "react";
import { Row, Col } from "react-bootstrap";
import Zoom from "react-reveal/Zoom";

import Ring from "../../assets/ring-1.svg";
import sRing from "../../assets/ring-2.svg";
import Character from "../../assets/superhero.png";
import { Link, useLocation } from "react-router-dom";
import Bussiness from "../About/Bussiness";

const ReadyToStart = () => {
  const location = useLocation();
  console.log(location);
  return (
    <div className="position-relative">
      {location.pathname === "/about" && (
        <div className="ready_footer">
          <div className="d-flex justify-content-center mb">
            <Link to="/faq" className="ready-sub ml-4">
              Terms
            </Link>
            <Link to="/terms" className="ready-sub ml-4">
              Terms
            </Link>
            <Link to="/privacy" className="ready-sub ml-4">
              Privacy
            </Link>
            <Link to="/" className="ready-sub ml-4">
              Bussiness
            </Link>
            <Link to="/contact-us" className="ready-sub ml-4">
              Contact
            </Link>
          </div>
        </div>
      )}
      <div className="readySectionWrapper">
        <div className="ring-1">
          <img src={Ring} alt="Spottr" />
        </div>
        <div className="ring-2">
          <img src={sRing} alt="Spottr" />
        </div>

        <section className="containers">
          <Zoom duration={1000}>
            <span className="readyBanner">
              <Row className=" h-100 readyBannerMobile">
                <Col className=" position-relative Col1">
                  <div className="stars">
                    <img src={Character} alt="Spottr" className="image" />
                  </div>
                </Col>
                <Col className="Col2">
                  <div className="readyBannerText">
                    Ready to Start with us?{" "}
                  </div>

                  <a
                    href="https://play.google.com/store/apps/details?id=com.spottr.android.app"
                    className="create-account">
                    Get Started
                  </a>
                  <div></div>
                  <div></div>
                </Col>
              </Row>
            </span>
          </Zoom>
        </section>
      </div>
    </div>
  );
};

export default ReadyToStart;
