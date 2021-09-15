import React, { Component } from 'react';
import Header from '../Header';
import PostHeader from '../MobileAppDevelopment/PostHeader';
import Card from '../LandingPage/Card';
import Strategy from '../LandingPage/Strategy';
import Footer from '../LandingPage/Footer';





const WebScraping = () => {
    const tech = [
        {
          head: "Extraction",
          para: "Our web scraping tools scan the web and extract the information you need. We specialize in creating custom crawl clusters that crawl through large quantities of data from multiple sources in parallel, retrieving usable data faster while breaking free of scaling constraints.",
          img: <i class="fab fa-airbnb fa-2x text-primary text-center"/>,
          sign: "",
        },
        {
          head: "Cleaning",
          para: "Our data cleansing takes the raw data extracted by the web scraping tools and runs it through a processing platform to shake off old material, duplicates, incorrect details, and more. While data is valuable, ‘clean’ data is gold, enabling you to make the best possible decisions.",
          img: <i class="fas fa-solar-panel fa-2x text-primary text-center"/>,
          sign: "",
        },
        {
          head: "Quality Assurance",
          para: "We have quality assurance checks built into every step of the process, ensuring your web scraping tools function well and work quickly.",
          img:<i class="fas fa-equals fa-2x text-primary text-center"/>,
          sign: "",
        },
        {
            head: "Verification & Validation",
            para: "We verify your data at every step of the process and check the integrity of the results created.",
            img: <i class="fab fa-uncharted  fa-2x text-primary text-center" />,
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
          head: "Custom Tools",
          para: "We provide custom tools precisely designed to target and extract the data you need.",
          img: "",
          sign: "",
        },
        {
          head: "Targeted Data",
          para: "We source and extract the data you need, from wherever it happens to be.",
          img: "",
          sign: "",
        },
        {
          head: "Clean Data",
          para: "We clean the raw data through our processing platform to provide you with the most usable data.",
          img: "",
          sign: "",
        },
      ];
      var advantagesArray = advantages.map((section) => {
        return <Card image={section.img} head={section.head} para={section.para} sign={section.sign}/>;
      });
      const postHeader={
        service:"Services",
        tagLine:"Web Scraping",
        para:"Our engineers create custom web scraping solutions that quickly and efficiently gather the data you need and provide it to you in an elegant structure.",
        btn:<button type="button" class="btn btn-primary">Tell us about your project</button>,
        id:"webScraping"    
      }
    return (
        <div>
            <Header />
            <PostHeader postHeader={postHeader}/>
            <div className="">
                <div className="container">
                <h2 className="text-center text-white text-primary mt-5">Our web scrapers sift through the web’s maze of data to find precisely what you need..</h2>
                <div className="row mt-5">{techArray}</div>
                <Strategy obj={strategy} />
                <h2 className="text-center text-white text-primary mt-5">The Technosoft Advantage.</h2>
<p className="text-center text-white text-primary">Get the data you need, quickly & easily.</p>
<div className="row">{advantagesArray}</div>

                </div>
<Footer />
            </div>
        </div>
    )
}

export default WebScraping
