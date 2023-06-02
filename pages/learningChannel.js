import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import Link from "next/link";
import DashboardUserDetails from "../components/DashboardUserDetails";
import DashboardContent from "../components/DashboardContent";
import Notification from "../components/Notification.js";
import Avatar from "../components/Avatar.js";
import Loader from "../components/Loader.js";
import BottomNav from "../components/BottomNav.js";
import Home from "../components/Home.js";
import {useDispatch} from 'react-redux';
import {PROFILE} from '../actions/learningPageActions.js'

export default function learningChannel() {
  
  const [User, setUser] = useState(null)

  useEffect(() => {
    var user = JSON.parse(localStorage.getItem('user'));
    setUser(user);
    if(user && profile===""){
      let img = "https://assets.englishhelper.com/righttoread/v8.79.38.20230215/assets/images/leaderboard/profilePic/" + user.userInfo.profileImage;
      dispatch(PROFILE(img));
    } 
  }, []);
  
  const dispatch = useDispatch();
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
            {User && <DashboardContent board = {User.userInfo.board} grade={User.userInfo.grade} Content={Home}></DashboardContent>}
          </>
        )}
      </div>
      {!notify && <BottomNav />}
    </>
  );
}
