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
          Benefits of Product, Inventory & Order Management with 7xcoder.com
        </motion.div>

        <motion.div
          className="benefites-containr-2"
          variants={containerVariant}
          initial="hidden"
          whileInView="visible"
          viewport={{ once:false, amount:0.2 }}
        >

          <div className="column-2 custom-border-2 right-pad-30">

            <Benefit img={frame1} title="Business-Centric Inventory Architecture"
              text="Our systems are designed around your product structure, stock movement logic, and order workflows  ensuring seamless alignment between inventory control, operations, and revenue objectives." />

            <Benefit img={frame2} title="Secure & Controlled Operations"
              text="We implement role-based access control, secure data handling, and structured validation systems to safeguard product data and maintain operational compliance." />

          </div>

          <div className="column-2 custom-border-2 left-pad-50 right-pad-30">

            <Benefit img={frame6} title="Scalable & Future-Ready Management Systems"
              text="We build modular inventory and order frameworks that scale effortlessly as your catalog, warehouses, and sales channels expand without disrupting system stability." />

            <Benefit img={frame5} title="Seamless System Integrations"
              text="Seamless System Integrations Our solutions integrate smoothly with ERPs, CRMs, payment systems, logistics partners, and multi-channel platforms creating a unified and efficient commerce infrastructure." />

          </div>

          <div className="column-2 left-pad-50 right-pad-30">

            <Benefit img={frame3} title="High Performance & Operational Reliability"
              text="Our platforms are optimized for speed, accuracy, and real-time synchronization  ensuring consistent stock visibility and smooth order processing even during peak demand." />

            <Benefit img={frame4} title="Operational Automation & Efficiency"
              text="By automating stock updates, order routing, fulfillment workflows, and reporting, we reduce manual errors, improve accuracy, and enhance overall operational efficiency." />

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
            Product, Inventory & Order Management at 7xcoder.com goes beyond backend tracking  we build scalable, secure, and high-performance management systems that strengthen operational control, accuracy, and long-term business efficiency. Our structured, performance-driven approach ensures every system aligns with product workflows, stock movement, and order lifecycle management to deliver measurable operational impact.
            <br /><br />
            <span className="second-text">Key Highlights</span>
          </p>

          <motion.ul style={{ width: '100%' }} variants={containerVariant}>

            <motion.li className="second-text" variants={fadeUp}>
              Strategic Inventory Architecture Future-ready system design aligned with product structures, warehouse logic, and scalable order workflows.
            </motion.li>

            <motion.li className="second-text" variants={fadeUp}>
              Performance-Driven System Development Engineered for speed, real-time stock synchronization, and accurate order processing across channels.
            </motion.li>

            <motion.li className="second-text" variants={fadeUp}>
              Structured Systems & Clean Standards Standardized frameworks and disciplined logic ensure maintainability, consistency, and reliable execution.
            </motion.li>

            <motion.li className="second-text" variants={fadeUp}>
              High-Impact Operational Visibility Role-based dashboards and intelligent tracking systems enhance product control, stock clarity, and fulfillment efficiency.
            </motion.li>

            <motion.li className="second-text" variants={fadeUp}>
              Security, Stability & Data Integrity Secure data handling, access control, and system reliability ensure compliance, operational stability, and long-term trust.
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
