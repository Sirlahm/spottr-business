import React, { Component } from "react";
import Slider from "react-slick";
import Fade from "react-reveal/Fade";
import "./styles.css";

export default class SimpleSlider extends Component {
  render() {
    const settings = {
      dots: false,
      infinite: true,
      speed: 500,
      slidesToShow: 2,
      slidesToScroll: 1,
    };
    const settings2 = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
    };
    return (
      <div>
        <Slider {...settings} className="large-slider">
          <div className="slider-child">
            <Fade delay={100} duration={800}>
              <h1 className="number-props">Expanding Crypto Adoption</h1>
              <p>Because we are the largest aggregator of crypto merchants </p>
            </Fade>
          </div>
          <div className="slider-child">
            <Fade delay={100} duration={800}>
              <h1 className="number-props">Affiliate networks</h1>
              <p>
                Make 2 million naira monthly by joining the largest network of
                agents who resell for business and process cash transactions for
                other users{" "}
              </p>
            </Fade>
          </div>
          <div className="slider-child">
            <Fade delay={100} duration={800}>
              <h1 className="number-props">Barter and Futures</h1>
              <p>We are bringing back the good old goods for goods exchange</p>
            </Fade>
          </div>
          <div className="slider-child">
            <Fade delay={100} duration={500}>
              <h1 className="number-props">Business schemes</h1>
              <p>
                Holders of CLIQ token start up and grow their businesses because
                we walk with them
              </p>
            </Fade>
          </div>
        </Slider>
        <Slider {...settings2} className="mobile-slider">
          <div className="slider-child">
            <Fade delay={100} duration={500}>
              <h1 className="number-props">Expanding Crypto Adoption</h1>
              <p>Because we are the largest aggregator of crypto merchants </p>
            </Fade>
          </div>
          <div className="slider-child">
            <Fade delay={100} duration={500}>
              <h1 className="number-props">Affiliate networks</h1>
              <p>
                Make 2 million naira monthly by joining the largest network of
                agents who resell for business and process cash transactions for
                other users{" "}
              </p>
            </Fade>
          </div>
          <div className="slider-child">
            <Fade delay={100} duration={500}>
              <h1 className="number-props">Barter and Futures</h1>
              <p>We are bringing back the good old goods for goods exchange</p>
            </Fade>
          </div>
          <div className="slider-child">
            <Fade delay={100} duration={500}>
              <h1 className="number-props">Business schemes</h1>
              <p>
                Holders of CLIQ token start up and grow their businesses because
                we walk with them
              </p>
            </Fade>
          </div>
        </Slider>
      </div>
    );
  }
}
