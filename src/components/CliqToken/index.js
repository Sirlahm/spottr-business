import { Container, Col, Row } from "react-bootstrap";
import Dash from "../../assets/dash.png";
import Token from "../../assets/token.png";
import Slider from "../Slider";

import "./styles.css";

const CliqToken = () => {
  return (
    <>
      <Container className="token-wrapper">
        <Row>
          <Col md={3} />
          <Col md={9}>
            <p className="token-heading">
              <span>
                <img src={Dash} alt="" className="dash" />
              </span>{" "}
              INTRODUCTION
            </p>
          </Col>
        </Row>
        <Row>
          <Col md={3} className="d-img">
            <img src={Token} alt="Spottr Token" />
          </Col>
          <Col md={9} className="d-text">
            <p className="big-token-heading">CLIQ Token</p>
          </Col>
        </Row>
      </Container>
      <div className="container slider-container">
        <div className="row">
          <div className="col-md-3" />
          <div className="col-md-9">
            <Slider />
          </div>
        </div>
      </div>
    </>
  );
};

export default CliqToken;
