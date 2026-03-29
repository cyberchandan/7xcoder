import React from "react";
import { motion } from "framer-motion";
import "../../page2.css";

import frame1 from "../../../../assets/ScalableBrandArchitecture/images/image21.png";
import frame2 from "../../../../assets/ScalableBrandArchitecture/images/image23.png";
import frame3 from "../../../../assets/ScalableBrandArchitecture/images/image25.png";
import frame4 from "../../../../assets/ScalableBrandArchitecture/images/image26.png";
import frame5 from "../../../../assets/ScalableBrandArchitecture/images/image24.png";
import frame6 from "../../../../assets/ScalableBrandArchitecture/images/image22.png";

// Animation Variants (Reusable)
const containerVariant = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.2, },
  },
};

const fadeUp = {
  hidden: { opacity: 0, y: 60 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" }, },
};

const fadeDown = {
  hidden: { opacity: 0, y: -60 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" }, },
};

const slideLeft = {
  hidden: { opacity: 0, x: -120 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.9, ease: "easeOut" }, },
};

// Benefit component
const Benefit = ({ img, title, text }) => (
  <motion.div variants={fadeUp}>
    <motion.img src={img} alt={title} initial={{ scale: 0.5, opacity: 0 }} whileInView={{ scale: 1, opacity: 1 }} transition={{ duration: 0.6 }} />
    <h3 className="benefit-title">{title}</h3>
    <p className="benefit-text">{text}</p>
  </motion.div>
);

const Page2 = () => {
  return (
    <div>
      <section className="digital-marketing-services-2-2">
        <motion.div className="benefites-2" variants={fadeDown} initial="hidden" whileInView="visible" viewport={{ once: false, amount: 0.3 }}>BENEFITS</motion.div>

        <motion.div className="sub-title-2" variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: false, amount: 0.3 }}>
          Benefits of Scalable Brand Architecture with 7xcoder.com
        </motion.div>

        <motion.div className="benefites-containr-2" variants={containerVariant} initial="hidden" whileInView="visible" viewport={{ once: false, amount: 0.2 }}>
          <div className="column-2 custom-border-2 right-pad-30">
            <Benefit img={frame1} title="Clear Brand Hierarchy & Structure" text="We design structured brand architectures that define relationships between master brands, sub-brands, products, and services ensuring clarity and strategic alignment." />
            <Benefit img={frame2} title="Structured Governance & Control" text="We implement architectural guidelines and control systems that protect brand equity and maintain consistency as your organization grows." />
          </div>

          <div className="column-2 custom-border-2 left-pad-50 right-pad-30">
            <Benefit img={frame6} title="Scalable & Expansion-Ready Frameworks" text="Our architecture systems are built to support new product launches, market expansion, and portfolio growth without disrupting brand consistency." />
            <Benefit img={frame5} title="Seamless Cross-Brand Integration" text="Your brand ecosystem remains unified across digital platforms, marketing channels, and internal operations ensuring logical alignment and professional presentation." />
          </div>

          <div className="column-2 left-pad-50 right-pad-30">
            <Benefit img={frame3} title="Stronger Positioning Across Portfolios" text="A well-defined architecture strengthens differentiation, reduces brand confusion, and enhances clarity across multi-brand or multi-service ecosystems." />
            <Benefit img={frame4} title="Long-Term Strategic Stability" text="By aligning architecture with business objectives, we enable sustainable growth, reduce structural complexity, and strengthen long-term market authority." />
          </div>
        </motion.div>

        <motion.div className="second-container-2" variants={slideLeft} initial="hidden" whileInView="visible" viewport={{ once: false, amount: 0.3 }}>
          <p className="second-text">
            At 7xcoder.com, brand architecture goes beyond visuals we build structured brand foundations that enable clarity, alignment, and long-term business expansion. Our insight-driven and system-focused approach ensures every brand, sub-brand, product, and service is strategically aligned within a cohesive hierarchy delivering measurable impact across evolving markets.
            <br />
            <br />
            <span className="second-text">Key Highlights</span>
          </p>

          <motion.ul style={{ width: "105%" }} variants={containerVariant}>
            <motion.li className="second-text" variants={fadeUp}>Strategic Brand Hierarchy Design Future-ready architecture frameworks aligned with business goals, audience segments, and growth strategy.</motion.li>
            <motion.li className="second-text" variants={fadeUp}>Performance-Driven Portfolio Structure Clear structural differentiation that strengthens positioning and reduces brand confusion across multi-brand ecosystems.</motion.li>
            <motion.li className="second-text" variants={fadeUp}>Consistent Architecture Systems & Governance Structured guidelines that maintain logical relationships, clarity, and long-term scalability.</motion.li>
            <motion.li className="second-text" variants={fadeUp}>Cohesive Cross-Brand Experience Unified architecture that ensures seamless alignment across digital platforms, marketing channels, and product portfolios.</motion.li>
            <motion.li className="second-text" variants={fadeUp}>Long-Term Structural Stability Strong architectural governance that protects brand equity, supports expansion, and sustains market credibility.</motion.li>
          </motion.ul>
        </motion.div>
      </section>
    </div>
  );
};

export default Page2;
