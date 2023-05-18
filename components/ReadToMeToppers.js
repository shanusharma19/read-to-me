import React from "react";

const ReadToMeToppers = () => {
  return (
    <>
      <div className="row mt-3">
        <div className="col-12" style={{ background: "#e0e0e0" }}>
          <h5 className="text-center font-weight-bold py-3 m-0">
            ReadToMe Toppers
          </h5>
        </div>
      </div>

      <div className="row bg-white">
        <div className="col-12">
          <div className="row align-items-center">
            <div className="col-2 py-2 pr-0 pl-1">
              <h5 className="text-center green-color font-weight-bold m-0">
                1
              </h5>
            </div>

            <div className="col-10 py-2 d-flex px-0 justify-content-end">
              <div className="row w-100 m-0 align-items-center">
                <div className="col-2 px-0 pl-1">
                  <img
                    alt=""
                    src="https://assets.englishhelper.com/righttoread/v8.83.38.20230404/assets/images/leaderboard/profilePic/12.svg"
                    className="w-100"
                  />
                </div>
                <div className="col-8 px-0">
                  <div className="ml-1">
                    <p className="green-color font-weight-bold mb-1 text-ellipsis">
                      Ayaz Patel
                    </p>
                    <p className="mb-1 small">
                      <span>
                        <img
                          src="https://assets.englishhelper.com/righttoread/v8.83.38.20230404/assets/images/point-star.svg"
                          alt=""
                          style={{
                            height: "15px",
                            marginRight: "4px",
                          }}
                        />
                        24544 Points
                      </span>
                      <span style={{ marginLeft: "4px" }}>
                        <img
                          src="https://assets.englishhelper.com/righttoread/v8.83.38.20230404/assets/images/toppers-medal.svg"
                          alt=""
                          style={{
                            height: "15px",
                            marginRight: "4px",
                          }}
                        />
                        2 Medals
                      </span>
                    </p>
                  </div>
                </div>
                <div className="col-2 pl-0 pr-1 text-center">
                  <img
                    alt=""
                    src="https://assets.englishhelper.com/righttoread/v8.83.38.20230404/assets/images/leaderboard/RTM-topperGold.svg"
                    style={{ width: "32px" }}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default ReadToMeToppers;
