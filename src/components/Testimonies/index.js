import { Container } from "react-bootstrap";
import Fade from "react-reveal/Fade";
import Slider from "react-slick";
import TestimonySlider from "./Slider";
import "./styles.css";
import Derek from "../../assets/derek.png";
import Frank from "../../assets/Franklin.png";
import Gary from "../../assets/gary.png";
import SideImg from "../../assets/finish-img.png";

const Testimonies = () => {
  const settings2 = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
  };
  return (
    <div className="relative">
      <Container className="testimonies-wrapper large-slider">
        {/* <Row>
          <Col md={5}>
            <img
              src={SideImg}
              alt="Spottr"
              className="d-block d-sm-block d-md-none w-100"
            />
          </Col>
          <Col md={7}>
            <div className="testimonies-section">
              <TestimonySlider />
            </div> */}
        {/* <Slider
              {...settings2}
              className="mobile-slider testimonies-slide-container"
            >
              <div className="slider-child">
                <div className="testimonies-section">
                  <Fade>
                    <img
                      src={SideImg}
                      alt="Spottr"
                      className="testimony-kel w-100"
                    />
                    <p className="testimony">
                      Spottr App has helped my business evolve. I have been able
                      to run things smoothly with their AI and make more sales.
                    </p>
                    <Fade delay={500}>
                      <span className="name">KELVIN, LAGOS</span>
                    </Fade>
                  </Fade>
                </div>
              </div>
              <div className="slider-child">
                <div className="testimonies-section">
                  <Fade>
                    <img
                      src={SideImg}
                      alt="Spottr"
                      className="testimony-kel w-100"
                    />
                    <p className="testimony">
                      Spottr App has helped my business evolve. I have been able
                      to run things smoothly with their AI and make more sales.
                    </p>
                    <Fade delay={500}>
                      <span className="name">KELVIN, LAGOS</span>
                    </Fade>
                  </Fade>
                </div>
              </div>
              <div className="slider-child">
                <div className="testimonies-section">
                  <Fade>
                    <img
                      src={SideImg}
                      alt="Spottr"
                      className="testimony-kel w-100"
                    />
                    <p className="testimony">
                      Spottr App has helped my business evolve. I have been able
                      to run things smoothly with their AI and make more sales.
                    </p>
                    <Fade delay={500}>
                      <span className="name">KELVIN, LAGOS</span>
                    </Fade>
                  </Fade>
                </div>
              </div>
              <div className="slider-child">
                <div className="testimonies-section">
                  <Fade>
                    <img
                      src={SideImg}
                      alt="Spottr"
                      className="testimony-kel w-100"
                    />
                    <p className="testimony">
                      Spottr App has helped my business evolve. I have been able
                      to run things smoothly with their AI and make more sales.
                    </p>
                    <Fade delay={500}>
                      <span className="name">KELVIN, LAGOS</span>
                    </Fade>
                  </Fade>
                </div>
              </div>
            </Slider>
           */}
        {/* </Col>
        </Row> */}
        <TestimonySlider />
      </Container>
      <Container className="mobile-slider">
        <Slider
          {...settings2}
          className="mobile-slider testimonies-slide-container"
        >
          <div className="slider-child">
            <div className="testimonies-section">
              <Fade>
                <img src={Derek} alt="Spottr" className="testimony-kel w-100" />
                <p className="testimony">
                  Building commerce on Google maps is revolutionary and their
                  merchant onboarding policy will make them the biggest
                  aggregator of merchants who accept cryptocurrency which is
                  what the world needs.
                </p>
                <Fade delay={500}>
                  <span className="name">DEREK DISTENFIELD</span>
                </Fade>
              </Fade>
            </div>
          </div>
          <div className="slider-child">
            <div className="testimonies-section">
              <Fade>
                <img src={Frank} alt="Spottr" className="testimony-kel w-100" />
                <p className="testimony">
                  Took time to study what SpottR is working on and am totally
                  blown away!!!! Disrupting business visibility from a different
                  angle from what Instagram, Twitter and Facebook have done is
                  absolutely a game changer.
                </p>
                <Fade delay={500}>
                  <span className="name">FRANKLIN PETERS</span>
                </Fade>
              </Fade>
            </div>
          </div>
          <div className="slider-child">
            <div className="testimonies-section">
              <Fade>
                <img src={Gary} alt="Spottr" className="testimony-kel w-100" />
                <p className="testimony">
                  Using crypto to offer loans to consumers is creative and I can
                  see how it is a win-win for both parties.
                </p>
                <Fade delay={500}>
                  <span className="name">GARY FOWLER</span>
                </Fade>
              </Fade>
            </div>
          </div>
        </Slider>
      </Container>
      <img src={SideImg} alt="Spottr" className="sideImg" />
    </div>
  );
};

export default Testimonies;
