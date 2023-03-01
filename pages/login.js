export default function login() {
  return (
    <>
      <div
        id="body"
        className="light-bg position-relative iti-mobile"
        data-aos-easing="ease"
        data-aos-duration="400"
        data-aos-delay="0"
      >
        <div className="container-fluid fixed-top web-header">
          <div className="row top-header align-items-center justify-content-center">
            <div className="col">
              <h4 className="m-0 text-center text-white">ReadToMe</h4>
            </div>
          </div>
        </div>

        <a className="back-arrow-holder" href="/">
          <img src="https://assets.englishhelper.com/righttoread/v8.79.38.20230215/assets/images/back-icon.svg" />
        </a>
        <div
          className="container-fluid aos-init aos-animate"
          data-aos="fade-up"
        >
          <div className="row py-3 text-center">
            <div className="col text-center">
              <img
                src="https://assets.englishhelper.com/righttoread/v8.79.38.20230215/assets/images/login-img.svg"
                className="img-vh-36"
              />
            </div>
          </div>
        </div>
        <div className="container-fluid">
          <div className="row">
            <div className="col">
              <form
                autocomplete="off"
                id="studentLogin"
                name="studentLogin"
                className="px-3 rtr-form"
                novalidate="novalidate"
              >
                <div
                  className="form-group mobile-holder aos-init aos-animate"
                  data-aos="fade-up"
                  data-aos-delay="50"
                >
                  <label htmlFor="studentLogin_userPhone">Mobile number</label>
                  <div className="intl-tel-input separate-dial-code">
                    <div className="flag-container">
                      <div
                        className="selected-flag"
                        role="combobox"
                        aria-owns="country-listbox"
                        title="India: +91"
                      >
                        <div className="iti-flag in"></div>
                        <div className="selected-dial-code">+91</div>
                      </div>
                    </div>
                    <input
                      type="text"
                      name="userPhone"
                      className="form-control"
                      id="studentLogin_userPhone"
                      aria-describedby="PhoneHelp"
                      placeholder="Enter your mobile number"
                      data-countrycode="+91"
                      autocomplete="off"
                      role="presentation"
                      data-intl-tel-input-id="0"
                    />
                  </div>
                  <input
                    type="hidden"
                    id="registrationCountryCode"
                    name="registrationCountryCode"
                    value="IN"
                  />
                  <input
                    type="hidden"
                    id="isdCode"
                    name="isdCode"
                    value="+91"
                  />
                  <input
                    type="hidden"
                    id="userCountry"
                    name="userCountry"
                    value="India"
                  />
                </div>
                <p
                  className="text-center my-3 font-weight-bold aos-init aos-animate"
                  data-aos="fade-up"
                  data-aos-delay="100"
                >
                  Or
                </p>
                <div
                  className="form-group email-holder aos-init aos-animate"
                  data-aos="fade-up"
                  data-aos-delay="150"
                >
                  <label htmlFor="studentLogin_userMailId" className="w-100">
                    Email address{" "}
                    <input
                      role="presentation"
                      type="text"
                      name="userMailId"
                      className="form-control"
                      id="studentLogin_userMailId"
                      aria-describedby="emailHelp"
                      placeholder="Enter your email address"
                      autocomplete="off"
                    />
                  </label>
                </div>
                <div
                  className="col text-center py-2 aos-init aos-animate"
                  data-aos="fade-up"
                  data-aos-delay="200"
                  data-aos-offset="0"
                >
                  <button
                    type="button"
                    className="btn btn-success btn-lg rtr-btn icon-btn px-5 "
                    id="studentLoginsubmit"
                  >
                    <img src="https://assets.englishhelper.com/righttoread/v8.79.38.20230215/assets/images/right-arrow.svg" />
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
