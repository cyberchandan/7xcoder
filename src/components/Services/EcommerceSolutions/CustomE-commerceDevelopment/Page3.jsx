import React from 'react'
import "../../page3.css";
import { motion } from "framer-motion";

import image3 from "../../../../assets/CustomEcommerceDevelopment/image2.png";


function Page3() {
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
            A Trusted Custom E-commerce Solutions Provider in Nashik Built for Speed, Scale & Commercial Success.
          </p>
          At 7xcoder.com, a trusted Custom E-commerce Development company in Nashik,

          we specialize in architecting scalable, secure, and high-performance digital commerce ecosystems tailored to your brand and growth strategy.
          Our focus goes beyond launching online stores we engineer purpose-driven e-commerce platforms that streamline backend operations, enhance customer journeys, and deliver long-term reliability across every digital sales channel.
          As a performance-driven custom e-commerce partner in Nashik, we believe successful commerce platforms are built on intelligent architecture, conversion-focused design, and disciplined execution. This approach ensures speed, stability, and seamless scalability empowering businesses to optimize operations and achieve sustained revenue growth.
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
