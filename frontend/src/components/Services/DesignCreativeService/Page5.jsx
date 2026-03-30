
import React from 'react'

import "../page5.css";

// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";

import erp from "../../../assets/design-creative/icon/1.png";
import crm from "../../../assets/design-creative/icon/2.png";
import bpm from "../../../assets/design-creative/icon/3.png";
import a from "../../../assets/design-creative/icon/4.png";
import dot from "../../../assets/design-creative/icon/5.png";
import hr from "../../../assets/design-creative/icon/6.png";
import camel from "../../../assets/design-creative/icon/7.png";
import finance from "../../../assets/design-creative/icon/8.png";
import saas from "../../../assets/design-creative/icon/9.png";
import ppt from "../../../assets/design-creative/icon/10.png";
import ecom from "../../../assets/design-creative/icon/11.png";
import ssas from "../../../assets/design-creative/icon/12.png";
import nitro from "../../../assets/design-creative/icon/13.png";
import api from "../../../assets/design-creative/icon/14.png";
import { NavLink } from 'react-router-dom';


const Page5 = () => {

  const logos = [
    erp, crm, bpm, a, dot, hr, camel,
    finance, saas, ppt, ecom, ssas, nitro, api
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
          Creative Platforms We Design For
          <div>Strategic Creative Partnerships</div>
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
            <img src={img} alt="creative-icon" key={index} />
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
          At 7xcoder.com, our Design & Creative Services are crafted to
          perform seamlessly across a wide range of digital platforms. We design
          platform specific creatives that align with technical requirements,
          user behavior, and brand objectives ensuring visual consistency and
          maximum impact everywhere your brand appears. We specialize in
          creating high quality design assets for platforms including Instagram,
          Facebook, LinkedIn, YouTube, Google Display, WhatsApp, websites,
          mobile apps, and creative networks such as Behance and Dribbble. Every
          design is optimized for format, performance, and audience engagement
          helping brands maintain a strong, professional, and recognizable
          presence across all digital touchpoints.
        </p>

        <motion.button
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: false, amount: 0.3 }}
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

