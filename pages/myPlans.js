import React, { useState } from "react";
import Header from "../components/Header.js";
import Link from "next/link";
import { useRouter } from "next/router";
import HelpIcon from "@/components/HelpIcon.js";
import BottomNav from "@/components/BottomNav.js";
// import setMedalComponent from './learningChannel.js'

export default function myPlans() {
  const router = useRouter();
  return (
    <>
      <div
        id="body"
        className="light-bg position-relative dash"
        data-aos-easing="ease"
        data-aos-duration="400"
        data-aos-delay="0"
        style={{ paddingBottom: "75px" }}
      >
        <Header />
        <span className="back-arrow-holder" onClick={() => router.push("/learningChannel")}>
          <img src="https://assets.englishhelper.com/righttoread/v8.79.38.20230215/assets/images/back-icon.svg" />
        </span>
        <HelpIcon />
        <div className="container-fluid">
          <div className="row">
            <div
              className="col aos-init aos-animate"
              data-aos="fade-up"
              data-aos-offset="0"
            >
              <h1 className="h4 text-center green-color py-3 font-weight-normal">
                My Account
              </h1>
            </div>
          </div>
        </div>

        <div className="container-fluid">
          <a href="mySubscriptions" className="text-dark text-decoration-none">
            <div className="row py-2">
              <div className="col">
                <div
                  className="card rounded-lg shadow-sm px-2 py-2 border-0 bg-gray aos-init aos-animate"
                  data-aos="fade-up"
                  data-aos-delay="50"
                >
                  <div className="row">
                    <div className="col-2 align-self-center">
                      <img src="https://assets.englishhelper.com/righttoread/v8.79.38.20230215/assets/images/my-plans.svg" />
                    </div>
                    <div className="col-8 align-self-center py-3 border-right">
                      <p className="h5 mb-0 font-weight-normal">My Plans</p>
                    </div>
                    <div className="col-2 align-self-center text-center">
                      <img src="https://assets.englishhelper.com/righttoread/v8.79.38.20230215/assets/images/Select-or-Next-Arrow.svg" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </a>
          <a href="myInvoices" className="text-dark text-decoration-none">
            <div className="row py-2">
              <div className="col">
                <div
                  className="card rounded-lg shadow-sm px-2 py-2 border-0 bg-gray aos-init aos-animate"
                  data-aos="fade-up"
                  data-aos-delay="100"
                >
                  <div className="row">
                    <div className="col-2 align-self-center myincoice-img">
                      <img src="https://assets.englishhelper.com/righttoread/v8.79.38.20230215/assets/images/my-invoice.svg" />
                    </div>
                    <div className="col-8 align-self-center py-3 border-right">
                      <p className="h5 mb-0 font-weight-normal">My Invoices</p>
                    </div>
                    <div className="col-2 align-self-center text-center">
                      <img src="https://assets.englishhelper.com/righttoread/v8.79.38.20230215/assets/images/Select-or-Next-Arrow.svg" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </a>

          <a href="profile-view" className="text-dark text-decoration-none">
            <div className="row py-2">
              <div className="col">
                <div
                  className="card rounded-lg shadow-sm px-2 py-2 border-0 bg-gray aos-init aos-animate"
                  data-aos="fade-up"
                  data-aos-delay="150"
                >
                  <div className="row">
                    <div className="col-2 align-self-center">
                      <img src="https://assets.englishhelper.com/righttoread/v8.79.38.20230215/assets/images/my-profile.svg" />
                    </div>
                    <div className="col-8 align-self-center py-3 border-right">
                      <p className="h5 mb-0 font-weight-normal">My Profile</p>
                    </div>
                    <div className="col-2 align-self-center text-center">
                      <img src="https://assets.englishhelper.com/righttoread/v8.79.38.20230215/assets/images/Select-or-Next-Arrow.svg" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </a>

          <div className="row py-2" id="myProgressNav">
            <div className="col">
              <div
                className="card rounded-lg shadow-sm px-2 py-2 border-0 bg-gray aos-init aos-animate"
                data-aos="fade-up"
                data-aos-delay="200"
              >
                <div className="row">
                  <div className="col-2 align-self-center">
                    <img src="https://assets.englishhelper.com/righttoread/v8.79.38.20230215/assets/images/my-progress.svg" />
                  </div>
                  <div className="col-8 align-self-center py-3 border-right">
                    <p className="h5 mb-0 font-weight-normal">My Progress</p>
                  </div>
                  <div className="col-2 align-self-center text-center">
                    <img src="https://assets.englishhelper.com/righttoread/v8.79.38.20230215/assets/images/Select-or-Next-Arrow.svg" />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <a
            href="https://www.englishhelper.com/dashboard/terms-conditions"
            className="text-dark text-decoration-none"
          >
            <div className="row py-2">
              <div className="col">
                <div
                  className="card rounded-lg shadow-sm px-2 py-2 border-0 bg-gray aos-init aos-animate"
                  data-aos="fade-up"
                  data-aos-delay="200"
                >
                  <div className="row">
                    <div className="col-2 align-self-center">
                      <img src="https://assets.englishhelper.com/righttoread/v8.79.38.20230215/assets/images/terms-of-services.svg" />
                    </div>
                    <div className="col-8 align-self-center py-3 border-right">
                      <p className="h5 mb-0 font-weight-normal">
                        Terms of Services
                      </p>
                    </div>
                    <div className="col-2 align-self-center text-center">
                      <img src="https://assets.englishhelper.com/righttoread/v8.79.38.20230215/assets/images/Select-or-Next-Arrow.svg" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </a>
          <a href="disclaimer" className="text-dark text-decoration-none">
            <div className="row py-2">
              <div className="col">
                <div
                  className="card rounded-lg shadow-sm px-2 py-2 border-0 bg-gray aos-init aos-animate"
                  data-aos="fade-up"
                  data-aos-delay="250"
                >
                  <div className="row">
                    <div className="col-2 align-self-center">
                      <img src="https://assets.englishhelper.com/righttoread/v8.79.38.20230215/assets/images/disclaimer-icon.svg" />
                    </div>
                    <div className="col-8 align-self-center py-3 border-right">
                      <p className="h5 mb-0 font-weight-normal">Disclaimer</p>
                    </div>
                    <div className="col-2 align-self-center text-center">
                      <img src="https://assets.englishhelper.com/righttoread/v8.79.38.20230215/assets/images/Select-or-Next-Arrow.svg" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </a>
          <a
            href="https://www.englishhelper.com/dashboard/privacy"
            className="text-dark text-decoration-none"
          >
            <div className="row py-2">
              <div className="col">
                <div
                  className="card rounded-lg shadow-sm px-2 py-2 border-0 bg-gray aos-init aos-animate"
                  data-aos="fade-up"
                  data-aos-delay="300"
                >
                  <div className="row">
                    <div className="col-2 align-self-center">
                      <img src="https://assets.englishhelper.com/righttoread/v8.79.38.20230215/assets/images/privacy-policy.svg" />
                    </div>
                    <div className="col-8 align-self-center py-3 border-right">
                      <p className="h5 mb-0 font-weight-normal">
                        Privacy Policy
                      </p>
                    </div>
                    <div className="col-2 align-self-center text-center">
                      <img src="https://assets.englishhelper.com/righttoread/v8.79.38.20230215/assets/images/Select-or-Next-Arrow.svg" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </a>

          <a
            data-toggle="modal"
            data-target="#confirmLogout"
            className="text-dark text-decoration-none"
          >
            <div className="row py-2">
              <div className="col">
                <div
                  className="card rounded-lg shadow-sm px-2 py-2 border-0 bg-gray aos-init aos-animate"
                  data-aos="fade-up"
                  data-aos-delay="350"
                  data-aos-offset="0"
                >
                  <div className="row">
                    <div className="col-2 align-self-center">
                      <img src="https://assets.englishhelper.com/righttoread/v8.79.38.20230215/assets/images/logout.svg" />
                    </div>
                    <div className="col-8 align-self-center py-3 border-right">
                      <p className="h5 mb-0 font-weight-normal">Logout</p>
                    </div>
                    <div className="col-2 align-self-center text-center">
                      <img src="https://assets.englishhelper.com/righttoread/v8.79.38.20230215/assets/images/Select-or-Next-Arrow.svg" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </a>
        </div>
        <BottomNav ></BottomNav>
      </div>
    </>
  );
}
