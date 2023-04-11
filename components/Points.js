import React from "react";
import WinPointsCard from "./WinPointsCard";

const Points = () => {
  return (
    <>
      <div
        className="row aos-init aos-animate"
        data-aos="fade-up"
        data-aos-delay="100"
        data-aos-offset="0"
        data-aos-id="boardBlock"
      >
        <div className="col">
          <h5 className="">Activities</h5>
        </div>
        <div className="col-7">
          <h5 className="text-right">Points won by you</h5>
        </div>
      </div>
      <WinPointsCard />
    </>
  );
};
export default Points;
