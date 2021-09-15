import React, { Component } from 'react';
import Header from '../Header';
import PostHeader from '../MobileAppDevelopment/PostHeader';
import Card from '../LandingPage/Card';
import Strategy from '../LandingPage/Strategy';
import Footer from '../LandingPage/Footer';





const OpenEdx = () => {
    const tech = [
        {
          head: "Open edX platform deployment",
          para: "We have all the tools to get your Open edX instance up and running. We offer hosting as well as long-term maintenance services. We take care to ensure all operations are stable and oversee the smooth adjustment of your online courses",
          img: <i class="fab fa-500px fa-2x text-primary text-center"/>,
          sign: "",
        },
        {
          head: "Customization & Branding",
          para: "Our developers are specialists in white labelling, giving customers a ‘re-skinned’ Open edX platform that incorporates your corporate colours, fonts, logo and more to provide end users with an immersive branding experience.",
          img:<i class="fas fa-copyright fa-2x text-primary text-center"/>,
          sign: "",
        },
        {
          head: "Hosting Advisory & Support",
          para: "Ranging from self-help to enterprise options, our team knows how to create out-of-the-box solutions and communicate technicalities to clients in a way that allows them to develop the best product for their needs and use it to its full potential.",
          img: <i class="fab fa-ioxhost fa-2x text-primary text-center"/>,
          sign: "",
        },
        {
            head: "Integration & authentication",
            para: "Our Open edX third party authentication enables your students to log in to their Open edX accounts through any third party software you wish to integrate your MOOC with, including Twitter, Facebook and Gmail.",
            img: <i class="fab fa-yandex-international fa-2x text-primary text-center"/>,
            sign: "",
          },
      ];
      var techArray = tech.map((section) => {
        return <Card image={section.img} head={section.head} para={section.para} sign={section.sign}/>;
      });
      const strategy = {
        head: "CASE STUDIES",
        para: "We work on cutting-edge technology and enterprise solutions for solving real-world problems and help businesses become bigger & better.",
        img:<img src="https://arbisoft.com/wp-content/uploads/2019/10/case-study.png" alt="Web App" className="text-left" style={{width:"100%"}}/>,
        sign: <button type="button" class="btn btn-primary">View our work</button>    
      };
      const advantages = [
        {
          head: "World class engineering team",
          para: "Our engineering team specialises in Open edX development: customisation of platform, consolidating branding features, developing the edX credentials service for course verification, and modifying the edX e-commerce service.",
          img: "",
          sign: "",
        },
        {
          head: "Strong problem solving expertise",
          para: "Bringing our combined expertise together to solve problems as a team has lead to the development of unique solutions for clients’ needs such as our innovative Open edX platforms for training in the workplace using 3D videos and simulations to help McDonalds train new employees",
          img: "",
          sign: "",
        },
        {
          head: "Leader in modern technologies",
          para: "Arbisoft’s team works tirelessly to connect Open edX to the future. Virtual Software Labs, 3D Simulation and Open edX mobile apps are just a few of our premium products that can be tailored to clients’ needs while giving students a cutting-edge learning experience which exceed the possibilities of a traditional classroom.",
          img: "",
          sign: "",
        },
      ];
      var advantagesArray = advantages.map((section) => {
        return <Card image={section.img} head={section.head} para={section.para} sign={section.sign}/>;
      });
      const postHeader={
        service:"Services",
        tagLine:"Open edX Services",
        para:"As an edX partner and Open edX service provider and contributor, we offer clients a unique advantage when it comes to custom development, implementation and integration, managed hosting, support and training.",
        btn:<button type="button" class="btn btn-primary">Tell us about your project</button>,
        id:"openEdx"    
      }
    return (
        <div>
            <Header />
            <PostHeader postHeader={postHeader}/>
            <div className="">
                <div className="container">
                <h2 className="text-center text-white text-primary mt-5">Get your customised Open edX platform
</h2>
                <div className="row mt-5">{techArray}</div>
                <Strategy obj={strategy} />
                <h2 className="text-center text-white text-primary mt-5">The Technosoft Advantage.</h2>
<p className="text-center text-white text-primary">We produce well-designed, engaging, and secure custom web apps.</p>
<div className="row">{advantagesArray}</div>

                </div>
<Footer />
            </div>
        </div>
    )
}

export default OpenEdx
