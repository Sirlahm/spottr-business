import { Col, Row, Container } from "react-bootstrap";
import Slide from "react-reveal/Slide";
import Fade from "react-reveal/Fade";
import "./styles.css";

import Ticker from "../Ticker";

import Vendors from "../../assets/retailers.png";
import Store from "../../assets/store.svg";
import User from "../../assets/user.svg";
import middleImg from "../../assets/middleimage.png";

const Numbers = () => {
  return (
    <div className="relative numbers-wrapper">
      <Container>
        <Row>
          <Col md={6} sm={12} className="numbers-container1">
            <Slide bottom>
              <div>
                <img src={Store} alt="Spottr" className="mt-5 store-img" />
                <Ticker className="count numbers" end={10} suffix="K+" />
                <p className="small-texts">Opportunities</p>
              </div>
            </Slide>
            <Fade bottom delay={500}>
              <div className="mt-5 ml-5  ppl">
                <img src={User} alt="Spottr" className="store-img " />
                <Ticker className="count numbers" end={15} suffix="K+" />
                <p className="small-texts">Users</p>
                <Fade></Fade>
              </div>
            </Fade>
          </Col>
          <Col md={6} sm={12} className="mt-5 mb-5numbers-container2" />
        </Row>
      </Container>
      <img
        src={Vendors}
        alt="Spottr"
        className="wallet-pattern wallet-pattern-side  h"
      />
      <img
        src={middleImg}
        alt="Spottr"
        className="d-none d-sm-block d-md-none w-100"
      />
    </div>
  );
};

export default Numbers;
