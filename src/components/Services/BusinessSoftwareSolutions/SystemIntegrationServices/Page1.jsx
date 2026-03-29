import React from "react";
import { motion } from "framer-motion";
import "../../page1.css";

import digimart from "../../../../assets/SystemIntegrationServices/images/1.png";

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
            System Integration Services
          </motion.h1>

          <motion.p
            className="sub-title-service1"
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: false, amount: 0.3 }}
          >
            Seamless System Integration. Optimized for Performance, Efficiency &
            Scale.
          </motion.p>

          <motion.p
            className="service-para1-service1"
            initial={{ opacity: 0, x: 120 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9 }}
            viewport={{ once: false, amount: 0.3 }}
          >
            At 7xcoder.com, System Integration Services are treated as
            strategic enablers of unified digital ecosystems not just technical
            connections. We design and implement scalable, secure, and
            high-performance integration frameworks that connect platforms,
            synchronize data, and streamline cross-system operations. Through
            intelligent integration architecture and disciplined execution, we
            transform fragmented systems into cohesive, efficient, and
            future-ready digital infrastructures.
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
                OUR SYSTEM INTEGRATION FRAMEWORK
                <br /> <span>HOW WE CONNECT & UNIFY DIGITAL SYSTEMS</span>
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
                  <span>01.</span>Integration Strategy & Architecture Planning
                </h2>
                <p>
                  We define integration objectives, analyze system dependencies,
                  and design scalable integration architectures aligned with
                  operational efficiency, performance, and long-term business
                  growth.
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
                  <span>02.</span> Seamless System Integration & Deployment
                </h2>
                <p>
                  We implement secure, high-performance integration frameworks
                  that connect platforms, synchronize data, and ensure seamless
                  interoperability across systems and teams.
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
                  <span>03.</span>Performance Optimization, Security &
                  Governance
                </h2>
                <p>
                  Through rigorous testing, continuous monitoring, and
                  structured governance models, we ensure stable integrations,
                  secure data exchange, and sustainable scalability.
                </p>
              </motion.div>

            </div>

            <motion.p
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: false, amount: 0.3 }}
            >
              With 7xcoder.com, System Integration Services deliver more
              than technical connectivity they create unified, efficient, and
              scalable digital ecosystems. Through strategic integration
              architecture, secure data synchronization, and disciplined
              execution, we help organizations eliminate system silos,
              streamline cross-platform workflows, and transform fragmented
              technologies into cohesive infrastructures that drive long-term
              operational efficiency and sustainable business growth.
            </motion.p>

          </div>

        </div>
      </main>
    </div>
  );
};

export default Page1;
