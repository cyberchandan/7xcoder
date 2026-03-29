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
          Benefits of Secure & Scalable Architecture with 7xcoder.com
        </motion.div>

        <motion.div
          className="benefites-containr-2"
          variants={containerVariant}
          initial="hidden"
          whileInView="visible"
          viewport={{ once:false, amount:0.2 }}
        >

          <div className="column-2 custom-border-2 right-pad-30">

            <Benefit img={frame1} title="Security-First Architecture Design"
              text="Our architectural frameworks are engineered around security-by-design principles, ensuring data protection, access control, and infrastructure resilience are embedded at every layer of the system." />

            <Benefit img={frame2} title="Secure & Compliant Engineering Standards"
              text="We implement advanced security protocols, encryption mechanisms, governance policies, and compliance frameworks to safeguard digital assets and maintain regulatory integrity." />

          </div>

          <div className="column-2 custom-border-2 left-pad-50 right-pad-30">

            <Benefit img={frame6} title="Scalable & Future-Ready Infrastructure"
              text="We build modular, cloud-ready, and extensible architectures that scale seamlessly as your organization grows  enabling new features, integrations, and expansion without structural disruption." />

            <Benefit img={frame5} title="Seamless System Interoperability"
              text="Our architectural models enable smooth integration across platforms, enterprise tools, APIs, and third-party systems creating a cohesive and synchronized digital ecosystem." />

          </div>

          <div className="column-2 left-pad-50 right-pad-30">

            <Benefit img={frame3} title="High Performance & System Stability"
              text="Our architectures are optimized for speed, load balancing, and consistent uptime, ensuring reliable performance even under peak workloads and enterprise-level demand." />

            <Benefit img={frame4} title="Operational Resilience & Risk Mitigation"
              text="Through redundancy planning, monitoring frameworks, and performance optimization strategies, we ensure long-term stability, minimized downtime, and infrastructure reliability." />

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
            Secure & Scalable Architecture at 7xcoder.com goes beyond system design  we build resilient, security-first infrastructures that power long-term digital growth and operational stability. Our architecture-driven approach ensures every system is engineered for performance, protection, and seamless scalability across evolving business environments.
            <br /><br />
            <span className="second-text">Key Highlights</span>
          </p>

          <motion.ul style={{ width: '100%' }} variants={containerVariant}>

            <motion.li className="second-text" variants={fadeUp}>
              Security-First Architectural Design Future-ready system architectures built with embedded security layers, risk mitigation, and compliance-ready frameworks.
            </motion.li>

            <motion.li className="second-text" variants={fadeUp}>
              Scalable Infrastructure Engineering Modular, cloud-ready, and expansion-focused architectures designed to grow effortlessly with business demand.
            </motion.li>

            <motion.li className="second-text" variants={fadeUp}>
              Standards Clean architecture principles and standardized development models ensuring maintainability and enterprise-grade execution.
            </motion.li>

            <motion.li className="second-text" variants={fadeUp}>
              Performance-Optimized System Foundations Infrastructure designed for speed, resilience, uptime stability, and consistent high-load performance.
            </motion.li>

            <motion.li className="second-text" variants={fadeUp}>
              Reliability & Long-Term Stability Robust security controls, data protection mechanisms, and architectural discipline that ensure operational continuity and trust.
            </motion.li>

          </motion.ul>

        </motion.div>

      </section>
    </>
  )
};

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
);

export default Page2;
