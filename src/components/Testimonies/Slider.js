import React, { Component } from "react";
import Slider from "react-slick";
import Fade from "react-reveal/Fade";
import Slide from "react-reveal/Slide";
// import Slide from "react-reveal/Slide";
import { Carousel } from "react-bootstrap";
import Derek from "../../assets/derek.png";
import Frank from "../../assets/Franklin.png";
import Gary from "../../assets/gary.png";
import "./styles.css";

export default class SimpleSlider extends Component {
  render() {
    // const settings = {
    //   dots: false,
    //   infinite: true,
    //   speed: 100,
    //   slidesToShow: 1,
    //   slidesToScroll: 1,
    // };
    const settings2 = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
    };
    return (
      <div className="tst-slider">
        <Carousel>
          <Carousel.Item>
            <div className="row">
              <div className="col-md-6">
                <img src={Derek} alt="" className="testimonials" />
              </div>
              <div className="col-md-6">
                <Fade>
                  <p className="testimony">
                    Building commerce on Google maps is revolutionary and their
                    merchant onboarding policy will make them the biggest
                    aggregator of merchants who accept cryptocurrency which is
                    what the world needs.
                  </p>
                </Fade>
                <Slide bottom delay={500}>
                  <span className="name">DEREK DISTENFIELD</span>
                </Slide>
              </div>
            </div>
          </Carousel.Item>
          <Carousel.Item>
            <div className="row">
              <div className="col-md-6">
                <img src={Frank} alt="" className="testimonials" />
              </div>
              <div className="col-md-6">
                <p className="testimony">
                  Took time to study what SpottR is working on and am totally
                  blown away!!!! Disrupting business visibility from a different
                  angle from what Instagram, Twitter and Facebook have done is
                  absolutely a game changer.
                </p>
                <Slide bottom delay={500}>
                  <span className="name">FRANKLIN PETERS</span>
                </Slide>
              </div>
            </div>
          </Carousel.Item>
          <Carousel.Item>
            <div className="row">
              <div className="col-md-6">
                <img src={Gary} alt="" className="testimonials" />
              </div>
              <div className="col-md-6">
                <p className="testimony mt-5">
                  Using crypto to offer loans to consumers is creative and I can
                  see how it is a win-win for both parties.
                </p>
                <Slide bottom delay={500}>
                  <span className="name">GARY FOWLER</span>
                </Slide>
              </div>
            </div>
          </Carousel.Item>
        </Carousel>

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
                other users
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
