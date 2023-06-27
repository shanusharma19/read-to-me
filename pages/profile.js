import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import Link from "next/link";
import Header from "@/components/Header.js";
import Router from "next/router.js";

const profile = () => {
  // const router = useRouter;
    const [User, setUser] = useState(null)

    useEffect(() => {
      var user = JSON.parse(localStorage.getItem('user'));
      if(user){
        setUser(user);
      }
    }, []);

  return (
    <>
      <div
        id="body"
        className="light-bg position-relative dash"
        data-aos-easing="ease"
        data-aos-duration="400"
        data-aos-delay="0"
      >
        <Header />
        { User && <div className="color2-bg">
          <div className="container-fluid">
            <div className="row">
              <div className="col my-3">
                <div className="card rounded-lg shadow-sm">
                  <div className="card-body py-0 px-15 rounded-lg ">
                    <div className="row">
                      <div className="col">
                        <span
                          onClick={() => Router.push({ pathname: '/myPlans'})}
                          id="profileBackBtn"
                          className="py-3 position-absolute"
                        >
                          <img src="https://assets.englishhelper.com/righttoread/v8.87.38.20230516/assets/images/back-arrow-grey.svg" />
                        </span>
                        <h1 className="h4 py-3 m-0 text-center font-weight-normal green-color">
                          My Profile
                        </h1>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col">
                        <p className="text-center">
                          <img src="https://assets.englishhelper.com/righttoread/v8.87.38.20230516/assets/images/profile-dummy.svg" />
                        </p>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col text-center">
                        <p className="text-center lead mb-2">{User.user.userFirstName}</p>
                        <p className="text-center mb-2"></p>
                        <Link href="profile-edit">
                        <button
                          type="button"
                          className="btn btn-outline-success my-2"
                          id="editProfileBtn"
                        >
                          Edit Profile
                        </button>
                        </Link>
                      </div>
                    </div>
                    <div className="row border-top pt-2">
                      <div className="col text-center">
                        <p className="text-center font-weight-bold green-color my-1">
                          MOBILE NUMBER
                        </p>
                        <p>{User.user.userPhone}</p>
                        <p className="text-center font-weight-bold green-color my-1">
                          GRADE
                        </p>
                        <p>{User.userInfo.grade}</p>
                        <input type="hidden" id="grade" value="Grade 10" />

                        <p className="text-center font-weight-bold green-color my-1">
                          SCHOOL BOARD
                        </p>
                        <p>{User.userInfo.board}</p>
                        <input type="hidden" id="board" value="CBSE Board" />
                      </div>
                    </div>
                    <div className="row border-top pt-2">
                      <div className="col text-center">
                        <p className="text-center font-weight-bold green-color my-1">
                          SCHOOL LOCATION - STATE
                        </p>

                        <p>{User.userInfo.state}</p>

                        <p className="text-center font-weight-bold green-color my-1">
                          SCHOOL LOCATION - COUNTRY
                        </p>
                        <p className="text-uppercase">{User.userInfo.country}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>}
      </div>
    </>
  );
};

export default profile;
