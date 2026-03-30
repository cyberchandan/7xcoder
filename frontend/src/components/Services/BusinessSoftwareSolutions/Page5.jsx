import React from "react";

import "../page5.css";
import { NavLink } from "react-router-dom";

// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";

import erp from "../../../assets/business-software-solutions/icon/Group 196.png";
import crm from "../../../assets/business-software-solutions/icon/Group 226.png";
import bpm from "../../../assets/business-software-solutions/icon/Group 227.png";
import a from "../../../assets/business-software-solutions/icon/Group 199.png";
import dot from "../../../assets/business-software-solutions/icon/Group 231.png";
import hr from "../../../assets/business-software-solutions/icon/Group 212.png";
import camel from "../../../assets/business-software-solutions/icon/Group 232.png";
import finance from "../../../assets/business-software-solutions/icon/Group 196 (2).png";
import saas from "../../../assets/business-software-solutions/icon/Group 238.png";
import ppt from "../../../assets/business-software-solutions/icon/Group 227 (2).png";
import ecom from "../../../assets/business-software-solutions/icon/Group 199 (2).png";
import ssas from "../../../assets/business-software-solutions/icon/Group 234.png";
import nitro from "../../../assets/business-software-solutions/icon/Group 212 (2).png";
import api from "../../../assets/business-software-solutions/icon/Group 235.png";

const Page5 = () => {
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

  return (
    <main className="bss5">
      <section className="blue-title-bss5">
        <motion.h1
          initial={{ opacity: 0, y: -60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: false, amount: 0.3 }}
        >
          Business Software Solutions We Build
          <div>Strategic Technology Partnerships</div>
        </motion.h1>
      </section>

      <motion.section
        className="slider-bss5"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: false, amount: 0.3 }}
      >
        <div className="slider-track-bss5">
          {[...logos, ...logos].map((img, index) => (
            <img src={img} alt="software-icon" key={index} />
          ))}
        </div>
      </motion.section>

      <motion.section
        className="para-bss5"
        initial={{ opacity: 0, x: -120 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.9 }}
        viewport={{ once: false, amount: 0.3 }}
      >
        <p>
          At 7xcoder.com, our Business Software Solutions are engineered to
          perform seamlessly across complex business environments and systems.
          We develop software platforms aligned with operational requirements,
          user roles, and business objectives ensuring consistency, performance,
          and scalability across departments and workflows.
          <br />
          We specialize in building high quality business software including
          enterprise systems, internal tools, dashboards, ERP and CRM solutions,
          workflow automation platforms, SaaS products, and integrated business
          systems. Every solution is optimized for performance, security,
          scalability, and usability helping organizations maintain reliable,
          efficient, and future-ready digital operations.
        </p>

        <motion.button
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          <NavLink to="/contact" className="nav-avoid-blue">
            Book Your Free Strategy Call
          </NavLink>
        </motion.button>
      </motion.section>
    </main>
  );
};

export default Page5;
