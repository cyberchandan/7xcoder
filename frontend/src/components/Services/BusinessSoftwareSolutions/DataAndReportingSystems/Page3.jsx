import React from "react";
import { motion } from "framer-motion";
import "../../page3.css";

import image3 from "../../../../assets/DataAndReportingSystems/images/2.png";

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
            A Data-Driven Reporting Solutions Company in Nashik Delivering
            Clarity, Performance & Strategic Insight
          </p>
          At 7xcoder.com, a trusted Data & Reporting Systems company in
          Nashik, we specialize in building scalable, secure, and
          high-performance data platforms that empower strategic decision-making
          and business growth.
          <br />
          Our focus extends beyond basic reporting we design purpose-driven data
          systems that enhance visibility, streamline analytics, and deliver
          long-term accuracy and reliability across business environments.
          <br />
          As a performance-driven data solutions provider in Nashik, we believe
          impactful reporting systems are built on intelligent data
          architecture, structured governance, and disciplined execution. This
          approach ensures accuracy, scalability, and technical credibility
          enabling organizations to optimize insights, improve performance
          monitoring, and achieve sustainable, data-driven growth.
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
