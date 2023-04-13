import React from "react";
import Input from "@/components/Input.js";

const UDISEmodal = ({setToggle}) => {
  return (
    <>
      <div
        className="modal fade show"
        id="updateUDISEPopup"
        data-backdrop="static"
        tabindex="-1"
        role="dialog"
        aria-labelledby="updateUDISEPopup"
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
              onClick={()=>{
                setToggle(false)
              }}
            >
              <span aria-hidden="true">×</span>
            </button>
            <div className="modal-header bg-green d-block ">
              <p className="w-100 d-block text-center">
                <img src="https://assets.englishhelper.com/righttoread/v8.83.38.20230404/assets/images/leaderboard/update-UDISE-popup.svg" />
              </p>
              <h3 className="modal-title w-100 d-block  text-center text-white">
                Update School UDISE code.
              </h3>
            </div>
            <div className="modal-body">
              <p className="h4 text-center mb-4">
                Please enter your school UDISE to see your rank.
              </p>
              <form
                id="studentEditUdise"
                name="studentEditUdise"
                className="mb-0"
                noValidate="novalidate"
              >
                <div className="input-group">
              <Input width={"77vw"}></Input>
                  <div className="input-group-append">
                    <span
                      className="input-group-text bg-orange rounded-right border border-success border-left-0"
                      id="studentEditUdisesubmit"
                    >
                      <img
                        src="https://assets.englishhelper.com/righttoread/v8.83.38.20230404/assets/images/right-angle-white.svg"
                        alt=""
                      />
                    </span>
                  </div>
                </div>
              </form>
            </div>
            <div className="modal-footer border-top-0 d-flex justify-content-center">
              <button
                type="button"
                className="btn btn-success btn-lg rtr-btn mx-4 py-2 px-5"
                id="udiseSubmit"
                name="udiseSubmit"
              >
                SUBMIT
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default UDISEmodal;
