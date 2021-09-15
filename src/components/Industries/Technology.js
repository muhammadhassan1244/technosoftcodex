import React from "react";
import Header from '../Header';
import HeaderBackground from "./HeaderBackground";
import Logo from "./Logo";
import Info from "./Info";
import VIewWork from "./VIewWork";
import Footer from "../LandingPage/Footer";

const Technology = () => {

  const data={
    head:"A full-scale technology and solutions development partner",
  }
  const info={
    infoHead:"Industry leaders in technology and software turn to Arbisoft to support their growing enterprise.",
    leader:"The right technical capability for your business",
    para:"For over a decade Arbisoft’s teams of dedicated engineers have developed software and provided technical support to some of the largest organizations and startups looking to scale big. With the help of enterprise solutions developed by us, companies have been able to deliver solutions and respond to customer demands in a more effective manner required in the evolving technology landscape.",
    softwareServiceHead:"Working with the data to accelerate your success",
    softwareServicePara:"We believe in creating value for our client, which comes through our innovation-driven approach and vision to prioritise people. Our work speaks of our dedication to solve real world problems and bring value to our clients’ businesses. Whether it’s educating millions online, developing applications for medical students and professionals, disrupting the travel industry or helping fintech companies predict stocks; Arbisoft has created a difference with our expertise in developing enterprise solutions. With 4 locations across the world and over 450 team members, Arbisoft is the perfect partner to meet the global demands of our clients.",
     faFirst: <i class="fas fa-laptop fa-5x text-primary text-center"></i>,
     faSecond:  <i class="fas fa-thumbs-up fa-5x text-primary text-center"></i>
  }
  return (
    <>
    <Header />
    <HeaderBackground head={data.head}/>
    <Logo />

    <Info info={info}/>
    <VIewWork />
    <Footer />

    </>
  );
};

export default Technology;
