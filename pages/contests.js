import Header from "@/components/Header";
import HelpIcon from "@/components/HelpIcon";
import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import BottomNav from "@/components/BottomNav";

export default function earnPoints() {
  const router = useRouter();
  return (
    <>
      <Header />
      <span
        className="back-arrow-holder"
        onClick={() => router.push("/learningChannel")}
      >
        <img src="https://assets.englishhelper.com/righttoread/v8.79.38.20230215/assets/images/back-icon.svg" />
      </span>
      <HelpIcon />

      <div 
      style={{marginTop: "60px"}}
      className="container-fluid bg-white">
        <div className="row">
          <div
            className="col text-center aos-init aos-animate"
            data-aos="fade-up"
            data-aos-offset="0"
          >
            <h1 className="h4 text-center green-color py-3 font-weight-normal">
              Contest Details
            </h1>
          </div>
        </div>

        <div className="row">
          <div
            className="col text-center aos-init aos-animate"
            data-aos="fade-up"
            data-aos-offset="0"
          >
            <div className="position-relative">
              <img
                className="rounded-top lazyLoad lazyloaded "
                width="50%"
                data-src="https://assets.englishhelper.com/righttoread/v8.85.38.20230424/assets/images/no_contest_icon.svg"
                alt=""
                src="https://assets.englishhelper.com/righttoread/v8.85.38.20230424/assets/images/no_contest_icon.svg"
              />
            </div>
            <h1 className="h4 mb-0 text-center py-2 text-muted">
              Coming Soon!
            </h1>
          </div>
        </div>
      </div>

      <BottomNav />
    </>
  );
}
