import React from 'react'
import "../page5.css";

// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";

import erp from "../../../assets/ecommerce-solutions/icon/Group 196.png";
import crm from "../../../assets/ecommerce-solutions/icon/Group 226.png";
import bpm from "../../../assets/ecommerce-solutions/icon/Group 227.png";
import a from "../../../assets/ecommerce-solutions/icon/Group 199.png";
import dot from "../../../assets/ecommerce-solutions/icon/Group 231.png";
import hr from "../../../assets/ecommerce-solutions/icon/Group 212.png";
import camel from "../../../assets/ecommerce-solutions/icon/Group 232.png";
import finance from "../../../assets/ecommerce-solutions/icon/Group 196 (2).png";
import saas from "../../../assets/ecommerce-solutions/icon/Group 238.png";
import ppt from "../../../assets/ecommerce-solutions/icon/Group 227 (2).png";
import ecom from "../../../assets/ecommerce-solutions/icon/Group 199 (2).png";
import ssas from "../../../assets/ecommerce-solutions/icon/Group 234.png";
import nitro from "../../../assets/ecommerce-solutions/icon/Group 212 (2).png";
import api from "../../../assets/ecommerce-solutions/icon/Group 235.png";
import { NavLink } from 'react-router-dom';

const logos = [
    erp, crm, bpm, a, dot, hr, camel,
    finance, saas, ppt, ecom, ssas, nitro, api
];

const Page5 = () => {
  return (
    <main className="bss5">

      <section className="blue-title-bss5">

        <motion.h1
          initial={{ opacity:0, y:-60 }}
          whileInView={{ opacity:1, y:0 }}
          transition={{ duration:0.8 }}
          viewport={{ once:false, amount:0.3 }}
        >
          E-commerce Solutions We Build
          <div>Strategic Digital Commerce Partnerships</div>
        </motion.h1>

      </section>


      <motion.section
        className="slider-bss5"
        initial={{ opacity:0 }}
        whileInView={{ opacity:1 }}
        transition={{ duration:0.8 }}
        viewport={{ once:false, amount:0.3 }}
      >
        <div className="slider-track-bss5">
          {[...logos, ...logos].map((img, index) => (
            <img src={img} alt="creative-icon" key={index} />
          ))}
        </div>
      </motion.section>


      <motion.section
        className="para-bss5"
        initial={{ opacity:0, x:-120 }}
        whileInView={{ opacity:1, x:0 }}
        transition={{ duration:0.9 }}
        viewport={{ once:false, amount:0.3 }}
      >

        <p>
          At 7xcoder.com, our E-commerce Solutions are engineered to perform seamlessly across complex digital commerce environments and sales channels. We develop e-commerce platforms aligned with business models, customer journeys, and operational workflows ensuring consistency, performance, and scalability across storefronts, admin systems, and integrations. We specialize in building high quality
          e-commerce solutions including custom online stores, B2C and B2B platforms, multi vendor marketplaces, admin dashboards, order and inventory management systems, payment and logistics integrations, and scalable commerce ecosystems. Every solution is optimized for performance, security, scalability, and usability, helping businesses deliver reliable, efficient, and future ready digital commerce operations.
        </p>

        <motion.button
          initial={{ opacity:0, scale:0.9 }}
          whileInView={{ opacity:1, scale:1 }}
          transition={{ duration:0.5 }}
          viewport={{ once:false, amount:0.3 }}
        >
          <NavLink to='/contact' className="nav-avoid-blue">
            Book Your Free Strategy Call
          </NavLink>
        </motion.button>

      </motion.section>

    </main>
  )
}

export default Page5
