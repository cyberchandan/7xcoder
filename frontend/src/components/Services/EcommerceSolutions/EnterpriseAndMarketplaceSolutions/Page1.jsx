import React from "react";
import { motion } from "framer-motion";
import "../../page1.css";

import digimart from "../../../../assets/EnterpriseAndMarketplaceSolutions/images/1.png";

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
            Enterprise & Marketplace Solutions
          </motion.h1>

          <motion.p
            className="sub-title-service1"
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: false, amount: 0.3 }}
          >
            Enterprise & Marketplace Platforms. Built for Growth, Stability &
            Commercial Impact.
          </motion.p>

          <motion.p
            className="service-para1-service1"
            initial={{ opacity: 0, x: 120 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9 }}
            viewport={{ once: false, amount: 0.3 }}
          >
            At 7xcoder.com, Enterprise & Marketplace Solutions are treated
            as strategic digital ecosystems not just transactional platforms. We
            architect scalable, secure, and high-performance enterprise commerce
            infrastructures that connect vendors, customers, and operations
            within a unified marketplace environment. Through intelligent
            platform architecture and disciplined execution, we enable
            enterprises to streamline operations, expand market reach, and drive
            sustainable revenue growth.
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
                HOW ENTERPRISE & MARKETPLACE SOLUTIONS WORK
                <br />
                <span>HOW WE BUILD SCALABLE ENTERPRISE MARKETPLACES</span>
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
                  <span>01.</span> Strategic Enterprise & Marketplace
                  Architecture
                </h2>
                <p>
                  We define platform objectives, analyze multi-vendor
                  ecosystems, and design scalable enterprise marketplace
                  frameworks aligned with performance, expansion, and long-term
                  commercial growth.
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
                  <span>02.</span>High-Performance Marketplace Development
                </h2>
                <p>
                  We build secure, enterprise-grade platforms engineered for
                  reliability, seamless vendor onboarding, advanced
                  integrations, and frictionless multi-channel commerce
                  experiences.
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
                  <span>03.</span>Governance, Security & Scalability
                </h2>
                <p>
                  Through rigorous testing, performance optimization, and
                  structured governance models, we ensure platform stability,
                  secure transactions, traffic scalability, and sustained
                  marketplace growth.
                </p>
              </motion.div>

            </div>

            <motion.p
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: false, amount: 0.3 }}
            >
              With 7xcoder.com, Enterprise & Marketplace Solutions deliver
              more than digital transactions they create scalable, multi-vendor
              ecosystems that drive sustainable commercial growth. Through
              strategic marketplace architecture and enterprise-grade
              development, we help organizations build reliable platforms and
              transform digital ecosystems into high-performing revenue networks
              with long-term market impact.
            </motion.p>

          </div>
        </div>
      </main>
    </div>
  );
};

export default Page1;
