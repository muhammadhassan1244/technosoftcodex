import React, { Component } from "react";

const FeatureBoxCol = (props) => {
  return (
    <>
      <div className="box border px-2 py-4 shadow">
        <div className="row no-gutters">
          <div className="col text-center">{props.img}</div>
          <div className="col">
            {" "}
            <h2>{props.val}</h2>
            <h6>{props.tag}</h6>
          </div>
        </div>
      </div>
    </>
  );
};

export default FeatureBoxCol;
