import React, { Component } from "react";

import Header from "../Header";
import Strategy from "../LandingPage/Strategy";
import Card from "../LandingPage/Card";
import Footer from "../LandingPage/Footer";

const FreshGradHiring = () => {
  const strategy = {
    head: "Fresh Grad Hiring",
    para: "Arbisoft is one of the fastest growing software companies in the MENA region. Every year Arbisoft offers recent Computer Science graduates, who are passionate about programming, a chance to test their skills and prove their potential to be part of a multi-award winning team.",
    img: (
      <img
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRZz1LOl2HGoRc2qP8w6VOKSmGzKLXV0TkCLw&usqp=CAU"
        alt="Technosoft Legacy"
        className="fixPic"
      />
    ),
    sign: (
      <ul className="pl-0">
        <li className="list-unstyled text-dark font-weight-bold">Test Date: 31st January, 2021</li>
        <li  className="list-unstyled text-dark font-weight-bold">Test Day: Sunday</li>
        <li  className="list-unstyled text-dark font-weight-bold">Test Time: 12pm – 1:30pm1</li>
        <li  className="list-unstyled text-dark font-weight-bold">REGISTRATIONS CLOSED.</li>

      </ul>
    ),
  };
  const tech = [
    {
      head: "Step 1",
      para: "Our POD Department obtains a list of graduating students from universities. These are students who are currently in their final semester.",
      img: <i class="fas fa-graduation-cap text-primary fa-5x text-center"></i>,
      sign: "Learn more ->",
    },
    {
      head: "Step 2",
      para: "Once the master list of candidates is compiled, emails and SMS are sent to all the students so they can register for the online test..",
      img: (
        <i class="fas fa-sms text-primary fa-5x text-center"></i>
      ),
      sign: "Learn more ->",
    },
    {
      head: "Step 3",
      para: "Only registered students can attempt the test, which has a fixed date and time. That means there’s only one chance to take it — don’t miss out!",
      img: <i class="fas fa-business-time text-primary fa-5x text-center"></i>,
      sign: "Learn more ->",
    },
    {
        head: "Step 4",
        para: "Shortlisted candidates are invited to Arbisoft’s office for a coding exercise.",
        img: <i class="fas fa-tv text-primary fa-5x text-center"></i>,
        sign: "Learn more ->",
      },
      {
        head: "Step 5",
        para: "Made the cut? Successful candidates are contacted for a POD interview, after which a job offer is made.",
        img: <i class="far fa-handshake text-primary fa-5x text-center"></i>,
        sign: "Learn more ->",
      },
  ];
  var techArray = tech.map((section) => {
    return <Card image={section.img} head={section.head} para={section.para} sign={section.sign}/>;
  });
  const dayAt = {
    head: "A Day At Technosoft",
    para: "Take a peak into Arbisoft’s culture, values and technology we develop.For queries and further details contact People Operations and Development at pod@arbisoft.com",
    img: (
        <video
          playsInline
          autoPlay
          loop
          muted
          style={{ opacity: 1, width: "70%", height: "auto" }}
        >
          <source src={process.env.PUBLIC_URL + "/video.mp4"} />
          <source
            src="/wp-content/uploads/2019/10/arbisoft-video.webm"
            type="video/webm"
          />
        </video>
      ),
    sign: ""
  };

  return (
    <div>
      <Header />
      <div className="container">
        <h5 className="text-primary mt-5">Careers</h5>
        <Strategy obj={strategy} />
      </div>
     <div className="container mt-5">
     <h3 className="text-primary text-center">How do i get started</h3>
         <p  className="text-primary text-center">Our hiring process for recent graduates involves five stages:.</p>
     <div className="row">
        
         {techArray}
     </div>
     <h3 className="text-primary text-center">What Happens next</h3>
         <p  className="text-primary text-center text-justify">Joining the Arbisoft team is the beginning of a new journey. New hires are matched with a skilled and competent mentor, who will help you grow not just as an engineer but as a professional–someone with the talent and experience. Your mentor will help you shape your career. You also get time to settle in and learn the roles, as new graduates go through an intense 3-month training program before being moved to a live project, so you can begin to challenge yourself and grow as soon as you join without the fear of failure.</p>

         <Strategy obj={dayAt} />
</div>
<Footer />
    </div>
  );
};

export default FreshGradHiring;
