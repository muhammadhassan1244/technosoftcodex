import React from "react";

const HeaderBackground = (props) => {
  return (
    <header>
      <div className="p-5 text-start bg-image indus" style={{}}>
        <p className="text-white mt-5 h5">INDUSTRY</p>
        <div className="d-flex justify-content-start align-items-start h-100">
          <div className="row">
            <div className="col-sm-12 text-fluid">
              <p className="card-title h2 text-white text-fluid bg-primary p-3">
                {props.head}
              </p>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default HeaderBackground;
