import React from "react";
import { motion } from "framer-motion";
import "../../page3.css";

import image3 from "../../../../assets/ScalableBrandArchitecture/images/2.png";

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
            Brand Architecture Experts in Nashik Designing Structured Frameworks
            for Long-Term Growth
          </p>
          At 7xcoder.com, a trusted Scalable Brand Architecture company in
          Nashik, we specialize in building structured, insight-driven brand
          frameworks that support sustainable business expansion.
          <br />
          Our expertise goes beyond visual identity we design clear brand
          hierarchies and architecture systems that strengthen positioning,
          enhance clarity, and maintain consistency across digital and offline
          channels.
          <br />
          As a performance-focused brand architecture partner in Nashik, we
          believe scalable brands are built on strategic structure, audience
          alignment, and disciplined system design. Our approach ensures
          clarity, credibility, and long-term scalability helping businesses
          expand confidently while preserving strong brand equity and market
          presence.
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
