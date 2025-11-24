import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./Brands.css";
import LATOKEN from "../../assets/lako.png";
import PEDINI from "../../assets/pedini_logo.png";
import CAR45 from "../../assets/CAR45.png";
import LABS from "../../assets/LABS.png";
import TheFIRM from "../../assets/TheFIRM.png";

import Fade from "react-reveal/Fade";

const Brands = () => {
  return (
    <div className="brands-container p-5 p2 ">
      {/* <Container> */}
      <div style={{ margin: "auto", width: "90%" }}>
        <Row>
          <Col xs={6} sm={4} lg>
            <Fade delay={500} duration={1000}>
              <div className="d-flex justify-content-center p-3 align-items-center">
                <img src={LATOKEN} alt="Latoken Logo" />
              </div>
            </Fade>
          </Col>

          <Col xs={6} sm={4} lg>
            <Fade delay={700} duration={1000}>
              <div className="d-flex justify-content-center p-3 align-items-center">
                <img src={PEDINI} alt="Pedini Logo" />
              </div>
            </Fade>
          </Col>

          <Col xs={6} sm={4} lg>
            <Fade delay={900} duration={1000}>
              <div className="d-flex justify-content-center p-3 align-items-center">
                <img src={CAR45} alt="CAR45 Logo" />
              </div>
            </Fade>
          </Col>

          <Col xs={6} sm={4} lg>
            <Fade delay={1100} duration={1000}>
              <div className="d-flex justify-content-center p-3 align-items-center">
                <img src={TheFIRM} alt="Thefirm Logo" />
              </div>
            </Fade>
          </Col>

          <Col xs={12} sm={4} lg>
            <Fade delay={1300} duration={1000}>
              <div className="d-flex justify-content-center p-3 align-items-center">
                <img src={LABS} alt="Labs Logo" />
              </div>
            </Fade>
          </Col>
        </Row>
        {/* </Container> */}
      </div>
    </div>
  );
};

export default Brands;
