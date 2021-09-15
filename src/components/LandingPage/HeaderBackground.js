import React, { Component } from "react";
import Typed from "react-typed";
import Particles from "react-particles-js";

const HeaderBackground = () => {
  return (
    <>
      <div className="study1">
        <div className="transparent-dark"></div>
      </div>
      <h2 className="text-white type">
        {" "}
        <Typed
          className="typed-text"
          strings={["We build powerful digital solutions and experiences."]}
          typeSpeed={40}
          backSpeed={60}
          loop
        />
      </h2>
      <Particles
        params={{
          particles: {
            number: {
              value: 30,
              density: {
                enable: true,
                value_area: 900,
              },
            },
          },
        }}
      />
    </>
  );
};

export default HeaderBackground;
