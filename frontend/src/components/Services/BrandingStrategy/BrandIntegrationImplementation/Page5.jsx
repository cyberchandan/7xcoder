import React from "react";
import "../../page5.css";
import { NavLink } from "react-router-dom";

import instagram from "../../../../assets/BrandIntegrationImplementation/icon/1.png";
import facebook from "../../../../assets/BrandIntegrationImplementation/icon/2.png";
import linkedin from "../../../../assets/BrandIntegrationImplementation/icon/3.png";
import youtube from "../../../../assets/BrandIntegrationImplementation/icon/4.png";
import x from "../../../../assets/BrandIntegrationImplementation/icon/5.png";
import pinterest from "../../../../assets/BrandIntegrationImplementation/icon/6.png";
import snapchat from "../../../../assets/BrandIntegrationImplementation/icon/7.png";
import whatsapp from "../../../../assets/BrandIntegrationImplementation/icon/8.png";
import google from "../../../../assets/BrandIntegrationImplementation/icon/9.png";
import telegram from "../../../../assets/BrandIntegrationImplementation/icon/10.png";
import be from "../../../../assets/BrandIntegrationImplementation/icon/11.png";
import ball from "../../../../assets/BrandIntegrationImplementation/icon/12.png";
import reddit from "../../../../assets/BrandIntegrationImplementation/icon/13.png";
import quora from "../../../../assets/BrandIntegrationImplementation/icon/14.png";

const logos = [
  instagram,
  facebook,
  linkedin,
  youtube,
  x,
  pinterest,
  snapchat,
  whatsapp,
  google,
  telegram,
  be,
  ball,
  reddit,
  quora
];

const Page5 = () => {
  return (

    <main className="bss5">

      <section className="blue-title-bss5">

        <h1>
          Brand Integration & Implementation Solutions
          <div>Building Long-Term Execution Partnerships</div>
        </h1>

      </section>

      <section className="slider-bss5">

        <div className="slider-track-bss5">

          {[...logos, ...logos].map((img, index) => (
            <img src={img} alt="logo" key={index}/>
          ))}

        </div>

      </section>

      <section className="para-bss5">

        <p>
          At 7xcoder.com, our Brand Integration & Implementation solutions are 
          designed to execute seamlessly across complex business environments and 
          multiple market touchpoints. We translate brand strategy into structured 
          implementation systems aligned with business operations, communication 
          workflows, and marketing channels ensuring clarity, consistency, and 
          scalability across digital and organizational platforms. We specialize 
          in delivering high-impact brand execution solutions, including cross-channel 
          integration, implementation frameworks, brand governance systems, rollout 
          planning, and performance monitoring. Every system is built for consistency, 
          operational efficiency, and measurable impact  helping businesses maintain a 
          unified brand presence and achieve sustainable market performance.
        </p>

        <button>
          <NavLink to="/contact" className="nav-avoid-blue">
            Book Your Free Strategy Call
          </NavLink>
        </button>

      </section>

    </main>

  );
};

export default Page5;
