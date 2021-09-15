import React, { Component } from "react";
import Header from "../Header";
import Strategy from "../LandingPage/Strategy";
import Card from "../LandingPage/Card";
import Footer from "../LandingPage/Footer";

const WhyTechnosoft = () => {
  const strategy = {
    head: "Technosoft's Legacy",
    para: "We take pride in our strong capability for designing and engineering robust software using mobile, web and cloud technologies. Specializing in custom web applications, intuitive mobile apps, and robust data mining techniques, our team creates digital solutions that impact millions of lives.",
    img: (
      <img
        src="https://frugalentrepreneur.com/wp-content/uploads/2018/12/high-tech-business-ideas.jpg"
        alt="Technosoft Legacy"
        className="fixPic"
      />
    ),
    sign: (
      <button type="button" class="btn btn-primary">
        Tell us about your project
      </button>
    ),
  };
  const businessvalue = {
    head: "Creating Value For Your Business",
    para: "We believe in the possibility of what can be. Our team of 400+ experienced software engineers, developers, UX architects, designers and QA engineers are driven to produce impactful software. We have created thousands of solutions over the last decade and helped businesses like yours expand at a rapid scale. We understand the challenges of working with a remote team and focus on providing an experience that feels like having a software development team next door. Bring your idea. Let us create it.",
    img: (
      <div>
        <span class="dot">
          <p className="mt-5">
            Helping educate over 30 million learners around the world
          </p>
        </span>
      </div>
    ),
    sign: "",
  };
  const successStory = {
    head: "Learning platform to bring life skills training to consumers who need it most",
    para: "PayPerks began a long-term relationship with Arbisoft back in 2010. We help them level up their existing capabilities in Python, Django, React, and Javascript. We do more than just build and maintain the platform: we’ve augmented their in-house team for 360° core platform and back-end, web, and mobile development and third party data integrations.",
    img: (
      <video
        playsInline
        autoPlay
        loop
        muted
        style={{ opacity: 1, width: "70%", height: "auto" }}
      >
        <source src={process.env.PUBLIC_URL + "/video.mp4"} />
        <source
          src="/wp-content/uploads/2019/10/arbisoft-video.webm"
          type="video/webm"
        />
      </video>
    ),
    sign: "",
  };
  const tech = [
    {
      head: "Build partnerships",
      para: "We believe in nurturing long term relationships with our clients. You need a partner you can trust to not only bring your idea to life, but also to grow with.",
      img: <i class="fas fa-trophy fa-2x text-center text-primary" />,
 sign:""     
    },
    {
      head: "Creating Value",
      para: "We have rapidly built a world-class team of engineers ready to take on diverse and challenging projects with an aim to create real value for our partners and community.",
      img: <i class="fas fa-laptop fa-2x text-center text-primary" />,
  sign:"",
    },
    {
      head: "Proven Capability",
      para: "Give us a problem and we will engineer a solution! Our team of world-class engineers has developed enterprise and analytical software used by millions of users every day.",
      img: <i class="fas fa-smog fa-2x text-center text-primary" />,
    sign:""},
  ];
  var techArray = tech.map((section) => {
    return <Card image={section.img} head={section.head} para={section.para} />;
  });
  return (
    <div>
      <Header />
      <div className="section">
        <div className="container">
          <Strategy obj={strategy} />
          <Strategy obj={businessvalue} />
          <h3 className="text-center text-primary mt-5">
            Developing professional grade software - it takes years to get this
            good
          </h3>
          <p className="text-center text-primary text-justify">expertise By</p>
          <div class="row mt-3 text-center d-block">
            <button type="button" class="btn btn-primary">
              Industries
            </button>
            <button type="button" class="btn btn-outline-secondary ml-2">
              Speciality
            </button>
            <button type="button" class="btn btn-outline-success ml-2">
              Technology
            </button>
            <button type="button" class="btn btn-outline-success ml-2">
              Frameworks
            </button>
          </div>
          <h4 className="mt-5 font-weight-bold text-primary">Success Story</h4>
          <Strategy obj={successStory} />
          <h3 className="text-center text-primary mt-5">
            At Arbisoft we love to build and refine technologies that improve
            lives while developing great relationships along the way
          </h3>
          <div className="row mt-5">{techArray}</div>
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default WhyTechnosoft;
