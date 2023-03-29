import React, { useState } from "react";
import Lottie from "lottie-react";
import Trophy from "../animations/trophy.json";
import Link from "next/link";
import BottomNav from "./BottomNav";
const DashboardContent = () => {
  return (
    <>
      <div id="scrollContainer" style={{ marginTop: "54px" }}>
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
          <div
            className="row aos-init aos-animate"
            data-aos="fade-up"
            data-aos-delay="10"
            data-aos-offset="0"
            data-aos-id="boardBlock"
          >
            <div className="col pr-2">
              <form
                id="studentEditBoard"
                name="studentEditBoard"
                className="bg-white novalidate mb-0 px-2 py-1 border-dropdown"
                data-toggle="popover"
              >
                <label className="wrap">
                  <select
                    name="board-dropdown"
                    id="board-dropdown"
                    className="dropdown w-100 pr-1 bg-white"
                  >
                    <option value="Andhra Pradesh Board">
                      Andhra Pradesh Board
                    </option>
                    <option value="Arunachal Pradesh Board">
                      Arunachal Pradesh Board
                    </option>
                    <option value="Assam Board">Assam Board</option>
                    <option value="Bihar Board">Bihar Board</option>
                    <option selected="" value="CBSE Board">
                      CBSE Board
                    </option>
                    <option value="Chhattisgarh Board">
                      Chhattisgarh Board
                    </option>
                    <option value="Delhi Board">Delhi Board</option>
                    <option value="Goa Board">Goa Board</option>
                    <option value="Gujarat Board">Gujarat Board</option>
                    <option value="Haryana Board">Haryana Board</option>
                    <option value="Himachal Pradesh Board">
                      Himachal Pradesh Board
                    </option>
                    <option value="J&amp;K Board">J&amp;K Board</option>
                    <option value="Jharkhand Board">Jharkhand Board</option>
                    <option value="Karnataka Board">Karnataka Board</option>
                    <option value="Kerala Board">Kerala Board</option>
                    <option value="Madhya Pradesh Board">
                      Madhya Pradesh Board
                    </option>
                    <option value="Maharashtra Board">Maharashtra Board</option>
                    <option value="Manipur Board">Manipur Board</option>
                    <option value="Meghalaya Board">Meghalaya Board</option>
                    <option value="Mizoram Board">Mizoram Board</option>
                    <option value="Nagaland Board">Nagaland Board</option>
                    <option value="Odisha Board">Odisha Board</option>
                    <option value="Puducherry Board">Puducherry Board</option>
                    <option value="Punjab Board">Punjab Board</option>
                    <option value="Rajasthan Board">Rajasthan Board</option>
                    <option value="Sikkim Board">Sikkim Board</option>
                    <option value="Tamil Nadu Board">Tamil Nadu Board</option>
                    <option value="Telangana Board">Telangana Board</option>
                    <option value="Tripura Board">Tripura Board</option>
                    <option value="Uttar Pradesh Board">
                      Uttar Pradesh Board
                    </option>
                    <option value="Uttarakhand Board">Uttarakhand Board</option>
                    <option value="West Bengal Board">West Bengal Board</option>
                  </select>
                </label>
              </form>
            </div>
            <div className="col pl-2">
              <form
                id="studentEditProfile"
                name="studentEditProfile"
                className="bg-white novalidate mb-0 px-2 py-1 border-dropdown"
                data-toggle="popover"
              >
                <label className="wrap">
                  <select
                    name="grade-dropdown"
                    id="grade-dropdown"
                    className="dropdown w-100 pr-1 bg-white"
                  >
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
                    <option value="Grade 12" selected="">
                      Grade 12
                    </option>
                  </select>
                </label>
              </form>
            </div>
          </div>
          <div
            className="row mt-3 mb-2 aos-init aos-animate"
            data-aos="fade-up"
            data-aos-delay="150"
            data-aos-offset="0"
            id="udiseUpdateDiv"
          >
            <div
              className="col d-flex align-items-center justify-content-center"
              id="udiseUpdate"
            >
              <form
                id="studentEditUdise"
                name="studentEditUdise"
                className="mb-0"
                noValidate="novalidate"
              >
                <div className="input-group">
                  <input
                    autoComplete="off"
                    type="text"
                    id="studentEditUdise_updateUdise"
                    name="studentEditUdise_updateUdise"
                    className="form-control school-code border border-success border-right-0"
                    style={{ backgroundColor: "#fff" }}
                    aria-label="studentEditUdise Input"
                    aria-describedby="studentEditUdisesubmit"
                    placeholder="अपना स्कूल यूडीज़ कोड एंटर करें"
                  />
                  <div className="input-group-append">
                    <span
                      className="input-group-text bg-orange rounded-right border border-success border-left-0"
                      id="studentEditUdisesubmit"
                    >
                      <img
                        src="https://assets.englishhelper.com/righttoread/v8.79.38.20230215/assets/images/right-angle-white.svg"
                        alt=""
                      />
                    </span>
                  </div>
                </div>
              </form>
            </div>
          </div>
          <div
            className="row aos-init aos-animate"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            <div className="col-12 px-2">
              <div className="dashboard-card shadow my-3">
                <div
                  className="row dashboard-card-row overflow-x-hidden py-3"
                  id="launchReadToMe"
                >
                  <div className="col-9 d-inline-flex inner-tile pr-0 pl-2">
                    <img
                      src="https://assets.englishhelper.com/righttoread/v8.79.38.20230215/assets/images/launch-rtm.svg"
                      alt=""
                    />
                    <span className="dashboard-tile-text align-self-center text-white">
                      Read Your School Textbooks
                    </span>
                  </div>
                  <div className="col-3 d-flex align-items-center justify-content-center">
                    <span className="pulse m-0 d-flex align-items-center justify-content-center rounded-circle card-arrow-holder">
                      <span className="pulse card-arrow p-3 rounded-circle text-white d-flex align-items-center justify-content-center">
                        <img
                          src="https://assets.englishhelper.com/righttoread/v8.79.38.20230215/assets/images/right-angle-white.svg"
                          alt=""
                        />
                      </span>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="container-fluid px-0">
            <div
              className="row aos-init aos-animate"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              <div className="col-12 px-2 mb-3">
                <div className="contest-card shadow my-1">
                  <div
                    className="row dashboard-card-row overflow-x-hidden py-0"
                    id="contestCard"
                    data-url="contests"
                  >
                    <div className="col-9 d-inline-flex inner-tile pr-0 pl-2 py-0">
                      <Lottie
                        style={{ width: "65px" }}
                        animationData={Trophy}
                        loop={true}
                      ></Lottie>
                      <span className="dashboard-tile-text align-self-center text-white">
                        Contests - Learn &amp; Win
                      </span>
                    </div>
                    <div className="col-3 d-flex align-items-center justify-content-center">
                      <span className="pulse m-0 d-flex align-items-center justify-content-center rounded-circle card-arrow-holder">
                        <span className="pulse card-arrow p-3 rounded-circle text-white d-flex align-items-center justify-content-center">
                          <img
                            src="https://assets.englishhelper.com/righttoread/v8.79.38.20230215/assets/images/right-angle-white.svg"
                            alt=""
                          />
                        </span>
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row"></div>
          <div
            className="row aos-init aos-animate"
            data-aos="fade-up"
            data-aos-delay="300"
          >
            <div className="col-12 px-2 py-3 revise-your-chapter">
              <h6> REVISE YOUR CHAPTERS </h6>
            </div>
          </div>
          <div
            className="row mb-3 aos-init aos-animate"
            id="topic-0"
            data-aos="fade-up"
            data-aos-delay="350"
          >
            <div className="col-8 py-2 align-self-center mb-2">
              <p className="font-weight-bolder m-0">Learn Grammar</p>
            </div>
            <div className="col-4 py-2 text-right align-self-center mb-2">
              <Link
                href="topic-view?topicId=1&amp;recordFrom=0"
                className="btn btn-success rtr-btn px-2 py-1 text-decoration-none"
              >
                View All
              </Link>
            </div>
            <div class="col">
              <div class="reviseYourChapter owl-carousel upcommingClassCarousel owl-loaded owl-drag">
                <div class="owl-stage-outer">
                  <div
                    class="owl-stage"
                    style={{
                      transform: "translate3d(0px, 0px, 0px)",
                      transition: "all 0s ease 0s",
                      width: "1782px",
                      paddingLeft: "30px",
                      paddingRight: "30px",
                    }}
                  >
                    <div
                      className="owl-item active"
                      style={{ width: "272px", marginRight: "15px" }}
                    >
                      <div
                        className="topic-img-container mb-2 owl-card overflow-hidden"
                        id="lesson-0"
                      >
                        <a
                          className="text-decoration-none d-block w-100 h-100 reviseYourChapter_uc"
                          data-url="lesson-view?topicId=1&amp;recordFrom=0&amp;lesson=63"
                        >
                          <div className="">
                            <div
                              className="position-relative"
                              data-topicindex=""
                              data-categorytype=""
                              data-topicid=""
                              data-categoryid=""
                              data-topicname=""
                              data-postseqid=""
                            >
                              <img
                                data-src="https://eb-prod-wpimage.s3.ap-south-1.amazonaws.com/blog/wp-content/uploads/2021/05/07091211/Punctuations.jpg"
                                alt=""
                                className=" lazyloaded"
                                src="https://eb-prod-wpimage.s3.ap-south-1.amazonaws.com/blog/wp-content/uploads/2021/05/07091211/Punctuations.jpg"
                              />
                            </div>
                          </div>
                          <div>
                            <p
                              className="text-center font-weight-bolder px-3 py-3 rounded-bottom"
                              style={{
                                background: "#03A9F4",
                                color: "#FFF",
                                bottom: "0",
                                marginBottom: "0",
                              }}
                            >
                              Punctuations
                            </p>
                          </div>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <BottomNav/>
    </>
  );
};
export default DashboardContent;
