import React, { Component } from 'react';
import Header from '../Header';
import PostHeader from '../MobileAppDevelopment/PostHeader';
import Card from '../LandingPage/Card';
import Strategy from '../LandingPage/Strategy';
import Footer from '../LandingPage/Footer';





const DevOps = () => {
    const tech = [
        {
          head: "Iterative Improvement",
          para: "Our Agile methodologies let you build ready-to-ship software products sooner. Our DevOps services help keep it not just operational but also continually improving through incremental updates.",
          img: <i class="fab fa-trade-federation fa-2x text-primary text-center" />,
          sign: "",
        },
        {
          head: "Continuous Delivery Management",
          para: "We help your existing team transition to Continuous Delivery models of software development so you can keep up with changing user requirements, shifting business goals, and new challenges as they arise.",
          img: <i class="fas fa-tasks fa-2x text-primary text-center" />,
          sign: "",
        },
        {
          head: "Automation",
          para: "Our DevOps team helps automate resource-intensive areas of your existing processes to facilitate Stable Delivery Automation, so product releases and updates roll out seamlessly without aggravating your teams or your users.",
          img: <i class="fas fa-magic fa-2x text-primary text-center" />,
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
          head: "Enterprise-Grade Experience",
          para: "Our DevOps team has over a decade of experience developing and deploying complex enterprise-grade software.",
          img: "",
          sign: "",
        },
        {
          head: "Agile Approach",
          para: "Our team is committed to following Agile methodologies, enabling us to execute large projects and provide excellent software quality.",
          img: "",
          sign: "",
        },
        {
          head: "Constant Monitoring",
          para: "Once your software is deployed, our DevOps team monitors it around the clock to catch and correct any problems before they affect your users.",
          img: "",
          sign: "",
        },
      ];
      var advantagesArray = advantages.map((section) => {
        return <Card image={section.img} head={section.head} para={section.para} sign={section.sign}/>;
      });
      const postHeader={
        service:"Services",
        tagLine:"DevOps Solutions",
        para:"Our DevOps team manages the relationship between operations and development to ensure everything runs smoothly throughout the entire lifecycle of the software – from design to development to production support.",
        btn:<button type="button" class="btn btn-primary">Tell us about your project</button>,
        id:"devOps"    
      }
    return (
        <div>
            <Header />
            <PostHeader postHeader={postHeader}/>
            <div className="">
                <div className="container">
                <h2 className="text-center text-white text-primary mt-5">From planning to continuous development and monitoring, we support every stage of the toolchain.
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

export default DevOps
