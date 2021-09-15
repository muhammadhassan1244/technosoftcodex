import React from "react";
import Header from '../Header';
import HeaderBackground from "./HeaderBackground";
import Logo from "./Logo";
import Info from "./Info";
import VIewWork from "./VIewWork";
import Footer from "../LandingPage/Footer";

const HealthCare = () => {

  const data={
    head:"Transforming the digital landscape of healthcare",
  }
  const info={
    infoHead:"Our apps have been at the cornerstone of the technology revolution in the healthcare industry. From educating medical students to patient management in clinics, our experts have covered all.",
    leader:"A journey from traditional to modern technology",
    para:"Arbisoft has worked with clients stuck with traditional paper-based health records and help them adopt digital solutions. We developed patient management system for smart patient appointment scheduling. The solution helps physicians or frontdesk staff to accurately predict if the patient will visit the clinic or miss appointments, and schedule patients’ appointments based on their past behaviour. Our scheduling optimization product will make practices lean and efficient and improve care coordination and patient engagement.",
    softwareServiceHead:"Bringing healthIT startups on the digital map",
    softwareServicePara:"Healthcare is one of the fastest developing sectors with numerous innovations, while healthIT solutions and devices have been on a rise to facilitate the growth of the industry. Working with various clients Arbisoft has developed mobile and web apps that digitally monitor patients’ vital signs, maintain data and create smart alerts based patient’s history. Our engineers have developed 3D apps for human anatomy, which is used by leading medical schools to teach students.",
     faFirst: <i class="fas fa-5x text-primary fa-tablet-alt"></i>,
     faSecond: <i class="fas fa-5x text-primary fa-digital-tachograph"></i>
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

export default HealthCare;
