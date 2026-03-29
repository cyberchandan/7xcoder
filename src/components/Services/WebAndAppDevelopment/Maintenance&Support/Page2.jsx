import { motion } from "framer-motion";

import "../../page2.css";

import frame3 from "../../../../assets/Maintenance&Support/icon2.png";
import frame1 from "../../../../assets/Maintenance&Support/icon1.png";
import frame5 from "../../../../assets/Maintenance&Support/icon3.png";
import frame2 from "../../../../assets/Maintenance&Support/icon4.png";
import frame4 from "../../../../assets/Maintenance&Support/icon5.png";
import frame6 from "../../../../assets/Maintenance&Support/icon6.png";

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
          Benefits of Maintenance & Support Services with 7xcoder.com
        </motion.div>

        <motion.div
          className="benefites-containr-2"
          variants={containerVariant}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.2 }}
        >

          <div className="column-2 custom-border-2 right-pad-30">
            <Benefit img={frame1} title="Intelligent System Monitoring"
              text="We proactively monitor performance, detect vulnerabilities early, and ensure uninterrupted platform operations with zero compromise on stability." />

            <Benefit img={frame2} title="Priority Issue Resolution"
              text="Our structured support model ensures rapid diagnosis, efficient troubleshooting, and minimal downtime to safeguard business continuity." />
          </div>

          <div className="column-2 custom-border-2 left-pad-50 right-pad-30">
            <Benefit img={frame3} title="Advanced Updates & Security Reinforcement"
              text="Strategic updates, critical patches, and enhanced security layers keep your systems protected, optimized, and aligned with evolving digital standards." />

            <Benefit img={frame4} title="Adaptive & Scalable Support Structure"
              text="As your operations expand, our maintenance ecosystem evolves ensuring long-term reliability, resilience, and seamless scalability." />
          </div>

          <div className="column-2 left-pad-50 right-pad-30">
            <Benefit img={frame5} title="Performance Enhancement & Stability Engineering"
              text="We fine tune infrastructure, improve system speed, and strengthen stability to deliver consistent performance under real world demand." />

            <Benefit img={frame6} title="Continuous Optimization & Strategic Improvements"
              text="Beyond routine support, we introduce proactive enhancements and performance refinements to keep your digital ecosystem competitive and future ready." />
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
            Maintenance & Support at 7xcoder.com go beyond routine
            technical upkeep we safeguard, optimize, and continuously strengthen
            your digital platforms to ensure long-term stability and
            performance.Through continuous monitoring, timely updates, and
            preventive enhancements, we minimize downtime, mitigate risks, and
            ensure your systems remain secure, efficient, and aligned with
            evolving business needs.
            <br />
            <br />
            <span className="second-text">Key Highlights</span>
          </p>

          <motion.ul variants={containerVariant}>
            <motion.li className="second-text" variants={fadeUp}>
              Proactive System Monitoring continuous performance tracking and health assessments to prevent disruptions and ensure operational stability.
            </motion.li>

            <motion.li className="second-text" variants={fadeUp}>
              Timely Updates & Security Management Regular patches, upgrades, and vulnerability management to protect your platform from emerging threats.
            </motion.li>

            <motion.li className="second-text" variants={fadeUp}>
              Performance Optimization & Efficiency Ongoing refinements to improve speed, responsiveness, and overall system reliability.
            </motion.li>

            <motion.li className="second-text" variants={fadeUp}>
              Rapid Issue Resolution & Technical Support Structured support mechanisms to resolve issues quickly and minimize downtime.
            </motion.li>

            <motion.li className="second-text" variants={fadeUp}>
              Long-Term Stability & Scalability Maintenance frameworks designed to support growth, ensure resilience, and sustain digital performance over time.
            </motion.li>
          </motion.ul>
        </motion.div>

      </section>
    </div>
  );
};

// 🔥 SAME Benefit component (consistent across all pages now)
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
