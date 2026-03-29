import React from "react";
import { motion } from "framer-motion";
import "../../page3.css";
import image3 from "../../../../assets/Post-Production/images/2.png";

const Service3_3 = () => {
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
          <p>A Performance Focused Post-Production Agency in Nashik</p>
          At 7xcoder.com, a trusted Post-Production agency, we specialize
          in delivering clarity, consistency, and measurable creative impact
          through strategically engineered post-production systems. Our focus
          goes beyond basic editing we design precision led post-production
          frameworks that enhance storytelling, maintain quality control, and
          support confident creative decisions. As a performance-driven
          post-production partner, we believe impactful content is built on
          structure, refinement, and accountability. Through disciplined editing
          workflows, sound design, color grading, and continuous quality
          optimization, we help brands elevate production value, improve
          audience engagement, and convert raw footage into high performance
          content without relying on shortcuts or surface level edits. This
          results first approach ensures scalable production, stronger visual
          standards, and long-term creative and brand value.
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

export default Service3_3;
