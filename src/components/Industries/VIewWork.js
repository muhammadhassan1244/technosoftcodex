import React, { Component } from 'react';


const VIewWork = () => {
    return (
        <div>
            <div className="container">
            <h3 className="text-center text-primary">Case Studies</h3>
            <p className="text-center">We work on cutting-edge technology and enterprise solutions for solving real-world problems and help businesses become bigger & better.

</p>
                         <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
        <ol className="carousel-indicators">
          <li data-target="#carouselExampleIndicators" data-slide-to={0} className="active" />
          <li data-target="#carouselExampleIndicators" data-slide-to={1} />
          <li data-target="#carouselExampleIndicators" data-slide-to={2} />
        </ol>
        <div className="carousel-inner text-center">
          <div className="carousel-item active">
            <img src="https://cdn4.vectorstock.com/i/1000x1000/88/23/online-shopping-website-landing-page-design-vector-23818823.jpg"  className="imageLaptop"/>
          </div>
          <div className="carousel-item">
          <img src={process.env.PUBLIC_URL + '/twoMpixel.PNG'}  className="imageLaptop"/>
          
          </div>
          <div className="carousel-item">
          <img src={process.env.PUBLIC_URL + '/Capture.PNG'}  className="imageLaptop"/>

          </div>
        </div>
        <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true" />
          <span className="sr-only">Previous</span>
        </a>
        <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true" />
          <span className="sr-only">Next</span>
        </a>
      </div>
      <a href="#" className="text-center text-primary d-block mt-4">View Our Work</a>
      </div>
        </div>
    )
}

export default VIewWork
