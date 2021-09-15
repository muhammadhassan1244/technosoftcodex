import React, { Component } from "react";

const CardCol = (props) => {
  return (
    <>
      <div className="card  p-3">
        {props.image}
        <div className="card-body">
          <h4 className="card-title text-primary">{props.head}</h4>
          <p className="card-text text-justify">{props.para}</p>
          <p className="card-text">
            <a
              style={{ color: "#5497da" }}
              href="/services/web-app-development/"
            >
             {props.sign}
            </a>
          </p>
        </div>
      </div>
    </>
  );
};

export default CardCol;
