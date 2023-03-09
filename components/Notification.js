import React from "react";
import Link from "next/link";
import HelpIcon from "./HelpIcon.js";

const Notification = ({ setNotify }) => {
  return (
    <>
      <div className="container-fluid fixed-top web-header">
        <div className="row top-header align-items-center justify-content-center">
          <div className="col">
            <h4 className="m-0 text-center text-white">Notification</h4>
          </div>
        </div>
      </div>
      <div
        className="back-arrow-holder"
        onClick={() => {
          setNotify(false);
        }}
      >
        <img src="https://assets.englishhelper.com/righttoread/v8.79.38.20230215/assets/images/back-icon.svg" />
      </div>
   
      <HelpIcon/>
      
    </>
  );
};
export default Notification;
