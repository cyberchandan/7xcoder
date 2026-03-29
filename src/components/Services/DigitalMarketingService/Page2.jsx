import React from "react";
import "../page2.css";
import { motion } from "framer-motion";

import frame1 from "../../../assets/Digital_Marketing_Services/images/image1.png";
import frame2 from "../../../assets/Digital_Marketing_Services/images/image4.png";
import frame3 from "../../../assets/Digital_Marketing_Services/images/image3.png";
import frame4 from "../../../assets/Digital_Marketing_Services/images/image6.png";
import frame5 from "../../../assets/Digital_Marketing_Services/images/image5.png";
import frame6 from "../../../assets/Digital_Marketing_Services/images/image2.png";

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
          Benefits of Social Media Marketing with 7xcoder.com
        </motion.div>

        <motion.div
          className="benefites-containr-2"
          variants={containerVariant}
          initial="hidden"
          whileInView="visible"
          viewport={{ once:false, amount:0.2 }}
        >

          <div className="column-2 custom-border-2 right-pad-30">

            <Benefit img={frame1} title={<>
              Strategic Brand<br /> Positioning
            </>} text="We position your brand with clear intent and strategic direction, ensuring that every post, campaign, and interaction contributes to stronger brand perception, enhanced credibility, and long term market authority." />

            <Benefit img={frame2} title="Performance Driven Visibility"
              text="Our approach prioritizes quality reach over vanity metrics, ensuring your brand consistently reaches the right audience with higher intent, relevance, and potential to convert into real business outcomes." />

          </div>

          <div className="column-2 custom-border-2 left-pad-50 right-pad-30">

            <Benefit img={frame6} title={<>
              Consistent Brand <br /> Experience
            </>} text="From visual identity to brand messaging, we maintain complete consistency across all social media platforms helping build recognition, trust, and a cohesive brand experience that audiences remember." />

            <Benefit img={frame5} title="Qualified Lead & Demand Generation"
              text="We design structured social media journeys that transform engagement into high quality leads, supporting sustainable demand generation, improved conversion rates, and measurable revenue growth." />

          </div>

          <div className="column-2 left-pad-50 right-pad-30">

            <Benefit img={frame3} title="Data Backed Decision Making"
              text="Every strategy and campaign is guided by in depth analytics, audience insights, and performance data allowing continuous optimization, smarter decisions, and predictable marketing results." />

            <Benefit img={frame4} title="Reputation & Community Growth"
              text="We actively manage conversations, interactions, and feedback to build trust driven communities, strengthen brand reputation, and foster long term customer loyalty around your business." />

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
            Social media marketing with 7xcoder.com is built for brands
            that demand strategic clarity, consistent execution, and measurable
            outcomes. We go beyond routine posting to create structured social
            media ecosystems that strengthen brand positioning, elevate
            credibility, and drive sustainable business growth. Our approach
            integrates data intelligence, refined creative direction, and
            disciplined execution to ensure every interaction contributes to
            long term value. We help brands connect with the right audience
            through purposeful storytelling, platform specific strategies, and
            performance focused campaigns transforming visibility into trust,
            engagement, and qualified demand.
            <br />
            <br />
            <span className="second-text">Key Highlights</span>
          </p>

          <motion.ul variants={containerVariant}>

            <motion.li className="second-text" variants={fadeUp}>
              Strategic Brand Authority Position your brand with clarity, credibility, and market relevance
            </motion.li>

            <motion.li className="second-text" variants={fadeUp}>
              Performance Led Growth Data driven execution focused on measurable results, not vanity metrics
            </motion.li>

            <motion.li className="second-text" variants={fadeUp}>
              Consistent Brand Presence Unified visuals and messaging across all platforms
            </motion.li>

            <motion.li className="second-text" variants={fadeUp}>
              Qualified Engagement & Leads Turn audience attention into real business opportunities
            </motion.li>

            <motion.li className="second-text" variants={fadeUp}>
              Reputation & Community Building Build trust driven digital communities that last
            </motion.li>

          </motion.ul>

        </motion.div>

      </section>
    </div>
  );
};

// 🔥 SAME reusable card
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
