import frame1 from '../../../assets/Web-and-app-development-services/Icon1.png';
import frame2 from '../../../assets/Web-and-app-development-services/Icon2.png';
import frame3 from '../../../assets/Web-and-app-development-services/Icon3.png';
import frame4 from '../../../assets/Web-and-app-development-services/Icon4.png';
import frame5 from '../../../assets/Web-and-app-development-services/Icon5.png';
import frame6 from '../../../assets/Web-and-app-development-services/Icon6.png';
import "../page2.css";

import { motion } from "framer-motion";

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

const Service6_2 = () => {
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
          Benefits of Web & App Development Services with 7xcoder.com
        </motion.h2>

        <motion.div
          className="benefites-containr-2"
          variants={containerVariant}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.2 }}
        >

          <div className="column-2 border-right">
            <Benefit img={frame1} title=" Business Driven Development"
              text="We don’t just build websites and applications we create digital products aligned with your business objectives, ensuring every feature supports growth, efficiency, and ROI." />
            <div className="benefit-card-border"></div>

            <Benefit img={frame2} title="User Centric UI/UX Engineering"
              text="By integrating advanced UI/UX principles, we ensure intuitive navigation, higher user engagement, and improved conversion rates across web and mobile platforms." />
            <div className="benefit-card-border"></div>
          </div>

          <div className="column-2 border-right">
            <Benefit img={frame6} title="Fully Custom & Scalable Solutions"
              text="Projects are built from the ground up with modular e-commerce architectures that scale, allowing new features, products, users, integrations without affecting performance." />
            <div className="benefit-card-border"></div>

            <Benefit img={frame5} title="Secure & Robust Development"
              text="We follow industry-standard security protocols, ensuring data protection, secure transactions, and long-term system reliability." />
            <div className="benefit-card-border"></div>
          </div>

          <div className="column-2">
            <Benefit img={frame3} title="High Performance Architecture"
              text="Our solutions are optimized for speed, stability, and performance, delivering fast load times and smooth functionality even under high user traffic." />
            <div className="benefit-card-border"></div>

            <Benefit img={frame4} title=" Post Launch Support & Continuous Improvement"
              text="Beyond launch, we provide ongoing maintenance, performance monitoring, updates, and feature enhancements to keep your digital product competitive." />
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
            Web & App Development services at 7xcoder.com go beyond building functional digital products we create scalable, secure, and high performance platforms that drive long term business growth. Our strategic, performance driven development approach ensures every website and application aligns with business objectives, enhances user experience, and delivers measurable impact across digital ecosystems.
            <br /><br />
            <span className="second-text">Key Highlights</span>
          </p>

          <motion.ul variants={containerVariant}>
            {[
              "Strategic Digital Architecture Robust, future ready web and app architectures designed around business goals, user behavior, and long term scalability.",
              "Performance Driven Development Execution focused on speed, stability, and efficiency, ensuring optimized performance, reliability, and measurable outcomes.",
              "Consistent Systems & Code Standards Standardized frameworks and clean code practices ensure consistency, easy maintenance, and professional execution.",
              "High Impact User Experience & Functionality Intuitive, user friendly digital experiences that enhance engagement, usability, and conversions.",
              "Security, Stability & Technical Credibility Secure coding, strong data protection, and reliable system performance ensure long term trust and stability."
            ].map((item, index) => (
              <motion.li
                key={index}
                className="second-text"
                variants={fadeUp}
              >
                {item}
              </motion.li>
            ))}
          </motion.ul>

        </motion.div>

      </div>
    </section>
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

export default Service6_2;
