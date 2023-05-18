import React from "react";
import Link from "next/link";
import { useDispatch } from "react-redux";
import {
    BRIGHTNESS,
  } from "../actions/learningPageActions.js";

const FilterRank = ({setToggle}) => {
  const dispatch = useDispatch();
  return (
    <>
      <div className="row" style={{ background: "#fafafa" }}>
        <div className="col">
          <h5 className="pb-2 pt-0 mb-0">Filter your rank by:</h5>
        </div>
      </div>
      <div className="row" style={{ background: "#fafafa" }}>
        <div className="col-12 px-0 py-2 d-flex" style={{ overflowX: "auto" }}>
          <div className="d-flex" style={{ flexWrap: "nowrap" }}>
            <Link className="filterButton" href="#updateUDISEPopup">
              <span className="bg-green text-white rounded-pill px-4 py-2 white-space-no-wrap mx-1">
                INDIA
              </span>
            </Link>
            <Link
              className="filterButton"
              data-toggle="modal"
              href="#updateUDISEPopup"
              onClick={() => {
                setToggle(true);
                dispatch(BRIGHTNESS("rgb(0,0,0,0.5)"));
              }}
            >
              <span className=" ececec rounded-pill px-4 py-2 white-space-no-wrap mr-1">
                STATE
              </span>
            </Link>
            <Link
              className="filterButton"
              data-toggle="modal"
              href="#updateUDISEPopup"
              onClick={() => {
                setToggle(true);
                dispatch(BRIGHTNESS("rgb(0,0,0,0.5)"));
              }}
            >
              <span className=" ececec rounded-pill px-4 py-2 white-space-no-wrap mr-1">
                DISTRICT
              </span>
            </Link>
            <Link
              className="filterButton"
              data-toggle="modal"
              href="#updateUDISEPopup"
              onClick={() => {
                setToggle(true);
                dispatch(BRIGHTNESS("rgb(0,0,0,0.5)"));
              }}
            >
              <span className=" ececec rounded-pill px-4 py-2 white-space-no-wrap mr-1">
                SCHOOL
              </span>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};
export default FilterRank;
