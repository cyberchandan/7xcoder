import React from 'react'
import { motion } from "framer-motion";

import '../../page2.css'

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
    <div>
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
          Benefits of Backend & API Development with 7xcoder.com
        </motion.div>

        <motion.div
          className="benefites-containr-2"
          variants={containerVariant}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.2 }}
        >

          <div className="column-2 custom-border-2 right-pad-30">
            <Benefit img={frame1} title="Business-Aligned Backend Engineering"
              text="We design backend systems around business logic and operational needs, ensuring data, services, and integrations directly support growth, efficiency, and scalability." />

            <Benefit img={frame2} title="API-First Integration & Data Flow"
              text="We build clean, reliable APIs that enable smooth communication between applications, services, and platforms ensuring accuracy, consistency, and system harmony." />
          </div>

          <div className="column-2 custom-border-2 left-pad-50 right-pad-30">
            <Benefit img={frame6} title="Custom & Scalable Backend Systems"
              text="Every backend and API layer is architected from scratch, enabling seamless expansion, modular growth, and long-term system flexibility without rework." />

            <Benefit img={frame5} title="Secure & Reliable Backend Development"
              text="Industry-grade security practices, data protection mechanisms, and access controls are embedded at every level to ensure long-term system trust and integrity." />
          </div>

          <div className="column-2 left-pad-50 right-pad-30">
            <Benefit img={frame3} title="High-Performance System Architecture"
              text="Our backend infrastructures are optimized for speed, stability, and load handling delivering consistent performance even under high traffic and complex operations." />

            <Benefit img={frame4} title="Ongoing Optimization & System Support"
              text="Post-deployment, we provide continuous monitoring, performance tuning, updates, and enhancements to keep backend systems efficient, secure, and future-ready." />
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
            Backend & API Development at 7xcoder.com is built to power the core of digital platforms. We engineer secure, scalable backend systems and APIs that enable reliable data exchange, consistent performance, and long-term platform efficiency. Our architecture-led development approach ensures backend services align with business workflows, support seamless integrations, and deliver measurable operational impact across complex digital environments.
            <br /><br />
            <span className="second-text">Key Highlights</span>
          </p>

          <motion.ul style={{width:'105%'}} variants={containerVariant}>
            <motion.li className="second-text" variants={fadeUp}>
              We design backend systems with clear data structures, service logic, and integration layers that support long-term scalability and evolving business needs.
            </motion.li>

            <motion.li className="second-text" variants={fadeUp}>
              Backend services and APIs are optimized for speed, stability, and load handling ensuring consistent performance under real-world usage and high traffic.
            </motion.li>

            <motion.li className="second-text" variants={fadeUp}>
              Structured coding practices, modular services, and standardized frameworks ensure maintainability, consistency, and efficient system evolution.
            </motion.li>

            <motion.li className="second-text" variants={fadeUp}>
              Well-defined APIs and backend workflows enable accurate data exchange, seamless integrations, and dependable system interactions across platforms.
            </motion.li>

            <motion.li className="second-text" variants={fadeUp}>
              Secure authentication, data protection measures, and resilient system design ensure long-term reliability, stability, and technical credibility.
            </motion.li>
          </motion.ul>
        </motion.div>

      </section>
    </div>
  )
};

// 🔥 SAME Benefit component (consistent across ALL pages now)
const Benefit = ({ img, title, text }) => (
  <motion.div variants={fadeUp}>
    <motion.img
      src={img}
      alt="Icon"
      initial={{ opacity: 0, scale: 0.6 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      viewport={{ once: false }}
    />
    <h3 className="benefit-title">{title}</h3>
    <p className="benefit-text">{text}</p>
  </motion.div>
);

export default Page2;
