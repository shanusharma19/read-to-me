import React, { useState } from "react";
import Crown from "../animations/crown.json";
import Lottie from "lottie-react";

const BottomNav = () => {
  const [Active, setActive] = useState();
  const [Select, setSelect] = useState();
  return (
    <>
      <div className="bottom-nav container-fluid">
        <div className="row">
          <div className="col text-center p-0">
            <a
              style={{ textDecoration: "none" }}
              onClick={() => {
                setActive("active");
                setSelect("1");
              }}
              href="#"
              className={`d-flex flex-column align-items-center position-relative text-body bottomNavLink ${
                Select == "1" ? Active : ""
              }`}
              id="myDashboardNav"
            >
              <img
                src="https://assets.englishhelper.com/righttoread/v8.79.38.20230215/assets/images/my-dashboard.svg"
                className=""
                style={{ height: "22px" }}
              />
              <p className="small m-0 mt-1 bottomNavText">My Dashboard</p>
            </a>
          </div>
          <div className="col text-center p-0">
            <a
              style={{ textDecoration: "none" }}
              onClick={() => {
                setActive("active");
                setSelect("2");
              }}
              href="#"
              className={`d-flex flex-column align-items-center text-body position-relative bottomNavLink ${
                Select == "2" ? Active : ""
              }`}
              id="myTextbooksNav"
            >
              <img
                src="https://assets.englishhelper.com/righttoread/v8.79.38.20230215/assets/images/my-textbook.svg"
                className=""
                style={{ height: "22px" }}
              />
              <p className="small m-0 mt-1 bottomNavText">My Textbooks</p>
            </a>
          </div>
          <div className="col text-center p-0">
            <a
              style={{ textDecoration: "none" }}
              onClick={() => {
                setActive("active");
                setSelect("3");
              }}
              href="#"
              className={`d-flex flex-column align-items-center text-body position-relative bottomNavLink ${
                Select == "3" ? Active : ""
              }`}
              data-url="leaderboard"
            >
              <span style={{ height: "22px", display: "inlineFlex" }}>
                <Lottie
                  style={{ width: "22px", transform: "translateY(-3px)" }}
                  animationData={Crown}
                  loop={true}
                ></Lottie>
              </span>
              <p className="small m-0 mt-1 bottomNavText">Leaderboard</p>
            </a>
          </div>
          <div className="col text-center p-0">
            <a
              style={{ textDecoration: "none" }}
              onClick={() => {
                setActive("active");
                setSelect("4");
              }}
              className={`d-flex flex-column align-items-center text-body position-relative bottomNavLink ${
                Select == "4" ? Active : ""
              }`}
              href="#"
              id="myAccountNav"
            >
              <img
                src="https://assets.englishhelper.com/righttoread/v8.79.38.20230215/assets/images/my-account.svg"
                className=""
                style={{ height: "22px" }}
              />
              <p className="small m-0 mt-1 bottomNavText">My Account</p>
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default BottomNav;
