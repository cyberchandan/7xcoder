
import React from "react";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import "../page3.css"
import image3 from "../../../assets/branding-and-strategy/images/2.png";

const Page3 = () => {
  return (
    <>
      <section className="business-software-solution3">

        <motion.p
          className="para-bss3"
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: false, amount: 0.3 }}
        >
          <p>
            A Strategic Branding & Strategy Company in Nashik Focused on Brand Performance, Scalability & Market Impact
          </p>

          At 7xcoder.com, a trusted Branding & Strategy company in Nashik, we specialize in building scalable, insight driven brand systems that support sustainable business growth. Our focus goes beyond visual identity we develop purpose driven branding and strategic frameworks that strengthen market positioning, enhance brand perception, and deliver long term consistency across digital and offline channels.

          As a performance driven branding and strategy company in Nashik, we believe effective brands are built on clear positioning, audience centric thinking, and strategic execution. This approach ensures clarity, credibility, and scalability, helping businesses optimize brand communication and achieve consistent market impact.
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
  );
};

export default Page3;

