import React from "react";

import "../page5.css";

// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";

import instagram from "../../../assets/Digital_Marketing_Services/icon/1.png";
import facebook from "../../../assets/Digital_Marketing_Services/icon/2.png";
import linkedin from "../../../assets/Digital_Marketing_Services/icon/3.png";
import youtube from "../../../assets/Digital_Marketing_Services/icon/4.png";
import x from "../../../assets/Digital_Marketing_Services/icon/5.png";
import pinterest from "../../../assets/Digital_Marketing_Services/icon/6.png";
import snapchat from "../../../assets/Digital_Marketing_Services/icon/7.png";
import whatsapp from "../../../assets/Digital_Marketing_Services/icon/8.png";
import google from "../../../assets/Digital_Marketing_Services/icon/9.png";
import telegram from "../../../assets/Digital_Marketing_Services/icon/10.png";
import be from "../../../assets/Digital_Marketing_Services/icon/11.png";
import ball from "../../../assets/Digital_Marketing_Services/icon/12.png";
import reddit from "../../../assets/Digital_Marketing_Services/icon/13.png";
import quora from "../../../assets/Digital_Marketing_Services/icon/14.png";
import { NavLink } from "react-router-dom";

const Page5 = () => {
  return (
    <main className="bss5">

      <section className="blue-title-bss5">

        <motion.h1
          initial={{ opacity: 0, y: -60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: false, amount: 0.3 }}
        >
          Social Platforms We Specialize In
          <div>Strategic Partnerships</div>
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
          {[instagram, facebook, linkedin, youtube, x, pinterest, snapchat,
            whatsapp, google, telegram, be, ball, reddit, quora,
            instagram, facebook, linkedin, youtube, x, pinterest, snapchat,
            whatsapp, google, telegram, be, ball, reddit, quora
          ].map((icon, index) => (
            <img key={index} src={icon} alt="social-icon" />
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
          At 7xcoder.com, we specialize in managing a diverse ecosystem of
          social media platforms, selecting and optimizing each channel based on
          your brand’s objectives, industry, and target audience. From high
          impact platforms like Instagram, Facebook, LinkedIn, and YouTube to
          niche and creative networks such as Behance, Dribbble, and community
          driven platforms like Reddit and Quora, we design platform specific
          strategies that maximize reach, engagement, and relevance. Our
          expertise ensures every platform is used with purpose delivering
          consistent brand presence, meaningful audience interaction, and
          measurable growth across all digital touchpoints.
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
  );
};

export default Page5;
