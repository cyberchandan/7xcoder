import React from 'react'
import "../page3.css";

// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";

import image3 from "../../../assets/ecommerce-solutions/images/2.png";

function Page3() {
  return (
    <>
      <section className="business-software-solution3">

        <motion.p
          className="para-bss3"
          initial={{ opacity:0, x:-120 }}
          whileInView={{ opacity:1, x:0 }}
          transition={{ duration:0.8 }}
          viewport={{ once:false, amount:0.3 }}
        >
          <p>
            A Strategic E-commerce Solutions Company in Nashik Focused on Performance, Scalability & Commercial Impac
          </p>
          At 7xcoder.com, a trusted E-commerce Solutions company in Nashik, we specialize in building scalable, secure, and high performance e-commerce platforms that support sustainable business growth. Our focus goes beyond launching online stores we develop purpose driven commerce solutions that streamline operations, enhance customer experience, and deliver long term reliability across digital sales channels.
          As a performance driven e-commerce development company in Nashik, we believe effective e-commerce platforms are built on clean architecture, customer centric design, and strategic execution. This approach ensures speed, stability, and scalability, helping businesses optimize digital commerce operations and achieve consistent revenue growth.
        </motion.p>

        <motion.img
          src={image3}
          alt=""
          className="image-bss3"
          initial={{ opacity:0, scale:0.6 }}
          whileInView={{ opacity:1, scale:1 }}
          transition={{ duration:0.8 }}
          viewport={{ once:false, amount:0.3 }}
        />

      </section>
    </>
  )
}

export default Page3
