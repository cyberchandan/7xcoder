import React from 'react'
import { motion } from "framer-motion";
import '../../page3.css'

import image3 from "../../../../assets/UIUXDrivenDevelopment/images/2.png";

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
          Human Centered UI-UX Design & Development in Nashik
        </h2>

        <p>
          At 7xcoder.com, we approach UI-UX driven development as a strategic design 
          discipline grounded in deep user insight and clear business intent.
        </p>

        <p>
          Through continuous validation, usability refinement, and performance-aware 
          implementation, we ensure every design decision enhances engagement and reduces friction.
        </p>

      </motion.div>

      <motion.img
        src={image3}
        alt="UI UX Design"
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
