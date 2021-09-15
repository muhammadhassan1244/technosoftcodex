import React from "react";
import Header from "../Header";
import HeaderBackground from "./HeaderBackground";
import Logo from "./Logo";
import Info from "./Info";
import VIewWork from "./VIewWork";
import Footer from "../LandingPage/Footer";

const Travel = () => {
  const data = {
    head: "Award-winning travel apps at your fingertips",
  };
  const info = {
    infoHead:
      "Arbisoft has helped startups become leading travel & hospitality search engines with our dedicated team of software developers, and machine learning and data engineers.",
    leader: "Building the world’s leading search engine",
    para: "We teamed up with KAYAK in 2008 to build fully integrated iOS and Android apps that helped extend and enhance their web-based experience for users on the go. While our Machine Learning engineers use Natural Language Processing to augment KAYAK’s data, our dedicated team of QA makes sure all functional software is error free and runs smoothly. The app has been downloaded over 50 million times from 30 countries across the globe.",
    softwareServiceHead: "Using technology to leverage clients’ business",
    softwareServicePara:
      "Our technology expertise in the travel industry has helped clients to expand their business across continents and won numerous industry awards. We have worked with Travelliance to keep its web portal up and running so that their database of over 7 million users function smoothly. Thanks to these optimisations, Travelliance expanded services to 5 continents.",
    faFirst: <i class="fab fa-searchengin text-primary fa-5x"></i>,
    faSecond: <i class="fas fa-tablet text-primary fa-5x"></i>,
  };
  return (
    <>
      <Header />
      <HeaderBackground head={data.head} />
      <Logo />

      <Info info={info} />
      <VIewWork />
      <Footer />
    </>
  );
};

export default Travel;
