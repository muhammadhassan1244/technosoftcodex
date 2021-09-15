import React, { Component } from "react";
import CardCol from "./CardCol";

const Card = (props) => {
  return (
    <>
      <div className="col-md-4 mt-3 mt-md-0">
        <CardCol head={props.head} para={props.para} image={props.image} sign={props.sign}/>
      </div>
    </>
  );
};

export default Card;
