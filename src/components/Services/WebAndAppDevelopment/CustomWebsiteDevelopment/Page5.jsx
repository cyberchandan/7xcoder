import React from "react";
import { motion } from "framer-motion";

import "../../page5.css";

import erp from "../../../../assets/CustomWebsiteDevelopment/icon/1.png";
import crm from "../../../../assets/CustomWebsiteDevelopment/icon/2.png";
import bpm from "../../../../assets/CustomWebsiteDevelopment/icon/3.png";
import a from "../../../../assets/CustomWebsiteDevelopment/icon/4.png";
import dot from "../../../../assets/CustomWebsiteDevelopment/icon/5.png";
import hr from "../../../../assets/CustomWebsiteDevelopment/icon/6.png";
import camel from "../../../../assets/CustomWebsiteDevelopment/icon/7.png";
import finance from "../../../../assets/CustomWebsiteDevelopment/icon/8.png";
import saas from "../../../../assets/CustomWebsiteDevelopment/icon/9.png";
import ppt from "../../../../assets/CustomWebsiteDevelopment/icon/10.png";
import ecom from "../../../../assets/CustomWebsiteDevelopment/icon/11.png";
import ssas from "../../../../assets/CustomWebsiteDevelopment/icon/12.png";
import nitro from "../../../../assets/CustomWebsiteDevelopment/icon/13.png";
import api from "../../../../assets/CustomWebsiteDevelopment/icon/14.png";
import { NavLink } from "react-router-dom";

const logos = [
  erp,
  crm,
  bpm,
  a,
  dot,
  hr,
  camel,
  finance,
  saas,
  ppt,
  ecom,
  ssas,
  nitro,
  api,
];

const Page5 = () => {
  return (
    <main className="bss5">
      <section className="blue-title-bss5">
        <h1>
          Web & App Platforms We Develop
          <div>Strategic Technology Partnerships</div>
        </h1>
      </section>

      <section className="slider-bss5">
        <div className="slider-track-bss5">
          {[...logos, ...logos].map((img, index) => (
            <img src={img} alt="creative-icon" key={index} />
          ))}
        </div>
      </section>

      <section className="para-bss5">
        <p>
          At 7xcoder.com, our Custom Website Development services are
          engineered to perform seamlessly across modern browsers, devices, and
          screen environments. We build platform specific, purpose driven
          websites aligned with technical requirements, user behavior, and
          business objectives ensuring consistency, performance, and scalability
          wherever your digital presence is accessed. We specialize in
          developing high-quality custom websites, business portals, CMS-driven
          platforms, e-commerce websites, admin dashboards, and scalable web
          systems. Every solution is optimized for performance, security,
          responsiveness, and user experience helping businesses maintain a
          strong, reliable, and professional web presence across all devices and
          digital touchpoints.
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
