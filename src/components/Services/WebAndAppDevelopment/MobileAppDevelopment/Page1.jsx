import { motion } from "framer-motion";
import React from 'react'
import "../../page1.css";
import digimart from "../../../../assets/MobileAppDevelopment(iOS & Android)/image1.png";

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
            Mobile App Development
          </motion.h1>

          <motion.p
            className="sub-title-service1"
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: false, amount: 0.3 }}
          >
            Mobile App Development Solutions. Engineered for Performance and
            Scalability.
          </motion.p>

          <motion.p
            className="service-para1-service1"
            initial={{ opacity: 0, x: 120 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9 }}
            viewport={{ once: false, amount: 0.3 }}
          >
            At 7xcoder.com, mobile app development is treated as a
            strategic digital asset not just a technical build. We engineer
            scalable, high-performance mobile applications that deliver seamless
            user experiences and long-term business value across Android and iOS
            platforms. Our approach is intentional, structured, and
            performance-driven built for organizations that prioritize
            reliability, scalability, and measurable digital impact.
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
                Our Mobile App Development Framework <br />
                <span>How Our Mobile App Development Process Works</span>
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
                  <span>01.</span> Strategic Mobile App Planning & Architecture
                </h2>
                <p>
                  We define clear product objectives, analyze business and user
                  requirements, and design a scalable mobile app roadmap aligned
                  with long-term growth, performance benchmarks, and usability
                  standards.
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
                  <span>02.</span> High Performance Mobile App Development &
                  Execution
                </h2>
                <p>
                  We build secure, robust, and high-performing mobile
                  applications engineered for seamless user experiences, clean
                  architecture, and consistent functionality across Android and
                  iOS devices
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
                </h2>
                <p>
                  We ensure long-term reliability through structured testing,
                  performance optimization, version control, and scalable app
                  frameworks strengthening security, stability, and future-ready
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
              With 7xcoder.com, mobile app development delivers more than
              functionality it creates scalable digital experiences, consistent
              performance, and long-term business impact. Through strategic app
              architecture, high-quality development, and disciplined execution,
              we help brands build reliable mobile platforms, elevate user
              experience, and transform mobile presence into lasting value.
            </motion.p>

          </div>
        </div>
      </main>
    </div>
  )
}

export default Page1
