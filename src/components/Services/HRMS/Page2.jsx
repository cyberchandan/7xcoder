import React from "react";

import "../page2.css";
import { motion } from "framer-motion";

import frame1 from "../../../assets/HRMS/images/image21.png";
import frame2 from "../../../assets/HRMS/images/image23.png";
import frame3 from "../../../assets/HRMS/images/image25.png";
import frame4 from "../../../assets/HRMS/images/image26.png";
import frame5 from "../../../assets/HRMS/images/image24.png";
import frame6 from "../../../assets/HRMS/images/image22.png";

// 🔥 Animation Variants (Reusable)
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
          Benefits of HRMS with 7xcoder.com
        </motion.div>

        <motion.div
          className="benefites-containr-2"
          variants={containerVariant}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.2 }}
        >
          <div className="column-2 custom-border-2 right-pad-30">
            <Benefit
              img={frame1}
              title="Continuous Workforce Performance Monitoring"
              text="We track employee productivity, attendance, and engagement to ensure consistent performance and better decision making."
            />

            <Benefit
              img={frame2}
              title="Structured HR Control & Compliance"
              text="We implement organized systems for policy management, compliance tracking, and process standardization."
            />
          </div>

          <div className="column-2 custom-border-2 left-pad-50 right-pad-30">
            <Benefit
              img={frame6}
              title="Scalable HR Automation Systems"
              text="Our structured HRMS adapts to your business growth, automating processes and improving efficiency as your team expands."
            />

            <Benefit
              img={frame5}
              title="Unified HR Operations & Communication"
              text="All HR activities from onboarding to payroll stay aligned and streamlined across departments."
            />
          </div>

          <div className="column-2 left-pad-50 right-pad-30">
            <Benefit
              img={frame3}
              title="Stronger Employee Experience & Engagement"
              text="Data-driven insights help improve employee satisfaction, retention, and overall workplace experience."
            />

            <Benefit
              img={frame4}
              title="Continuous HR Innovation & Improvement"
              text="We implement feedback loops and best practices to continuously refine HR processes and maintain competitive advantage."
            />
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
            HRMS solutions at 7xcoder.com go beyond basic HR management we develop scalable, secure, and high performance HRMS platforms that drive long term workforce efficiency and organizational growth. Our strategic, performance driven HRMS approach ensures every solution aligns with business objectives, enhances employee experience, streamlines HR operations, and delivers measurable impact.
            <br /><br />
            <span className="second-text">Key Highlights</span>
          </p>

          <motion.ul style={{width:'100%'}} variants={containerVariant}>

            <motion.li className="second-text" variants={fadeUp}>
              Strategic HR Architecture Future ready HR systems aligned with business goals, employee behavior, and scalability.
            </motion.li>

            <motion.li className="second-text" variants={fadeUp}>
              Performance Driven Development Focused on efficiency and measurable HR outcomes to deliver optimized performance.
            </motion.li>

            <motion.li className="second-text" variants={fadeUp}>
              Consistent Systems & Standards Standardized frameworks and HR practices ensure consistency, maintainability, and compliance.
            </motion.li>

            <motion.li className="second-text" variants={fadeUp}>
              High Impact HR Functionality & Experience Comprehensive HR tools and employee friendly interface that enhance usability.
            </motion.li>

            <motion.li className="second-text" variants={fadeUp}>
              Security, Stability & Data Credibility Secure data handling and reliable system performance ensure trust and long term stability.
            </motion.li>

          </motion.ul>

        </motion.div>

      </section>
    </div>
  );
};

const Benefit = ({ img, title, text }) => (
  <motion.div
    className="e-commerce-services-benefits-div"
    variants={fadeUp}
  >
    <motion.img
      src={img}
      alt=""
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
