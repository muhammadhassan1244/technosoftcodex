import React, { Component } from 'react';
import Header from '../Header';
import PostHeader from './PostHeader';
import Card from '../LandingPage/Card';
import Strategy from '../LandingPage/Strategy';
import Footer from '../LandingPage/Footer';





const WebAppDevelopment = () => {
    const tech = [
        {
          head: "Specialist iOS Developers",
          para: "Multi-disciplined iOS development teams supporting all your technical requirements under one roof..",
          img: <i class="fab fa-apple-pay fa-2x text-primary  text-center" />,
          sign: "",
        },
        {
          head: "Android App Development",
          para: "We help keep your apps updated and their features updated. We can wrangle the messiest legacy code, bring it in line with standards, and keep it functional, fast, and secure.",
          img: <i class="fab fa-android  fa-2x text-primary  text-center" />,
          sign: "",
        },
        {
          head: "Extensions & Maintenance",
          para: "We’ve collaborated on 2D and 3D Android apps, mobile games and more that work with your native operating system capabilities and deliver delightful experiences.",
          img: <i class="fas fa-mountain fa-2x text-primary  text-center" />,
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
          head: "Full-service Web Development",
          para: "From bespoke development to performance optimization, cloud-based deployment, API development and integration, continuous quality assurance, and round-the-clock SaaS support, we have a track record of delivering award-winning applications that make life easier for businesses and consumers alike without compromising on quality standards.",
          img: "",
          sign: "",
        },
        {
          head: "Partnerships to Grow With",
          para: "We’re the serial monogamists of our industry: we’re interested in nurturing long-term relationships with our clients. That’s why all our web app development projects get dedicated developer teams that continue to work on the product throughout its lifetime, gaining deeper insight into your business goals and how we can build you software that helps you achieve them.",
          img: "",
          sign: "",
        },
        {
          head: "Scalable, Secure Software",
          para: "Our web applications are designed to scale with your organization’s needs. That’s why we design tech stacks suited to a rapidly changing digital ecosystem and combine them with development best practices as well as an Agile Scrum methodology so we can keep improving your web app even after launch.",
          img: "",
          sign: "",
        },
      ];
      var advantagesArray = advantages.map((section) => {
        return <Card image={section.img} head={section.head} para={section.para} sign={section.sign}/>;
      });
      const postHeader={
        service:"Services",
        tagLine:"Mobile App Development",
        para:"US consumers spend nearly a quarter of their day on their mobile phone – and 92% of that time is spent using apps. Your app needs to be brilliantly designed and intuitive to have a shot at getting anyone’s attention..",
        btn:<button type="button" class="btn btn-primary">Tell us about your project</button>,
        id:"mobileApp"    
      }
    return (
        <div>
            <Header />
            <PostHeader postHeader={postHeader}/>
            <div className="">
                <div className="container">
                <h2 className="text-center text-white text-primary mt-5">Put your company in your customer’s pocket
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
