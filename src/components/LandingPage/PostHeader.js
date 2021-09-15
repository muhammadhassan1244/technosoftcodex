import React, { Component } from "react";
import Typed from "react-typed";

const PostHeader = () => {
  return (
    <div>
      <div className="vidbg-container bg-dark">
        <video
          playsInline
          autoPlay
          loop
          muted
          style={{ opacity: 1, width: "100%", height: "auto" }}
        >
          <source src={process.env.PUBLIC_URL + "/video.mp4"} />
          <source
            src="/wp-content/uploads/2019/10/arbisoft-video.webm"
            type="video/webm"
          />
        </video>
        <div className="overlay">
          <h1 id="build">
            <Typed
              className="typed-text"
              strings={["We build powerful digital solutions and experiences."]}
              typeSpeed={40}
              backSpeed={60}
              loop
            />
          </h1>
          <div className="row mt-5">
            <div className="col">
              <button
                type="button"
                className="btn p-3 btn-sm btn-md-lg btn-light"
              >
                View our Work
              </button>
            </div>
            <div className="col">
              <button
                type="button"
                className="btn p-3 btn-primary  btn-sm btn-md-lg"
              >
                Tell us about yourproject
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PostHeader;
