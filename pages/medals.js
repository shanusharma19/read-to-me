import BottomNav from "@/components/BottomNav.js";
import DashboardUserDetails from "@/components/DashboardUserDetails";
import React, { useState } from "react";
import { useSelector } from "react-redux";
import Avatar from "../components/Avatar.js";
import Notification from "../components/Notification.js";

const medals = () => {
  const { notify, toggle } = useSelector((state) => state.learningPage);
  return (
    <>
      {toggle && <Avatar />}
      {notify ? (
        <Notification />
      ) : (
        <>
          <DashboardUserDetails />
          <div
            id="scrollContainer"
            style={{ marginTop: "54px", paddingBottom: "40px" }}
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

              <div className="row" style={{ background: "fafafa" }}>
                <div className="col-12 mt-2">
                  <h5 className="pb-1 pt-0 mb-0">Medals for Star Readers</h5>
                </div>
                <div
                  className="col-12 px-0 py-2 d-flex"
                  style={{
                    overflowX: "auto",
                    scrollSnapType: "x mandatory",
                    scrollBehavior: "smooth",
                  }}
                >
                  <div className="d-flex" style={{ flexWrap: "nowrap" }}>
                    <div
                      data-redirecturl="ReadToMe"
                      className="position-relative ml-3 bg-white rounded rounded-lg shadow-sm px-0 pt-5 white-space-no-wrap showMedalPopup"
                      style={{ width: "60vw" }}
                      data-category="MedalsforStarReaders"
                      data-status="inProgress"
                      data-maxvalue="60"
                    >
                      <div className="px-3 text-center">
                        <div className="px-5 mb-3">
                          <span className="position-relative d-block">
                            <img
                              className="medalType w-100"
                              data-medaltype="bronze"
                              src="https://assets.englishhelper.com/righttoread/v8.79.38.20230215/assets/images/leaderboard/GrayedMedalCard.svg"
                              alt=""
                            />
                          </span>
                        </div>

                        <div
                          className="progress my-2 mb-3"
                          style={{ height: "8px" }}
                        ></div>
                      </div>
                      <div className="bg-grey text-white text-center rounded-lg py-2 top-radius-0">
                        <p className="mb-0 medalName">Rising Star</p>
                      </div>
                    </div>

                    <div
                      data-redirecturl="ReadToMe"
                      className="position-relative ml-3 bg-white rounded rounded-lg shadow-sm px-0 pt-5 white-space-no-wrap showMedalPopup"
                      style={{ width: "60vw" }}
                      data-category="MedalsforStarReaders"
                      data-status="inProgress"
                      data-maxvalue="300"
                    >
                      <div className="px-3 text-center">
                        <div className="px-5 mb-3">
                          <span className="position-relative d-block">
                            <img
                              className="medalType w-100"
                              data-medaltype="silver"
                              src="https://assets.englishhelper.com/righttoread/v8.79.38.20230215/assets/images/leaderboard/GrayedMedalCard.svg"
                              alt=""
                            />
                          </span>
                        </div>

                        <div
                          className="progress my-2 mb-3"
                          style={{ height: "8px" }}
                        ></div>
                      </div>
                      <div className="bg-grey  text-white text-center rounded-lg py-2 top-radius-0">
                        <p className="mb-0 medalName">Mega Star</p>
                      </div>
                    </div>

                    <div
                      data-redirecturl="ReadToMe"
                      className="position-relative ml-3 bg-white rounded rounded-lg shadow-sm px-0 pt-5 white-space-no-wrap showMedalPopup"
                      style={{ width: "60vw" }}
                      data-category="MedalsforStarReaders"
                      data-status="inProgress"
                      data-maxvalue="1000"
                    >
                      <div className="px-3 text-center">
                        <div className="px-5 mb-3">
                          <span className="position-relative d-block">
                            <img
                              className="medalType w-100"
                              data-medaltype="gold"
                              src="https://assets.englishhelper.com/righttoread/v8.79.38.20230215/assets/images/leaderboard/GrayedMedalCard.svg"
                              alt=""
                            />
                          </span>
                        </div>

                        <div
                          className="progress my-2 mb-3"
                          style={{ height: "8px" }}
                        ></div>
                      </div>
                      <div className="bg-grey  text-white text-center rounded-lg py-2 top-radius-0">
                        <p className="mb-0 medalName">Super Star</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
      {!notify && <BottomNav />}
    </>
  );
};

export default medals;
