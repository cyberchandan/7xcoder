import React from "react";
import "../../page5.css";

import erp from "../../../../assets/WebAndApp/icon/1.png";
import crm from "../../../../assets/WebAndApp/icon/2.png";
import bpm from "../../../../assets/WebAndApp/icon/3.png";
import a from "../../../../assets/WebAndApp/icon/4.png";
import dot from "../../../../assets/WebAndApp/icon/5.png";
import hr from "../../../../assets/WebAndApp/icon/6.png";
import camel from "../../../../assets/WebAndApp/icon/7.png";
import finance from "../../../../assets/WebAndApp/icon/8.png";
import saas from "../../../../assets/WebAndApp/icon/9.png";
import ppt from "../../../../assets/WebAndApp/icon/10.png";
import ecom from "../../../../assets/WebAndApp/icon/11.png";
import ssas from "../../../../assets/WebAndApp/icon/12.png";
import { NavLink } from "react-router-dom";

const logos = [
  erp, crm, bpm, a, dot, hr,
  camel, finance, saas, ppt, ecom, ssas
];

const Page5 = () => {
  return (
    <main className="bss5">
      <section className="blue-title-bss5">
        <h1>
          Social Platforms We Specialize In
          <div>Strategic Partnerships</div>
        </h1>
      </section>

      <section className="slider-bss5">
        <div className="slider-track-bss5">
          {[...logos, ...logos].map((img, index) => (
            <img src={img} alt="web-app-icon" key={index} />
          ))}
        </div>
      </section>

      <section className="para-bss5">
        <p>
          At 7xcoder.com, we build a strategic ecosystem of web and
          application solutions, carefully architected and optimized based on
          your business goals, industry requirements, and user behavior. From
          responsive websites and e-commerce platforms to custom web
          applications and mobile apps, we design solution specific development
          strategies focused on performance, usability, and scalability. Through
          disciplined engineering, user centric design, and continuous
          optimization, we deliver reliable platforms, seamless user journeys,
          and consistent digital performance transforming digital interactions
          into measurable growth while supporting long term brand value.
        </p>

                              <button><NavLink to='/contact' className="nav-avoid-blue">Book Your Free Strategy Call</NavLink></button>
      </section>
    </main>
  );
};

export default Page5;
