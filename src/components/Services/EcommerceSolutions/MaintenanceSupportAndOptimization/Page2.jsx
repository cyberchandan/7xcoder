import React from "react";
import { motion } from "framer-motion";
import "../../page2.css";

import frame1 from "../../../../assets/MaintenanceSupportAndOptimization/images/image21.png";
import frame2 from "../../../../assets/MaintenanceSupportAndOptimization/images/image23.png";
import frame3 from "../../../../assets/MaintenanceSupportAndOptimization/images/image25.png";
import frame4 from "../../../../assets/MaintenanceSupportAndOptimization/images/image26.png";
import frame5 from "../../../../assets/MaintenanceSupportAndOptimization/images/image24.png";
import frame6 from "../../../../assets/MaintenanceSupportAndOptimization/images/image22.png";

// 🔥 SAME GLOBAL SYSTEM
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
          viewport={{ once:false, amount:0.3 }}
        >
          BENEFITS
        </motion.div>

        <motion.div
          className="sub-title-2"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once:false, amount:0.3 }}
        >
          Benefits of Maintenance, Support & Optimization with 7xcoder.com
        </motion.div>

        <motion.div
          className="benefites-containr-2"
          variants={containerVariant}
          initial="hidden"
          whileInView="visible"
          viewport={{ once:false, amount:0.2 }}
        >

          <div className="column-2 custom-border-2 right-pad-30">

            <Benefit img={frame1} title="Proactive System Monitoring"
              text="We continuously monitor system health, performance metrics, and security signals to detect risks early, prevent downtime, and ensure uninterrupted business operations." />

            <Benefit img={frame2} title="Security & Compliance Management"
              text="Regular security audits, updates, access control reviews, and patch management safeguard your digital assets and ensure compliance readiness." />

          </div>

          <div className="column-2 custom-border-2 left-pad-50 right-pad-30">

            <Benefit img={frame6} title="Scalable & Future-Ready Stability"
              text="Our structured maintenance frameworks ensure your platforms remain stable, adaptable, and ready to scale as business demands evolve." />

            <Benefit img={frame5} title="Seamless Updates & Enhancements"
              text="From feature upgrades to system refinements, we implement improvements without disrupting live operations or user experience." />

          </div>

          <div className="column-2 left-pad-50 right-pad-30">

            <Benefit img={frame3} title="High Performance & Reliability"
              text="We optimize speed, server performance, database efficiency, and application stability to maintain consistent uptime and peak operational performance." />

            <Benefit img={frame4} title="Operational Efficiency Optimization"
              text="Through performance tuning, workflow refinement, and system cleanup, we reduce technical bottlenecks and enhance overall productivity." />

          </div>

        </motion.div>

        <motion.div
          className="second-container-2"
          variants={slideLeft}
          initial="hidden"
          whileInView="visible"
          viewport={{ once:false, amount:0.3 }}
        >
          <p className="second-text">
            At 7xcoder.com, Maintenance, Support & Optimization go beyond
            routine technical upkeep we transform system management into a
            strategic performance advantage. We proactively monitor, secure, and
            enhance digital platforms to ensure long-term stability, peak
            efficiency, and uninterrupted business continuity, keeping every
            platform aligned with evolving business goals and optimized for
            measurable operational impact.
            <br />
            <br />
            <span className="second-text">Key Highlights</span>
          </p>

          <motion.ul style={{ width: "105%" }} variants={containerVariant}>

            <motion.li className="second-text" variants={fadeUp}>
              Proactive System Architecture & Stability Future-ready maintenance frameworks designed to preserve structural integrity, scalability, and long-term platform resilience.
            </motion.li>

            <motion.li className="second-text" variants={fadeUp}>
              Performance-Driven Optimization Continuous speed enhancements, database tuning, and infrastructure refinement to maintain peak system efficiency and uptime.
            </motion.li>

            <motion.li className="second-text" variants={fadeUp}>
              Structured Systems & Clean Standards Disciplined update management, clean code practices, & standardized processes ensure maintainability & consistent execution.
            </motion.li>

            <motion.li className="second-text" variants={fadeUp}>
              Operational Efficiency & Workflow Refinement System enhancements and backend optimizations that streamline operations and reduce technical friction.
            </motion.li>

            <motion.li className="second-text" variants={fadeUp}>
              Reliability Management Regular updates, patch management, and security monitoring safeguard data integrity and ensure sustained platform trust and stability.
            </motion.li>

          </motion.ul>

        </motion.div>

      </section>
    </div>
  );
};

// 🔥 SAME reusable Benefit component
const Benefit = ({ img, title, text }) => (
  <motion.div variants={fadeUp}>
    <motion.img
      src={img}
      alt="Icon"
      initial={{ opacity:0, scale:0.6 }}
      whileInView={{ opacity:1, scale:1 }}
      transition={{ duration:0.6, ease:"easeOut" }}
    />
    <h3 className="benefit-title">{title}</h3>
    <p className="benefit-text">{text}</p>
  </motion.div>
);

export default Page2;
