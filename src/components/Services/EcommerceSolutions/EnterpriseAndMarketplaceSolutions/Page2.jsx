import React from "react";
import { motion } from "framer-motion";
import "../../page2.css";

import frame1 from "../../../../assets/EnterpriseAndMarketplaceSolutions/images/image21.png";
import frame2 from "../../../../assets/EnterpriseAndMarketplaceSolutions/images/image23.png";
import frame3 from "../../../../assets/EnterpriseAndMarketplaceSolutions/images/image25.png";
import frame4 from "../../../../assets/EnterpriseAndMarketplaceSolutions/images/image26.png";
import frame5 from "../../../../assets/EnterpriseAndMarketplaceSolutions/images/image24.png";
import frame6 from "../../../../assets/EnterpriseAndMarketplaceSolutions/images/image22.png";

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
          Benefits of Enterprise & Marketplace Solutions with 7xcoder.com
        </motion.div>

        <motion.div
          className="benefites-containr-2"
          variants={containerVariant}
          initial="hidden"
          whileInView="visible"
          viewport={{ once:false, amount:0.2 }}
        >

          <div className="column-2 custom-border-2 right-pad-30">

            <Benefit img={frame1} title="Enterprise-Centric Marketplace Architecture"
              text="Our enterprise and marketplace platforms are architected around complex business models and multi-vendor ecosystems, ensuring seamless alignment between technology, vendors, customers, and revenue strategy." />

            <Benefit img={frame2} title="Secure & Compliant Enterprise Development"
              text="We implement advanced security protocols, role-based access control, secure payment systems, and compliance-ready frameworks to protect marketplace data and ensure regulatory alignment." />

          </div>

          <div className="column-2 custom-border-2 left-pad-50 right-pad-30">

            <Benefit img={frame6} title="Scalable & Future-Ready Marketplace Infrastructure"
              text="We design modular, enterprise-grade architectures that scale effortlessly as vendors, products, users, and transactions grow without compromising performance or system stability." />

            <Benefit img={frame5} title="Seamless Enterprise System Integrations"
              text="Our solutions integrate effortlessly with ERPs, CRMs, payment gateways, logistics networks, and third-party tools creating a unified, scalable digital commerce ecosystem." />

          </div>

          <div className="column-2 left-pad-50 right-pad-30">

            <Benefit img={frame3} title="High Performance & Operational Reliability"
              text="Our platforms are optimized for speed, stability, and consistent performance ensuring smooth vendor onboarding, fast transactions, and uninterrupted operations even during peak demand." />

            <Benefit img={frame4} title="Marketplace Automation & Efficiency"
              text="Through intelligent automation of vendor management, order workflows, commission tracking, reporting, and inventory systems, we reduce operational friction and improve enterprise-level efficiency." />

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
            Enterprise & Marketplace Solutions at 7xcoder.com go beyond
            building commerce platforms we architect scalable, secure, and
            high-performance multi-vendor ecosystems that drive large-scale
            revenue growth and operational excellence. Our strategic,
            performance-driven development approach ensures every marketplace
            solution aligns with complex business models, vendor networks, and
            long-term expansion objectives while delivering measurable
            commercial impact.
            <br />
            <br />
            <span className="second-text">Key Highlights</span>
          </p>

          <motion.ul style={{ width: "105%" }} variants={containerVariant}>

            <motion.li className="second-text" variants={fadeUp}>
              Strategic Marketplace Architecture Future-ready enterprise architectures designed for multi-vendor ecosystems, complex workflows, and scalable expansion.
            </motion.li>

            <motion.li className="second-text" variants={fadeUp}>
              Performance Driven Platform Engineering Optimized for speed, high traffic volumes, transaction reliability, & consistent performance across large scale operations.
            </motion.li>

            <motion.li className="second-text" variants={fadeUp}>
              Governance Standards Standardized frameworks and disciplined development practices ensure maintainability, scalability, and enterprise-grade execution.
            </motion.li>

            <motion.li className="second-text" variants={fadeUp}>
              Vendor & Operational Efficiency Role-based dashboards, automation workflows, and unified management systems enhance productivity and marketplace control.
            </motion.li>

            <motion.li className="second-text" variants={fadeUp}>
              Enterprise-level security, protected transactions, and stable infrastructure ensure trust, regulatory readiness, and long-term platform reliability.
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
