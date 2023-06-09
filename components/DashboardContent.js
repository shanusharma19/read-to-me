import React, { useState } from "react";
import Lottie from "lottie-react";
import Trophy from "../animations/trophy.json";
import Link from "next/link";
import BottomNav from "./BottomNav";
import Medals from "../pages/medals.js";

const DashboardContent = ({Content}) => {
  return (
    <>
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
          <Content/>
        </div>
      </div>
    </>
  );
};
export default DashboardContent;
