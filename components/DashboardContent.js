import React, { useState } from "react";
import Lottie from "lottie-react";
import Trophy from "../animations/trophy.json";
import Link from "next/link";
import BottomNav from "./BottomNav";
import Medals from "../pages/medals.js";
import Home from "./Home.js";

const DashboardContent = (
  // { setMedalComponent, MedalComponent }
  ) => {
  return (
    <>
      <Home />
      {/* {MedalComponent ? <Medals /> : <Home />} */}
      {/* <BottomNav setMedalComponent={setMedalComponent}></BottomNav> */}
    </>
  );
};
export default DashboardContent;
