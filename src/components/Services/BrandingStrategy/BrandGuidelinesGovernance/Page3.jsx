import React from 'react'
import { motion } from "framer-motion";
import '../../page3.css'

import image3 from "../../../../assets/BrandGuidelinesGovernance/images/2.png";

const Page3 = () => {
  return (

    <section className="business-software-solution3">

      <motion.div
        className="para-bss3"
        initial={{ opacity: 0, x: -120 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: false, amount: 0.3 }}
      >

        <h2>
          Brand Governance Experts in Nashik
          Building Structured Standards for Scalable Brand Control
        </h2>

        <p>
          At 7xcoder.com, a trusted Brand Guidelines & Governance company in Nashik, we specialize in building structured, scalable brand control systems that protect long-term business credibility. Our expertise goes beyond visual identity we develop comprehensive guideline frameworks that ensure consistent brand application across digital, marketing, and internal environments.
        </p>

        <p>
          As a performance-focused brand governance partner in Nashik, we believe strong brands are sustained through clarity, compliance, and disciplined execution. Our structured approach ensures consistency, credibility, and operational alignment helping businesses safeguard brand equity and maintain a unified market presence.
        </p>

      </motion.div>

      <motion.img
        src={image3}
        alt="Brand Guidelines Governance"
        className="image-bss3"
        initial={{ opacity: 0, scale: 0.6 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: false, amount: 0.3 }}
      />

    </section>
  )
}

export default Page3
