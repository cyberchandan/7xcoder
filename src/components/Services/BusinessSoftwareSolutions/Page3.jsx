import React from 'react'
import '../page3.css'

// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import image3 from "../../../assets/business-software-solutions/images/2.png";

const Page3 = () => {
  return (
     <>
      <section className="business-software-solution3">
        <motion.p
          className="para-bss3"
          initial={{opacity:0,x:-120}}
          whileInView={{opacity:1,x:0}}
          transition={{duration:0.8}}
          viewport={{once:false,amount:0.3}}
        >
          <p>
            A Strategic Business Software Solutions Company in Nashik Focused on
            Performance, Scalability, & Business Impact
          </p>
          At 7xcoder.com, a trusted Business Software Solutions company in
          Nashik, we specialize in building scalable, secure, and high
          performance software systems that support business growth.<br />Our focus
          goes beyond functionality we develop purpose driven software solutions
          that streamline operations, enhance efficiency, and deliver long term
          reliability across business environments.<br />As a performance driven
          software development company in Nashik, we believe effective business
          software is built on clean architecture, process centric design, and
          strategic execution. This approach ensures stability, scalability, and
          technical credibility, helping organizations optimize operations and
          achieve sustainable growth.
        </motion.p>
        <motion.img
          src={image3}
          alt=""
          className="image-bss3"
          initial={{opacity:0,scale:0.6}}
          whileInView={{opacity:1,scale:1}}
          transition={{duration:0.8}}
          viewport={{once:false,amount:0.3}}
        />
      </section>
    </>
  )
}

export default Page3
