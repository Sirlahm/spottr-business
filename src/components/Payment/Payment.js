import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Oval from "../../assets/Oval.svg";
import Union from "../../assets/Union.svg";
import Rectangle from "../../assets/Rectangle.svg";

import Phone from "../../assets/phone.png";
import Laptop from "../../assets/laptop.png";
import Bacode from "../../assets/Bacode.svg";
import BigCir from "../../assets/BigCir.svg";
import "../Styles/utils.css";
import "./Payment.css";

const Payment = () => {
  return (
    <div className="paymentBg">
      <Container className="h-100">
        {/* <div className="paymentHeading">
          <p className="paragraghBold zIndex ">
            Anytime Payments, Anywhere in the world.
            <span className="ovalPayment">
              <img src={Oval} alt="Oval" />
            </span>
          </p>
        </div> */}

        <Row className="wallet">
          <Col sm={12} lg={6} className=" align-self-center p50">
            <div className="paymentText">
              {/* <img src={Union} alt="Spottr" className="union" /> */}
              <p className="getText">
                Anytime,
                <br /> Multi-currency
                <br /> wallet, anywhere in
                <br /> the world
              </p>

              <p className="getText2">Accept fiat or crypto, your choice</p>

              {/* <img src={Rectangle} className="rec" alt="Spottr" /> */}
            </div>
          </Col>

          <Col sm={12} lg={6} className="fit">
            <div className=" position-absolute bigcir fit">
              <img src={BigCir} alt="Spottr" className="fit" />
            </div>
            <div className=" position-absolute bacode">
              <img src={Bacode} alt="Spottr" className="fit" />
            </div>

            <div className=" position-absolute phone">
              <img src={Phone} alt="Phone" className="fit" />
            </div>

            <div className=" position-absolute laptop">
              <img src={Laptop} alt="Laptop" className="fit" />
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Payment;
