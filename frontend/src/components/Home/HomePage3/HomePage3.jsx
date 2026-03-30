import React from "react";
import "./HomePage3.css";
import { motion } from "framer-motion";

import brand1 from "../../../assets/icons/brand1.png";
import brand2 from "../../../assets/icons/brand2.png";
import brand3 from "../../../assets/icons/brand3.png";
import brand4 from "../../../assets/icons/brand4.png";
import brand5 from "../../../assets/icons/brand5.png";
import brand6 from "../../../assets/icons/brand6.png";
import brand7 from "../../../assets/icons/brand7.png";
import brand8 from "../../../assets/icons/brand8.png";
import brand9 from "../../../assets/icons/brand9.png";
import brand10 from "../../../assets/icons/brand10.png";
import brand11 from "../../../assets/icons/brand11.png";
import brand12 from "../../../assets/icons/brand12.png";

import Why from "../../../assets/images/Why.png";
import { NavLink } from "react-router";

const stats = [
  { value: "234+", label: "Projects Completed" },
  { value: "165+", label: "Client Satisfaction" },
  { value: "72L+", label: "Ad's Spend Managed" },
  { value: "1cr+", label: "Performance Ads Revenue" },
  { value: "20+", label: "Certifications & Awards" },
];

const brands = [
  brand1, brand2, brand3, brand4, brand5, brand6,
  brand7, brand8, brand9, brand10, brand11, brand12
];

export default function HomePage3() {
  return (
    <section className="why-section-home3">

      {/* TOP GRID */}
      <div className="why-text-main-top-container-home3">

        {/* LEFT CONTENT */}
        <div className="why-text-left-container-home3">

          <div className="top-badge-home3">
            <span className="years-home3">4+</span>
            <div>
              <p>
                Leading Digital Marketing Agency in India – 7xcoder.com<br />
                Reach out to us by clicking <NavLink to="/about">here</NavLink>
              </p>
              <p className="experience-text-home3">Years of Experience</p>
            </div>
          </div>

          <div className="why-main-home3">
            <div className="why-content-home3">
              <motion.div
  initial={{ opacity: 0, x: -120 }}
  whileInView={{ opacity: 1, x: 0 }}
  transition={{ duration: 0.8 }}
  viewport={{ once: false, amount: 0.3 }}
>
 
              <h1>Why Choose Us</h1>
</motion.div>
            <motion.div
             initial={{ opacity: 0, y: 60 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.8 }}
  viewport={{ once: false, amount: 0.3 }}
            >
                <p>
                We design digital strategies that power the next stage of your
                business growth.
              </p>
              <p className="why-choose-big-text-home3">
                Using the most innovative SEO techniques with a strong ROI-driven
                approach to lead generation, we help brands strengthen their
                visibility on top search engines like Google. Our SEO strategies
                are designed to improve rankings, attract high-intent audiences,
                expand your target customer base, and deliver measurable,
                long-term growth.
              </p>
            </motion.div>
            </div>
          </div>
        </div>

        {/* IMAGE + PILL */}
        <div className="why-image-home3">
          <motion.div
           initial={{ opacity: 0, scale: 0.8 }}
  whileInView={{ opacity: 1, scale: 1 }}
  transition={{ duration: 0.8 }}
  viewport={{ once: false, amount: 0.3 }}
          >

          <img src={Why} alt="Why Choose Us" />
          </motion.div>

          <motion.div 
           whileHover={{ scale: 1.1 }}
  whileTap={{ scale: 0.9 }}
          className="pill-column-home3">
            <NavLink to='/contact' className="contact-pill-home3">
              ▼ Connect With Us
            </NavLink>
          </motion.div>
        </div>
      </div>

      {/* STATS */}
      <div className="stats-wrapper-home3">
        <div className="stats-row-home3">
          {stats.map((item, i) => (
            <div className="stat-box-home3" key={i}>
              <div className="stats-text-container-home3">
                <motion.div
                  initial={{ opacity: 0, scale: 0.5 }}
  whileInView={{ opacity: 1, scale: 1 }}
  transition={{ duration: 1.5 }}
  viewport={{ once: false, amount: 0.3 }}
                >
                  <h1>{item.value}</h1>
                </motion.div>
                <motion.div
                 initial={{ opacity: 0, x: -120 }}
  whileInView={{ opacity: 1, x: 0 }}
  transition={{ duration: 0.8 }}
  viewport={{ once: false, amount: 0.3 }}
                >
                  <span>{item.label}</span>
                </motion.div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* DIVIDER */}
      <div className="divider-home3"></div>

      {/* TRUSTED */}
      <p className="trusted-text-home3">Trusted by 100+ Global Brands</p>

      {/* BRANDS MARQUEE */}
      <div className="brands-wrapper-home3">
        <div className="brands-marquee-home3">
          {[...brands, ...brands].map((logo, i) => (
            <div className="brand-card-home3" key={i}>
              <img src={logo} alt="Brand Logo" />
            </div>
          ))}
        </div>
      </div>

      {/* SERVICES */}
      <motion.div 
        initial={{ opacity: 0, x: 100 }}
  whileInView={{ opacity: 1, x: 0 }}
  transition={{ duration: 0.8 }}
      className="services-section-home3">
        <h2 className="integrated-digital-title-home3">
          Integrated Digital Services
        </h2>
        <p className="integrated-digital-desc-home3">
          At 7xcoder.com, we provide end-to-end integrated digital services that seamlessly combine strategy, creativity, technology, and performance. Our approach is rooted in deep market insights and data-driven decision-making, enabling us to craft customized digital solutions that align with your business objectives. From brand strategy, SEO, and performance marketing to web development, UI/UX, and analytics, every service works in sync to deliver consistent brand experiences, measurable ROI, and long-term scalable growth. We don’t just execute campaigns—we build digital ecosystems that drive visibility, engagement, and sustained business success.
        </p>
      </motion.div>

    </section>
  );
}
