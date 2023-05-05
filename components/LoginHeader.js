import React from 'react'
import {NOTIFY} from '../actions/learningPageActions.js'
import {useDispatch, useSelector} from 'react-redux';
import HelpIcon from "./HelpIcon";
import Lottie from "lottie-react";
import groovyWalkAnimation from "../animations/star.json";

const LoginHeader = () => {
    const dispatch = useDispatch();
    return (
        <>
        <div className="container-fluid fixed-top web-header">
        <div className="row top-header align-items-center justify-content-center">
          <div className="col">
            <h4 className="m-0 text-center text-white">ReadToMe</h4>
          </div>
        </div>
      </div>
      <div
          id="noti_Button"
          className="back-arrow-holder"
          onClick={() => {
            dispatch(NOTIFY(true));
          }}
        >
          <img
            src="https://assets.englishhelper.com/righttoread/v8.79.38.20230215/assets/images/Group-4487.svg"
            alt=""
          />
          <span className="badge bg-c-red"></span>
        </div>
        <HelpIcon />
        <div className="points-icon-holder " data-url="earn-points">
          <Lottie
            style={{ width: "25px"}}
            animationData={groovyWalkAnimation}
            loop={true}
          />
        </div>
      </>
    )
}
export default LoginHeader;