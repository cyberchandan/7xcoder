import React from "react";
import "../../page1.css";
import { motion } from "framer-motion";
import digimart from "../../../../assets/Enterprise&InternalSystems/image1.png";

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
            Enterprise & Internal Systems
          </motion.h1>

          <motion.p
            className="sub-title-service1"
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: false, amount: 0.3 }}
          >
            Internal Systems Architecture. Optimized for Control, Security &
            Scalability.
          </motion.p>

          <motion.p
            className="service-para1-service1"
            initial={{ opacity: 0, x: 120 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9 }}
            viewport={{ once: false, amount: 0.3 }}
          >
            At 7xcoder.com, Enterprise & Internal Systems are treated as
            strategic operational foundations not merely technical deployments.
            We architect scalable, secure, and high-performance internal
            platforms that streamline workflows, strengthen organizational
            control, & drive measurable business efficiency. Through intelligent
            architecture & disciplined execution, we transform internal
            processes into resilient, integrated, & future-ready digital
            infrastructures built for long-term operational excellence.
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
                HOW ENTERPRISE & INTERNAL SYSTEMS WORK <br />{" "}
                <span>OUR ENTERPRISE SYSTEMS DEVELOPMENT PROCESS</span>
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
                  <span>01.</span> Strategic Enterprise Architecture &
                  Operational Planning
                </h2>
                <p>
                  We define organizational objectives, assess internal
                  workflows, and design scalable system architectures aligned
                  with efficiency, governance, and long-term enterprise growth.
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
                  <span>02.</span> Enterprise-Grade System Development &
                  Integration
                </h2>
                <p>
                  We build secure, high-performance internal platforms
                  engineered for reliability, clean architecture, and seamless
                  integration across departments, teams, and core business
                  functions.
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
                  <span>03.</span> Governance, Security & Scalable
                  Infrastructure
                </h2>
                <p>
                  Through rigorous testing, performance optimization, and
                  structured system governance, we ensure long-term stability,
                  data protection, and sustainable enterprise scalability.
                </p>
              </motion.div>

            </div>

            <motion.p
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: false, amount: 0.3 }}
            >
              With 7xcoder.com, Enterprise & Internal Systems deliver more
              than operational functionality they establish the foundation for
              efficiency, control, and long-term organizational growth. Through
              strategic architecture and disciplined execution, we transform
              core operations into scalable, secure, and future-ready digital
              infrastructures that drive sustainable business impact.
            </motion.p>

          </div>

        </div>
      </main>
    </div>
  );
};

export default Page1;
