import React, { useState } from "react";
import { useSelector } from "react-redux";
import Link from "next/link";
import DashboardUserDetails from "../components/DashboardUserDetails";
import DashboardContent from "../components/DashboardContent";
import Notification from "../components/Notification.js";
import Avatar from "../components/Avatar.js";
import Loader from "../components/Loader.js";
import BottomNav from "../components/BottomNav.js";
import Home from "../components/Home.js";
import Points from "../components/Points.js";

export default function earnPoints() {
  const { notify, profile, filter, toggle } = useSelector(
    (state) => state.learningPage
  );
  return (
    <>
      <Loader Display={"none"}></Loader>
      {toggle && <Avatar />}
      <div
        id="learn"
      >
        {notify ? (
          <Notification />
        ) : (
          <>
            <DashboardUserDetails />
            <DashboardContent Content={Points}></DashboardContent>
          </>
        )}
      </div>
      {!notify && <BottomNav />}
    </>
  );
}
