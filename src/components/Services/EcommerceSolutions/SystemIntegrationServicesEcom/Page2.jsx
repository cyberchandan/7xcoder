import frame1 from "../../../../assets/SystemIntegrationServicesEcom/images/image1.png";
import frame3 from "../../../../assets/SystemIntegrationServicesEcom/images/image2.png";
import frame5 from "../../../../assets/SystemIntegrationServicesEcom/images/image3.png";
import frame2 from "../../../../assets/SystemIntegrationServicesEcom/images/image4.png";
import frame4 from "../../../../assets/SystemIntegrationServicesEcom/images/image5.png";
import frame6 from "../../../../assets/SystemIntegrationServicesEcom/images/image6.png";
import "../../page2.css";
import { motion } from "framer-motion";

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

const Service3_2 = () => {
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
          Benefits of System Integration Services with 7xcoder.com
        </motion.div>

        <motion.div
          className="benefites-containr-2"
          variants={containerVariant}
          initial="hidden"
          whileInView="visible"
          viewport={{ once:false, amount:0.2 }}
        >

          <div className="column-2 custom-border-2 right-pad-30">

            <Benefit img={frame1} title="Business-Aligned Integration Architecture"
              text="Our integration frameworks are designed around your enterprise workflows, operational systems, and growth strategy ensuring seamless alignment between technology, data, and business objectives." />

            <Benefit img={frame2} title="Secure & Governed Integrations"
              text="We implement secure API protocols, role-based access control, encrypted data exchanges, and compliance-focused integration standards to protect sensitive business information." />

          </div>

          <div className="column-2 custom-border-2 left-pad-50 right-pad-30">

            <Benefit img={frame3} title="Scalable & Future-Ready Connectivity"
              text="We build modular, API-driven integration architectures that scale effortlessly as your organization grows. New systems, tools, and platforms can be connected without disrupting performance or stability." />

            <Benefit img={frame4} title="Seamless Cross-Platform Synchronization"
              text="We connect CRMs, ERPs, payment gateways, inventory systems, HR tools, analytics platforms, and third-party services  creating a unified and efficient digital ecosystem." />

          </div>

          <div className="column-2 left-pad-50 right-pad-30">

            <Benefit img={frame5} title="High Performance & Reliability"
              text="Our integration layers are optimized for speed, stability, and real-time synchronization  ensuring uninterrupted data flow and consistent cross-system performance." />

            <Benefit img={frame6} title="Operational Automation & Efficiency"
              text="By automating data exchange, workflow triggers, and system synchronization, we eliminate manual errors, reduce redundancy, and enhance enterprise-wide productivity." />

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
           At 7xcoder.com, System Integration Services go beyond connecting software — we build unified, scalable, and secure digital ecosystems that drive operational efficiency and long-term business performance. Our strategic, architecture-driven integration approach ensures every system works in sync with your business objectives, data workflows, and enterprise infrastructure.
            <br />
            <br />
            <span className="second-text">Key Highlights</span>
          </p>

          <motion.ul style={{ width: "100%" }} variants={containerVariant}>

            <motion.li className="second-text" variants={fadeUp}>
              Strategic Integration Architecture Future-ready integration frameworks aligned with business processes, operational systems, and scalability goals.
            </motion.li>

            <motion.li className="second-text" variants={fadeUp}>
              Performance-Driven Connectivity High speed, stable, & reliable integrations designed for real-time data synchronization & optimized cross-platform performance.
            </motion.li>

            <motion.li className="second-text" variants={fadeUp}>
              Standardized APIs, modular frameworks, and clean integration logic ensure consistency, maintainability, and enterprise-grade execution.
            </motion.li>

            <motion.li className="second-text" variants={fadeUp}>
              Automated data exchange and workflow synchronization reduce manual errors, eliminate redundancy, and enhance productivity across departments.
            </motion.li>

            <motion.li className="second-text" variants={fadeUp}>
              Secure API protocols, access control mechanisms, encrypted data transfer, and compliance driven standards ensure trust, protection, & long term system stability.
            </motion.li>

          </motion.ul>

        </motion.div>

      </section>
    </div>
  );
};

// 🔥 SAME reusable card pattern
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

export default Service3_2;
