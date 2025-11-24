import { Col, Row, Container } from "react-bootstrap";
import "./styles.css";
import Slider from "react-slick";
import Money from "../../assets/wallet.png";
import Loan from "../../assets/loan.png";
import Offline from "../../assets/offline.png";
import P2P from "../../assets/p2p.png";
// import Pattern from "../../assets/pattern-plain.png";
import Pattern from "../../assets/pattern-1.svg";

const Wallet = () => {
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
      <Container>
        <p className="text-center wallet-heading">Optimized Wallet System</p>
        <Row className="large-slider">
          <Col md={6} className="wallet-feature">
            <div>
              <div className="flex wallet-features">
                <span>
                  <img src={Money} alt="Spottr Wallet" />
                </span>
                <span className="ml-2 wallet-props">Multi Asset Wallet</span>
              </div>
              <p className="reg24 wallet-desc">
                To handle your cash and crypto deposits so that there are no
                limits whatsoever.
              </p>
            </div>

            <div>
              <div className="flex wallet-features ">
                <span>
                  <img src={Loan} alt="Spottr Wallet" />
                </span>
                <span className="ml-2 wallet-props">Loan Manager</span>
              </div>
              <p className="reg24 wallet-desc">
                To request for business and personal loans so that you can check
                out with confidence.
              </p>
            </div>

            <div>
              <div className="flex wallet-features ">
                <span>
                  <img src={Offline} alt="Spottr Wallet" />
                </span>
                <span className="ml-2 wallet-props">Offline Transactions </span>
              </div>
              <p className="reg24 wallet-desc">
                Use SppottR anywhere to make payments. No mobile data required.
              </p>
            </div>

            <div>
              <div className="flex wallet-features ">
                <span>
                  <img src={P2P} alt="Spottr Wallet" />
                </span>
                <span className="ml-2 wallet-props">
                  Peer to Peer Wallet without boarders.
                </span>
              </div>
              <p className="reg24 wallet-desc">
                Send and receive payments using SpottR usernames.{" "}
              </p>
            </div>
          </Col>
          <Col md={6} className="mt-5 mb-5" />
        </Row>
      </Container>

      <Container className="mobile-slider slider-section">
        <Slider {...settings2} className="mobile-slider">
          <div className="slider-child">
            <div>
              <div className="wallet-features">
                <div className="">
                  <img src={Money} alt="Spottr Wallet" />
                </div>
                <div className="wallet-props">Multi Asset Wallet</div>
              </div>
              <p className="reg24 wallet-desc">
                To handle your cash and crypto deposits so that there are no
                limits whatsoever.
              </p>
            </div>
          </div>

          <div className="slider-child">
            <div>
              <div className="wallet-features ">
                <img src={Loan} alt="Spottr Wallet" />
                <div className="wallet-props">Loan Manager</div>
              </div>
              <p className="reg24 wallet-desc">
                To request for business and personal loans so that you can check
                out with confidence.
              </p>
            </div>
          </div>

          <div className="slider-child">
            <div>
              <div className="wallet-features ">
                <img src={Offline} alt="Spottr Wallet" />
                <div className="wallet-props">Offline Transactions</div>
              </div>
              <p className="reg24 wallet-desc">
                Use SppottR anywhere to make payments. No mobile data required.
              </p>
            </div>
          </div>

          <div className="slider-child">
            <div>
              <div className="wallet-features ">
                <img src={Offline} alt="Spottr Wallet" />
                <div className="wallet-props">
                  Peer to Peer Wallet without boarders.
                </div>
              </div>
              <p className="reg24 wallet-desc">
                Send and receive payments using SpottR usernames.
              </p>
            </div>
          </div>
        </Slider>
      </Container>
      {/* <img src={Pattern} alt="Spottr" className="wallet-pattern" /> */}
      <img src={Pattern} alt="Spottr" className="wallet-pattern" />
    </div>
  );
};

export default Wallet;
