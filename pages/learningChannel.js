import React, { useState } from "react";
import { useSelector } from "react-redux";
import Link from "next/link";
import DashboardUserDetails from "../components/DashboardUserDetails";
import DashboardContent from "../components/DashboardContent";
import Notification from "../components/Notification.js";
import Avatar from "../components/Avatar.js";
import Loader from "../components/Loader.js";
import BottomNav from "../components/BottomNav.js";

export default function learningChannel() {
  const { notify, profile, filter, toggle } = useSelector(
    (state) => state.learningPage
  );
  return (
    <>
      <Loader Display={"none"}></Loader>
      {toggle && <Avatar />}
      <div
        id="learn"
        // style={{ background: "rgba(0,0,0,0.8)" }}
      >
        {notify ? (
          <Notification />
        ) : (
          <>
            <DashboardUserDetails />
            <DashboardContent />
          </>
        )}
      </div>
      {!notify && <BottomNav />}
    </>
  );
}
