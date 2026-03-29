import React from "react";

import "../page1.css";
import { motion } from "framer-motion";

import digimart from "../../../assets/HRMS/images/1.png";

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
            HRMS
          </motion.h1>
          <motion.p
            className="sub-title-service1"
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: false, amount: 0.3 }}
          >
            Optimized HR Management for Consistent Performance and Business
            Growth
          </motion.p>
          <motion.p
            className="service-para1-service1"
            initial={{ opacity: 0, x: -120 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9 }}
            viewport={{ once: false, amount: 0.3 }}
          >
            At 7xcoder.com, our HRMS solutions go beyond basic management
            they are built to evolve your workforce with clarity, consistency,
            and performance driven precision. We implement structured systems
            that streamline operations, enhance employee productivity, and
            strengthen long term organizational growth. Our data driven approach
            continuously evaluates HR performance, enabling smarter decisions,
            improved efficiency, and measurable impact across your entire
            workforce.
          </motion.p>
        </div>
        <div className="logo-box2-service1">
          <motion.img
            src={digimart}
            alt=""
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
                MONITOR. OPTIMIZE. EMPOWER
                <br /> <span>OUR HR MANAGEMENT FRAMEWORK</span>
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
                  <span>01.</span>Workforce Performance Assessment
                </h2>
                <p>
                  We evaluate employee productivity, system efficiency,
                  engagement levels, and operational gaps to identify
                  improvement opportunities and performance bottlenecks.
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
                  <span>02.</span>Process Optimization & Enhancement
                </h2>
                <p>
                  We refine HR workflows, communication systems, and performance
                  structures to improve clarity, efficiency, and measurable
                  workforce outcomes.
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
                  <span>03.</span>Continuous Monitoring & Scalable Growth
                </h2>
                <p>
                  We implement structured tracking, reporting systems, and
                  quality checks to ensure long-term consistency, adaptability,
                  and sustainable organizational growth.
                </p>
              </motion.div>
            </div>
            <motion.p
              initial={{ opacity: 0, x: 120 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.9 }}
              viewport={{ once: false, amount: 0.3 }}
            >
              With 7xcoder.com, HR management goes beyond routine
              operations it ensures your workforce continuously performs and
              evolves with changing business needs. We strengthen HR processes,
              maintain consistency across employee experiences, and drive long
              term organizational growth. Through structured performance
              tracking and disciplined optimization, we help businesses improve
              efficiency, enhance alignment, and convert workforce performance
              into measurable business impact.
            </motion.p>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Page1;
