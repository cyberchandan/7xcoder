import React from "react";
import { motion } from "framer-motion";

import "../../page2.css";

import frame1 from "../../../../assets/CustomWebsiteDevelopment/images/Frame125.png";
import frame2 from "../../../../assets/CustomWebsiteDevelopment/images/Frame122.png";
import frame3 from "../../../../assets/CustomWebsiteDevelopment/images/Frame123.png";
import frame4 from "../../../../assets/CustomWebsiteDevelopment/images/Frame120.png";
import frame5 from "../../../../assets/CustomWebsiteDevelopment/images/Frame121.png";
import frame6 from "../../../../assets/CustomWebsiteDevelopment/images/Frame124.png";

// 🔥 SAME GLOBAL ANIMATION SYSTEM
const containerVariant = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const fadeUp = {
  hidden: { opacity: 0, y: 60 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: "easeOut" },
  },
};

const fadeDown = {
  hidden: { opacity: 0, y: -60 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: "easeOut" },
  },
};

const slideLeft = {
  hidden: { opacity: 0, x: -120 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.9, ease: "easeOut" },
  },
};

const Page2 = () => {
  return (
    <>
      <section className="digital-marketing-services-2-2">

        <motion.div
          className="benefites-2"
          variants={fadeDown}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.3 }}
        >
          BENEFITS
        </motion.div>

        <motion.div
          className="sub-title-2"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.3 }}
        >
          Benefits of Custom Website Development with 7xcoder.com
        </motion.div>

        <motion.div
          className="benefites-containr-2"
          variants={containerVariant}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.2 }}
        >

          <div className="column-2 custom-border-2 right-pad-30">

            <motion.div className="e-commerce-services-benefits-div" variants={fadeUp}>
              <motion.img
                src={frame1}
                alt="Icon"
                initial={{ opacity: 0, scale: 0.6 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
              />
              <h3 className="benefit-title">
                Business-Driven Website Development
              </h3>
              <p className="benefit-text">
                We don’t just build websites we create strategic digital assets
                aligned with your business objectives, ensuring every feature
                supports growth, efficiency, and measurable ROI.
              </p>
            </motion.div>

            <motion.div className="e-commerce-services-benefits-div" variants={fadeUp}>
              <motion.img
                src={frame2}
                alt="Icon"
                initial={{ opacity: 0, scale: 0.6 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
              />
              <h3 className="benefit-title">User-Centric UI/UX Engineering</h3>
              <p className="benefit-text">
                By integrating advanced UI/UX principles, we design intuitive
                navigation and engaging experiences that increase user
                retention, usability, and conversion rates across all devices.
              </p>
            </motion.div>

          </div>

          <div className="column-2 custom-border-2 left-pad-50 right-pad-30">

            <motion.div className="e-commerce-services-benefits-div" variants={fadeUp}>
              <motion.img
                src={frame6}
                alt="Icon"
                initial={{ opacity: 0, scale: 0.6 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
              />
              <h3 className="benefit-title">
                Fully Custom & Scalable Website Solutions
              </h3>
              <p className="benefit-text">
                Every website is developed from the ground up, allowing seamless
                scalability as your business grows without limitations,
                rebuilds, or performance compromise.
              </p>
            </motion.div>

            <motion.div className="e-commerce-services-benefits-div" variants={fadeUp}>
              <motion.img
                src={frame5}
                alt="Icon"
                initial={{ opacity: 0, scale: 0.6 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
              />
              <h3 className="benefit-title">
                Secure & Robust Website Development
              </h3>
              <p className="benefit-text">
                We implement industry standard security practices, ensuring data
                protection, secure transactions, and long-term system
                reliability across modern web environments.
              </p>
            </motion.div>

          </div>

          <div className="column-2 left-pad-50 right-pad-30">

            <motion.div className="e-commerce-services-benefits-div" variants={fadeUp}>
              <motion.img
                src={frame3}
                alt="Icon"
                initial={{ opacity: 0, scale: 0.6 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
              />
              <h3 className="benefit-title">
                High-Performance Website Architecture
              </h3>
              <p className="benefit-text">
                Our websites are engineered for speed, stability, and
                reliability, delivering fast load times, smooth interactions,
                and consistent performance even under high traffic conditions.
              </p>
            </motion.div>

            <motion.div className="e-commerce-services-benefits-div" variants={fadeUp}>
              <motion.img
                src={frame4}
                alt="Icon"
                initial={{ opacity: 0, scale: 0.6 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
              />
              <h3 className="benefit-title">
                Post Launch Support & Continuous Optimization
              </h3>
              <p className="benefit-text">
                Beyond launch, we provide structured maintenance, performance
                monitoring, updates, and enhancements to keep your website
                competitive, secure, and future ready.
              </p>
            </motion.div>

          </div>

        </motion.div>

        <motion.div
          className="second-container-2"
          variants={slideLeft}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.3 }}
        >
          <p className="second-text">
            Custom Website Development at 7xcoder.com goes beyond creating
            functional websites. We build scalable, secure, and high-performance
            digital platforms designed to support long-term business growth.
            Through a strategic, performance-driven development approach, every
            website is aligned with business objectives, engineered for superior
            user experience, and optimized to deliver measurable impact across
            the digital ecosystem.
            <br />
            <br />
            <span className="second-text">Key Highlights</span>
          </p>

          <motion.ul style={{ width: "100%" }} variants={containerVariant}>
            <motion.li className="second-text" variants={fadeUp}>
              Strategic Website Architecture Future ready website architectures designed around business objectives, user behavior, and long term scalability.
            </motion.li>

            <motion.li className="second-text" variants={fadeUp}>
              Performance Driven Website Development Execution focused on speed, stability, efficiency ensuring optimized performance, reliability, measurable business outcomes.
            </motion.li>

            <motion.li className="second-text" variants={fadeUp}>
              Standardized development frameworks and clean coding practices that ensure consistency, easy maintenance, and professional-grade execution.
            </motion.li>

            <motion.li className="second-text" variants={fadeUp}>
              High-Impact User Experience & Functionality Intuitive, user-centric website experiences engineered to enhance engagement, usability, and conversion performance.
            </motion.li>

            <motion.li className="second-text" variants={fadeUp}>
              Security, Stability & Technical Credibility Secure development practices, robust data protection, and reliable system performance that establish long term trust stability.
            </motion.li>
          </motion.ul>
        </motion.div>

      </section>
    </>
  );
};

export default Page2;
