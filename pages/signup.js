import React, { useEffect, useState } from "react";
import { validateEmail, phonenumber } from "../utils/validate.js";
import { useRouter } from "next/router";
import Header from "../components/Header.js";
export default function login() {

  const router = useRouter();
  const [Display, setDisplay] = useState('block');
  const [List, setList] = useState(null);
  const [Email, setEmail] = useState("");
  const [Name, setName] = useState("");
  const [Pass, setPass] = useState("");
  const [Board, setBoard] = useState("");
  const [Partner, setPartner] = useState("");
  const [Grade, setGrade] = useState("");
  const [Location, setLocation] = useState("");
  const [Enable, setEnable] = useState(false);
  const [Clear, setClear] = useState("0");

  const [submitButtonDisabled, setSubmitButtonDisabled] = useState(false);

  const [errorName, setErrorName] = useState("");
  const [errorPass, setErrorPass] = useState("");
  const [errorBoard, setErrorBoard] = useState("");
  const [errorPartner, setErrorPartner] = useState("");
  const [errorGrade, setErrorGrade] = useState("");
  const [errorLocation, setErrorLocation] = useState("");
  const [errorEmail, setErrorEmail] = useState("");

  useEffect(() => {
    setEnable(true);
  }, []);

  const handleSignup = async () => {
    if (submitButtonDisabled) return;
    if (!validateEmail(Email)) {
      if(Email==="") return;
      setErrorEmail("Email is not valid");
      return;
    }

    setErrorEmail("");
    setSubmitButtonDisabled(true);
  };

  return (
    <div
      id="body"
      className="light-bg position-relative"
      data-aos-easing="ease"
      data-aos-duration="400"
      data-aos-delay="0"
    >
      <Header />
      <span className="back-arrow-holder" onClick={() => router.back()}>
        <img
          src="https://assets.englishhelper.com/righttoread/v8.79.38.20230215/assets/images/back-icon.svg"
          alt=""
        />
      </span>
      <div className="container-fluid">
        <div className="row">
          <div className="col">
            <h1 className="h4 text-center green-color py-3 font-weight-normal">
              Please enter your details to signup
            </h1>
            <form
              autoComplete="off"
              id="studentSignup"
              name="studentSignup"
              className="p-3 rtr-form aos-init aos-animate"
              data-aos="fade-up"
              data-aos-delay="100"
              noValidate="novalidate"
            >
              <div className="form-group">
                <label for="userFullName">
                  Full Name <span className="color-red">*</span>
                </label>
                <input
                  type="text"
                  name="userFullName"
                  className="form-control"
                  id="studentSignup_userFullName"
                  placeholder="Enter your full name"
                  autoComplete="off"
                  onChange={(event) => {
                    if (event.target.value.length < 2){
                      setErrorName("Minimum length should be 2");
                      setSubmitButtonDisabled(true);
                    }
                    else {
                      setErrorName("");
                      setName(event.target.value);
                    }
                  }}
                />
                {errorName && <p className="errormessage">{errorName}</p>}
              </div>

              <div className="form-group d-none">
                <label for="userPhone">
                  Mobile Number <span className="color-red">*</span>
                </label>
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
                    type="hidden"
                    className="form-control"
                    id="studentSignup_userPhone"
                    name="userPhone"
                    aria-describedby="PhonelHelp"
                    placeholder="Enter your mobile number"
                    autoComplete="off"
                    data-intl-tel-input-id="0"
                    value="8192078934"
                    data-countrycode="+91"
                  />
                </div>
                <input
                  type="hidden"
                  id="registrationCountryCode"
                  name="registrationCountryCode"
                  data-countrycode=""
                  value="IN"
                  autoComplete="off"
                />
                <input type="hidden" id="isdCode" name="isdCode" value="+91" />
                <input
                  type="hidden"
                  id="userCountry"
                  name="userCountry"
                  value="India"
                />
              </div>

              <div className="form-group">
                <label for="userPassword">
                  Password <span className="color-red">*</span>
                </label>
                <input
                  autoComplete="off"
                  type="password"
                  name="userPassword"
                  className="form-control"
                  id="studentSignup_userPassword"
                  placeholder="Enter your password"
                  onChange={(event) => {
                    if (event.target.value.length === 0){
                      setErrorPass("Please enter your password to continue");
                      setSubmitButtonDisabled(true);
                    }
                    else {
                      setErrorPass("");
                      setPass(event.target.value);
                    }
                  }}
                />
                <input
                  type="hidden"
                  name="2XDFngL7rnncfarQVJI7"
                  className="salt"
                />
                <input
                  type="hidden"
                  name="B7zcZKmGPNFf992OQicd"
                  className="iv"
                />
                <input
                  type="hidden"
                  name="fDo9Qiusd5Cvy0w6PGes"
                  className="enkey"
                />
                <input
                  type="hidden"
                  id="_csrf"
                  name="_csrf"
                  value="KGbfZ90kfLAOs1vpMkf0"
                />
                {errorPass && <p className="errormessage">{errorPass}</p>}
              </div>

              <div className="form-group mb-3">
                <label for="studentSignup_board">
                  School Board <span className="text-danger">*</span>
                </label>
                <select
                  className="form-control"
                  id="studentSignup_board"
                  name="board"
                  onChange={(event) => {
                    if (event.target.value === "0") {
                      if(List!==null) setList((prev) => (prev.target.value = "0"));
                      setEnable(true);
                      setErrorBoard("Please select your board to continue");
                      setDisplay("block");
                      setSubmitButtonDisabled(true);
                    } else {
                      setDisplay("none");
                      setEnable(false);
                      setErrorBoard("");
                      setBoard(event.target.value);
                    }
                  }}
                >
                  <option value="0">Select your school board</option>
                  <option data-boardtype="G" value="Andhra Pradesh Board">
                    Andhra Pradesh Board
                  </option>
                  <option data-boardtype="G" value="Arunachal Pradesh Board">
                    Arunachal Pradesh Board
                  </option>
                  <option data-boardtype="G" value="Assam Board">
                    Assam Board
                  </option>
                  <option data-boardtype="G" value="Bihar Board">
                    Bihar Board
                  </option>
                  <option data-boardtype="G" value="CBSE Board">
                    CBSE Board
                  </option>
                  <option data-boardtype="G" value="Chhattisgarh Board">
                    Chhattisgarh Board
                  </option>
                  <option data-boardtype="G" value="Delhi Board">
                    Delhi Board
                  </option>
                  <option data-boardtype="G" value="Goa Board">
                    Goa Board
                  </option>
                  <option data-boardtype="G" value="Gujarat Board">
                    Gujarat Board
                  </option>
                  <option data-boardtype="G" value="Haryana Board">
                    Haryana Board
                  </option>
                  <option data-boardtype="G" value="Himachal Pradesh Board">
                    Himachal Pradesh Board
                  </option>
                  <option data-boardtype="G" value="J&amp;K Board">
                    J&amp;K Board
                  </option>
                  <option data-boardtype="G" value="Jharkhand Board">
                    Jharkhand Board
                  </option>
                  <option data-boardtype="G" value="Karnataka Board">
                    Karnataka Board
                  </option>
                  <option data-boardtype="G" value="Kerala Board">
                    Kerala Board
                  </option>
                  <option data-boardtype="G" value="Madhya Pradesh Board">
                    Madhya Pradesh Board
                  </option>
                  <option data-boardtype="G" value="Maharashtra Board">
                    Maharashtra Board
                  </option>
                  <option data-boardtype="G" value="Manipur Board">
                    Manipur Board
                  </option>
                  <option data-boardtype="G" value="Meghalaya Board">
                    Meghalaya Board
                  </option>
                  <option data-boardtype="G" value="Mizoram Board">
                    Mizoram Board
                  </option>
                  <option data-boardtype="G" value="Nagaland Board">
                    Nagaland Board
                  </option>
                  <option data-boardtype="G" value="Odisha Board">
                    Odisha Board
                  </option>
                  <option data-boardtype="G" value="Puducherry Board">
                    Puducherry Board
                  </option>
                  <option data-boardtype="G" value="Punjab Board">
                    Punjab Board
                  </option>
                  <option data-boardtype="G" value="Rajasthan Board">
                    Rajasthan Board
                  </option>
                  <option data-boardtype="G" value="Sikkim Board">
                    Sikkim Board
                  </option>
                  <option data-boardtype="G" value="Tamil Nadu Board">
                    Tamil Nadu Board
                  </option>
                  <option data-boardtype="G" value="Telangana Board">
                    Telangana Board
                  </option>
                  <option data-boardtype="G" value="Tripura Board">
                    Tripura Board
                  </option>
                  <option data-boardtype="G" value="Uttar Pradesh Board">
                    Uttar Pradesh Board
                  </option>
                  <option data-boardtype="G" value="Uttarakhand Board">
                    Uttarakhand Board
                  </option>
                  <option data-boardtype="G" value="West Bengal Board">
                    West Bengal Board
                  </option>
                  <optgroup
                    label="---------- Private School ----------"
                    boardtype="P"
                  >
                    <option data-boardtype="P" value="Kreedo">
                      Kreedo
                    </option>
                  </optgroup>
                </select>
                {errorBoard && <p className="errormessage">{errorBoard}</p>}
              </div>

              <div style={{'display': Display}}
              className="form-group" id="partnerCodeContainer">
                <label for="studentSignup_partnerCode">
                  Partner Code <span className="text-danger">*</span>
                </label>
                <input
                  autoComplete="off"
                  className="form-control"
                  type="text"
                  placeholder="Enter Partner Code"
                  id="studentSignup_partnerCode"
                  name="partnerCode"
                  onChange={(event) => {
                    if (event.target.value.length === 0){
                      setErrorPartner("Please enter the valid partner code to continue");
                      setSubmitButtonDisabled(true);
                    }
                    else {
                      setErrorPartner("");
                      setPartner(event.target.value);
                    }
                  }}
                />
                {errorPartner && <p className="errormessage">{errorPartner}</p>}
              </div>
              <div className="form-group">
                <label for="course">
                  Grade/Class <span className="color-red">*</span>
                </label>
                <select
                  className="form-control"
                  id="studentSignup_course"
                  name="course"
                  disabled={Enable}
                  onChange={(event) => {
                    setList(event);
                    if (event.target.value === "0") {
                      setErrorGrade("Please select your grade to continue");
                      setSubmitButtonDisabled(true);
                    } else {
                      setErrorGrade("");
                      setGrade(event.target.value);
                    }
                  }}
                >
                  <option value="0">Select your grade</option>
                  <option value="Grade 1">Grade 1</option>
                  <option value="Grade 2">Grade 2</option>
                  <option value="Grade 3">Grade 3</option>
                  <option value="Grade 4">Grade 4</option>
                  <option value="Grade 5">Grade 5</option>
                  <option value="Grade 6">Grade 6</option>
                  <option value="Grade 7">Grade 7</option>
                  <option value="Grade 8">Grade 8</option>
                  <option value="Grade 9">Grade 9</option>
                  <option value="Grade 10">Grade 10</option>
                  <option value="Grade 11">Grade 11</option>
                  <option value="Grade 12">Grade 12</option>
                </select>
                {errorGrade && <p className="errormessage">{errorGrade}</p>}
              </div>
              <div className="form-group mb-3">
                <label for="studentSignup_location">
                  School location <span className="text-danger">*</span>
                </label>
                <select
                  className="form-control"
                  id="studentSignup_location"
                  name="state"
                  onChange={(event) => {
                    if (event.target.value === "0"){
                      setErrorLocation(
                        "Please select your school location to continue"
                      );
                      setSubmitButtonDisabled(true);
                      } 
                    else {
                      setErrorLocation("");
                      setLocation(event.target.value);
                    }
                  }}
                >
                  <option value="0">Select your school location</option>
                  <option value="ANDAMAN AND NICOBAR ISLANDS">
                    ANDAMAN AND NICOBAR ISLANDS
                  </option>
                  <option value="ANDHRA PRADESH">ANDHRA PRADESH</option>
                  <option value="ARUNACHAL PRADESH">ARUNACHAL PRADESH</option>
                  <option value="ASSAM">ASSAM</option>
                  <option value="BIHAR">BIHAR</option>
                  <option value="CHANDIGARH">CHANDIGARH</option>
                  <option value="CHHATTISGARH">CHHATTISGARH</option>
                  <option value="DADRA AND NAGAR HAVELI AND DAM">
                    DADRA AND NAGAR HAVELI AND DAM
                  </option>
                  <option value="DELHI">DELHI</option>
                  <option value="GOA">GOA</option>
                  <option value="GUJARAT">GUJARAT</option>
                  <option value="HARYANA">HARYANA</option>
                  <option value="HIMACHAL PRADESH">HIMACHAL PRADESH</option>
                  <option value="JAMMU AND KASHMIR">JAMMU AND KASHMIR</option>
                  <option value="JHARKHAND">JHARKHAND</option>
                  <option value="KARNATAKA">KARNATAKA</option>
                  <option value="KERALA">KERALA</option>
                  <option value="LADAKH">LADAKH</option>
                  <option value="LAKSHADWEEP">LAKSHADWEEP</option>
                  <option value="MADHYA PRADESH">MADHYA PRADESH</option>
                  <option value="MAHARASHTRA">MAHARASHTRA</option>
                  <option value="MANIPUR">MANIPUR</option>
                  <option value="MEGHALAYA">MEGHALAYA</option>
                  <option value="MIZORAM">MIZORAM</option>
                  <option value="NAGALAND">NAGALAND</option>
                  <option value="ODISHA">ODISHA</option>
                  <option value="PUDUCHERRY (PONDICHERRY)">
                    PUDUCHERRY (PONDICHERRY)
                  </option>
                  <option value="PUNJAB">PUNJAB</option>
                  <option value="RAJASTHAN">RAJASTHAN</option>
                  <option value="SIKKIM">SIKKIM</option>
                  <option value="TAMIL NADU">TAMIL NADU</option>
                  <option value="TELANGANA">TELANGANA</option>
                  <option value="TRIPURA">TRIPURA</option>
                  <option value="UTTAR PRADESH">UTTAR PRADESH</option>
                  <option value="UTTARAKHAND">UTTARAKHAND</option>
                  <option value="WEST BENGAL">WEST BENGAL</option>
                </select>
                {errorLocation && (
                  <p className="errormessage">{errorLocation}</p>
                )}
              </div>

              <div className="form-group">
                <label for="userMailId">Email address (Optional)</label>
                <input
                  autoComplete="off"
                  type="text"
                  className="form-control remoteCheck email"
                  id="studentSignup_userMailId"
                  name="userMailId"
                  placeholder="Enter your email address"
                  // value=""
                  onChange={(event) => {
                    setEmail(event.target.value);
                    setSubmitButtonDisabled(false);
                  }}
                />
                {errorEmail && <p className="errormessage">{errorEmail}</p>}
              </div>

              <p>
                By continuing to use, you agree to the
                <a
                  href="https://www.englishhelper.com/dashboard/terms-conditions"
                  target="_blank"
                  className="text-blue"
                >
                  Terms and Conditions
                </a>
                of Service and the
                <a
                  href="https://www.englishhelper.com/dashboard/privacy"
                  target="_blank"
                  className="text-blue"
                >
                  Privacy Policy
                </a>
                .
              </p>
              <div className="col text-center py-2">
                <button
                  type="button"
                  id="studentSignupsubmit"
                  className="btn btn-success btn-lg rtr-btn icon-btn px-5"
                  onClick={handleSignup}
                  disabled={submitButtonDisabled}
                >
                  <img src="https://assets.englishhelper.com/righttoread/v8.79.38.20230215/assets/images/right-arrow.svg" />
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
