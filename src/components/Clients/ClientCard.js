import React, { Component } from "react";


const ClientCard = (props) => {
  return (
    <>
      <div className="row border rounded shadow p-3 clientCard mt-4">

        <div className="col-md-4 text-center align-self-center">
        <img src={props.pic} alt="EDX" class="pic  text-center"/>
        </div>
        <div className="col-md-8">
          <h3>{props.title}</h3>
          <p>
           {props.para}
          </p>
          <a href="#" className="text-warning">View Case Study</a>
        </div>
      </div>
    </>
  );
};

export default ClientCard;
