import React from 'react'
import { motion } from "framer-motion";
import '../../page3.css'


import image3 from "../../../../assets/ProcessAutomationSolution/image2.png";

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
            A Performance Driven Process Automation Partner in Nashik Streamlining Operations. Accelerating Growth.
          </p>
          At 7xcoder.com, a trusted Process Automation Solutions company in Nashik, we specialize in designing intelligent, scalable, and secure automation systems that drive operational efficiency and sustainable business growth.
          Our focus goes beyond basic implementation we build purpose-driven automation frameworks that eliminate manual bottlenecks, streamline complex workflows, and ensure consistent performance across business environments.
          As a performance-driven automation solutions provider in Nashik, we believe impactful automation is built on intelligent architecture, process-centric design, and disciplined execution. This structured approach ensures accuracy, scalability, and operational reliability  empowering organizations to optimize productivity and achieve measurable, long-term growth.
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
  )
}

export default Page3
