import frame1 from '../../../../assets/Web-and-app-development-services/Icon1.png';
import frame2 from '../../../../assets/Web-and-app-development-services/Icon2.png';
import frame3 from '../../../../assets/Web-and-app-development-services/Icon3.png';
import frame4 from '../../../../assets/Web-and-app-development-services/Icon4.png';
import frame5 from '../../../../assets/Web-and-app-development-services/Icon5.png';
import frame6 from '../../../../assets/Web-and-app-development-services/Icon6.png';
import { motion } from "framer-motion";
import "../../page2.css";

// 🔥 SAME animation system (keep consistent across project)
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
    <section className="digital-marketing-services-2-2">
      <div className="service2-container">

        <motion.p
          className="benefites-2"
          variants={fadeDown}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.3 }}
        >
          BENEFITS
        </motion.p>

        <motion.h2
          className="sub-title-2"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.3 }}
        >
          Benefits of Performance, Security & Optimization with 7xcoder.com
        </motion.h2>

        <motion.div
          className="benefites-containr-2"
          variants={containerVariant}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.2 }}
        >

          <div className="column-2 custom-border-2 right-pad-30">
            <Benefit img={frame1} title="Performance Strategy & Engineering"
              text="We don’t just improve speed  we architect high efficiency systems aligned with business goals, ensuring optimal load times, responsiveness, and operational performance." />
            <div className="benefit-card-border"></div>

            <Benefit img={frame2} title="Security First Framework"
              text="We implement proactive security protocols, encrypted environments, and vulnerability protection to safeguard data, transactions, and digital assets." />
            <div className="benefit-card-bordero"></div>
          </div>

          <div className="column-2 custom-border-2 right-pad-30">
            <Benefit img={frame6} title="Scalable & Optimized Infrastructure"
              text="Our solutions are built to handle traffic growth and evolving demands, ensuring seamless scalability without performance degradation or system instability." />
            <div className="benefit-card-border"></div>

            <Benefit img={frame5} title="Continuous Monitoring & Optimization"
              text="Through real-time performance tracking, audits, and proactive enhancements, we ensure long-term stability, efficiency, and system reliability." />
            <div className="benefit-card-border"></div>
          </div>

          <div className="column-2">
            <Benefit img={frame3} title="High-Speed System Architecture"
              text="We optimize code, databases, and server environments to deliver lightning fast performance, reduced latency, and smooth digital experiences under real world usage." />
            <div className="benefit-card-border"></div>

            <Benefit img={frame4} title="Resilience & Operational Stability"
              text="Beyond launch, we provide ongoing Our structured governance ensures uptime consistency, infrastructure durability, and secure scalability for sustainable digital growth." />
            <div className="benefit-card-border"></div>
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
            Web Performance, Security & Optimization Services at 7xcoder.com go beyond technical improvements   we build resilient, high speed, and secure digital
            ecosystems that sustain long term business growth. Our structured, performance focused approach ensures every platform operates at peak efficiency, remains protected against vulnerabilities, and continuously evolves to meet scaling demands across modern digital environments.
            <br /><br />
            <span className="second-text">Key Highlights</span>
          </p>

          <motion.ul variants={containerVariant}>
            <motion.li className="second-text" variants={fadeUp}>
              Performance Engineering Excellence advanced system tuning and infrastructure optimization designed to maximize speed, responsiveness, and operational efficiency.
            </motion.li>

            <motion.li className="second-text" variants={fadeUp}>
              Proactive Security Frameworks Robust security layers, data protection mechanisms, vulnerability mitigation strategies safeguard digital assets & ensure platform integrity.
            </motion.li>

            <motion.li className="second-text" variants={fadeUp}>
              Continuous Optimization & Monitoring ongoing performance audits, real-time monitoring, and technical enhancements to maintain long term stability and reliability.
            </motion.li>

            <motion.li className="second-text" variants={fadeUp}>
              Scalable Infrastructure & System Stability architectures built to handle growth, traffic surges, & evolving business requirements without compromising performance.
            </motion.li>

            <motion.li className="second-text" variants={fadeUp}>
              Operational Reliability & Digital Resilience Structured processes & technical governance that ensure consistent uptime, system durability, & sustainable digital performance.
            </motion.li>
          </motion.ul>
        </motion.div>

      </div>
    </section>
  );
};

// 🔥 SAME Benefit animation pattern
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
