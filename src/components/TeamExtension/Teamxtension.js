import React, { Component } from 'react';
import Header from '../Header';
import PostHeader from '../MobileAppDevelopment/PostHeader';
import Card from '../LandingPage/Card';
import Strategy from '../LandingPage/Strategy';
import Footer from '../LandingPage/Footer';





const WebAppDevelopment = () => {
    const tech = [
        {
          head: "Expertly Skilled",
          para: "Our developers are experienced, capable, and have collaborated with teams all over the world. They work well as part of a team unit or autonomously.",
          img: <i class="fab fa-buromobelexperte fa-2x text-primary text-center" />,
          sign: "",
        },
        {
          head: "Specialist Services",
          para: "Our specialists are available by specific experience level and skill set. From Python to Django, our developers have the skills to support your development team.",
          img: <i class="fab fa-servicestack fa-2x text-primary text-center" />,
          sign: "",
        },
        {
          head: "Immediately Available",
          para: "Our developers are available as soon as you need them. All of them have considerable experience and require little onboarding or oversight.",
          img: <i class="fab fa-accessible-icon fa-2x text-primary text-center" />,
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
          head: "Trained Experts",
          para: "Our experienced team is constantly adding to their knowledge base with training on the latest technology and applications.",
          img: "",
          sign: "",
        },
        {
          head: "Solid Skills",
          para: "Our team is capable of producing any application you can dream up. We provide the precise resource you need to help your team complete its project.",
          img: "",
          sign: "",
        },
        {
          head: "Unmatched Experience",
          para: "Our developers have worked on massive projects with global companies, from Kayak to edX, and bring a wealth of real world experience with them to each project.",
          img: "",
          sign: "",
        },
      ];
      var advantagesArray = advantages.map((section) => {
        return <Card image={section.img} head={section.head} para={section.para} sign={section.sign}/>;
      });
      const postHeader={
        service:"Services",
        tagLine:"Dedicated Software Development Team",
        para:"Looking for the best resources to compliment your existing team? Our talented developers are available to augment your team on a short or long term basis.",
        btn:<button type="button" class="btn btn-primary">Tell us about your project</button>,
        id:"teamExt"    
      }
    return (
        <div>
            <Header />
            <PostHeader postHeader={postHeader}/>
            <div className="">
                <div className="container">
                <h2 className="text-center text-white text-primary mt-5">Bolster your team with our capable developers.
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

export default WebAppDevelopment
