import React, { Component } from 'react';
import Header from '../Header';
import PostHeader from '../MobileAppDevelopment/PostHeader';
import Card from '../LandingPage/Card';
import Strategy from '../LandingPage/Strategy';
import Footer from '../LandingPage/Footer';





const ThreeDApp = () => {
    const tech = [
        {
          head: "Games",
          para: "Our talented team of game developers transform ideas into fun and engaging games that captivate users. We produce games on mobile, web, and virtual/ augmented reality.",
          img: <i class="fas fa-gamepad fa-2x text-primary text-center"/>,
          sign: "",
        },
        {
          head: "Simulations",
          para: "Our 3D Apps team can create any simulation you can dream up – from a legendary video game quest to a training simulation and more.",
          img: <i class="fab fa-500px fa-2x text-primary text-center"/>,
          sign: "",
        },
        {
          head: "Visualizations",
          para: "Our teams build brilliant 3D visualizations with precision and accuracy, enabling you display an abstract idea with clarity.",
          img: <i class="fas fa-universal-access fa-2x text-primary text-center"/>,
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
          head: "Sophisticated Resources",
          para: "Our programmers, game designers, concept artists, and software artists are all in-house, working together to produce incredible, high tech 3D solutions.",
          img: "",
          sign: "",
        },
        {
          head: "Deep Experience",
          para: "Our engineers have varied backgrounds, expertise, and multiple fields of studies. From complex math to real-world physics, our engineers have a wealth of real life experience to draw upon.",
          img: "",
          sign: "",
        },
        {
          head: "Specialized Knowledge",
          para: "Our company grew out of a medical image post-processing company, leaving an indelible imprint of knowledge in specialized 3D applications.",
          img: "",
          sign: "",
        },
      ];
      var advantagesArray = advantages.map((section) => {
        return <Card image={section.img} head={section.head} para={section.para} sign={section.sign}/>;
      });
      const postHeader={
        service:"Services",
        tagLine:"3D App Development",
        para:"An idea can be a powerful thing. Our engineers convert your idea into stunning 3D apps, enchanting your users with an immersive alternate reality. Share your idea and we will help you unlock its full potential.",
        btn:<button type="button" class="btn btn-primary">Tell us about your project</button>,
        id:"threeD"    
      }
    return (
        <div>
            <Header />
            <PostHeader postHeader={postHeader}/>
            <div className="">
                <div className="container">
                <h2 className="text-center text-white text-primary mt-5">Let our team transform your ideas into vivid 3D imagery.

</h2>
                <div className="row mt-5">{techArray}</div>
                <Strategy obj={strategy} />
                <h2 className="text-center text-white text-primary mt-5">The Technosoft Advantage.</h2>
<p className="text-center text-white text-primary">Let our experts amaze your customers with mesmerizing interactive 3D imagery.</p>
<div className="row">{advantagesArray}</div>

                </div>
<Footer />
            </div>
        </div>
    )
}

export default ThreeDApp
