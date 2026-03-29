import React from "react";
import { motion } from "framer-motion";
import "../../page3.css";

import image3 from "../../../../assets/SystemIntegrationServices/images/2.png";

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
            A Performance-Driven Cloud Solutions Partner in Nashik Powering
            Scalability. Enabling Innovation.
          </p>
          At 7xcoder.com, a trusted Cloud-Based Software Solutions company
          in Nashik, we specialize in building scalable, secure, and
          high-performance cloud-native systems that drive business growth.
          <br />
          Our focus goes beyond deployment we develop purpose-driven cloud
          solutions that enhance agility, streamline operations, and ensure
          long-term reliability across dynamic digital environments.
          <br />
          As a performance-driven cloud solutions provider in Nashik, we believe
          impactful cloud systems are built on intelligent architecture,
          resilient infrastructure, and strategic execution. This approach
          ensures stability, scalability, and technical excellence empowering
          organizations to innovate faster, operate efficiently, and achieve
          sustainable digital growth.
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
