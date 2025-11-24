import React from "react";
import { Link } from "react-router-dom";
// import { FiBell } from "react-icons/fi";
import { BiArrowBack } from "react-icons/bi";
// import { IoAlertCircleOutline } from "react-icons/io";

import "./login2.css";

function Email() {
  return (
    <div className="auth2">
      <div className="row">
        <div className="col-lg-6 left"></div>
        <div className="col-lg-6 right">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="top-navbar">
                  <Link to="/password" className="btn btn-small btn-link">
                    <BiArrowBack class="back-arrow" />
                    <span className="ml-2 mt-5 back-text">Go Back</span>
                  </Link>
                </div>
                <h4 className="create-account-title">Create an account</h4>

                <form>
                  <div className="form-group">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Abdul"
                    />
                  </div>
                  <div className="form-group">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Mashir"
                    />
                  </div>
                  <div className="form-group with-icon">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Choose a username"
                    />
                    <div className="icon check">
                      <i class="fas fa-check"></i>
                    </div>
                  </div>

                  <p className="note mt-4 d-flex">
                    <div>left</div>
                    <div className="ml-2">
                      <span className="form-text">
                        Type in your correct name and use a good photo, make
                        sure it is clear so that it will increases your chance
                        of getting good gigs :)
                      </span>
                    </div>
                  </p>
                  <Link to="/">
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
