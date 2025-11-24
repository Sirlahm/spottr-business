import { Container } from "react-bootstrap";
import Img1 from "../../assets/search1.png";
import Img2 from "../../assets/logistic.png";
import Img3 from "../../assets/chain.png";
import Vector from "../../assets/Vector.svg";
import Api1 from "../../assets/loc.png";
import { Link } from "react-router-dom";

import Fade from "react-reveal/Fade";
import Slider from "react-slick";

import Oval from "../../assets/Oval.svg";

import "./styles.css";

const Awaits = () => {
  const settings3 = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
  };
  return (
    <div className="blue-bg">
      <Container className="await-wrapper">
        <p className="await-heading">
          Partner with us{" "}
          {/* <span className="ovalAwait">
            <img src={Oval} alt="Oval" />
          </span> */}
        </p>
        {/* <div className="wwyDesc awaits-slider-l">
          <Fade delay={500} duration={1000}>
            <div className="wwyContent">
              <img src={Img1} alt="Spottr" />
              <div className="wwyHeading w-100">Leverage Our Massive Data</div>
              <div classname="wwyexp1">
                Users and Businesses can use our data to make better purchasing
                and advertising decisions.
              </div>
              <div className=" yyLink mt-3">
                <Link to="/contact-us" className="aaText">
                  Talk to us
                </Link>
              </div>
            </div>
          </Fade>
          <Fade delay={800} duration={1000}>
            <div className="wwyContent">
              <img src={Img2} alt="Spottr features" />
              <div className="wwyHeading">Become a Delivery Partner</div>
              <div classname="wwyexp">
                Fulfill orders for thousands of users every second.
              </div>
              <div className=" yyLink mt-3">
                <Link to="/contact-us" className="aaText">
                  Talk to us
                </Link>
              </div>
            </div>
          </Fade>

          <Fade delay={1100} duration={1000}>
            <div className="wwyContent">
              <img src={Img3} alt="Spottr features" />
              <div className="wwyHeading">Supply Chain</div>
              <div classname="wwyexp">
                Advanced oracle powered dashboards to help big brands get leads
                and activate product rails.
              </div>
              <div className=" yyLink mt-3">
                <Link to="/contact-us" className="aaText">
                  Talk to us
                </Link>
              </div>
            </div>
          </Fade>
        </div> */}

        <div className="yyDesc awaits-slider-l mt-5">
          <p className="leverage-txt">
            Leverage our tech APIs <br />
            Keep your business{" "}
          </p>
          <Fade delay={800} duration={1000}>
            <div className="yyContent yyFlex d-flex">
              <img src={Api1} alt="Spottr" className="yyIcon" />
              <div className="yyCommerce">
                <p className="yyHeading">Our Ecommerce API</p>
                <Link>
                  <span className="yyLink">View Docs</span>
                </Link>
              </div>
            </div>
          </Fade>
          <Fade delay={1100} duration={1000}>
            <div className="yyContent yyFlex d-flex">
              <img src={Api1} alt="Spottr" className="yyIcon" />
              <div className="yyCommerce">
                <p className="yyHeading">Our Wallet API</p>
                <Link>
                  <span className="yyLink">View Docs</span>
                </Link>
              </div>
            </div>
          </Fade>
        </div>

        <div className="awaits-slider-s">
          <Slider {...settings3} className="mobile-slider">
            <div className="slider-child">
              <div className="wwyContent">
                <img src={Img1} alt="Spottr" />
                <div className="wwyHeading">Leverage Our Massive Data</div>
                <div classname="wwyexp1">
                  Users and Businesses can use our data to make better
                  purchasing and advertising decisions.
                </div>
                <div className=" yyLink mt-3">
                  <Link to="/contact-us" className="aaText">
                    Talk to us
                  </Link>
                </div>
              </div>
            </div>
            <div className="slider-child">
              <div className="wwyContent">
                <img src={Img2} alt="Spottr " />
                <div className="wwyHeading">Become a Delivery Partner</div>
                <div classname="wwyexp">
                  Fulfill orders for thousands of users every second.
                </div>
                <div className=" yyLink mt-3">
                  <Link to="/contact-us" className="aaText">
                    Talk to us
                  </Link>
                </div>
              </div>
            </div>
            <div className="slider-child">
              <div className="wwyContent">
                <img src={Img3} alt="Spottr features" />
                <div className="wwyHeading">Supply Chain</div>
                <div classname="wwyexp">
                  Advanced oracle powered dashboards to help big brands get
                  leads and activate product rails.
                </div>
                <div className=" yyLink mt-3">
                  <Link to="/contact-us" className="aaText">
                    Talk to us
                  </Link>
                </div>
              </div>
            </div>

            <div className="slider-child">
              <div className="wwyContent">
                <img src={Api1} alt="Spottr" />
                <div className="wwyHeading">Our Ecommerce API</div>
                <Link>
                  <span className="yyLink">View Docs</span>
                </Link>
              </div>
            </div>
            <div className="slider-child">
              <div className="wwyContent">
                <img src={Api1} alt="Spottr" />
                <div className="wwyHeading">Our Wallet API</div>
                <Link>
                  <span className="yyLink">View Docs</span>
                </Link>
              </div>
            </div>
          </Slider>
        </div>
      </Container>
    </div>
  );
};

export default Awaits;
