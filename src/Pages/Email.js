import React from "react";
import { Link } from "react-router-dom";
import { FiBell, FiAward, FiSearch } from "react-icons/fi";
import { BiArrowBack, BiStar } from "react-icons/bi";

import "./login.css";

function Email() {
  return (
    <div className="auth">
      <div className="row">
        <div className="col-lg-7 left">
          <h3 className="welcome">Welcome to</h3>
          <h2 className="spottr">Spottr</h2>
          <div className="row">
            <div className="col-lg-6 col-sm-12 col-md-12">
              <div className="body">
                <h4 className="dis-title">
                  <span className="icon ">
                    <FiAward />
                  </span>
                  <span className="ml-2">Discover Opportunities</span>
                </h4>
                <p>
                  Discover the amazing world of opportunities around you in the
                  spottR AI powered ecosystem.
                </p>
              </div>
            </div>
            <div className="col-lg-6 col-sm-12 col-md-12">
              <div className="body">
                <h4 className="dis-title">
                  <span className="icon">
                    <FiBell />
                  </span>
                  <span className="ml-2">In-app search notifications</span>
                </h4>
                <p>
                  Never miss a thing. get notified when someone is interested in
                  you.
                </p>
              </div>
            </div>
            <div className="col-lg-6 col-sm-12 col-md-12 mt-3">
              <div className="body">
                <h4 className="dis-title">
                  <span className="icon">
                    <BiStar />
                  </span>
                  <span className="ml-2">Search Opportunities</span>
                </h4>
                <p>
                  Advanced searched algprithms present the best way to find
                  anything of value
                </p>
              </div>
            </div>
            <div className="col-lg-6 col-sm-12 col-md-12 mt-3">
              <div className="body">
                <h4 className="dis-title">
                  <span className="icon">
                    <FiSearch />
                  </span>
                  <span className="ml-2 main-font">Search Response</span>
                </h4>
                <p>
                  Stay ahead of the competition with a custom qoute, reply to
                  searches. One of the ways businesses win with spottR
                </p>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-12 bottom">
              <p>
                Open your own account <i className="fas fa-arrow-right"></i>
              </p>
              <Link to="/sign-up" className="btn btn-small btn-auth">
                Sign up
              </Link>
            </div>
          </div>
        </div>

        <div className="col-lg-5 right">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="top-navbar">
                  <Link to="/otp" className="btn btn-small btn-link">
                    <BiArrowBack class="back-arrow" />
                    <span className="ml-2 mt-5 back-text">Go back</span>
                  </Link>
                </div>
                <h2 className="title">Create an account</h2>

                <form>
                  <div className="form-group">
                    <label htmlFor="">Email Address</label>
                    <input
                      type="email"
                      className="form-control"
                      placeholder="Enter a correct email address"
                    />
                  </div>

                  <div className="terms text-center">
                    By entering your phone, you agree to the{" "}
                    <Link to="/terms">Terms of Service</Link> &{" "}
                    <Link to="/privacy">Privacy Policy</Link>
                  </div>
                  <Link to="/password">
                    <button className="btn btn-small btn-primary btn-submit">
                      Continue
                    </button>
                  </Link>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Email;
