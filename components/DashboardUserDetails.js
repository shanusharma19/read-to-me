import React, { useState } from "react";
import Lottie from "lottie-react";
import groovyWalkAnimation from "../animations/star.json";
import medalAnimation from "../animations/medal.json";
import Link from "next/link";
import Header from "./Header.js";
import HelpIcon from "./HelpIcon";

const DashboardUserDetails = ({setNotify}) => {
  return (
    <>    
        <div
          id="body"
          className="light-bg position-relative dash"
          data-aos-easing="ease"
          data-aos-duration="400"
          data-aos-delay="0"
          style={{ paddingBottom: "75px" }}
        >
          <Header />
          <div
            id="noti_Button"
            className="back-arrow-holder"
            onClick={() => {
              setNotify(true);
            }}
          >
            <img
              src="https://assets.englishhelper.com/righttoread/v8.79.38.20230215/assets/images/Group-4487.svg"
              alt=""
            />
            <span className="badge bg-c-red"></span>
          </div>

          <HelpIcon />

          <div className="points-icon-holder " data-url="earn-points">
            <Lottie
              style={{ width: "25px", transform: "translateY(-5%)" }}
              animationData={groovyWalkAnimation}
              loop={true}
            />
          </div>

          <div
            className="container-fluid green-gradient pt-3 pb-5 position-fixed"
            style={{
              top: "59px",
              left: "0",
              background: "#1a903d",
              background: "linear-gradient(0deg,#1a903d 0,#8bc34a 100%)",
            }}
          >
            <div className="row" id="profileHolder">
              <div className="col-3 pr-0">
                <div className="position-relative" id="changeAvatar">
                  <img
                    id="avtarPic"
                    alt=""
                    data-avatar="2.svg"
                    src="https://assets.englishhelper.com/righttoread/v8.79.38.20230215/assets/images/leaderboard/profilePic/2.svg"
                    className="rounded-circle border border-white w-100"
                    style={{ borderWidth: '3px !important' }}
                  />
                  <i
                    className="fa fa-pencil color-green position-absolute d-flex border border-white rounded-circle align-items-center justify-content-center bg-white"
                    style={{
                      width: "22px",
                      height: "22px",
                      bottom: "0",
                      right: "0",
                    }}
                  ></i>
                </div>
              </div>
              <div className="col-9">
                <h4 className="text-white mt-0 mb-3 text-ellipsis font-weight-normal">
                  <span id="userNamePlaceHolder">Shanu</span>
                </h4>
                <div style={{ transform: "translateX(10%)" }} className="row">
                  <div id="pointsStar" className="d-inline-flex pl-3 ">
                    <div className="row">
                      <div className="col-5 pr-0">
                        <div
                          
                          className="points-icon-holder "
                          data-url="earn-points"
                         
                        >
                          <Lottie
                            id="star"
                            style={{
                              width: "46px",
                              transform: "translateY(-16%) translateX(-416%)"
                            }}
                            animationData={groovyWalkAnimation}
                            loop={true}
                          />
                        </div>
                      </div>
                      <div
                        className="col pl-1 "
                        style={{ transform: "translateX(-4%)" }}
                      >
                        <h5 className=" mb-0" style={{ transform: "translateY(0%)" }}>
                          <a
                            id="earnedPointsLabel"
                            className="text-white "
                            data-url="leaderboard"
                          >
                            20
                          </a>
                        </h5>
                        <p>
                          <a className="text-white " data-url="leaderboard">
                            POINTS
                          </a>
                        </p>
                      </div>
                    </div>
                  </div>
                  <div
                    id="medalIcon"
                    className="d-inline-flex opacity-point-8 img-grayscale"
                    style={{ transform: "translateX(27%)" }}
                  >
                    <div className="row">
                      <div className="col-5 pr-0">
                        <div
                          className=""
                          data-url="medals"
                          style={{ width: "100%", display: "inline-flex" }}
                        >
                          <Lottie
                            style={{ width: "60px" }}
                            animationData={medalAnimation}
                            loop={true}
                          />
                        </div>
                      </div>
                      <div className="col pl-1">
                        <h5 className="mb-0">
                          <a
                            id="earnedMedalsLabel"
                            className="text-white "
                            data-url="medals"
                          >
                            00
                          </a>
                        </h5>
                        <p>
                          <a className="text-white " data-url="medals">
                            MEDALS
                          </a>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
    </>
  );
}
export default DashboardUserDetails;
