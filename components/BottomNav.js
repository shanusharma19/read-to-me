import React, { useState } from "react";
import Crown from "../animations/crown.json";
import Lottie from "lottie-react";
import Link from "next/link";
import { useRouter } from "next/router";

const BottomNav = () => {
  const { pathname } = useRouter();
  return (
    <>
      <div className="bottom-nav container-fluid">
        <div className="row">
          <div className="col text-center p-0">
            <Link
              style={{ textDecoration: "none" }}
              href="/learningChannel"
              className={`d-flex flex-column align-items-center position-relative text-body bottomNavLink ${
                pathname == "/learningChannel" ? "active" : ""
              }`}
              id="myDashboardNav"
            >
              <img
                src="https://assets.englishhelper.com/righttoread/v8.79.38.20230215/assets/images/my-dashboard.svg"
                className=""
                style={{ height: "22px" }}
              />
              <p className="small m-0 mt-1 bottomNavText">My Dashboard</p>
            </Link>
          </div>
          <div className="col text-center p-0">
            <a
              style={{ textDecoration: "none" }}
              href="#"
              className="d-flex flex-column align-items-center text-body position-relative bottomNavLink"
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
            <Link
              style={{ textDecoration: "none" }}
              href="/leaderboard"
              className={`d-flex flex-column align-items-center position-relative text-body bottomNavLink ${
                pathname == "/leaderboard" ? "active" : ""
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
            </Link>
          </div>
          <div className="col text-center p-0">
            <Link
              style={{ textDecoration: "none" }}
              className={`d-flex flex-column align-items-center text-body position-relative bottomNavLink ${
                pathname == "/myPlans" ? "active" : ""
              }`}
              href="/myPlans"
              id="myAccountNav"
            >
              <img
                src="https://assets.englishhelper.com/righttoread/v8.79.38.20230215/assets/images/my-account.svg"
                className=""
                style={{ height: "22px" }}
              />
              <p className="small m-0 mt-1 bottomNavText">My Account</p>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default BottomNav;
