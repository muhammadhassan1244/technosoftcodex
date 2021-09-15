import React, { Component } from 'react';
import Header from '../Header';
import PostHeader from '../MobileAppDevelopment/PostHeader';
import Card from '../LandingPage/Card';
import Strategy from '../LandingPage/Strategy';
import Footer from '../LandingPage/Footer';





const UI = () => {
    const tech = [
        {
          head: "User Research",
          para: "For clients in the design and prospecting phase of a new product, we offer in-depth user research, mockups, user persona development, and thorough UI/UX testing to ensure your app is human-friendly from the start.",
          img: <i class="fab fa-researchgate fa-2x text-primary text-center" />,
          sign: "",
        },
        {
          head: "UX Audit",
          para: "We offer UX auditing services for products that are already in the hands of users so you can see what’s working and what isn’t.",
          img: <i class="fas fa-audio-description fa-2x text-primary text-center" />,
          sign: "",
        },
        {
          head: "Interaction Design",
          para: "We combine the five dimensions of interaction design—words, visuals, spatial layouts, time, and object behavior—into one smooth experience to help you create the best possible user experience.",
          img: <i class="fas fa-ruler-vertical fa-2x text-primary text-center" />,
          
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
          head: "Thoughtful Design",
          para: "Crafting the perfect user experience is nothing short of alchemy. Our team melds user needs, functionality, and aesthetics to create experiences that captivate your customers",
          img: "",
          sign: "",
        },
        {
          head: "Detailed Focus",
          para: "Page flow, visual layout, and the psychological impact of copy all influence your customers’ experience. Our team focuses on each detail to craft the ideal user experience..",
          img: "",
          sign: "",
        },
        {
          head: "Expert Guidance",
          para: "Our team specializes in understanding your user and creating an experience just for them. From initial designs to audits of existing apps, our team will make sure your app engages your audience and makes them want to stick around.",
          img: "",
          sign: "",
        },
      ];
      var advantagesArray = advantages.map((section) => {
        return <Card image={section.img} head={section.head} para={section.para} sign={section.sign}/>;
      });
      const postHeader={
        service:"Services",
        tagLine:"UI-UX Solutions",
        para:"Good user experiences are very important to us for every software we create.By basing our software on human-centered design principles, we ensure your users get the best experience, and you get the best return on investment.",
        btn:<button type="button" class="btn btn-primary">Tell us about your project</button>,
        id:"Ui"    
      }
    return (
        <div>
            <Header />
            <PostHeader postHeader={postHeader}/>
            <div className="">
                <div className="container">
                <h2 className="text-center text-white text-primary mt-5">We create apps your users will love.
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

export default UI
