import React from "react";
import Header from '../Header';
import HeaderBackground from "./HeaderBackground";
import Logo from "./Logo";
import Info from "./Info";
import VIewWork from "./VIewWork";
import Footer from "../LandingPage/Footer";

const Ecommerce = () => {

  const data={
    head:"Delivering custom e-commerce platform for your business",
  }
  const info={
    infoHead:"E-commerce is a rapidly evolving industry depending highly on the changing demands of the customer. Arbisoft is the ideal technology partner that will help you stay ahead of the curve.",
    leader:"Custom software for your business",
    para:"With the rise of new business models, trends and proliferation of e-commerce websites, it is important for organizations to build an e-commerce platform that is more agile, flexible, resilient and unique. We build custom software platforms that offer more control to you and utility to customers to meet their demands in the way they want it. Once created, your software adds value to your business and stands out in the marketplace — as you scale, evolve and expand, your software harmoniously fits in with your business requirements and with what it has to offer.",
    softwareServiceHead:"E-commerce solutions for businesses of all shapes and sizes",
    softwareServicePara:"Regardless of your industry or whether you want to target B2B or B2C customers, the software we create for you promises to benefit your business in every step of its operations and delivery. We pride ourselves on creating fully functional, responsive and advanced online solutions which offer a unique experience and is custom made for your brand. Our software supports multiple languages, currencies and features to offer a smooth customer experience.",
     faFirst: <i class="fab fa-5x text-primary text-center fa-uncharted"></i>,
     faSecond: <i class="fab fa-5x text-primary text-center fa-ideal"></i>
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

export default Ecommerce;
