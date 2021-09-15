import React, { Component } from "react";

const Services = (props) => {
  return (
    <>
      <div className="col-md-6 py-4 border">
        <div className="row no-gutters">
          <div className="col-4 text-center">{props.image}</div>
          <div className="col-8">
            {" "}
            <h4>{props.head}</h4>
            <p>{props.para}</p>
            <a style={{ color: "#5497da" }} href="/industries/education/">
              Learn more →
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Services;
