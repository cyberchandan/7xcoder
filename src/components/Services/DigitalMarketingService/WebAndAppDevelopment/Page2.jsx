import { motion } from "framer-motion";
import frame1 from "../../../../assets/WebAndApp/images/Frame 120.png";
import frame2 from "../../../../assets/WebAndApp/images/Frame 121.png";
import frame3 from "../../../../assets/WebAndApp/images/Frame 122.png";
import frame4 from "../../../../assets/WebAndApp/images/Frame 123.png";
import frame5 from "../../../../assets/WebAndApp/images/Frame 125.png";
import frame6 from "../../../../assets/WebAndApp/images/Frame 124.png";
import "../../page2.css";

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
          Benefits of Web & App Development with 7xcoder.com
        </motion.div>

        <motion.div
          className="benefites-containr-2"
          variants={containerVariant}
          initial="hidden"
          whileInView="visible"
          viewport={{ once:false, amount:0.2 }}
        >

          {/* Column 1 */}
          <div className="column-2 custom-border-2 right-pad-30">

            <Benefit img={frame1} title="Strategic Digital Architecture"
              text="We align websites and applications with clear business objectives, user behavior insights, and scalable system design ensuring every digital product supports performance, growth, and long term reliability." />

            <Benefit img={frame2} title="Conversion Focused Digital Solutions"
              text="We build websites and applications with conversion pathways in mind, turning user interactions into meaningful actions, qualified leads, and measurable value." />

          </div>

          {/* Column 2 */}
          <div className="column-2 custom-border-2 left-pad-50 right-pad-30">

            <Benefit img={frame6} title="Performance Driven User Experience"
              text="Our development approach prioritizes speed, usability, and responsiveness, enabling seamless experiences that engage users, improve retention, and support measurable business outcomes across devices." />

            <Benefit img={frame5} title="Data Backed Optimization & Intelligence"
              text="Every platform is continuously optimized using performance metrics, user insights, and technical analytics ensuring smarter enhancements, faster load times, and sustained digital efficiency." />

          </div>

          {/* Column 3 */}
          <div className="column-2 left-pad-50 right-pad-30">

            <Benefit img={frame3} title="Consistent Brand & Experience Control"
              text="From interface design to functional workflows, we maintain visual and experiential consistency across platforms protecting brand identity while delivering intuitive, trustworthy digital experiences." />

            <Benefit img={frame4} title="Scalable Growth with System Reliability"
              text="Through robust architecture, secure development practices, and performance optimization, we ensure digital platforms scale smoothly while maintaining stability, efficiency, and long term value." />

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
            Web & App Development with 7xcoder.com is built for
            organizations that demand reliability, scalability, and measurable
            digital performance. We move beyond basic design and development to
            engineer robust, future ready digital platforms that strengthen
            brand presence, streamline user journeys, and support long term
            business growth. Our approach integrates strategic planning, user
            centric design, and performance driven engineering to ensure every
            feature, interface, and system interaction contributes to sustained
            business value. Through scalable architecture, optimized user
            experiences, and continuous performance refinement, we transform
            digital platforms into powerful tools that drive engagement,
            efficiency, and measurable outcomes.
            <br />
            <br />
            <span className="second-text">Key Highlights</span>
          </p>

          <motion.ul variants={containerVariant}>

            <motion.li className="second-text" variants={fadeUp}>
              Strategic Digital Architecture Design scalable, secure platforms aligned with business goals and long term growth.
            </motion.li>

            <motion.li className="second-text" variants={fadeUp}>
              Performance Led Development Speed, usability, and reliability optimized for measurable digital ROI.
            </motion.li>

            <motion.li className="second-text" variants={fadeUp}>
              Consistent Brand & Experience Control Unified design, functionality, and experience across web and app touchpoints.
            </motion.li>

            <motion.li className="second-text" variants={fadeUp}>
              Conversion Focused User Journeys Transform user interactions into meaningful actions and business outcomes.
            </motion.li>

            <motion.li className="second-text" variants={fadeUp}>
              Scalable & Future Ready Platforms Build systems designed to scale efficiently while maintaining performance and stability.
            </motion.li>

          </motion.ul>

        </motion.div>

      </section>
    </div>
  );
};

// 🔥 SAME reusable component
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
