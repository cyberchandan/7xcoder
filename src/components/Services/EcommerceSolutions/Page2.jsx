import React from 'react'
import "../page2.css";
import { motion } from "framer-motion";

import frame1 from "../../../assets/ecommerce-solutions/images/Frame 120.png";
import frame2 from "../../../assets/ecommerce-solutions/images/Frame 123.png";
import frame3 from "../../../assets/ecommerce-solutions/images/Frame 122.png";
import frame4 from "../../../assets/ecommerce-solutions/images/Frame 125.png";
import frame5 from "../../../assets/ecommerce-solutions/images/Frame 124.png";
import frame6 from "../../../assets/ecommerce-solutions/images/Frame 121.png";

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
          Benefits of E-commerce Solutions with 7xcoder.com
        </motion.div>

        <motion.div
          className="benefites-containr-2"
          variants={containerVariant}
          initial="hidden"
          whileInView="visible"
          viewport={{ once:false, amount:0.2 }}
        >

          <div className="column-2 custom-border-2 right-pad-30">

            <Benefit img={frame1} title="Business Centric E-commerce Architecture"
              text="Our e-commerce solutions are designed around your business model, product strategy, and customer journey ensuring seamless alignment between technology, operations, and revenue goals for growth." />

            <Benefit img={frame2} title="Secure & Compliant E-commerce Development"
              text="We implement industry standard security protocols, secure payment integrations, role based access control, and data protection measures to safeguard customer data and ensure compliance with regulatory standards." />

          </div>

          <div className="column-2 custom-border-2 left-pad-50 right-pad-30">

            <Benefit img={frame6} title="Scalable & Future Ready Platforms"
              text="We build flexible, modular e-commerce architectures that scale as your business grows. New features, products, users, and integrations can be added without impacting performance or platform stability." />

            <Benefit img={frame5} title="Seamless System Integrations"
              text="Our solutions integrate smoothly with CRMs, ERPs, payment gateways, inventory systems, logistics partners, and third party tools creating a unified, efficient commerce ecosystem." />

          </div>

          <div className="column-2 left-pad-50 right-pad-30">

            <Benefit img={frame3} title="High Performance & Reliability"
              text="Our platforms are optimized for speed, stability, and consistent performance ensuring smooth browsing, fast checkouts, and uninterrupted operations even during high traffic, sales events, or peak demand." />

            <Benefit img={frame4} title="Operational Automation & Efficiency"
              text="By automating order processing, inventory updates, payment workflows, and reporting, our e-commerce platforms reduce manual effort, minimize errors, and improve operational efficiency across teams." />

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
            E-commerce solutions at 7xcoder.com go beyond building online stores we develop scalable, secure, and high performance commerce platforms that drive long term revenue growth and operational efficiency. Our strategic, performance driven e-commerce development approach ensures every solution aligns with business goals, enhances customer journeys, streamlines commerce operations, and delivers measurable commercial impact.
            <br /><br />
            <span className="second-text">Key Highlights</span>
          </p>

          <motion.ul style={{width:'100%'}} variants={containerVariant}>

            <motion.li className="second-text" variants={fadeUp}>
              Strategic E-commerce Architecture Future ready architectures aligned with business goals, customer journeys, and scalability.
            </motion.li>

            <motion.li className="second-text" variants={fadeUp}>
              Performance Driven Development Focused on speed and conversion efficiency to deliver optimized performance and reliable transactions.
            </motion.li>

            <motion.li className="second-text" variants={fadeUp}>
              Consistent Systems & Code Standards Standardized frameworks and clean code ensure consistency, maintainability, and professional execution.
            </motion.li>

            <motion.li className="second-text" variants={fadeUp}>
              High Impact Functionality & User Experience Conversion focused shopping experiences and role based admin workflows that enhance usability and efficiency.
            </motion.li>

            <motion.li className="second-text" variants={fadeUp}>
              Security, Stability & Transactional Credibility Secure payments and reliable platform performance ensure trust, compliance, and long term stability.
            </motion.li>

          </motion.ul>

        </motion.div>

      </section>
    </>
  )
}

// 🔥 SAME reusable Benefit component
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
)

export default Page2
