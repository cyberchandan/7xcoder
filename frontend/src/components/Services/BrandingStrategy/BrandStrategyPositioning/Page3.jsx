import React from 'react'
import { motion } from "framer-motion";
import '../../page3.css'

import image3 from "../../../../assets/BrandStrategyPositioning/images/2.png";

const Page3 = () => {
  return (

    <section className="business-software-solution3">

      <motion.p
        className="para-bss3"
        initial={{ opacity: 0, x: -120 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: false, amount: 0.3 }}
      >

        <p>
          Brand Strategy & Positioning Company in Nashik
          Engineering Market Leadership Through Insight & Structure
        </p>

        
         At 7xcoder.com, a trusted Brand Strategy & Positioning company in Nashik, we specialize in building scalable, insight-driven positioning systems that drive sustainable business growth. Our expertise extends beyond visual identity
        

        <br />
         we design strategic brand frameworks that define market perception, strengthen competitive positioning, and ensure long-term consistency across digital and offline channels.
        As a performance-focused brand strategy partner in Nashik, we believe powerful brands are built on clear positioning, audience intelligence, and disciplined execution. This structured approach enables clarity, credibility, and scalability  helping businesses sharpen their market presence and convert brand strategy into measurable commercial impact.
        

      </motion.p>

      <motion.img
        src={image3}
        alt="Cloud Ecommerce"
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
