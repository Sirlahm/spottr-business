import React, { Component } from "react";
import { Container, Row, Col } from "react-bootstrap";

import "./styles.css";
import Button from "../TemporarySignUp";
import Map from "../../assets/map.png";
import Dots from "../../assets/dots.png";

import Fade from "react-reveal/Fade";
import Typed from "typed.js";

class Find extends Component {
  componentDidMount() {
    let options = {
      strings: [
        `
        <h2 className=" display-h" style="margin-top: 1rem;margin-bottom: 20px;color: #274b89;  font-weight: 800;">Find</h2>

        <div className="list" style="margin-bottom: 0;display: flex;">
          <div className="icon" style="width: 53px;height: 53px;position: relative;background: #c2e0ff;border-radius: 10px;font-size: 29px;margin-right: 50px;padding: 25px;">
            <i class="ri-search-line" style="position: absolute;bottom: 0;right: 0; color: #274b89"></i>
          </div>
          <p style="padding-right: 1rem;margin-bottom: 151px;" class="transitioning-text">Find any product or service anywhere in the world and anytime using our visual maps and smart search</p>
        </div>
      `,
        `
        <h2 className=" display-h" style="margin-top: 1rem;margin-bottom: 20px;color: #274b89;font-weight: 800;">Buy</h2>

        <div className="list" style="margin-bottom: 0;display: flex;">
          <div className="icon" style="width: 53px;height: 53px;position: relative;background: #c2e0ff;border-radius: 10px;font-size: 29px;margin-right: 50px;padding: 25px;">
            <i class="ri-shopping-bag-2-line" style="position: absolute;bottom: 0;right: 0; color: #274b89"></i>
          </div>
          <p style="padding-right: 1rem;margin-bottom: 151px;"  class="transitioning-text">Any item whether you can afford it or not. We will help you complete the purchase</p>
        </div>
      `,
        `
        <h2 className=" display-h" style="margin-top: 1rem;margin-bottom: 20px;color: #274b89; font-weight: 800;">Move</h2>

        <div className="list" style="margin-bottom: 0; display: flex;">
          <div className="icon" style="width: 53px;height: 53px;position: relative;background: #c2e0ff;border-radius: 10px;font-size: 29px;margin-right: 50px;padding: 25px;">
            <i class="ri-truck-line" style="position: absolute;bottom: 0;right: 0; color: #274b89"></i>
          </div>
          <p style="padding-right: 1rem;margin-bottom: 151px;"  class="transitioning-text">Your purchase with ease and at the best prices</p>
        </div>
      `,
      ],
      typeSpeed: 15,
      smartBackspace: true,
      backSpeed: 0,
      loop: true,
      fadeOutClass: "typed-fade-out",
      showCursor: false,
    };

    // eslint-disable-next-line no-unused-vars
    const typed = new Typed(".typed", options);
  }

  render() {
    return (
      <>
        <Container>
          <Row className="a-find-wrapper justify-content-md-center">
            <Col md={3} />
            <Col md={6} sm={12}>
              {/* <Slide bottom>
                <div className="text-center find-caption-texts mb-4">
                  <span className="find-text-animation">Find. </span>
                  <span className="buy-text-animation">Buy. </span>
                  <span className="">Move.</span>
                </div>
              </Slide> */}
              <Fade delay={500}>
                <div className="row type-container">
                  <div className="container ttt">
                    <div className="typed"></div>
                  </div>
                </div>
              </Fade>
            </Col>
            <Col md={3} />
          </Row>
        </Container>
        <div className="relative">
          <Container>
            <Row>
              <Col md={12} className="">
                <Fade>
                  <img src={Map} alt="Spottr " className="w-100 map" />
                </Fade>
              </Col>
              <Col md={2} />
              <Col md={8}>
                <Fade delay={500}>
                  <p className="text-center reg48 find-desc-text">
                    Discover the amazing world of opportunities from the people
                    and businesses around you
                  </p>
                </Fade>
                <Fade buttom delay={500}>
                  <Button />
                </Fade>
              </Col>
              <Col md={2} />
            </Row>
          </Container>
          <img src={Dots} alt="Spottr" className="dots" />
        </div>
      </>
    );
  }
}

export default Find;
