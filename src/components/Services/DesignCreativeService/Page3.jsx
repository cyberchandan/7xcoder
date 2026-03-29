
import React from 'react'
import "../page3.css";

// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";

import image3 from "../../../assets/design-creative/images/2.png";


const Page3 = () => {
  return (
    <>
      <section className="business-software-solution3">

        <motion.div
          className="para-bss3"
          initial={{ opacity: 0, x: -120 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: false, amount: 0.3 }}
        >

          <p>
            A Strategic Design & Creative Services Agency in Nashik Focused on
            Brand Authority and Impact
          </p>

          At 7xcoder.com, a trusted Design & Creative Services agency in
          Nashik, we specialize in building strong visual identities and
          creative systems that elevate brand presence and recognition.
          <br />

          Our focus goes beyond aesthetics we create high quality, purpose
          driven designs that communicate clearly, capture attention, and leave
          a lasting impression across digital and offline touchpoints.
          <br />

          As a performance driven creative agency in Nashik, we believe
          effective design is about consistency, clarity, and strategic
          storytelling. This approach strengthens brand credibility, builds
          trust, and enhances overall brand experience helping businesses
          connect with their audience and create long term brand value.

        </motion.div>

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

