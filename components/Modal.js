import React, { useEffect, useState } from "react";
import {validateEmail, phonenumber} from '../utils/validate.js'

const Modal = ({setToggle, setFilter}) => {

  const [Phone, setPhone] = useState("");
  const [Email, setEmail] = useState("");
  const [submitButtonDisabled, setSubmitButtonDisabled] = useState(false);
  const [errorPhone, setErrorPhone] = useState("");
  const [errorEmail, setErrorEmail] = useState("");

  const handleModal = async () => {
    if (submitButtonDisabled) return;
    if (Email===""&&Phone==="") {
      setErrorEmail("Please enter your mobile number or email to continue");
      setErrorPhone("Please enter your mobile number or email to continue");
      return;
    }
    if (!validateEmail(Email)&&Phone==="") {
      setErrorEmail("Email is not valid");
      return;
    }
    if (!phonenumber(Phone)&&Email==="") {
      setErrorPhone("Phone number is not valid");
      return;
    }
    setErrorPhone("");
    setErrorEmail("");
    setSubmitButtonDisabled(true);
  };
  return (
    <>
      <div
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
              onClick={()=>{
                setToggle(false)
                setFilter('brightness(100%)')
              }}
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
                      disabled={Email!=="" && true}
                      onChange={(event) =>{
                        setPhone(event.target.value);
                        setSubmitButtonDisabled(false);
                      }
                    }
                    />
                    {errorPhone && <p className="errormessage" >{errorPhone}</p>}
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
                    disabled={Phone!=="" && true}
                      onChange={(event) =>{
                        setEmail(event.target.value);
                        setSubmitButtonDisabled(false);
                      }
                      }
                  />
                  {errorEmail && <p className="errormessage" >{errorEmail}</p>}
                </div>
                <div className="col text-center py-2">
                  <button
                    type="button"
                    className="btn btn-success btn-lg rtr-btn icon-btn px-5 "
                    id="studentForgotPasswordsubmit"
                    onClick={handleModal}
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
      </div>
    </>
  )
}
export default Modal;