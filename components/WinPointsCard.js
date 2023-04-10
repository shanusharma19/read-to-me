import React from "react";

const WinPointsCard = () => {
  return (
    <>
      <div
        className="row aos-init aos-animate"
        data-aos="fade-up"
        data-aos-delay="100"
        data-aos-offset="0"
        data-aos-id="boardBlock"
      >
        <div className="leaderboard-activity-card d-flex justify-content-around w-100 activity-card shadow mx-2 mt-2 bg-color-green">
          <div className="col-8 pl-2 pr-1 d-flex justify-content-center align-items-center">
            <div className="col-3 pr-1 pl-0">
              <img
                src="https://assets.englishhelper.com/righttoread/v8.83.38.20230404/assets/images/leaderboard/activities/activity-complete.svg"
                alt=""
                className="w-100 rounded-circle pr-1"
              />
            </div>
            <div className="col-9 pl-0 pr-0">
              <p className="mb-0 font-weight-bold text-white ">SIGN UP</p>
              <p className="mb-0 activites-info-text">
                Win 20 Points by Signing Up on ReadToMe Student Edition
              </p>
            </div>
          </div>
          <div className="col-4 pr-2 pl-1 d-flex justify-content-center align-items-center">
            <div className=" activity-points d-flex justify-content-center align-items-center w-100">
              <img
                src="https://assets.englishhelper.com/righttoread/v8.83.38.20230404/assets/images/point-button-star.svg"
                alt=""
                className="mr-2 "
              />
              <span>20</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default WinPointsCard;
