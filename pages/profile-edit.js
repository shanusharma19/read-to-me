import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import Header from "@/components/Header.js";
import Router from "next/router.js";
import  secureLocalStorage  from  "react-secure-storage";

const ProfileEdit = () => {
  const [User, setUser] = useState(null);

  useEffect(() => {
    var user = JSON.parse(secureLocalStorage.getItem("user"));
    if (user) {
      setUser(user);
    }
  }, []);

  const save = () => {
    secureLocalStorage.setItem("user", JSON.stringify(User));
  }

  return (
    <>
      <div
        id="body"
        className="light-bg position-relative dash"
        data-aos-easing="ease"
        data-aos-duration="400"
        data-aos-delay="0"
      >
        <Header />
        {User && (
          <div className="color2-bg">
            <div className="container-fluid">
              <div className="row">
                <div className="col my-3">
                  <div className="card rounded-lg shadow-sm">
                    <div className="card-body py-0 px-15 rounded-lg ">
                      <div className="row">
                        <div className="col">
                          <h1 className="h4 py-3 m-0 text-center font-weight-normal green-color">
                            Edit Profile
                          </h1>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col">
                          <p className="text-center">
                            <img src="https://assets.englishhelper.com/righttoread/v8.87.38.20230516/assets/images/profile-dummy.svg" />
                          </p>
                        </div>
                      </div>
                      <form
                        id="studentEditProfile"
                        name="studentEditProfile"
                        autoComplete="off"
                        noValidate="noValidate"
                      >
                        <div className="row">
                          <div className="col text-center">
                            <p
                              onClick={() => {
                                Router.push({ pathname: '/profile'})
                              }}
                              className="btn btn-outline-danger my-2 mx-1 edit-profile-btn"
                              id="gotoProfile"
                            >
                              Cancel
                            </p>
                            <button
                              onClick={() => {
                                save();
                                Router.push({ pathname: '/profile'})
                              }}
                              type="button"
                              className="btn btn-outline-success my-2 mx-1 edit-profile-btn"
                              id="studentEditProfilesubmit"
                            >
                              Save Changes
                            </button>
                          </div>
                        </div>
                        <div className="row  pt-4">
                          <div className="col">
                            <div className="form-group">
                              <label for="userPhone">Mobile Number</label>
                              <div className="intl-tel-input separate-dial-code">
                                <div className="flag-container">
                                  <div
                                    className="selected-flag"
                                    role="combobox"
                                    aria-owns="country-listbox"
                                    title="India: +91"
                                  >
                                    <div className="iti-flag in"></div>
                                    <div className="selected-dial-code">
                                      +91
                                    </div>
                                  </div>
                                </div>
                                <input
                                  onChange={(e) => {
                                    setUser((prev) => {
                                      const newState = {
                                        ...prev,
                                        user: {
                                          ...prev.user,
                                          userPhone: e.target.value,
                                        },
                                      };
                                      return newState;
                                    });
                                  }}
                                  autoComplete="off"
                                  type="text"
                                  name="userPhone"
                                  className="form-control"
                                  id="studentEditProfile_userPhone"
                                  data-countrycode="+91"
                                  value={User.user.userPhone}
                                  placeholder="Please enter your mobile number"
                                  data-intl-tel-input-id="0"
                                  style={{ paddingLeft: "74px" }}
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
                            <div className="form-group">
                              <label for="userMailId">Email ID</label>
                              <input
                                onChange={(e) => {
                                  setUser((prev) => {
                                    const newState = {
                                      ...prev,
                                      user: {
                                        ...prev.user,
                                        userMailId: e.target.value,
                                      },
                                    };
                                    return newState;
                                  });
                                }}
                                type="text"
                                role="presentation"
                                autoComplete="off"
                                name="userMailId"
                                className="form-control"
                                id="studentEditProfile_userMailId"
                                value={User.user.userMailId}
                                placeholder="Please enter your Email ID"
                              />
                            </div>
                            <div className="form-group" id="courseDiv">
                              <label for="course">Grade / Class </label>
                              {User && (
                                <select
                                  onChange={(e) => {
                                    setUser((prev) => {
                                      const newState = {
                                        ...prev,
                                        userInfo: {
                                          ...prev.userInfo,
                                          grade: e.target.value,
                                        },
                                      };
                                      return newState;
                                    });
                                  }}
                                  value={User.userInfo.grade}
                                  className="form-control"
                                  id="studentSelectGrade_course"
                                  name="grade"
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
                                  <option value="Grade 10" selected="">
                                    Grade 10
                                  </option>
                                  <option value="Grade 11">Grade 11</option>
                                  <option value="Grade 12">Grade 12</option>
                                </select>
                              )}
                            </div>

                            <div className="form-group" id="boardDiv">
                              <label for="course">School Board</label>

                              {User && (
                                <select
                                  onChange={(e) => {
                                    setUser((prev) => {
                                      const newState = {
                                        ...prev,
                                        userInfo: {
                                          ...prev.userInfo,
                                          board: e.target.value,
                                        },
                                      };
                                      return newState;
                                    });
                                  }}
                                  value={User.userInfo.board}
                                  className="form-control"
                                  id="studentSelectGrade_board"
                                  name="userBoard"
                                >
                                  <option value="Andhra Pradesh Board">
                                    Andhra Pradesh Board
                                  </option>
                                  <option value="Arunachal Pradesh Board">
                                    Arunachal Pradesh Board
                                  </option>
                                  <option value="Assam Board">
                                    Assam Board
                                  </option>
                                  <option value="Bihar Board">
                                    Bihar Board
                                  </option>
                                  <option value="CBSE Board" selected="">
                                    CBSE Board
                                  </option>
                                  <option value="Chhattisgarh Board">
                                    Chhattisgarh Board
                                  </option>
                                  <option value="Delhi Board">
                                    Delhi Board
                                  </option>
                                  <option value="Goa Board">Goa Board</option>
                                  <option value="Gujarat Board">
                                    Gujarat Board
                                  </option>
                                  <option value="Haryana Board">
                                    Haryana Board
                                  </option>
                                  <option value="Himachal Pradesh Board">
                                    Himachal Pradesh Board
                                  </option>
                                  <option value="J&amp;K Board">
                                    J&amp;K Board
                                  </option>
                                  <option value="Jharkhand Board">
                                    Jharkhand Board
                                  </option>
                                  <option value="Karnataka Board">
                                    Karnataka Board
                                  </option>
                                  <option value="Kerala Board">
                                    Kerala Board
                                  </option>
                                  <option value="Madhya Pradesh Board">
                                    Madhya Pradesh Board
                                  </option>
                                  <option value="Maharashtra Board">
                                    Maharashtra Board
                                  </option>
                                  <option value="Manipur Board">
                                    Manipur Board
                                  </option>
                                  <option value="Meghalaya Board">
                                    Meghalaya Board
                                  </option>
                                  <option value="Mizoram Board">
                                    Mizoram Board
                                  </option>
                                  <option value="Nagaland Board">
                                    Nagaland Board
                                  </option>
                                  <option value="Odisha Board">
                                    Odisha Board
                                  </option>
                                  <option value="Puducherry Board">
                                    Puducherry Board
                                  </option>
                                  <option value="Punjab Board">
                                    Punjab Board
                                  </option>
                                  <option value="Rajasthan Board">
                                    Rajasthan Board
                                  </option>
                                  <option value="Sikkim Board">
                                    Sikkim Board
                                  </option>
                                  <option value="Tamil Nadu Board">
                                    Tamil Nadu Board
                                  </option>
                                  <option value="Telangana Board">
                                    Telangana Board
                                  </option>
                                  <option value="Tripura Board">
                                    Tripura Board
                                  </option>
                                  <option value="Uttar Pradesh Board">
                                    Uttar Pradesh Board
                                  </option>
                                  <option value="Uttarakhand Board">
                                    Uttarakhand Board
                                  </option>
                                  <option value="West Bengal Board">
                                    West Bengal Board
                                  </option>
                                </select>
                              )}
                            </div>

                            <div className="form-group">
                              <label for="studentUdise">
                                School UDISE Code
                              </label>
                              <input
                              onChange={(e) => {
                                setUser((prev) => {
                                  const newState = {
                                    ...prev,
                                    userInfo: {
                                      ...prev.userInfo,
                                      udise: e.target.value,
                                    },
                                  };
                                  return newState;
                                });
                              }}
                                autoComplete="off"
                                type="text"
                                className="form-control remoteCheck school"
                                id="studentUdise"
                                name="rtmseSchoolCode"
                                value={User.userInfo.udise}
                                placeholder="Please enter your School UDISE code"
                              />
                            </div>

                            <div className="form-group">
                              <label for="state">School Location - State</label>
                              {User && (
                                <select
                                  onChange={(e) => {
                                    setUser((prev) => {
                                      const newState = {
                                        ...prev,
                                        userInfo: {
                                          ...prev.userInfo,
                                          state: e.target.value,
                                        },
                                      };
                                      return newState;
                                    });
                                  }}
                                  value={User.userInfo.state}
                                className="form-control"
                                id="state"
                                name="state"
                              >
                                <option value="ANDAMAN AND NICOBAR ISLANDS">
                                  ANDAMAN AND NICOBAR ISLANDS
                                </option>
                                <option value="ANDHRA PRADESH">
                                  ANDHRA PRADESH
                                </option>
                                <option value="ARUNACHAL PRADESH">
                                  ARUNACHAL PRADESH
                                </option>
                                <option value="ASSAM">ASSAM</option>
                                <option value="BIHAR">BIHAR</option>
                                <option value="CHANDIGARH">CHANDIGARH</option>
                                <option value="CHHATTISGARH">
                                  CHHATTISGARH
                                </option>
                                <option value="DADRA AND NAGAR HAVELI AND DAM">
                                  DADRA AND NAGAR HAVELI AND DAM
                                </option>
                                <option value="DELHI">DELHI</option>
                                <option value="GOA">GOA</option>
                                <option value="GUJARAT">GUJARAT</option>
                                <option value="HARYANA">HARYANA</option>
                                <option value="HIMACHAL PRADESH">
                                  HIMACHAL PRADESH
                                </option>
                                <option value="JAMMU AND KASHMIR">
                                  JAMMU AND KASHMIR
                                </option>
                                <option value="JHARKHAND">JHARKHAND</option>
                                <option value="KARNATAKA">KARNATAKA</option>
                                <option value="KERALA">KERALA</option>
                                <option value="LAKSHADWEEP">LAKSHADWEEP</option>
                                <option value="MADHYA PRADESH">
                                  MADHYA PRADESH
                                </option>
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
                                <option value="UTTAR PRADESH" selected="">
                                  UTTAR PRADESH
                                </option>
                                <option value="UTTARAKHAND">UTTARAKHAND</option>
                                <option value="WEST BENGAL">WEST BENGAL</option>
                                <option value="LADAKH">LADAKH</option>
                              </select>
                              )}
                            </div>

                            <div className="form-group">
                              <label for="userDistrict">
                                School Location - District
                              </label>
                              <select
                                className="form-control"
                                id="studentSelectGrade_userDistrict"
                                name="userDistrict"
                              >
                                <option value="0">
                                  Select your School Location - District
                                </option>
                              </select>
                            </div>

                            <div className="form-group d-none">
                              <label for="schoolName">School Name </label>
                              <input
                                autoComplete="off"
                                type="text"
                                className="form-control"
                                id="schoolName"
                                name="schoolName"
                                value=""
                                placeholder="Please enter your School UDISE code"
                                disabled=""
                              />
                            </div>
                          </div>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default ProfileEdit;
