import React from "react";
import "../../page1.css";
import { motion } from "framer-motion";
import digimart from "../../../../assets/CloudBasedSoftwareSolutions/images/1.png";

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
            Cloud Based Software Solutions
          </motion.h1>

          <motion.p
            className="sub-title-service1"
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: false, amount: 0.3 }}
          >
            Cloud-Driven Platforms. Optimized for Performance, Growth &
            Continuity.
          </motion.p>

          <motion.p
            className="service-para1-service1"
            initial={{ opacity: 0, x: 120 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9 }}
            viewport={{ once: false, amount: 0.3 }}
          >
            At 7xcoder.com, Cloud-Based Software Solutions are treated as
            strategic digital accelerators not just hosted applications. We
            design and deploy scalable, secure, and high-performance
            cloud-native systems that enhance agility, streamline operations,
            and deliver measurable long-term business value. Through intelligent
            cloud architecture and disciplined execution, we empower businesses
            to operate efficiently, scale seamlessly, and innovate with
            confidence in a dynamic digital landscape.
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
                HOW CLOUD-BASED SOFTWARE SOLUTIONS WORK
                <br /> <span>HOW WE BUILD CLOUD-NATIVE SOFTWARE SYSTEMS</span>
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
                  <span>01.</span>Cloud Strategy & Architecture Planning
                </h2>
                <p>
                  We define business objectives, assess infrastructure
                  requirements, and design scalable cloud-native architectures
                  aligned with agility, performance, and long-term digital
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
                  <span>02.</span>High-Performance Cloud Development &
                  Deployment
                </h2>
                <p>
                  We build secure, resilient, and high-performing cloud
                  applications engineered for seamless accessibility, clean
                  architecture, and consistent functionality across distributed
                  environments.
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
                  <span>03.</span>Cloud Optimization, Security & Scalability
                  Management
                </h2>
                <p>
                  Through continuous monitoring, performance tuning, and
                  structured cloud governance, we ensure long-term stability,
                  data protection, and sustainable scalability.
                </p>
              </motion.div>

            </div>

            <motion.p
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: false, amount: 0.3 }}
            >
              With 7xcoder.com, Cloud-Based Software Solutions deliver more
              than accessibility they enable agility, scalability, and long-term
              digital transformation. Through strategic cloud architecture,
              high-performance development, and disciplined deployment
              practices, we help organizations build reliable cloud platforms,
              optimize operational flexibility, and transform digital ecosystems
              into secure, scalable, and future-ready business infrastructures.
            </motion.p>

          </div>

        </div>
      </main>
    </div>
  );
};

export default Page1;
