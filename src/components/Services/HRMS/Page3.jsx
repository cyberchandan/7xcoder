import React from "react";
import "../page3.css";
import { motion } from "framer-motion";

import image3 from "../../../assets/HRMS/images/2.png";

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
          <p>HRMS Solutions in Nashik Ensuring Efficiency, Clarity & Workforce
            Performance</p>

          At 7xcoder.com, a trusted HRMS solutions provider in Nashik, we
          specialize in building and optimizing HR systems that ensure
          efficiency, consistency, and long-term organizational growth.
          <br />
          Our expertise goes beyond basic HR management we implement structured
          frameworks that streamline processes, enhance workforce performance,
          and maintain clarity across all operations.
          <br />
          As a performance-focused HRMS partner, we believe effective HR
          requires continuous monitoring, disciplined optimization, and
          strategic alignment. Our approach ensures adaptability, accuracy, and
          scalable performance helping businesses improve employee productivity,
          strengthen communication, and drive sustainable growth.

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
