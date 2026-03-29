import React from "react";
import { motion } from "framer-motion";

import "../../page1.css";

import digimart from "../../../../assets/MaintenanceSupportAndOptimization/images/1.png";

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
            Maintenance, Support & Optimization
          </motion.h1>

          <motion.p
            className="sub-title-service1"
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: false, amount: 0.3 }}
          >
            Strategic Maintenance & Performance Enhancement. Designed for
            Stability & Scale.
          </motion.p>

          <motion.p
            className="service-para1-service1"
            initial={{ opacity: 0, x: 120 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9 }}
            viewport={{ once: false, amount: 0.3 }}
          >
            At 7xcoder.com, Maintenance, Support & Optimization are treated
            as strategic performance safeguards not just routine technical
            services. We proactively manage, secure, and enhance digital
            platforms to ensure stability, peak efficiency, and long-term
            business continuity. Through proactive monitoring, timely upgrades,
            and ongoing optimization, we transform system maintenance into a
            strategic advantage that sustains growth and operational excellence.
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
                HOW WE MANAGE, SUPPORT & ENHANCE DIGITAL SYSTEMS
                <br /> <span>HOW WE SUSTAIN LONG-TERM SYSTEM PERFORMANCE</span>
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
                  <span>01.</span>Proactive System Monitoring & Assessment
                </h2>
                <p>
                  We continuously monitor platform performance, analyze system
                  health, and identify potential risks ensuring early issue
                  detection and uninterrupted operational stability.
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
                  <span>02.</span>Performance Enhancement & Technical
                  Optimization
                </h2>
                <p>
                  We implement timely updates, speed optimization, security
                  patches, and system refinements to maintain peak efficiency,
                  reliability, and seamless functionality across environments.
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
                  <span>03.</span>Security, Stability & Scalability Management
                </h2>
                <p>
                  Through structured maintenance processes, security hardening,
                  and infrastructure tuning, we ensure long-term stability,
                  protected digital assets, and scalable systems that evolve
                  with business growth.
                </p>
              </motion.div>

            </div>

            <motion.p
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: false, amount: 0.3 }}
            >
              With 7xcoder.com, Maintenance, Support & Optimization deliver
              more than routine upkeep they ensure continuous performance,
              stability, and long-term digital resilience. Through proactive
              monitoring, structured upgrades, and disciplined optimization
              practices, we help businesses maintain reliable platforms, prevent
              downtime, and transform ongoing system management into a strategic
              advantage that sustains growth and operational excellence.
            </motion.p>

          </div>

        </div>
      </main>
    </div>
  );
};

export default Page1;
