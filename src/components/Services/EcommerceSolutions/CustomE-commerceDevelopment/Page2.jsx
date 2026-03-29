import React from 'react'
import "../../page2.css";
import { motion } from "framer-motion";

import frame1 from "../../../../assets/ecommerce-solutions/images/Frame 120.png";
import frame2 from "../../../../assets/ecommerce-solutions/images/Frame 123.png";
import frame3 from "../../../../assets/ecommerce-solutions/images/Frame 122.png";
import frame4 from "../../../../assets/ecommerce-solutions/images/Frame 125.png";
import frame5 from "../../../../assets/ecommerce-solutions/images/Frame 124.png";
import frame6 from "../../../../assets/ecommerce-solutions/images/Frame 121.png";

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
          Benefits of Custom E-commerce Development with 7xcoder.com
        </motion.div>

        <motion.div
          className="benefites-containr-2"
          variants={containerVariant}
          initial="hidden"
          whileInView="visible"
          viewport={{ once:false, amount:0.2 }}
        >

          <div className="column-2 custom-border-2 right-pad-30">

            <Benefit img={frame1} title="Strategic Commerce Architecture"
              text="Custom-built e-commerce frameworks designed around your brand strategy, product positioning, and customer journey  ensuring alignment between technology, operations, and revenue goals." />

            <Benefit img={frame2} title="Secure & Compliant E-commerce Ecosystems"
              text="Advanced security protocols, secure payment integrations, and data protection measures ensure safe transactions and regulatory compliance." />

          </div>

          <div className="column-2 custom-border-2 left-pad-50 right-pad-30">

            <Benefit img={frame6} title="Scalable & Growth-Ready Platforms"
              text="Flexible, modular e-commerce systems engineered to scale effortlessly as your business expands  supporting new products, markets, and integrations without compromising performance." />

            <Benefit img={frame5} title="Seamless Commerce Integrations"
              text="Smooth integration with CRMs, ERPs, payment gateways, inventory systems, logistics partners, and third-party tools creating a unified digital commerce ecosystem." />

          </div>

          <div className="column-2 left-pad-50 right-pad-30">

            <Benefit img={frame3} title="High-Performance & Conversion Optimization"
              text="Platforms optimized for speed, seamless navigation, and frictionless checkout experiences  maximizing engagement, reducing drop-offs, and increasing revenue." />

            <Benefit img={frame4} title="Operational Automation & Efficiency"
              text="Automated order processing, inventory management, payment workflows, and reporting systems enhance operational efficiency and minimize manual intervention." />

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
            Custom E-commerce Development at 7xcoder.com goes beyond standard online stores  we architect scalable, secure, and high-performance commerce ecosystems tailored to your brand and growth strategy. Our strategic, performance-driven approach ensures every platform aligns with revenue objectives, enhances customer journeys, optimizes operations, and delivers measurable commercial impact.
            <br /><br />
            <span className="second-text">Key Highlights</span>
          </p>

          <motion.ul style={{ width: '100%' }} variants={containerVariant}>

            <motion.li className="second-text" variants={fadeUp}>
              Strategic Commerce Architecture Future-ready e-commerce frameworks designed around business goals, customer behavior, and long-term scalability.
            </motion.li>

            <motion.li className="second-text" variants={fadeUp}>
              Performance Optimized Development Engineered for speed, stability, and conversion efficiency ensuring seamless transactions & reliable platform performance.
            </motion.li>

            <motion.li className="second-text" variants={fadeUp}>
              Standardized frameworks and disciplined development practices ensure consistency, maintainability, and enterprise-grade execution.
            </motion.li>

            <motion.li className="second-text" variants={fadeUp}>
              Conversion Focused User Experience Optimized storefront experiences & intuitive admin workflows that enhance usability, engagement, & operational efficiency.
            </motion.li>

            <motion.li className="second-text" variants={fadeUp}>
              Secure payment integrations, protected customer data, and reliable infrastructure ensure compliance, trust, and long-term platform stability.
            </motion.li>

          </motion.ul>

        </motion.div>

      </section>
    </>
  )
};

// 🔥 SAME reusable component
const Benefit = ({ img, title, text }) => (
  <motion.div
    className='e-commerce-services-benefits-div'
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
