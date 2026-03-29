import React from 'react'

import '../page3.css'

// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";

import image3 from "../../../assets/Digital_Marketing_Services/images/2.png";


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
            A Results Driven Organic Social Media Marketing Agency in Nashik
          </p>
          At 7xcoder.com, a trusted social media marketing agency in
          Nashik, we specialize in driving organic growth and brand visibility
          through strategically crafted social media ecosystems. Our focus goes
          beyond paid promotion we create high quality, engaging content that
          naturally captures attention, encourages sharing, and amplifies reach
          through authentic digital word of mouth. As a performance driven
          social media marketing agency in Nashik, we believe organic SMM is
          about building meaningful connections, strong communities, and long
          term brand trust. This earned media approach strengthens credibility,
          fosters loyalty, and enhances online presence without dependence on ad
          spend helping brands engage, influence, and convert audiences
          organically with lasting impact.
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
