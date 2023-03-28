import React, { useState } from "react";
import Link from "next/link";
import DashboardUserDetails from "../components/DashboardUserDetails";
import DashboardContent from "../components/DashboardContent";
import Notification from "../components/Notification.js";
import Avatar from "../components/Avatar.js";

export default function learningChannel() {
  const [Notify, setNotify] = useState(false);
  const [Filter, setFilter] = useState("brightness(100%)");
  const [Toggle, setToggle] = useState(false);
  const [Profile, setProfile] = useState(
    "https://assets.englishhelper.com/righttoread/v8.79.38.20230215/assets/images/leaderboard/profilePic/2.svg"
  );
  return (
    <>
      {Toggle && (
        <Avatar
          setProfile={setProfile}
          setFilter={setFilter}
          setToggle={setToggle}
        />
      )}
      <div
        id="learn"
        // style={{ filter: Filter }}
      >
        {Notify ? (
          <Notification setNotify={setNotify} />
        ) : (
          <>
            <DashboardUserDetails
              setFilter={setFilter}
              setToggle={setToggle}
              setNotify={setNotify}
              Profile={Profile}
            />
            <DashboardContent />
          </>
        )}
      </div>
    </>
  );
}
