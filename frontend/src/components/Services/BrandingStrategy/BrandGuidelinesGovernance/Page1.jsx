import React from "react";
import "../../page1.css";
import { motion } from "framer-motion";
import brand from "../../../../assets/BrandGuidelinesGovernance/images/1.png";

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
            Brand Guidelines & Governance
          </motion.h1>

          <motion.p
            className="sub-title-service1"
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: false, amount: 0.3 }}
          >
            Brand Guidelines & Governance Built for Consistency, Control & Long-Term Brand Integrity
          </motion.p>

          <motion.p
            className="service-para1-service1"
            initial={{ opacity: 0, x: 120 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9 }}
            viewport={{ once: false, amount: 0.3 }}
          >
            At 7xcoder.com, brand governance is treated as a strategic business safeguard  not just a documentation exercise. We build structured guideline systems that protect brand integrity, ensure consistency, & maintain clarity across every platform & touchpoint.Our research-led & process-driven approach establishes clear usage standards, communication rules, & implementation controls enabling organizations to execute confidently while preserving brand credibility & long-term market strength.
          </motion.p>

        </div>

        <div className="logo-box2-service1">

          <motion.img
            src={brand}
            alt="Brand Guidelines Governance"
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
                HOW BRAND GOVERNANCE WORKS <br />
                <span>HOW WE BUILD STRUCTURED GUIDELINE SYSTEMS</span>
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
                  <span>01.</span> Brand Standards & Planning
                </h2>
                <p>
                  We define governance objectives by analyzing brand positioning, communication needs, and workflows. This establishes a structured guideline roadmap focused on clarity, consistency, and long-term protection.
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
                  <span>02.</span> Guidelines Development & Implementation
                </h2>
                <p>
                  We develop comprehensive brand guideline documents, usage standards, tone-of-voice rules, and execution protocols engineered for consistency and cross-channel alignment.
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
                  <span>03.</span> Governance & Compliance
                </h2>
                <p>
                 We implement monitoring systems, quality checks, and governance controls that ensure long-term brand stability, consistent execution, and sustained market credibility as your organization grows
                </p>
              </motion.div>

            </div>

            <motion.p
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: false, amount: 0.3 }}
            >
              With 7xcoder.com, brand governance goes beyond documentation  it establishes structured standards that protect brand integrity and ensure consistent execution across every touchpoint. We develop comprehensive guideline systems that align communication, design, and operations with strategic brand objectives  helping businesses maintain clarity, strengthen credibility, and translate brand standards into sustained market performance.
            </motion.p>

          </div>

        </div>
      </main>
    </div>
  );
};

export default Page1;
