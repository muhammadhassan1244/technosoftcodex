import React, { Component } from "react";
import { Link, NavLink } from "react-router-dom";

const Header = () => {
  return (
    <div>
     <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <Link className="navbar-brand" to="/">Technosoft</Link>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarNavDropdown">
          <ul className="navbar-nav">
            <li className="nav-item active">
              <Link className="nav-link" to="whytech">Why Technosoft <span className="sr-only">(current)</span></Link>
            </li>
            <li className="nav-item dropdown">
              <Link className="nav-link dropdown-toggle" to="#" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
               Services
              </Link>
              <div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                <Link className="dropdown-item" to="web-app-development">Web App Development</Link>
                <Link className="dropdown-item" to="mobile-app-development">Mobile App Development</Link>
                <Link className="dropdown-item" to="devops-service">DevOps</Link>
                <Link className="dropdown-item" to="dedicated-software-development-team">Team Extension</Link>
                <Link className="dropdown-item" to="ui-ux-design">UI/UX</Link>
                <Link className="dropdown-item" to="quality-assurance">Quality Assurance</Link>
                <Link className="dropdown-item" to="3d-app-development">3D</Link>
                <Link className="dropdown-item" to="enterprise-software-dev">Enterprise Software Development</Link>
                <Link className="dropdown-item" to="open-edx">Open edx</Link>
                <Link className="dropdown-item" to="web-scraping">Web Scraping</Link>
              </div>
            </li>
            <li className="nav-item active">
              <Link className="nav-link" to="clients">Clients <span className="sr-only">(current)</span></Link>
            </li>
            <li className="nav-item dropdown">
              <Link className="nav-link dropdown-toggle" to="#" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
               Industries
              </Link>
              <div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                <Link className="dropdown-item" to="industry-education">Education</Link>
                <Link className="dropdown-item" to="industry-travel">Travel</Link>
                <Link className="dropdown-item" to="industry-healthcare">Healthcare</Link>
                <Link className="dropdown-item" to="industry-finance">Finance</Link>
                <Link className="dropdown-item" to="industry-technology">Technology</Link>
                <Link className="dropdown-item" to="industry-e-commerce">E-Commerce</Link>
              </div>
            </li>
            <li className="nav-item dropdown">
              <Link className="nav-link dropdown-toggle" to="#" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              Careers
              </Link>
              <div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                <Link className="dropdown-item" to="/careers">Open Positions</Link>
                <Link className="dropdown-item" to="/fresh-grad-hiring">Fresh Graduat Hiring</Link>
              </div>
            </li>
          </ul>
        </div>
        <button type="button" class="btn btn-primary">Request A Quote</button>

      </nav>
    </div>
  );
};

export default Header;
