import React, { Component } from 'react';
import Header from '../Header';
import ClientCard from './ClientCard';



const Clients = () => {

    const client = [
        {
            pic:"https://arbisoft.com/wp-content/uploads/2020/09/B2B_Companies_Asia_2020.png",
            title:"edx",
            para:" As edX’s official tech partner, Arbisoft helped them put educatio at their learners’ fingertips through Web and, Android and iOS apps that enabled students to take courses on the go. The apps we  designed to allow students offline study options through full video  downloads–so they could keep up with classes even without continued Internet access."
        },
        {
            pic:"https://arbisoft.com/wp-content/uploads/2020/09/B2B_Companies_Asia_2020.png",
            title:"Travelliance",
            para:" As edX’s official tech partner, Arbisoft helped them put educatio at their learners’ fingertips through Web and, Android and iOS apps that enabled students to take courses on the go. The apps we  designed to allow students offline study options through full video  downloads–so they could keep up with classes even without continued Internet access."
        },
        {
            pic:"https://arbisoft.com/wp-content/uploads/2020/09/B2B_Companies_Asia_2020.png",
            title:"AEE",
            para:" As edX’s official tech partner, Arbisoft helped them put educatio at their learners’ fingertips through Web and, Android and iOS apps that enabled students to take courses on the go. The apps we  designed to allow students offline study options through full video  downloads–so they could keep up with classes even without continued Internet access."
        },
        {
            pic:"https://arbisoft.com/wp-content/uploads/2020/09/B2B_Companies_Asia_2020.png",
            title:"Predict.io ",
            para:" As edX’s official tech partner, Arbisoft helped them put educatio at their learners’ fingertips through Web and, Android and iOS apps that enabled students to take courses on the go. The apps we  designed to allow students offline study options through full video  downloads–so they could keep up with classes even without continued Internet access."
        }
    ]
    var clientArray = client.map((section) => {
        return <ClientCard pic={section.pic} title={section.title} para={section.para} />;
      });
    return (
        <div>
            <Header />
            <div className="container mt-5">
                <h3 className="text-center text-primary">A full-service software development partner</h3>
                <p className="text-center text-primary">Trusted by companies around the globe</p>
            <div className="row">
            <div className="col-md-12">
              {clientArray}
            </div>
            </div>
 
            </div>
        </div>
    )
}

export default Clients
