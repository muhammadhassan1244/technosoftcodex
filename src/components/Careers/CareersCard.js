import React, { Component } from 'react';


const CareersCard = (props) => {
    return (
        <>
                        <div className="col-md-4 mt-4">
            <div className="card">
    <div className="image text-center ">
      <h5 className="text-primary font-weight-bold">{props.tag}
</h5>
<p className="mt-4 text-success">{props.position}</p>
<hr />
<p className="mt-5">{props.res}</p>
<hr />
<p>{props.office}</p>
<p className="mt-5 pt-5 font-weight-bold text-primary">@Technosoft 2021</p>

    </div>
    <a href="#">
    <div className="details">
      <div className="center">
        <h1>Job Description<br /><span>{props.descTag}</span></h1>
        <p className="text-justify">{props.description}</p>
        <ul>
          <li><a href="#"><i className="fa fa-facebook" aria-hidden="true"></i></a></li>
          <li><a href="#"><i className="fa fa-twitter" aria-hidden="true"></i></a></li>
          <li><a href="#"><i className="fa fa-google-plus" aria-hidden="true"></i></a></li>
          <li><a href="#"><i className="fa fa-linkedin" aria-hidden="true"></i></a></li>
          <li><a href="#"><i className="fa fa-instagram" aria-hidden="true"></i></a></li>
        </ul>
      </div>
    </div>
    </a>
  </div>
            </div>
        </>
    )
}

export default CareersCard
