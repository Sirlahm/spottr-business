import React from "react";
import { useMediaQuery } from "react-responsive";
import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import Globe from "components/Globe/globe";
import "./styles.css";
import Girl from "../../assets/avatarGirl.png";
import Boy from "../../assets/avatarBoy.png";
import Card1 from "../../assets/card1.png";
import Card2 from "../../assets/card2.png";

import GlobeMobile from "components/Globe/globeMobile";
import Navbar from "../Navbar";
import Playstore from "../../assets/playstore.svg";
import Apple from "../../assets/applestore.svg";
import TextSwap from "react-text-swap";

function Home() {
  const isBigScreen = useMediaQuery({ query: "(min-width: 1200px)" });
  const isTabletOrMobile = useMediaQuery({ query: "(max-width: 1200px)" });
  const notify = () =>
    toast.info("🚀🚀 Coming Soon !", {
      position: toast.POSITION.BOTTOM_RIGHT,
    });

  return (
    <div className="container-bg ">
      <Navbar />
      <Container className=" position-relative ">
        <div className=" s-globe">
          <GlobeMobile />
        </div>

        <div className=" d-flex p-50">
          <div className="flexRight ">
            <h1 className="captionText mb-4 ml poiret">97 billion</h1>
            <h1 className="captionText mb-4 textEffect p-50 poiret">
              <TextSwap
                strings={["Searches"]}
                // animationType="slideUp"
                // animationDuration="3s"
                // interval={1000}
              />
            </h1>

            <p className="subText mb-4">every month for a local business. </p>
            <a
              href="https://play.google.com/store/apps/details?id=com.spottr.android.app"
              className="checkout">
              <span className="link">Get Started</span>
            </a>
            <div className="d-flex justify-content-between appBox">
              <a
                href="https://play.google.com/store/apps/details?id=com.spottr.android.app"
                className="d-flex l-app align-items-center justify-content-center p-1 ">
                <div className=" m-2 ">
                  <img src={Playstore} alt="Appstore" />
                </div>
                <span>Google Play</span>
              </a>
              <Link
                to=""
                onClick={notify}
                className="d-flex l-app align-items-center  justify-content-center p-1">
                <div className=" m-2 ">
                  <img src={Apple} alt="Appstore" />
                </div>

                <span>App Store</span>
              </Link>
            </div>
          </div>
          <div className="a-banner-heroImg mt-4 ">
            <div className=" position-relative a-100">
              <div className="globeHome ">
                {isBigScreen && <Globe width={700} height={700} />}
                {isTabletOrMobile && <Globe />}
              </div>

              <div className="globeBoy">
                <img src={Boy} alt="Spottr" />
              </div>
              <div className="globeGirl">
                <img src={Girl} alt="Spottr" />
              </div>
              <div className="card1">
                <img src={Card1} alt="Spottr" />
              </div>
              <div className="card2">
                <img src={Card2} alt="Spottr" />
              </div>
            </div>
          </div>
        </div>

        <ToastContainer
          position="bottom-right"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
        />
      </Container>
    </div>
  );
}

export default Home;
