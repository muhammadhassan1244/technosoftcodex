import React, { Component } from 'react';
import Header from '../Header';
import PostHeader from '../MobileAppDevelopment/PostHeader';
import Card from '../LandingPage/Card';
import Strategy from '../LandingPage/Strategy';
import Footer from '../LandingPage/Footer';





const EnterpriseSoftwareDev = () => {
    const tech = [
        {
          head: "Enterprise Software",
          para: "We’ve worked with Fortune 500 companies to develop custom enterprise-wide software solutions. We specialize in building precisely what you need and helping you transition from the software you’ve outgrown to the new model.",
          img: <i class="fab fa-uncharted fa-2x text-primary text-center" />,
          sign: "",
        },
        {
          head: "Custom Web App",
          para: "We offer custom web app development using secure, robust codebase that provides the seamless user experience modern users expect.",
          img: <i class="fab fa-creative-commons-sampling fa-2x text-primary text-center" />,
          sign: "",
        },
        {
          head: "Mobile App",
          para: "We provide modern mobile apps with beautiful designs and intuitive user interfaces. We work with all current mobile technology, including Android and iOS.",
          img: <i class="fas fa-mobile fa-2x text-primary text-center" />,
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
          head: "Quality Control",
          para: "Our QA team is involved in every stage of production to ensure your code is well-written and bug-free. We also offer 24/7 support on everything we build for you.",
          img: "",
          sign: "",
        },
        {
          head: "Open-source",
          para: "We develop custom software with an open-source soul, meaning your app or desktop solution comes integrated with all the third-party platforms you need for your data to flow.",
          img: "",
          sign: "",
        },
        {
          head: "Intellectual Property",
          para: "Your idea stays yours. We just help you build it into something. We also respect your confidentiality and believe there’s no relationship without trust.",
          img: "",
          sign: "",
        },
      ];
      var advantagesArray = advantages.map((section) => {
        return <Card image={section.img} head={section.head} para={section.para} sign={section.sign}/>;
      });
      const postHeader={
        service:"Services",
        tagLine:"Enterprise Software Development",
        para:"We provide full range of custom software development services to bring your ideas to life. Our turnkey solutions are custom-designed to fit into your enterprise software ecosystem. Anything you can dream up, from a custom desktop application to a global app, we can build it.",
        btn:<button type="button" class="btn btn-primary">Tell us about your project</button>,
        id:"softwareDev"    
      }
    return (
        <div>
            <Header />
            <PostHeader postHeader={postHeader}/>
            <div className="">
                <div className="container">
                <h2 className="text-center text-white text-primary mt-5">Have software created precisely to your specifications. Select the design, functionality, user experience, and more…
</h2>
                <div className="row mt-5">{techArray}</div>
                <Strategy obj={strategy} />
                <h2 className="text-center text-white text-primary mt-5">The Technosoft Advantage.</h2>
<p className="text-center text-white text-primary">Our dedicated team creates custom solutions tailor made for you.</p>
<div className="row">{advantagesArray}</div>

                </div>
<Footer />
            </div>
        </div>
    )
}

export default EnterpriseSoftwareDev
