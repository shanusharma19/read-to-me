import React, { useState } from "react";
import { useSelector } from 'react-redux'
import Link from "next/link";
import DashboardUserDetails from "../components/DashboardUserDetails";
import DashboardContent from "../components/DashboardContent";
import Notification from "../components/Notification.js";
import Avatar from "../components/Avatar.js";
import Loader from "../components/Loader.js";
import BottomNav from "../components/BottomNav.js";

export default function learningChannel() {
  const [Notify, setNotify] = useState(false);
  const {profile, filter, toggle} = useSelector(state => state.learningPage);
  // const [Filter, setFilter] = useState("brightness(100%)");
  // const [Toggle, setToggle] = useState(false);
  // // const [MedalComponent, setMedalComponent] = useState(false);
  // const [Profile, setProfile] = useState(
  //   "https://assets.englishhelper.com/righttoread/v8.79.38.20230215/assets/images/leaderboard/profilePic/2.svg"
  // );
  return (
    <>
    <Loader Display={"none"}></Loader>
      {toggle && (
        <Avatar
        />
      )}
      <div
        id="learn"
        // style={{ background: "rgba(0,0,0,0.8)" }}
      >
        {Notify ? (
          <Notification setNotify={setNotify} />
        ) : (
          <>
            <DashboardUserDetails
              // setFilter={setFilter}
              // setToggle={setToggle}
              setNotify={setNotify}
              // setMedalComponent={setMedalComponent}
              // MedalComponent={MedalComponent}
              // Profile={Profile}
            />
            <DashboardContent
              // MedalComponent={MedalComponent}
              // setMedalComponent={setMedalComponent}
            />
          </>
        )}
      </div>
      <BottomNav></BottomNav>
    </>
  );
}
