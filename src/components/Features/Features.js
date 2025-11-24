import React from "react";
import Fade from "react-reveal/Fade";
import Zoom from "react-reveal/Zoom";

import { Container, Row, Col } from "react-bootstrap";
import "./Features.css";
// import Oval from "../../assets/Oval.svg";
import Dot from "../../assets/dots.png";
// import Lady from "../../assets/Lady.png";
import Ellipse from "../../assets/Ellipse.svg";
import DottedArrow from "../../assets/dotted-arrow.svg";
import Mobile1 from "../../assets/mobile1.svg";
import Mobile2 from "../../assets/mobile2.svg";

import "../Styles/utils.css";
import Feature1 from "./Feature1";
// import Feature from "./Feature";
import { Items, Items2 } from "./Utils";

const Features = () => {
  return (
    <div className="position-relative">
      <Fade delay={500} duration={1500} left>
        <div className="ellipse  ">
          <img src={Ellipse} alt="Spottr" className="w-100" />
        </div>
        {/* <div className="dot">
                <img src={Dot} alt="Spottr" />
              </div> */}
      </Fade>
      <Fade delay={500} duration={1500} left>
        <div className="bottom-dot">
          <img src={Dot} alt="Spottr" />
        </div>
      </Fade>
      <Container className=" pt-5 features ">
        <div className="featuresHeading  mt-5 mb-3">
          <p className="featuresHeader paragraghBold">
            Amazing features to help you do more.
            {/* <span className="oval">
            <img src={Oval} alt="Oval" />
          </span> */}
          </p>
        </div>

        <Row className=" mt-3 justify-content-between sm-col">
          <Col className=" position-relative Ddw" sm={8}>
            <div className="feature-imgs">
              <span
                className=" position-relative"
                style={{ bottom: "5rem", right: "12rem" }}>
                <Zoom duration={1000} top>
                  <img src={Mobile2} alt="Spottr" />
                </Zoom>
              </span>
              <span
                className=" position-absolute"
                style={{ top: "20rem", left: "10rem" }}>
                <Zoom duration={1000} top>
                  <img src={Mobile1} alt="Spottr" />
                </Zoom>
              </span>
            </div>
          </Col>
          <Col sm={4} className=" p-0 ">
            <>
              <Col className="Ccw">
                <Fade delay={500} duration={1500} left>
                  <div className=" position-relative rightFlex ">
                    <div className="dot">
                      <img src={Dot} alt="Spottr" />
                    </div>
                  </div>
                </Fade>
              </Col>

              <Col className=" position-relative Ddw">
                <span className=" position-absolute arrow">
                  <Zoom duration={1000} top>
                    <img src={DottedArrow} alt="Spottr" />
                  </Zoom>
                </span>
              </Col>
            </>
            <div className="gridItem">
              <Fade bottom duration={1000}>
                {Items2.map((item) => (
                  <Feature1 key={item.title} item={item} />
                ))}
              </Fade>
            </div>
          </Col>
        </Row>
        <div className=" dnone text-center">
          <a
            href="https://play.google.com/store/apps/details?id=com.spottr.android.app"
            className="getStartedbtn p-7">
            <span className="link">Get Started</span>
          </a>
        </div>
      </Container>
    </div>
  );
};

export default Features;
