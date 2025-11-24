import React, { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

import "./contact.css";
import Pattern from "../assets/pattern.png";
import Fade from "react-reveal/Fade";

import { useContactUs } from "../hooks/useContactUs";

const Contact = () => {
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const [email, setEmail] = useState("");
  const { contactus, isLoading, error } = useContactUs(
    {
      email,
      message,
      name,
    },
    setName,
    setEmail,
    setMessage
  );

  const handleContactUs = (e) => {
    e.preventDefault();
    contactus();
  };

  console.log(error);

  return (
    <>
    <Navbar />
      <Container className="">
        
        <Row className="pb-5 mb-5">
          <Col md={1} />
          <Col md={8}>
            <Fade bottom delay={500}>
              <p className="big-heading">Contact Us</p>
              <section className="mt-2 reg24">
                Mail: hello@theSpottrapp.com
              </section>
              <section className="reg24">Tel: +234(0)8073336660</section>
              <p className="bold24 push">Or Type your message here</p>
            </Fade>

            <Fade delay={750}>
              <form action="" className="mt-5" onSubmit={handleContactUs}>
                <div className="shadow-wrapper">
                  <div className="w-100">
                    <input
                      type="text"
                      placeholder="Your name"
                      className="email-section w-100 reg24"
                      onChange={(e) => setName(e.target.value)}
                      required
                    />
                  </div>
                </div>
                <div className="shadow-wrapper">
                  <div className="w-100">
                    <input
                      type="text"
                      placeholder="Your email"
                      className="email-section w-100 reg24"
                      onChange={(e) => setEmail(e.target.value)}
                      required
                    />
                  </div>
                </div>
                <div className="shadow-wrapper-textarea">
                  <div className="w-100">
                    <textarea
                      className="w-100 reg24 textarea"
                      placeholder="Your Message"
                      onChange={(e) => setMessage(e.target.value)}
                      required
                    ></textarea>
                  </div>
                  <div className="d-flex">
                    <div className="col-md-10 px-0" />
                    <div className="col-md-2 px-0">
                      <button className="w-100 button-section">
                        {isLoading ? "Sending..." : "Send"}
                      </button>
                    </div>
                  </div>
                </div>
              </form>
            </Fade>
          </Col>
          <Col md={3} />
        </Row>
      </Container>
      <Footer />
      <img src={Pattern} alt="Pattern" className="pattern" />
    </>
  );
};

export default Contact;
