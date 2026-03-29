import frame3  from "../../../../assets/MobileAppDevelopment(iOS & Android)/icon2.png";
import frame1 from "../../../../assets/MobileAppDevelopment(iOS & Android)/icon1.png";
import frame5 from "../../../../assets/MobileAppDevelopment(iOS & Android)/icon3.png";
import frame2 from "../../../../assets/MobileAppDevelopment(iOS & Android)/icon4.png";
import frame4 from "../../../../assets/MobileAppDevelopment(iOS & Android)/icon5.png";
import frame6 from "../../../../assets/MobileAppDevelopment(iOS & Android)/icon6.png";
import { motion } from "framer-motion";
import "../../page2.css";

// 🔥 SAME GLOBAL ANIMATION SYSTEM
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
          Benefits of Mobile App Development with 7xcoder.com
        </motion.div>

        <motion.div
          className="benefites-containr-2"
          variants={containerVariant}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.2 }}
        >

          <div className="column-2 custom-border-2 right-pad-30">
            <Benefit img={frame1} title="Business-Driven Mobile App Development"
              text="We don’t just build mobile applications we create strategic digital products aligned with business objectives, ensuring every feature supports growth, efficiency, and measurable ROI." />

            <Benefit img={frame2} title="User-Centric Mobile UI/UX Engineering"
              text="By applying advanced mobile UI/UX principles, we design intuitive, engaging experiences that improve usability, user retention, and conversion rates across Android and iOS platforms." />
          </div>

          <div className="column-2 custom-border-2 left-pad-50 right-pad-30">
            <Benefit img={frame3} title="Fully Custom & Scalable Mobile Solutions"
              text="Each mobile app is developed from the ground up, enabling seamless scalability as your user base and business expand without performance bottlenecks or rework." />

            <Benefit img={frame4} title="Secure & Robust Mobile App Development"
              text="We implement industry-standard mobile security practices, ensuring data protection, secure authentication, and long-term application reliability." />
          </div>

          <div className="column-2 left-pad-50 right-pad-30">
            <Benefit img={frame5} title="High-Performance Mobile Architecture"
              text="Our mobile applications are optimized for speed, stability, and efficiency, delivering smooth performance, fast response times, and reliability even under high user loads." />

            <Benefit img={frame6} title="Post-Launch Support & Continuous Optimization"
              text="Beyond launch, we provide ongoing app maintenance, performance monitoring, updates, and feature enhancements to keep your mobile product competitive and future-ready." />
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
             At 7xcoder.com, mobile app development is delivered as a
            strategic growth asset. We engineer scalable, secure, and
            performance-driven mobile applications that strengthen engagement,
            support business expansion, and deliver long-term digital value.
            Through disciplined strategy, clean architecture, and precision
            execution, every mobile solution is built to align with business
            goals and generate measurable impact.
            <br />
            <br />
            <span className="second-text">Key Highlights</span>
          </p>

          <motion.ul variants={containerVariant}>
            <motion.li className="second-text" variants={fadeUp}>
              Future-ready mobile app architectures designed around business objectives, user behavior, and long-term scalability across Android and iOS platforms.
            </motion.li>

            <motion.li className="second-text" variants={fadeUp}>
              Execution focused on speed, stability, and efficiency ensuring optimized app performance, reliability, and measurable business outcomes.
            </motion.li>

            <motion.li className="second-text" variants={fadeUp}>
              Standardized mobile frameworks and clean coding practices that ensure consistency, easier maintenance, and professional-grade execution.
            </motion.li>

            <motion.li className="second-text" variants={fadeUp}>
              Intuitive, user-centric mobile experiences engineered to enhance engagement, usability, and conversion performance.
            </motion.li>

            <motion.li className="second-text" variants={fadeUp}>
              Secure mobile development practices, strong data protection, and reliable app performance that ensure long-term trust and operational stability.
            </motion.li>
          </motion.ul>
        </motion.div>

      </section>
    </div>
  )
};

// 🔥 SAME Benefit component pattern
const Benefit = ({ img, title, text }) => (
  <motion.div variants={fadeUp}>
    <motion.img
      src={img}
      alt="Icon"
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
