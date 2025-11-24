import { Container } from "react-bootstrap";
import React, { useState } from "react";
import ReactTooltip from "react-tooltip";

import dot from "../../assets/dotAbout.svg";

import dott from "../../assets/dott.svg";
import ring from "../../assets/ringAbout.svg";
import Brands from "../Brand/Brands";
import Awaits from "components/Awaits";
import Map from "components/Globe/map";
import "../Styles/utils.css";
import "./styles.css";
import Oval from "../../assets/Oval.svg";

import Nav from "../Navbar";
import Footer from "../Footer";
import "react-accessible-accordion/dist/fancy-example.css";
import { Link } from "react-router-dom";
import { useJoinNewsletter } from "../../hooks/useJoinNewsletter";
import Bussiness from "./Bussiness";
import { arrow } from "assets/arrow.png";
import ReadyToStart from "../Footer/ReadyToStart";

function About() {
  const [content, setContent] = useState("");

  const [firstName] = useState("");
  const [email, setEmail] = useState("");
  const { subscribe, isLoading } = useJoinNewsletter({ email, firstName });

  const handleSubmit = (e) => {
    e.preventDefault();
    subscribe();
  };

  return (
    <div className="about">
      <Nav />
      <div></div>

      <div className="bgBlue">
        <Container>
          <div className="textBox">
            <p className="valueText">OUR VALUE </p>
            <p className="team-header paragraghBold">
              Helping you find the best product, location, event & business
              deals as you wander through a city
              <span className="ovalHeader">
                <img src={Oval} alt="Oval" />
              </span>
            </p>
          </div>
        </Container>
        <img src={ring} alt="Spottr" className="ringAbout" />
        <img src={dot} alt="Spottr" className="dotAbout" />
      </div>

      {/* <Brands /> */}

      <div className="about-section2">
        <Container className="P-y">
          <div className="">
            <p className="valueText finance">NEVER MISS THAT DEAL </p>
            <p className="l-h paragraghBold">
              Close transaction deals anywhere
              <br /> and anytime and 0.2s fast with our
              <br /> multicurrency wallet for fiat & <br />
              crypto
            </p>
          </div>
        </Container>
        <img src={dott} alt="Spottr" className="dot1" />
      </div>

      <div className="">
        <div className="about-section3">
          <img src={dott} alt="Spottr" className="dot2" />
          <Container className="mt-5 t-1">
            <div className=" d-flex  flex-column">
              <p className="team-header w-100 text-center paragraghBold">
                Where we are… after all, SpottR
                <span className="ovalGlobe">
                  <img src={Oval} alt="Oval" />
                </span>
              </p>
              <Map setTooltipContent={setContent} />
              <ReactTooltip>{content}</ReactTooltip>
            </div>
          </Container>
          <img src={dott} alt="Spottr" className="dot3" />
        </div>
        {/* <Awaits /> */}
        <Container className="blog-padding">
          {/* <div className="relative"> */}
          <div className="text-center wallet-heading1 m-auto">
            Want to stay in the loop?{" "}
          </div>

          {/* <input type="text" placeholder="Type your email here" /> */}

          <div className="row mt-4">
            <div className="col-md-1" />
            <div className="col-md-10">
              <div className="container">
                <div className="shadow-wrapper shadow-border">
                  <div className="w-8">
                    <form onSubmit={handleSubmit}>
                      <input
                        type="email"
                        placeholder="Type your email here"
                        className="email-section email-input"
                        onChange={(e) => setEmail(e.target.value)}
                      />
                      <button className="button-section submission-button">
                        {isLoading ? "Loading..." : "Subscribe"}
                      </button>
                    </form>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-1" />
          </div>
          <p className="text-center m-auto team-sub read-all">
            <Link to="/blog" className="read-more">
              <span>Read all news here {">>"}</span>
            </Link>
          </p>
        </Container>
        <Bussiness />
        <ReadyToStart />
      </div>
    </div>
  );
}

export default About;
