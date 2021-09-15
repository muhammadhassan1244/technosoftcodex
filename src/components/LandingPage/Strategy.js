import React, { Component } from "react";

const Strategy = (props) => {


  return (
    <div>
      <div className="row mt-5">
        <div className="col-12">
          <div className="row no-gutters">
            <div className="col-6">
              {" "}
              <h3 className="text-primary">
                {props.obj.head}
              </h3>
              <p className="text-justify">
               {props.obj.para}
              </p>
               {props.obj.sign}
              
            </div>
            <div className="col-6 text-center">
            {props.obj.img}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Strategy;
