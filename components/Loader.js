import React from "react";

const Loader = ({Display}) => {
  return (
    <>
      <div
        id="loader"
        style={{
          display: Display,  
          top: "0",
          left: "0",
          background: "rgba(0,0,0,0.8)",
          zIndex: "1200",
        }}
        className="vw-100 vh-100 position-fixed"
      >
        <div className="d-flex align-items-center w-100 h-100">
          <div className="container-fluid loader"></div>
        </div>
      </div>
    </>
  );
};

export default Loader;
