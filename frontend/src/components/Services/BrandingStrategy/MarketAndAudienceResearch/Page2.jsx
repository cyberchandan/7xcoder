import React from "react";
import { motion } from "framer-motion";
import "../../page2.css";

import frame1 from "../../../../assets/MarketAndAudienceResearch/images/image21.png";
import frame2 from "../../../../assets/MarketAndAudienceResearch/images/image23.png";
import frame3 from "../../../../assets/MarketAndAudienceResearch/images/image25.png";
import frame4 from "../../../../assets/MarketAndAudienceResearch/images/image26.png";
import frame5 from "../../../../assets/MarketAndAudienceResearch/images/image24.png";
import frame6 from "../../../../assets/MarketAndAudienceResearch/images/image22.png";

// Animation Variants (Reusable)
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

// Benefit component
const Benefit = ({ img, title, text }) => (
  <motion.div variants={fadeUp}>
    <motion.img
      src={img}
      alt={title}
      initial={{ scale: 0.5, opacity: 0 }}
      whileInView={{ scale: 1, opacity: 1 }}
      transition={{ duration: 0.6 }}
    />
    <h3 className="benefit-title">{title}</h3>
    <p className="benefit-text">{text}</p>
  </motion.div>
);

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
          Benefits of Market & Audience Research with 7xcoder.com
        </motion.div>

        <motion.div
          className="benefites-containr-2"
          variants={containerVariant}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.2 }}
        >
          <div className="column-2 custom-border-2 right-pad-30">
            <Benefit
              img={frame1}
              title="Data-Driven Strategic Direction"
              text="Our research is aligned with your business goals, uncovering market trends, demand gaps, and competitive positioning to guide confident strategic decisions."
            />

            <Benefit
              img={frame2}
              title="Structured Research Frameworks"
              text="We implement systematic research processes, data validation methods, and analytical standards that ensure accuracy, reliability, and strategic clarity."
            />
          </div>

          <div className="column-2 custom-border-2 left-pad-50 right-pad-30">
            <Benefit
              img={frame6}
              title="Future-Ready Market Intelligence"
              text="We build scalable research frameworks that adapt to evolving markets, customer behavior shifts, and competitive changes keeping your strategy relevant and informed."
            />

            <Benefit
              img={frame5}
              title="Audience Insight Across Channels"
              text="We analyze audience behavior across digital, social, and market platforms delivering unified insights that inform communication and positioning strategies."
            />
          </div>

          <div className="column-2 left-pad-50 right-pad-30">
            <Benefit
              img={frame3}
              title="Stronger Competitive Advantage"
              text="Insight-led analysis strengthens positioning by identifying opportunities, risks, and differentiation gaps within your market landscape."
            />

            <Benefit
              img={frame4}
              title="Strategic Alignment & Smarter Decisions"
              text="By aligning research with business objectives, we reduce uncertainty, improve planning accuracy, and empower teams to act with clarity and confidence."
            />
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
            At 7xcoder.com, market and audience research goes beyond
            surface-level data we build strategic insight foundations that drive
            smarter decisions, competitive advantage, and long-term business
            growth. Our structured, insight-driven research approach ensures
            every strategy is aligned with market realities, audience behavior,
            and business objectives delivering measurable impact across
            competitive markets.
            <br />
            <br />
            <span className="second-text">Key Highlights</span>
          </p>

          <motion.ul style={{ width: "105%" }} variants={containerVariant}>
            <motion.li className="second-text" variants={fadeUp}>
              Strategic Market Intelligence Future-ready research frameworks
              aligned with business goals, industry trends, and growth
              opportunities.
            </motion.li>
            <motion.li className="second-text" variants={fadeUp}>
              Performance-Driven Insight Analysis Focused research that uncovers
              demand gaps, positioning opportunities, and competitive
              advantages.
            </motion.li>
            <motion.li className="second-text" variants={fadeUp}>
              Structured Research Systems & Standards Clear methodologies and
              validation processes that ensure data accuracy, reliability, and
              actionable clarity.
            </motion.li>
            <motion.li className="second-text" variants={fadeUp}>
              High-Impact Audience Understanding Deep audience analysis that
              improves targeting, communication relevance, and engagement
              effectiveness.
            </motion.li>
            <motion.li className="second-text" variants={fadeUp}>
              Long-Term Strategic Advantage Continuous research refinement that
              supports adaptability, sustained competitiveness, and informed
              decision-making.
            </motion.li>
          </motion.ul>
        </motion.div>
      </section>
    </div>
  );
};

export default Page2;
