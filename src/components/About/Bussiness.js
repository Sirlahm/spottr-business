import React from "react";
import { Container } from "../../GlobalStyles/LoadingButton/style";
import arrow from "../../assets/Arrow.svg";
import "./styles.css";

const Bussiness = () => {
  return (
    <div className="bussiness-bg">
      <Container className="bussiness-wrapper">
        <p className="bussiness-heading">
          For Bussiness
          <span style={{ marginLeft: "50px" }}>
            <img src={arrow} alt="Spottr" />
          </span>
          {/* <span className="ovalAwait">
            <img src={Oval} alt="Oval" />
          </span> */}
        </p>
      </Container>
    </div>
  );
};

export default Bussiness;
