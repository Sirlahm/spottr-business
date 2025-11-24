import { Col, Row, Container } from "react-bootstrap";
import "./styles.css";
import IOS from "../../assets/ios.png";
import Android from "../../assets/android.png";
import Mockup from "../../assets/mobile-ex.svg";
import app from "../../assets/app.png";

const Experience = () => {
  return (
    <div className="gradient relative">
      <Container className="experience">
        <Row>
          <Col md={6}>
            <img
              src={app}
              alt="Spottr"
              className="m-auto d-none   w-100 phoneAnimate"
            />
          </Col>
          <Col md={6} className="mt-5 mb-5 textCen">
            <p className="experience-header">WANDERING THROUGH THE CITY?</p>
            <p className="heading">Enjoy the best mobile experience</p>

            <div className="pt">
              <img
                src={IOS}
                alt="Spottr for iOS"
                className="download-banners"
              />
              <img
                src={Android}
                alt="Spottr for Android"
                className="download-banners ml-2"
              />
            </div>
            <p className="caption-text mt-4 mt-487">
              Spot anything within two minutes of thinking about it.
            </p>
          </Col>
        </Row>
        <img src={Mockup} alt="Spottr App" className="phone-mockup" />
      </Container>
    </div>
  );
};

export default Experience;
