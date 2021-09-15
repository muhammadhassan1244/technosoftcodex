import React, { Component } from "react";
import Header from "../Header";
import btnRow from "./btnRow";
import Card from "./Card";
import Carousel from "./Carousel";
import DiscussionForm from "./DiscussionForm";
import FeatureBox from "./FeatureBox";
import Footer from "./Footer";
import HeaderBackground from "./HeaderBackground";
import Services from "./Services";
import Strategy from "./Strategy";

const Landing = () => {
  const tech = [
    {
      head: "Web",
      para: "Our web development team creates intuitive user experiences wrapped up in beautiful designs. Everything we create is custom and precisely made to your specification. Our award-winning web apps have found the best deals for travelers, enabled businesses to maximize their ROI, and more.",
      img: <i className="fab fa-3x fa-aws text-primary text-center " />,
      sign: "Learn more ->",
    },
    {
      head: "Mobile",
      para: "Our team builds nimble and elegant apps for all smartphone platforms. Our engineers work closely with you to understand your specifications and develop apps that provide an intuitive end user experience. Our ongoing support ensures your app is ever-ready for your users.",
      img: (
        <i
          class="fa fa-3x fa-mobile text-primary text-center "
          aria-hidden="true"
        />
      ),
      sign: "Learn more ->",
    },
    {
      head: "Data",
      para: "Our powerful data mining techniques, including automated and semi-automated data scraping and analysis services, accelerate data analysis. We specialize in creating custom models that collect data, apply the most effective analysis techniques, and convert it into actionable insights.",
      img: <i class="fas fa-3x fa-database text-primary text-center " />,
      sign: "Learn more ->",
    },
  ];
  var techArray = tech.map((section) => {
    return <Card image={section.img} head={section.head} para={section.para} sign={section.sign}/>;
  });

  const featureBox = [
    {
      img: <i className="far fa-heart fa-3x text-primary" />,
      val: "100+",
      tag: "Happy Clients",
    },
    {
      img: <i class="far fa-lightbulb fa-3x text-primary" />,
      val: "13",
      tag: "Business Years",
    },
    {
      img: <i class="fas fa-users fa-3x text-primary" />,
      val: "100+",
      tag: "Team Members",
    },
    {
      img: <i class="fas fa-home fa-3x text-primary" />,
      val: "4",
      tag: "Global Offices",
    },
  ];
  var featureArray = featureBox.map((section) => {
    return (
      <FeatureBox image={section.img} val={section.val} tag={section.tag} />
    );
  });

  const services = [
    {
      img: <i className="far fa-heart fa-3x text-primary" />,
      head: "Education",
      para: "We have partnered with some of the leading education and financial institutions, and nonprofits to modernize the ways learning is accessed. Our online and ed-tech solutions are used by millions globally.",
    },
    {
      img: <i class="fas fa-route fa-5x text-primary" />,
      head: "Travel",
      para: "Arbisoft has helped startups become leading travel & hospitality search engines with our dedicated team of software developers, and machine learning and data engineers.",
    },
    {
      img: <i class="fas fa-heartbeat fa-5x text-primary" />,
      head: "HealthCare",
      para: "Our apps have been at the cornerstone of the technology revolution in the healthcare industry. From educating medical students to patient management in clinics, our experts have covered all.",
    },
    {
      img: <i class="fas fa-money-bill-wave fa-5x text-primary" />,
      head: "Financial Services",
      para: "Our data and software engineering teams have teamed up with startups to enterprise organizations to help them meet fast-paced changes in financial sector.",
    },
  ];
  var serviceArray = services.map((section) => {
    return (
      <Services image={section.img} head={section.head} para={section.para} />
    );
  });
  const strategy = {
    head: "From strategy to deployment and beyond…",
    para: "Once you conceive an idea, the next step is to find the best technology partner to bring your idea to life. Our team of developers, software architects, project managers and other technicians is equipped with advanced and up-to-date skill sets to cater to specific needs of your project. We are a full-scale software development firm that knows the value of lasting relationships and can combine focused detail-oriented action with long-term strategic thinking.",
    img: <i class="fab fa-deploydog text-primary fa-5x text-center"></i>,
    sign: "Learn more ->",
  };
  return (
    <div>
      <Header />
      <HeaderBackground />
      <div className="container">
        <h2 className="text-primary text-center mt-5">
          We take care of all the technology so you can focus on what you do
          best
        </h2>
        <p className="text-center ">
          Our team of 400+ experienced software engineers, developers, UX
          architects, and designers like to produce impactful software. We
          create software that is used by millions of users, in sectors spanning
          Education, Technology, Healthcare, Travel and beyond.
        </p>
        <div className="row">{techArray}</div>
        <div className="container">
          <h2 className="text-primary text-center mt-5">
            Great software needs great relationships
          </h2>
          <p className="text-center">
            Beyond our skilled expertise, it is our customers and our
            relationship with them that sets us apart
          </p>

          <Carousel />
        </div>
        <div className="container">
          <div className="row mt-5">{featureArray}</div>
          <div className="row mt-5">
            <button type="button" className="btn btn-primary">
              Industries
            </button>
            <button type="button" className="btn btn-outline-secondary ml-2">
              Services
            </button>
            <button type="button" className="btn btn-outline-success ml-2">
              Solutions
            </button>
          </div>
          <div className="row mt-5">{serviceArray}</div>
          <Strategy obj={strategy} />
          <h2 class="text-primary text-center mt-5">
            Our clients are doing amazing work with the software we built
          </h2>
          <Carousel />
          <h2 className="text-primary text-center mt-5">
            Get in touch today to discover what we can do for you
          </h2>
          <DiscussionForm />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Landing;
