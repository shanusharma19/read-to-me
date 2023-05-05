import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Header from "../components/Header.js";
import Modal from "../components/Modal.js";
import encryptPasswordField from "../utils/Encryption.js";
import generateString from "../utils/generate.js";
import { useRouter } from "next/router";

export default function loginPassword() {
  const { router, push } = useRouter();
  const [Filter, setFilter] = useState("brightness(100%)");
  const [Toggle, setToggle] = useState(false);
  const [Password, setPassword] = useState("");
  const [submitButtonDisabled, setSubmitButtonDisabled] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");

  const fetcher = async () => {
    const options = {
      method: "POST",
      headers: {
        "content-Type": "application/json; charset=UTF-8",
        Accept: "application/json",
        client_secret:
          "$2a$11$xLyxIevALWSEAkAekjmELuSqXIdF8gIhmKWOev9ywjiyrT0PQspty",
        client_id: "righttoread",
      },
      body: JSON.stringify({
        visitorSessionId: "0fa94b21-ca37-47b5-a999-27309cfa4d37",
        userPassword: encryptPasswordField(Password),
        // userPassword: "85QUyhjn9L10JwtL+37wMQ==",
        changeLanguage: false,
        pwd_salt: (function(){ return document.querySelector("meta[name='pwd_salt']").getAttribute('content')})(),
        // pwd_salt: "e8c90f35981b5d447878aa11b5e7beab",
        ipAddress: "127.0.0.1",
        _csrf: "usZsiIfEXfXrki8TKptL",
        sessionId: "0fa94b21-ca37-47b5-a999-27309cfa4d37",
        isdCode: "+91",
        locale: "en_US",
        registrationCountryCode: "IN",
        userCountry: "India",
        provider: "righttoread",
        pwd_iv: (function(){ return document.querySelector("meta[name='pwd_iv']").getAttribute('content')})(),
        // pwd_iv: "cadb0e1bde154d25a0eddd68d2dabd58",
        userLoginName: "2232564924",
        en_key: (function(){ return document.querySelector("meta[name='_ek']").getAttribute('content')})(),
        // en_key: "gze7ZkrYTdACpMx7k7Ua",
      }),
    };
    const res = await fetch("/checkLogin", options);
    const data = await res.json();
    console.log(encryptPasswordField(Password));
    console.log(options);

    if ("errorMsg" in data) push("/login-password");
    else push("/learningChannel");
  };

  const handleLogin = async () => {
    if (submitButtonDisabled) return;
    if (Password === "") {
      setErrorMsg("Please enter your password to continue");
      setSubmitButtonDisabled(true);
      return;
    } else if (Password.length < 4) {
      setErrorMsg(
        "This password is too short. Please enter at least 4 characters."
      );
      setSubmitButtonDisabled(true);
      return;
    }
    setErrorMsg("");
    setSubmitButtonDisabled(true);
    fetcher();
  };

  return (
    <>
      {Toggle && <Modal setFilter={setFilter} setToggle={setToggle} />}
      <div
        id="body1"
        className="bod"
        className="light-bg position-relative"
        data-aos-easing="ease"
        data-aos-duration="400"
        data-aos-delay="0"
        style={{ filter: Filter }}
      >
        <Header />

        <span className="back-arrow-holder" onClick={() => push('/login')}>
          <img
            src="https://assets.englishhelper.com/righttoread/v8.79.38.20230215/assets/images/back-icon.svg"
            alt=""
          />
        </span>

        <div className="container-fluid">
          <div
            className="row py-3 text-center aos-init aos-animate"
            data-aos="fade-up"
            data-aos-delay="50"
          >
            <div id="extra" className="col text-center">
              <img
                src="https://assets.englishhelper.com/righttoread/v8.79.38.20230215/assets/images/password-img.svg"
                className="img-vh-36"
                alt=""
              />
            </div>
          </div>
        </div>
        <div className="container-fluid">
          <div
            className="row aos-init aos-animate"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            <div className="col">
              <form
                className="px-3 rtr-form"
                id="studentPassword"
                autoComplete="off"
                noValidate="noValidate"
                data-gtm-form-interact-id="0"
              >
                <div className="form-group">
                  <label for="userPassword">
                    Password <span className="color-red">*</span>
                  </label>
                  <input
                    autoComplete="off"
                    type="password"
                    className="form-control"
                    id="studentPassword_userPassword"
                    name="userPassword"
                    aria-describedby="passwordHelp"
                    placeholder="Enter your password"
                    data-gtm-form-interact-field-id="0"
                    aria-required="true"
                    aria-invalid="false"
                    onChange={(event) => {
                      if (event.target.value.length === 0) {
                        setErrorMsg("Please enter your password to continue");
                        setSubmitButtonDisabled(true);
                      } else {
                        setErrorMsg("");
                        setPassword(event.target.value);
                        setSubmitButtonDisabled(false);
                      }
                    }}
                  />
                  <input
                    type="hidden"
                    name="YsJ7IGfxhzHNoYprRX3t"
                    className="salt"
                  />
                  <input
                    type="hidden"
                    name="4wiR8Jq5kpyxHnaQX9YT"
                    className="iv"
                  />
                  <input
                    type="hidden"
                    name="7ro2jt7LsfrP5xrWytxP"
                    className="enkey"
                  />
                  <input
                    type="hidden"
                    id="_csrf"
                    name="_csrf"
                    value="YC3w78VE0ZCVDYEBjYL8"
                  />
                  {errorMsg && <p className="errormessage">{errorMsg}</p>}
                </div>

                <p
                  className="text-right text-blue"
                  onClick={() => {
                    setFilter("brightness(50%)");
                    setToggle(true);
                  }}
                >
                  <span data-toggle="modal" data-target="#forgotPasswordModal">
                    Forgot Password?
                  </span>
                </p>
                <div className="col text-center py-2">
                  <button
                    type="button"
                    className="btn btn-success btn-lg rtr-btn icon-btn px-5 "
                    id="studentPasswordsubmit"
                    onClick={handleLogin}
                    disabled={submitButtonDisabled}
                  >
                    <img
                      src="https://assets.englishhelper.com/righttoread/v8.79.38.20230215/assets/images/right-arrow.svg"
                      alt=""
                    />
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>

        {/* <!-- Modal --> */}
        <div
          className="modal fade"
          id="forgotPasswordModal"
          data-backdrop="static"
          tabindex="-1"
          role="dialog"
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog  modal-dialog-centered" role="document">
            <div className="modal-content">
              <button
                type="button"
                className="close sticky-close"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">×</span>
              </button>
              <div className="modal-header bg-green d-block ">
                <p className="w-100 d-block text-center">
                  <img
                    src="https://assets.englishhelper.com/righttoread/v8.79.38.20230215/assets/images/exclamation.svg"
                    alt=""
                  />
                </p>
                <h5 className="modal-title w-100 d-block  text-center text-white">
                  Forgot password?
                </h5>
              </div>
              <div className="modal-body">
                <form
                  className="px-3 rtr-form"
                  id="studentForgotPassword"
                  autoComplete="off"
                  noValidate="noValidate"
                >
                  <div className="form-group hideforglobal">
                    <label for="userPhone">Registered mobile number</label>
                    <div className="intl-tel-input separate-dial-code">
                      <div className="flag-container">
                        <div
                          className="selected-flag"
                          role="combobox"
                          aria-owns="country-listbox"
                          title="India: +91"
                        >
                          <div className="iti-flag in"></div>
                          <div className="selected-dial-code">+91</div>
                        </div>
                      </div>
                      <input
                        autoComplete="off"
                        type="text"
                        className="form-control"
                        id="studentForgotPassword_userPhone"
                        name="userPhone"
                        data-countrycode="+91"
                        aria-describedby="mobileNumberHelp"
                        placeholder="Enter your mobile number"
                        data-intl-tel-input-id="0"
                      />
                    </div>
                    <input
                      type="hidden"
                      id="registrationCountryCode"
                      name="registrationCountryCode"
                      value="IN"
                    />
                    <input
                      type="hidden"
                      id="isdCode"
                      name="isdCode"
                      value="+91"
                    />
                    <input
                      type="hidden"
                      id="userCountry"
                      name="userCountry"
                      value="India"
                    />
                  </div>
                  <p className="text-center my-3 hideforglobal">OR</p>
                  <div className="form-group">
                    <label for="userMailId" className="w-100">
                      Email address
                    </label>
                    <input
                      autoComplete="off"
                      type="text"
                      className="form-control"
                      role="presentation"
                      id="studentForgotPassword_userMailId"
                      name="userMailId"
                      aria-describedby="emailHelp"
                      placeholder="Enter your email address"
                    />
                  </div>
                  <div className="col text-center py-2">
                    <button
                      type="button"
                      className="btn btn-success btn-lg rtr-btn icon-btn px-5 "
                      id="studentForgotPasswordsubmit"
                    >
                      <img
                        src="https://assets.englishhelper.com/righttoread/v8.79.38.20230215/assets/images/right-arrow.svg"
                        alt=""
                      />
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>

        {/* <!--Success Modal --> */}
        <div
          className="modal fade"
          id="successModal"
          data-backdrop="static"
          tabindex="-1"
          role="dialog"
          aria-labelledby="exampleModalLabel1"
          aria-hidden="true"
        >
          <div className="modal-dialog  modal-dialog-centered" role="document">
            <div className="modal-content">
              <div className="modal-header bg-green d-block ">
                <p className="w-100 d-block text-center">
                  <img
                    src="https://assets.englishhelper.com/righttoread/v8.79.38.20230215/assets/images/details-sent.svg"
                    alt=""
                  />
                </p>
                <h3 className="modal-title w-100 d-block  text-center text-white">
                  Details sent
                </h3>
              </div>
              <div className="modal-body">
                <h5 className="text-center my-5">
                  Login details sent successfully to your registered mobile
                  number!
                </h5>
              </div>
              <div className="modal-footer border-top-0 d-flex justify-content-center">
                <button
                  type="button"
                  className="btn btn-success btn-lg rtr-btn mx-4 py-2 px-4 w-25"
                  data-dismiss="modal"
                  id="successRight"
                  name="successRight"
                >
                  <img
                    src="https://assets.englishhelper.com/righttoread/v8.79.38.20230215/assets/images/icon-right.svg"
                    alt=""
                  />
                </button>
              </div>
            </div>
          </div>
        </div>
        {/* <!--Error Modal --> */}
        <div
          className="modal fade"
          id="errorModal"
          data-backdrop="static"
          tabindex="-1"
          role="dialog"
          aria-labelledby="exampleModalLabel2"
          aria-hidden="true"
        >
          <div className="modal-dialog  modal-dialog-centered" role="document">
            <div className="modal-content">
              <div className="modal-header bg-red d-block ">
                <p className="w-100 d-block text-center">
                  <img
                    src="https://assets.englishhelper.com/righttoread/v8.79.38.20230215/assets/images/exclamation.svg"
                    alt=""
                  />
                </p>
                <h3 className="modal-title w-100 d-block  text-center text-white">
                  ERROR!
                </h3>
              </div>
              <div className="modal-body">
                <h5 className="text-center my-5">Sorry! Wrong Password.</h5>
                <br />
                Please try again!
              </div>
              <div className="modal-footer border-top-0 d-flex justify-content-center">
                <button
                  type="button"
                  className="btn btn-success btn-lg rtr-btn mx-4 py-2 px-4 w-50"
                  data-dismiss="modal"
                  id="tryAgain"
                  name="tryAgain"
                >
                  TRY AGAIN
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
