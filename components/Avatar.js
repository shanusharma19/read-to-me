import React, { useEffect, useState } from "react";

const Avatar = ({setProfile, setToggle, setFilter }) => {

  const [Tick, setTick] = useState();
  const avatars = [
    {
      img: "https://assets.englishhelper.com/righttoread/v8.79.38.20230215/assets/images/leaderboard/profilePic/1.svg",
      value: "1",
    },
    {
      img: "https://assets.englishhelper.com/righttoread/v8.79.38.20230215/assets/images/leaderboard/profilePic/2.svg",
      value: "2",
    },
    {
      img: "https://assets.englishhelper.com/righttoread/v8.79.38.20230215/assets/images/leaderboard/profilePic/3.svg",
      value: "3",
    },
    {
      img: "https://assets.englishhelper.com/righttoread/v8.79.38.20230215/assets/images/leaderboard/profilePic/4.svg",
      value: "4",
    },
    {
      img: "https://assets.englishhelper.com/righttoread/v8.79.38.20230215/assets/images/leaderboard/profilePic/5.svg",
      value: "5",
    },
    {
      img: "https://assets.englishhelper.com/righttoread/v8.79.38.20230215/assets/images/leaderboard/profilePic/6.svg",
      value: "6",
    },
    {
      img: "https://assets.englishhelper.com/righttoread/v8.79.38.20230215/assets/images/leaderboard/profilePic/7.svg",
      value: "7",
    },
    {
      img: "https://assets.englishhelper.com/righttoread/v8.79.38.20230215/assets/images/leaderboard/profilePic/8.svg",
      value: "8",
    },
    {
      img: "https://assets.englishhelper.com/righttoread/v8.79.38.20230215/assets/images/leaderboard/profilePic/9.svg",
      value: "9",
    },
    {
      img: "https://assets.englishhelper.com/righttoread/v8.79.38.20230215/assets/images/leaderboard/profilePic/10.svg",
      value: "10",
    },
    {
      img: "https://assets.englishhelper.com/righttoread/v8.79.38.20230215/assets/images/leaderboard/profilePic/11.svg",
      value: "11",
    },
    {
      img: "https://assets.englishhelper.com/righttoread/v8.79.38.20230215/assets/images/leaderboard/profilePic/12.svg",
      value: "12",
    },
    {
      img: "https://assets.englishhelper.com/righttoread/v8.79.38.20230215/assets/images/leaderboard/profilePic/13.svg",
      value: "13",
    },
    {
      img: "https://assets.englishhelper.com/righttoread/v8.79.38.20230215/assets/images/leaderboard/profilePic/14.svg",
      value: "14",
    },
    {
      img: "https://assets.englishhelper.com/righttoread/v8.79.38.20230215/assets/images/leaderboard/profilePic/15.svg",
      value: "15",
    },
    {
      img: "https://assets.englishhelper.com/righttoread/v8.79.38.20230215/assets/images/leaderboard/profilePic/16.svg",
      value: "16",
    },
  ];

  return (
    <>
      <div
        className="modal fade show"
        id="selectAvatarPopup"
        data-backdrop="static"
        tabindex="-1"
        role="dialog"
        aria-labelledby="earnedPointsPopup"
        style={{ display: "block", paddingRight: "0px" }}
        aria-modal="true"
      >
        <div className="modal-dialog  modal-dialog-centered" role="document">
          <div className="modal-content">
            <button
              type="button"
              className="close sticky-close close-popup-btn"
              id="selectAvatarClose"
              data-action=""
              data-dismiss="modal"
              aria-label="Close"
              onClick={() => {
                setToggle(false);
                setFilter("brightness(100%)");
              }}
            >
              <span aria-hidden="true">×</span>
            </button>
            <div className="modal-body text-center">
              <h4 className="green-color">SELECT YOUR AVATAR</h4>
              <div id="avatars" className="p-3">
                <div className="row justify-content-around">


                  {avatars.map((avatar) => (
                    <div className="col-4"
                     onClick={()=>setTick(avatar.img)}
                    >
                      <label className="avatars">
                        <input
                          type="radio"
                          value={avatar.value}
                          name="avatar"
                        />
                        <img src={avatar.img} alt="" />
                      </label>
                    </div>
                  ))}

                  
                </div>
              </div>
              <div className="modal-footer border-top-0 py-0 pt-2 d-flex justify-content-center">
                <button
                  type="button"
                  id="selectAvatarBtn"
                  data-action-btn=""
                  className="btn btn-success btn-lg rtr-btn mx-2 my-0 p-3 w-50"
                  onClick={()=> {
                    Tick && setProfile(Tick)
                    setToggle(false)
                    setFilter("brightness(100%)")
                  }}
                >
                  <h5 className="m-0">OK</h5>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Avatar;
