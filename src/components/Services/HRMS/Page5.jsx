import React from "react";

import "../page5.css";
import { motion } from "framer-motion";
import { NavLink } from "react-router-dom";

import erp from "../../../assets/HRMS/icon/1.png";
import crm from "../../../assets/HRMS/icon/2.png";
import bpm from "../../../assets/HRMS/icon/3.png";
import a from "../../../assets/HRMS/icon/4.png";
import dot from "../../../assets/HRMS/icon/5.png";
import hr from "../../../assets/HRMS/icon/6.png";
import camel from "../../../assets/HRMS/icon/7.png";
import finance from "../../../assets/HRMS/icon/8.png";
import saas from "../../../assets/HRMS/icon/9.png";
import ppt from "../../../assets/HRMS/icon/10.png";
import ecom from "../../../assets/HRMS/icon/11.png";
import ssas from "../../../assets/HRMS/icon/12.png";
import nitro from "../../../assets/HRMS/icon/13.png";
import api from "../../../assets/HRMS/icon/14.png";

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
          Built for Workforce Efficiency & Growth
          <div>Smart HRMS Solutions</div>
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
          At 7xcoder.com, our HRMS solutions are designed to ensure
          consistent workforce performance across complex organizational
          structures and evolving business needs. We implement structured HR
          systems aligned with business goals, employee behavior, and
          operational efficiency ensuring clarity, consistency, and adaptability
          across all HR functions.
          <br />
          We specialize in continuous HR optimization, including process
          refinement, performance tracking, policy updates, workforce analytics,
          and cross department alignment. Every system is built for measurable
          improvement, strategic efficiency, and long term impact helping
          businesses enhance productivity, strengthen employee experience, and
          achieve sustainable growth.
        </p>
        <motion.button
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: false, amount: 0.3 }}
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
