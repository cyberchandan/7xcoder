import React from "react";
import { motion } from "framer-motion";
import "../../page3.css";

import image3 from "../../../../assets/Enterprise&InternalSystems/image2.png";

const Page3 = () => {
  return (
    <>
      <section className="business-software-solution3">
        <p className="para-bss3">
          <p>
            A Strategic Enterprise & Internal Systems Company in Nashik Focused
            on Efficiency, Control & Scalable Business Impact
          </p>
          At 7xcoder.com, a trusted Enterprise & Internal Systems company
          in Nashik, we specialize in architecting scalable, secure, and
          high-performance internal platforms that power sustainable
          organizational growth.
          <br />
          Our focus extends beyond basic system implementation we design
          structured, purpose-driven enterprise infrastructures that streamline
          workflows, enhance operational control, and ensure long-term system
          reliability across departments and business units. As a
          performance-driven enterprise solutions provider in Nashik, we believe
          impactful internal systems are built on intelligent architecture,
          process-oriented design, and disciplined execution. This strategic
          approach ensures stability, scalability, and technical excellence
          enabling organizations to optimize operations, strengthen governance,
          and achieve measurable, sustainable growth.
        </p>
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
