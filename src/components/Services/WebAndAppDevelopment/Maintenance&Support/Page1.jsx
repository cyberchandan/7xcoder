import React from "react";
import { motion } from "framer-motion";

import "../../page1.css";
import digimart from "../../../../assets/Maintenance&Support/image1.png";

const Page1 = () => {
  return (
    <div className="service_1_root">
      <main className="hero-box-service1">
        <div className="title-box-service1">

          <motion.h1
            className="title2-service1"
            initial={{ opacity: 0, y: -60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: false, amount: 0.3 }}
          >
            Maintenance & Support
          </motion.h1>

          <motion.p
            className="sub-title-service1"
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: false, amount: 0.3 }}
          >
            Proactive Maintenance & Support. Sustaining Performance. Preventing
            Downtime.
          </motion.p>

          <motion.p
            className="service-para1-service1"
            initial={{ opacity: 0, x: 120 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9 }}
            viewport={{ once: false, amount: 0.3 }}
          >
            At 7xcoder.com, Maintenance & Support are treated as strategic
            safeguards not just routine updates. We ensure your digital
            platforms remain stable, secure, and high-performing long after
            launch, protecting your investment and sustaining long term business
            value. Our proactive and structured approach prioritizes system
            continuity and operational efficiency, keeping your digital
            ecosystem resilient, optimized, and future-ready.
          </motion.p>

        </div>

        <div className="logo-box2-service1">

          <motion.img
            src={digimart}
            alt=""
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
                HOW MAINTENANCE & SUPPORT WORK <br />
                <span>HOW OUR MAINTENANCE & SUPPORT PROCESS WORKS</span>
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
                  <span>01.</span> Proactive System Monitoring & Assessment
                </h2>
                <p>
                  We continuously monitor system performance, identify potential
                  risks, and evaluate technical health to prevent disruptions
                  and ensure operational stability.
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
                  <span>02.</span> Ongoing Updates & Performance Enhancements
                </h2>
                <p>
                  We implement regular updates, security patches, performance
                  improvements, and system refinements to keep platforms secure,
                  optimized, and fully functional.
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
                  <span>03.</span> Stability Management & Long Term Reliability
                </h2>
                <p>
                  Through structured maintenance processes, technical
                  governance, and preventive support, we ensure sustained
                  uptime, system resilience, and long term digital continuity.
                </p>
              </motion.div>

            </div>

            <motion.p
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: false, amount: 0.3 }}
            >
              With 7xcoder.com, Maintenance & Support deliver more than
              routine upkeep they ensure long term stability, security, and
              uninterrupted digital performance. Through proactive monitoring,
              timely updates, and structured support systems, we help brands
              maintain reliable platforms, prevent downtime, and protect their
              digital investments enabling sustained performance and long term
              business value.
            </motion.p>

          </div>
        </div>
      </main>
    </div>
  );
};

export default Page1;
