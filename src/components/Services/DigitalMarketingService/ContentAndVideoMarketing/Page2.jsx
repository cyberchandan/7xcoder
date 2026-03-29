import React from "react";
import { motion } from "framer-motion";
import "../../page2.css";

import frame1 from "../../../../assets/ContentAndVideoMarketing/images/Frame 120.png";
import frame2 from "../../../../assets/ContentAndVideoMarketing/images/Frame 121.png";
import frame3 from "../../../../assets/ContentAndVideoMarketing/images/Frame 122.png";
import frame4 from "../../../../assets/ContentAndVideoMarketing/images/Frame 123.png";
import frame5 from "../../../../assets/ContentAndVideoMarketing/images/Frame 125.png";
import frame6 from "../../../../assets/ContentAndVideoMarketing/images/Frame 124.png";

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
          Benefits of Content & Video Marketing with 7xcoder.com
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

            <Benefit img={frame1} title={<>
              Strategic Brand <br /> Storytelling
            </>} text="We align content and video strategies with clear brand objectives, audience intent, and platform behavior ensuring every asset strengthens brand perception, relevance, and emotional connection." />

            <Benefit img={frame2} title="Qualified Audience & Demand Generation"
              text="We design content and video journeys that turn attention into qualified interest, nurturing prospects through storytelling, education, and value driven communication." />

          </div>

          {/* Column 2 */}
          <div className="column-2 custom-border-2 left-pad-50 right-pad-30">

            <Benefit img={frame6} title="Performance Driven Engagement Capture"
              text="Our content and video strategies focus on meaningful engagement rather than vanity views, helping your brand consistently reach, influence, and retain the right audience with higher impact and conversion potential." />

            <Benefit img={frame5} title="Data Backed Content Optimization"
              text="Every campaign is guided by performance analytics, engagement signals, and audience insights enabling continuous refinement, smarter content decisions, and sustained impact." />

          </div>

          {/* Column 3 */}
          <div className="column-2 left-pad-50 right-pad-30">

            <Benefit img={frame3} title="Consistent Brand Narrative & Visual Identity"
              text="From messaging to visual language, we maintain consistency across all content formats and platforms protecting brand equity while delivering a seamless and memorable audience experience." />

            <Benefit img={frame4} title="Scalable Growth with Long Term Value"
              text="Through disciplined production, strategic distribution, and ongoing optimization, we ensure scalable content and video growth while maintaining efficiency, relevance, and long term brand value." />

          </div>

        </motion.div>

        {/* Bottom Section */}
        <motion.div
          className="second-container-2"
          variants={slideLeft}
          initial="hidden"
          whileInView="visible"
          viewport={{ once:false, amount:0.3 }}
        >
          <p className="second-text">
            Content & Video Marketing with 7xcoder.com is built for brands that demand clarity, consistency, and measurable impact. We move beyond basic content production to engineer structured, audience first content and video ecosystems that strengthen brand positioning, deepen engagement, and drive predictable growth. Our approach integrates audience intelligence, creative strategy, and disciplined performance optimization to ensure every piece of content and every video contributes to long term brand value. Through intent led storytelling, platform specific content strategies, and continuous refinement, we transform visibility into meaningful engagement, qualified demand, and sustainable business impact.
            <br />
            <br />
            <span className="second-text">Key Highlights</span>
          </p>

          <motion.ul variants={containerVariant}>

            <motion.li className="second-text" variants={fadeUp}>
              Reach the right audience with precision through purpose driven content & video strategies designed to capture attention and influence intent.
            </motion.li>

            <motion.li className="second-text" variants={fadeUp}>
              Performance Led Engagement Growth ROI focused execution powered by data, analytics, & continuous optimization to measurable content & video performance.
            </motion.li>

            <motion.li className="second-text" variants={fadeUp}>
              Controlled Brand Narrative & Visual Consistency Maintain message clarity, storytelling consistency, and visual integrity across all content and video touchpoints.
            </motion.li>

            <motion.li className="second-text" variants={fadeUp}>
              Qualified Audience Engagement & Demand Generation Convert views interactions into qualified interest, deeper engagement, & measurable business outcomes.
            </motion.li>

            <motion.li className="second-text" variants={fadeUp}>
              Scalable & Sustainable Content Growth Optimize content frameworks, distribution strategies to achieve long term, cost efficient growth with brand impact.
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
