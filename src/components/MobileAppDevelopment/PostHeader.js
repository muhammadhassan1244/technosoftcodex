import React, { Component } from "react";

const PostHeader = (props) => {
  return (
    <div>
      <div className="study1" id={props.postHeader.id}>
        <div className="transparent-dark">
          <div className="container">
            <p className="pt-5 text-white">{props.postHeader.service}</p>
            <h2 className=" text-white">{props.postHeader.tagLine}</h2>
            <p className="mt-5 text-white">{props.postHeader.para}</p>
            {props.postHeader.btn}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PostHeader;
