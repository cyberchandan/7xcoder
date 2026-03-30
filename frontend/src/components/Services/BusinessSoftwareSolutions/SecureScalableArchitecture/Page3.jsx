import React from 'react'
import { motion } from "framer-motion";
import '../../page3.css'

import image3 from "../../../../assets/SecureScalableArcht/images/2.png";

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
          A Security-First Architecture Partner in Nashik
          Engineered for Scalability, Performance & Resilience
        </h2>

        <p>
          At 7xcoder.com, a trusted Secure & Scalable Architecture company in Nashik, we specialize in designing resilient, high-performance infrastructure frameworks that enable sustainable business growth.
        </p>

        <p>
        Our focus goes beyond implementation  we build security-first, scalability-driven architectures that protect digital assets, strengthen operational stability, and support long-term system evolution across complex business environments.
        As a performance-driven architecture solutions provider in Nashik, we believe impactful infrastructure is built on intelligent system design, structured governance, and disciplined engineering standards. This approach ensures stability, scalability, and technical excellence empowering organizations to operate securely, scale confidently, and achieve sustainable digital growth.
        </p>

      </motion.div>

      <motion.img
        src={image3}
        alt="Secure & Scalable Architecture"
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
