import React from "react";
import "./Sme.css";
import supply_chain from "../../assets/supply-chain.svg";
import sme from "../../assets/sme.svg";
import truck from "../../assets/truck.svg";
import Fade from "react-reveal/Fade";

const Sme = () => {
  return (
    <div className="SmeContainer">
      <>
        <div className="sme_txt">More for SME's</div>
        <div className="wwyDesc awaits-slider-l">
          <Fade delay={500} duration={1000}>
            <div className="wwyContent">
              <div>
                <img src={sme} alt="Spottr" />
              </div>
              <div className="wwyHeading w-100">Leverage Our Massive Data</div>
              <div className="wwyexp">
                Users and Businesses can use our
                <br /> data to make better purchasing and <br />
                advertising decisions.
              </div>
            </div>
          </Fade>
          <Fade delay={800} duration={1000}>
            <div className="wwyContent">
              <img src={truck} alt="Spottr features" />
              <div className="wwyHeading">Leverage the Smart Biz Hub</div>
              <div className="wwyexp">
                To unlock 7x sales and reduce cost
                <br /> by up to 75% with our trusted
                <br />
                partners
              </div>
            </div>
          </Fade>

          <Fade delay={1100} duration={1000}>
            <div className="wwyContent">
              <img src={supply_chain} alt="Spottr features" />
              <div className="wwyHeading">Small Business Funding</div>
              <div className="wwyexp">
                Hit milestones and apply to any of our
                <br /> funding programs for grants, loans,
                <br /> crowdfund or investment
              </div>
            </div>
          </Fade>
        </div>
      </>
      <div className="big-bussiness">
        <div className="sme_txt">Big Business, Retail, Distributors</div>
        <div className="wwyDesc awaits-slider-l">
          <Fade delay={500} duration={1000}>
            <div className="wwyContent">
              <img src={sme} alt="Spottr" />
              <div className="wwyHeading w-100">Discover & influence</div>
              <div className="wwyexp">
                Consumer purchase intent and <br />
                make the best distribution decisions
                <br /> that supercharge sales
              </div>
            </div>
          </Fade>
          <Fade delay={800} duration={1000}>
            <div className="wwyContent">
              <img src={supply_chain} alt="Spottr features" />
              <div className="wwyHeading">Viral launch new products</div>
              <div className="wwyexp">
                By leveraging our viral launch ad
                <br /> campaign with location signal for
                <br /> your network
              </div>
            </div>
          </Fade>

          <Fade delay={1100} duration={1000}>
            <div className="wwyContent">
              <img src={truck} alt="Spottr features" />
              <div className="wwyHeading">Follow your consumers</div>
              <div className="wwyexp">
                Anywhere they go by linking your
                <br /> outlets and distribution network in
                <br /> order to retain loyalty
              </div>
            </div>
          </Fade>
        </div>
      </div>
    </div>
  );
};

export default Sme;
