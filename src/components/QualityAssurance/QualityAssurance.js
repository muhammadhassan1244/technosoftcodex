import React, { Component } from 'react';
import Header from '../Header';
import PostHeader from '../MobileAppDevelopment/PostHeader';
import Card from '../LandingPage/Card';
import Strategy from '../LandingPage/Strategy';
import Footer from '../LandingPage/Footer';





const QualityAssurance = () => {
    const tech = [
        {
          head: "Manual Testing",
          para: "Our manual testing engineers are experienced, meticulous, and highly focused on catching bugs. They make sure the software they’re testing is truly worth using.",
          img: <i class="fab fa-apple-pay fa-2x text-primary text-center"></i>,
          sign: "",
        },
        {
          head: "Automated Testing",
          para: "Our automated testing engineers develop robust automated testing frameworks that optimize the software quality testing process, automate resource-heavy tasks, facilitate continuous testing, and help the Quality Assurance team maintain its own work quality.",
          img: <i class="fab fa-android  fa-2x text-primary text-center" />,
          sign: "",
        },
        {
          head: "Specialist Services",
          para: "Our QA specialist teams focus on safety-critical applications, such as health care and medical apps. From protecting sensitive patient information to creating software that lives depend on, our QA specialists have the experience you need.",
          img: <i class="fas fa-mountain fa-2x text-primary text-center" />,
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
          head: "Expert Monitoring",
          para: "Our team is constantly monitoring the development of your software to ensure the code is impeccable.",
          img: "",
          sign: "",
        },
        {
          head: "Comprehensive Testing",
          para: "Our team ensures your product will work well across all environments. We provide web-based, mobile, app, cross-browser, integration, acceptance, and performance testing..",
          img: "",
          sign: "",
        },
        {
          head: "Continuous Feedback",
          para: "Our Quality Assurance team is firmly integrated into the project life cycle, ensuring that any bugs caught are immediately fixed.",
          img: "",
          sign: "",
        },
      ];
      var advantagesArray = advantages.map((section) => {
        return <Card image={section.img} head={section.head} para={section.para} sign={section.sign}/>;
      });
      const postHeader={
        service:"Services",
        tagLine:"QA & Software Testing Solutions",
        para:"A software team is only as good as the quality of the work it produces. That’s why we value excellence over success, and provide specialized QA & testing as a separate service–as well as baked right into every project we take up. No shortcuts.",
        btn:<button type="button" class="btn btn-primary">Tell us about your project</button>,
        id:"qualityAssurance"    
      }
    return (
        <div>
            <Header />
            <PostHeader postHeader={postHeader}/>
            <div className="">
                <div className="container">
                <h2 className="text-center text-white text-primary mt-5">Our Quality Assurance team ensures your code is impeccable.

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

export default QualityAssurance
