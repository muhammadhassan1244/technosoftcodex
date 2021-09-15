import React, { Component } from "react";
import FeatureBoxCol from "./FeatureBoxCol";

const FeatureBox = (props) => {
  return (
    <>
      <div className="col-md-3 mt-3 mt-md-0">
        <FeatureBoxCol img={props.image} val={props.val} tag={props.tag} />
      </div>
    </>
  );
};

export default FeatureBox;
