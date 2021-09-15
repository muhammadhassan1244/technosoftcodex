import React, { Component } from "react";

const Carousel = () => {
  return (
    <div>
      <div
        id="carouselExampleIndicators"
        className="carousel slide pointer-event mt-5"
        data-ride="carousel"
      >
        <ol className="carousel-indicators">
          <li
            data-target="#carouselExampleIndicators"
            data-slide-to={0}
            className="active"
          />
          <li
            data-target="#carouselExampleIndicators"
            data-slide-to={1}
            className
          />
          <li
            data-target="#carouselExampleIndicators"
            data-slide-to={2}
            className
          />
        </ol>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <div className="row">
              <div className="col-4">
                <img src="https://www.thefounder.in/wp-content/uploads/2020/09/192x192.jpg" />
              </div>
              <div className="col-8 d-flex align-items-center">
                <p>
                  Beyond our skilled expertise, it is our customers and our
                  relationship with them that sets us apart
                </p>
              </div>
            </div>
          </div>
          <div className="carousel-item">
            <div className="row">
              <div className="col-4">
                <img src="https://www.thefounder.in/wp-content/uploads/2020/09/192x192.jpg" />
              </div>
              <div className="col-8 d-flex align-items-center">
                <p>
                  Beyond our skilled expertise, it is our customers and our
                  relationship with them that sets us apart
                </p>
              </div>
            </div>
          </div>
          <div className="carousel-item">
            <div className="row">
              <div className="col-4">
                <img src="https://www.thefounder.in/wp-content/uploads/2020/09/192x192.jpg" />
              </div>
              <div className="col-8 d-flex align-items-center">
                <p className="d-flex align-item-center">
                  Beyond our skilled expertise, it is our customers and our
                  relationship with them that sets us apart
                </p>
              </div>
            </div>
          </div>
        </div>
        <a
          className="carousel-control-prev"
          href="#carouselExampleIndicators"
          role="button"
          data-slide="prev"
        >
          <span
            className="carousel-control-prev-icon text-primary"
            aria-hidden="true"
          />
          <span className="sr-only">Previous</span>
        </a>
        <a
          className="carousel-control-next"
          href="#carouselExampleIndicators"
          role="button"
          data-slide="next"
        >
          <span className="carousel-control-next-icon" aria-hidden="true" />
          <span className="sr-only">Next</span>
        </a>
      </div>
    </div>
  );
};

export default Carousel;
