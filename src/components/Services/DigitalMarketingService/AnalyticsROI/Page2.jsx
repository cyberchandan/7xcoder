import React from "react";
import { motion } from "framer-motion";
import "../../page2.css";

import frame1 from "../../../../assets/Analytics&ROI/images/frame1.png";
import frame2 from "../../../../assets/Analytics&ROI/images/frame2.png";
import frame3 from "../../../../assets/Analytics&ROI/images/frame5.png";
import frame4 from "../../../../assets/Analytics&ROI/images/frame6.png";
import frame5 from "../../../../assets/Analytics&ROI/images/frame4.png";
import frame6 from "../../../../assets/Analytics&ROI/images/frame3.png";

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
    <>
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
          Benefits of Analytics & ROI Tracking with 7xcoder.com
        </motion.div>

        <motion.div
          className="benefites-containr-2"
          variants={containerVariant}
          initial="hidden"
          whileInView="visible"
          viewport={{ once:false, amount:0.2 }}
        >

          <div className="column-2 custom-border-2 right-pad-30">

            <Benefit img={frame1} title="Strategic Performance Measurement"
              text="We align analytics frameworks with clear business objectives, defining the right KPIs and success metrics ensuring every data point contributes to performance clarity, accountability, and decision confidence." />

            <Benefit img={frame2} title="Qualified Growth & Revenue Attribution"
              text="We design advanced tracking models that connect marketing activity to real business outcomes attributing leads, conversions, and revenue accurately to support predictable growth decisions." />

          </div>

          <div className="column-2 custom-border-2 left-pad-50 right-pad-30">

            <Benefit img={frame6} title="Performance Driven Insight Capture"
              text="Our analytics approach focuses on actionable insights rather than vanity metrics, helping brands understand true performance drivers, audience behavior, and conversion impact with greater accuracy and relevance." />

            <Benefit img={frame5} title="Data Backed Optimization & Intelligence"
              text="Every strategy is guided by deep analytics, attribution modeling, and ROI intelligence enabling continuous optimization, smarter investment decisions, and sustained performance improvement." />

          </div>

          <div className="column-2 left-pad-50 right-pad-30">

            <Benefit img={frame3} title="Consistent Data & Reporting Control"
              text="From dashboards to reports, we maintain consistency in data interpretation and reporting standards across all platforms ensuring transparency, reliability, and trust in every insight delivered." />

            <Benefit img={frame4} title="Scalable Growth with ROI Efficiency"
              text="Through disciplined measurement, cost analysis, and performance forecasting, we help brands scale confidently while maintaining efficiency, profitability, and long term ROI control." />

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
            Analytics & ROI Tracking with 7xcoder.com is built for brands that demand clarity, accountability, and measurable business performance. We move beyond basic reporting to engineer structured, insight driven analytics ecosystems that strengthen decision making, optimize marketing efficiency, and support predictable growth. Our approach integrates advanced data tracking, attribution intelligence, and disciplined performance analysis to ensure every metric, interaction, and conversion contributes to long term business value. Through actionable insights, platform specific measurement frameworks, and continuous performance refinement, we transform raw data into clarity, informed decisions, and sustainable ROI impact.
            <br />
            <br />
            <span className="second-text">Key Highlights</span>
          </p>

          <motion.ul style={{ width: "100%" }} variants={containerVariant}>

            <motion.li className="second-text" variants={fadeUp}>
              Strategic Performance Measurement Track high impact KPIs with precision to ensure every initiative aligns with business objectives and measurable outcomes.
            </motion.li>

            <motion.li className="second-text" variants={fadeUp}>
              Performance Led ROI Growth ROI focused insights driven by data, analytics, and continuous optimization to improve efficiency and decision-making.
            </motion.li>

            <motion.li className="second-text" variants={fadeUp}>
              Controlled Data & Reporting Integrity Maintain clarity, consistency, and accuracy across dashboards and reports to protect data reliability and trust.
            </motion.li>

            <motion.li className="second-text" variants={fadeUp}>
              Qualified Insights & Outcome Attribution Connect marketing activity to real business results through accurate attribution and conversion tracking.
            </motion.li>

            <motion.li className="second-text" variants={fadeUp}>
              Scalable & Cost Efficient Measurement Optimize tracking frameworks and reporting systems to support sustainable growth, efficiency, & long term ROI control.
            </motion.li>

          </motion.ul>

        </motion.div>

      </section>
    </>
  );
};

// 🔥 SAME reusable component
const Benefit = ({ img, title, text }) => (
  <motion.div
    className="e-commerce-services-benefits-div"
    variants={fadeUp}
  >
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
