import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import Link from "next/link";
import Notification from "../components/Notification.js";
import Avatar from "../components/Avatar.js";
import BottomNav from "../components/BottomNav.js";
import LoginHeader from "../components/LoginHeader.js";
import Lottie from "lottie-react";
import groovyWalkAnimation from "../animations/star.json";
import leaderboardTrophy from "../animations/leaderboardTrophy.json";
import medalAnimation from "../animations/medal.json";
import {
  NOTIFY,
  PROFILE,
  TOGGLE,
  FILTER,
  BRIGHTNESS,
} from "../actions/learningPageActions.js";
import DashboardContent from "@/components/DashboardContent.js";
import Home from "@/components/Home.js";
import UDISEmodal from "@/components/UDISEmodal.js";

export default function leaderboard() {
  const [Toggle, setToggle] = useState(false);
  const dispatch = useDispatch();
  const { notify, profile, filter, toggle, brightness } = useSelector(
    (state) => state.learningPage
  );
  return (
    <>
      {toggle && <Avatar />}
      <div id="learn">
        {notify ? (
          <Notification />
        ) : (
          <>
            <div
              id="body"
              className="light-bg position-relative dash"
              data-aos-easing="ease"
              data-aos-duration="400"
              data-aos-delay="0"
              style={{ paddingBottom: "75px" }}
            >
              <LoginHeader />
              <div
                className="container-fluid green-gradient pt-3 pb-5 position-fixed"
                style={{ top: "59px", left: "0" }}
              >
                <div className="row" id="profileHolder">
                  <div className="col-3 pr-0">
                    <div className="position-relative" id="changeAvatar">
                      <img
                        id="avtarPic"
                        alt=""
                        data-avatar="2.svg"
                        src={profile}
                        className="rounded-circle border border-white w-100"
                        style={{ borderWidth: "3px !important" }}
                      />
                      <i
                        className="fa fa-pencil color-green position-absolute d-flex border border-white rounded-circle align-items-center justify-content-center bg-white"
                        style={{
                          width: "22px",
                          height: "22px",
                          bottom: "0",
                          right: "0",
                        }}
                        onClick={() => {
                          dispatch(FILTER("brightness(50%)"));
                          dispatch(TOGGLE(true));
                        }}
                      ></i>
                    </div>
                    <p className="text-white text-center mt-1 mb-0">Grade 12</p>
                  </div>

                  <div className="col-9">
                    <h4 className="text-white mt-0 mb-2 text-ellipsis font-weight-normal">
                      <span id="userNamePlaceHolder">Shanu</span>
                    </h4>
                    <p className="text-white mb-1">School Name: </p>
                    <p className="text-white">State: UTTAR PRADESH</p>
                  </div>
                </div>
              </div>
              <div
                id="scrollContainer"
                style={{ marginTop: "125px", paddingBottom: "40px" }}
              >
                <div
                  className="container-fluid bg-light position-relative pt-3 scroll-container"
                  style={{
                    borderTopLeftRadius: "15px",
                    borderTopRightRadius: "15px",
                    boxShadow: "rgba(99, 99, 99, 0.2) 0px 2px 8px 0px",
                  }}
                >
                  <div className="row mb-3 justify-content-center">
                    <div className="col-2">
                      <div
                        className="progress"
                        style={{ height: "5px", backgroundColor: "#ddd" }}
                      >
                        <div
                          className="progress-bar"
                          role="progressbar"
                          aria-valuenow="0"
                          aria-valuemin="0"
                          aria-valuemax="100"
                        ></div>
                      </div>
                    </div>
                  </div>
                  <div className="row" style={{ background: "#fafafa" }}>
                    <div className="col">
                      <h5 className="pb-2 pt-0 mb-0">Filter your rank by:</h5>
                    </div>
                  </div>
                  <div className="row" style={{ background: "#fafafa" }}>
                    <div
                      className="col-12 px-0 py-2 d-flex"
                      style={{ overflowX: "auto" }}
                    >
                      <div className="d-flex" style={{ flexWrap: "nowrap" }}>
                        <Link className="filterButton" href="#updateUDISEPopup">
                          <span className="bg-green text-white rounded-pill px-4 py-2 white-space-no-wrap mx-1">
                            INDIA
                          </span>
                        </Link>
                        <Link
                          className="filterButton"
                          data-toggle="modal"
                          href="#updateUDISEPopup"
                          onClick={() => {
                            setToggle(true);
                            dispatch(
                              BRIGHTNESS("rgb(0,0,0,0.5)")
                            );
                          }}
                        >
                          <span className=" ececec rounded-pill px-4 py-2 white-space-no-wrap mr-1">
                            STATE
                          </span>
                        </Link>
                        <Link
                          className="filterButton"
                          data-toggle="modal"
                          href="#updateUDISEPopup"
                          onClick={() => {
                            setToggle(true);
                            dispatch(
                              BRIGHTNESS("rgb(0,0,0,0.5)")
                            );
                          }}
                        >
                          <span className=" ececec rounded-pill px-4 py-2 white-space-no-wrap mr-1">
                            DISTRICT
                          </span>
                        </Link>
                        <Link
                          className="filterButton"
                          data-toggle="modal"
                          href="#updateUDISEPopup"
                          onClick={() => {
                            setToggle(true);
                            dispatch(
                              BRIGHTNESS("rgb(0,0,0,0.5)")
                            );
                          }}
                        >
                          <span className=" ececec rounded-pill px-4 py-2 white-space-no-wrap mr-1">
                            SCHOOL
                          </span>
                        </Link>
                      </div>
                    </div>
                  </div>
                  <div className="bg-white shadow my-3 py-3 mx-n3">
                    <div
                      className="row border-bottom mb-1"
                      style={{ marginRight: "0px" }}
                    >
                      <div
                        style={{ paddingRight: "0px" }}
                        className="col-12 d-flex align-items-center justify-content-center"
                      >
                        <span style={{ width: "70px", display: "inline-flex" }}>
                          <Lottie
                            style={{ width: "70px" }}
                            animationData={leaderboardTrophy}
                            loop={true}
                          />
                        </span>
                        <span className="h2 color-orange font-weight-bold pl-1 mb-0">
                          59
                        </span>
                      </div>
                      <div style={{ paddingRight: "0px" }} className="col-12">
                        <p className="text-center font-weight-bold mt-2 mb-2">
                          YOUR RANK
                        </p>
                      </div>
                    </div>
                    <div className="" style={{ display: "flex" }}>
                      <div className="col d-flex align-items-center justify-content-center border-right">
                        <div className="row">
                          <div className="col-12 d-flex align-items-center justify-content-center ">
                            <span style={{ display: "inline-flex" }}>
                              <Lottie
                                id="star"
                                style={{
                                  width: "46px",
                                }}
                                animationData={groovyWalkAnimation}
                                loop={true}
                              />
                            </span>
                            <span
                              id="earnedPointsLabel"
                              className="h3 color-orange font-weight-bold pl-1 mb-0"
                            >
                              20
                            </span>
                          </div>
                          <div className="col-12">
                            <p className="text-center font-weight-bold mt-2 mb-0">
                              YOUR POINTS
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="col d-flex align-items-center justify-content-center">
                        <div className="row">
                          <div
                            style={{ flexWrap: "wrap" }}
                            className="col-12 d-flex align-items-center justify-content-center opacity-point-8 img-grayscale"
                          >
                            <span style={{ display: "inline-flex" }}>
                              <Lottie
                                style={{ width: "50px" }}
                                animationData={medalAnimation}
                                loop={true}
                              />
                            </span>
                            <span
                              id="earnedMedalsLabel"
                              className="h3 color-orange font-weight-bold pl-1 mb-0"
                            >
                              00
                            </span>
                            <div className="">
                              <p className="text-center font-weight-bold mt-2 mb-0">
                                YOUR MEDALS
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="border-top mt-1">
                      <div className="col d-flex align-items-center justify-content-center">
                        <p className="text-center mb-0 pt-3 text-muted">
                          Share Your Rank With Your Friends{" "}
                          <i
                            id="shareButtons"
                            className=" ml-2 shadow-sm fa fa-share-alt d-inline-flex bg-green rounded-circle text-white align-items-center justify-content-center social-share"
                            style={{ width: "30px", height: "30px" }}
                          ></i>
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col d-flex align-items-center justify-content-center px-1">
                      <Link
                        href="earn-points"
                        className="btn btn-success btn-lg rtr-btn icon-btn text-white py-3 px-2"
                        style={{ fontSize: "1rem" }}
                      >
                        WIN MORE POINTS
                      </Link>
                    </div>
                    <div className="col d-flex align-items-center justify-content-center px-1">
                      <Link
                        href="medals"
                        className="btn btn-warning btn-lg rtr-btn icon-btn text-white py-3 px-2"
                        style={{ fontSize: "1rem" }}
                      >
                        WIN MORE MEDALS
                      </Link>
                    </div>
                  </div>

                  <div className="row mt-3">
                    <div className="col-12" style={{ background: "#e0e0e0" }}>
                      <h5 className="text-center font-weight-bold py-3 m-0">
                        ReadToMe Toppers
                      </h5>
                    </div>
                  </div>

                  <div className="row bg-white">
                    <div className="col-12">
                      <div className="row align-items-center">
                        <div className="col-2 py-2 pr-0 pl-1">
                          <h5 className="text-center green-color font-weight-bold m-0">
                            1
                          </h5>
                        </div>

                        <div className="col-10 py-2 d-flex px-0 justify-content-end">
                          <div className="row w-100 m-0 align-items-center">
                            <div className="col-2 px-0 pl-1">
                              <img
                                alt=""
                                src="https://assets.englishhelper.com/righttoread/v8.83.38.20230404/assets/images/leaderboard/profilePic/12.svg"
                                className="w-100"
                              />
                            </div>
                            <div className="col-8 px-0">
                              <div className="ml-1">
                                <p className="green-color font-weight-bold mb-1 text-ellipsis">
                                  Ayaz Patel
                                </p>
                                <p className="mb-1 small">
                                  <span>
                                    <img
                                      src="https://assets.englishhelper.com/righttoread/v8.83.38.20230404/assets/images/point-star.svg"
                                      alt=""
                                      style={{
                                        height: "15px",
                                        marginRight: "4px",
                                      }}
                                    />
                                    24544 Points
                                  </span>
                                  <span style={{ marginLeft: "4px" }}>
                                    <img
                                      src="https://assets.englishhelper.com/righttoread/v8.83.38.20230404/assets/images/toppers-medal.svg"
                                      alt=""
                                      style={{
                                        height: "15px",
                                        marginRight: "4px",
                                      }}
                                    />
                                    2 Medals
                                  </span>
                                </p>
                              </div>
                            </div>
                            <div className="col-2 pl-0 pr-1 text-center">
                              <img
                                alt=""
                                src="https://assets.englishhelper.com/righttoread/v8.83.38.20230404/assets/images/leaderboard/RTM-topperGold.svg"
                                style={{ width: "32px" }}
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </>
        )}
      </div>
      {Toggle && <UDISEmodal setToggle={setToggle} />}
      {!notify && <BottomNav />}
    </>
  );
}
