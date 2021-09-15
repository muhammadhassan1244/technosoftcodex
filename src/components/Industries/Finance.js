import React from "react";
import Header from '../Header';
import HeaderBackground from "./HeaderBackground";
import Logo from "./Logo";
import Info from "./Info";
import VIewWork from "./VIewWork";
import Footer from "../LandingPage/Footer";

const Finance = () => {

  const data={
    head:"Developing customised finance solutions for clients",
  }
  const info={
    infoHead:"Our data and software engineering teams have teamed up with startups to enterprise organisations to help them meet fast-paced changes in financial sector.",
    leader:"The right technical capability for your business",
    para:"Digitization has changed the finance industry and you need the right technology support to stay abreast with the developments. Whether its finance, insurance or stocks, our team of expert developers and data analysts have the domain expertise and technical capability to offer solutions customized to your business needs. This approach has helped clients stay ahead of their competition and resulted in long term partnerships with Arbisoft.",
    softwareServiceHead:"Working with the data to accelerate your success",
    softwareServicePara:"Our data experts have worked with clients with business spanning over a century; mining data and creating algorithms that make predictions about fluctuations in stocks. Similarly our web and mobile app teams have created apps that facilitate financial clients to gather, store and monitor large amounts of data for research purposes.",
     faFirst:<i class="fas fa-business-time fa-5x text-primary"></i>,
     faSecond: <i class="fas fa-thumbs-up fa-5x text-primary"></i>,
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

export default Finance;
