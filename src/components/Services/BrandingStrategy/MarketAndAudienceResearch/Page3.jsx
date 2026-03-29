import React from "react";
import { motion } from "framer-motion";
import "../../page3.css";

import image3 from "../../../../assets/MarketAndAudienceResearch/images/2.png";

const Page3 = () => {
  return (
    <>
      <section className="business-software-solution3">
        <motion.p
          className="para-bss3"
          initial={{ opacity: 0, x: -120 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: false, amount: 0.3 }}
        >
          <p>
            A Strategic Market & Audience Research Company in Nashik Focused on
            Insight, Clarity & Competitive Advantage
          </p>
          At 7xcoder.com, a trusted Market & Audience Research company in
          Nashik, we specialize in building scalable, insight-driven research
          systems that support sustainable business growth.
          <br />
          Our expertise goes beyond basic data collection we develop structured
          research frameworks that uncover market dynamics, audience behavior,
          and competitive opportunities across digital and offline landscapes.
          <br />
          As a performance-focused research partner in Nashik, we believe strong
          strategies are built on clear insights, audience intelligence, and
          disciplined analysis. Our approach ensures clarity, accuracy, and
          scalability helping businesses make informed decisions, refine
          positioning, and achieve consistent market impact. By aligning
          research with business objectives, we enable organizations to reduce
          uncertainty, identify growth opportunities, and strengthen long-term
          competitive advantage.
        </motion.p>
        <motion.img
          src={image3}
          alt=""
          className="image-bss3"
          initial={{ opacity: 0, scale: 0.6 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: false, amount: 0.3 }}
        />
      </section>
    </>
  );
};

export default Page3;
