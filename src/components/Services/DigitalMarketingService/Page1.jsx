import React from 'react'
import "../page1.css";

// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";

import digimart from "../../../assets/Digital_Marketing_Services/images/1.png";

const Service3_1 = () => {
  
  return (
    <div className="service_1_root">
      <main className="hero-box-service1">
        <div className="title-box-service1" style={{ width: "100%" }}>
          
          <motion.h1
            className="title2-service1"
            style={{ width: "100%" }}
            initial={{ opacity: 0, y: -60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: false, amount: 0.3 }}
          >
            Social Media Marketing
          </motion.h1>

          <motion.p
            className="sub-title-service1"
            style={{ width: "100%" }}
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: false, amount: 0.3 }}
          >
            Global Standard Social Media Strategy. Designed for Brand Authority.
          </motion.p>

          <motion.p
            className="service-para1-service1"
            style={{ width: "100%" }}
            initial={{ opacity: 0, x: -120 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9 }}
            viewport={{ once: false, amount: 0.3 }}
          >
            At 7xcoder.com, social media is treated as a strategic brand
            asset, not a publishing task. We design sophisticated social
            ecosystems that elevate perception, command attention, and create
            long term influence across global digital platforms.
            <br />
            Our work is intentional, disciplined, and performance driven built
            for organizations that value precision, reputation, and measurable
            impact.{" "}
          </motion.p>

        </div>

        <div className="logo-box2-service1">

          <motion.img
            src={digimart}
            alt="Image"
            initial={{ opacity: 0, scale: 0.6 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: false, amount: 0.3 }}
          />

          <div>

            <motion.div
              className="social-media-service1"
              initial={{ opacity: 0, x: -120 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: false, amount: 0.3 }}
            >
              <p>
                HOW SOCIAL MEDIA MARKETING WORKS
                <br /> <span>Social Media Marketing Works</span>
              </p>
            </motion.div>

            <div className="content-box-service1">

              <motion.div
                className="content-service1"
                initial={{ opacity: 0, y: 80 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: false, amount: 0.3 }}
              >
                <h2>
                  <span>01.</span> Strategic Framework
                </h2>
                <p>
                  We define clear objectives, analyze audience behavior, and
                  select the right platforms to build a structured, goal-driven
                  content and campaign roadmap.
                </p>
              </motion.div>

              <motion.div
                className="content-service1"
                initial={{ opacity: 0, y: 80 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.9 }}
                viewport={{ once: false, amount: 0.3 }}
              >
                <h2>
                  <span>02.</span> High-Impact Content
                </h2>
                <p>
                  We create platform-specific, premium content aligned with your
                  brand identity—designed for engagement, reach, and conversion
                  through strategic storytelling.
                </p>
              </motion.div>

              <motion.div
                className="content-service1"
                initial={{ opacity: 0, y: 80 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
                viewport={{ once: false, amount: 0.3 }}
              >
                <h2>
                  <span>03.</span> Engagement & Community Leadership
                </h2>
                <p>
                  We manage conversations in real time, foster authentic
                  relationships, and build loyal brand communities that enhance
                  reputation and long-term equity.
                </p>
              </motion.div>

            </div>

            <motion.p
              initial={{ opacity: 0, x: 120 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.9 }}
              viewport={{ once: false, amount: 0.3 }}
            >
              With 7xcoder.com, social media marketing delivers more than
              visibility—it builds brand authority, meaningful engagement, and
              measurable business growth. Through strategic planning, premium
              content, and performance driven execution, we help brands attract
              the right audience, strengthen credibility, and convert attention
              into long term value.
            </motion.p>

          </div>
        </div>
      </main>
    </div>
  );
};

export default Service3_1;
