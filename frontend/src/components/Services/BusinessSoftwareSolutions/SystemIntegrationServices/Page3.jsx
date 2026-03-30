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
            A Performance-Driven System Integration Partner in Nashik Unifying
            Platforms. Enabling Growth.
          </p>
          At 7xcoder.com, a trusted System Integration Services company in
          Nashik, we specialize in designing scalable, secure, and
          high-performance integration ecosystems that unify digital platforms
          and accelerate business growth.
          <br />
          Our focus goes beyond simple connectivity we implement purpose-driven
          integration frameworks that synchronize systems, streamline
          cross-platform workflows, and ensure long-term operational reliability
          across complex business environments.
          <br />
          As a performance-driven integration solutions provider in Nashik, we
          believe effective system integration is built on intelligent
          architecture, structured APIs, and disciplined execution. This
          approach ensures stability, scalability, and technical precision
          enabling organizations to eliminate silos, enhance efficiency, and
          achieve sustainable, connected growth.
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
