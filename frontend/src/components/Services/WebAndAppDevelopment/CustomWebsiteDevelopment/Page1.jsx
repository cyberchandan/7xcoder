import React from "react";
import { motion } from "framer-motion";
import "../../page1.css";
import digimart from "../../../../assets/CustomWebsiteDevelopment/images/1.png";

const Page1 = () => {
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
            Custom Website Development
          </motion.h1>

          <motion.p
            className="sub-title-service1"
            style={{ width: "100%" }}
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: false, amount: 0.3 }}
          >
            Custom Website Development Solutions. Engineered for Performance,
            Growth, and Scalability.
          </motion.p>

          <motion.p
            className="service-para1-service1"
            style={{ width: "100%" }}
            initial={{ opacity: 0, x: 120 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9 }}
            viewport={{ once: false, amount: 0.3 }}
          >
            At 7xcoder.com, custom website development is approached as a
            strategic digital investment not merely a design or development
            task. We engineer high-performance, scalable websites that deliver
            seamless user experiences, optimized speed, and long-term business
            value across digital touchpoints. Our approach is intentional,
            structured, and performance driven crafted for organizations that
            prioritize reliability, scalability, and measurable digital
            outcomes.
          </motion.p>

        </div>

        <div className="logo-box2-service1">

          <motion.img
            src={digimart}
            alt="Image"
            initial={{ opacity: 0, scale: 0.5 }}
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
                Our Approach to Custom Website Development
                <br />
                <span>How Our Custom Website Development Process Works</span>
              </p>
            </motion.div>

            <div className="content-box-service1">

              <motion.div
                className="content-service1"
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: false, amount: 0.3 }}
              >
                <h2>
                  <span>01.</span>Strategic Website Architecture & Planning
                </h2>
                <p>
                  We define clear digital objectives, assess business
                  requirements, and design a scalable website architecture
                  aligned with long-term growth, performance benchmarks, and
                  user experience standards.
                </p>
              </motion.div>

              <motion.div
                className="content-service1"
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.9 }}
                viewport={{ once: false, amount: 0.3 }}
              >
                <h2>
                  <span>02.</span> High Performance Website Development &
                  Execution
                </h2>
                <p>
                  We build secure, robust, and high-performing custom websites
                  engineered for seamless user journeys, clean code
                  architecture, and consistent functionality across all devices
                  and browsers.
                </p>
              </motion.div>

              <motion.div
                className="content-service1"
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
                viewport={{ once: false, amount: 0.3 }}
              >
                <h2>
                  <span>03.</span> Quality Assurance, Optimization & Scalability
                  Control
                </h2>
                <p>
                  We ensure long-term reliability through structured quality
                  testing, performance optimization, and scalable development
                  frameworks strengthening security, stability, and future ready
                  digital sustainability.
                </p>
              </motion.div>

            </div>

            <motion.p
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: false, amount: 0.3 }}
            >
              With 7xcoder.com, custom website development goes beyond
              functionality to create scalable digital experiences, consistent
              performance, and long-term business impact. Through strategic
              architecture, high quality development, and disciplined execution,
              we help brands build reliable web platforms, elevate user
              experience, and transform their digital presence into sustainable
              value.
            </motion.p>

          </div>
        </div>
      </main>
    </div>
  );
};

export default Page1;
