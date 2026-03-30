import React from "react";
import { motion } from "framer-motion";

import "../../page3.css";

import image3 from "../../../../assets/CustomWebsiteDevelopment/images/2.png";

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
          <p>Custom Website Development. Strategically Engineered in Nashik.</p>
          At 7xcoder.com, a trusted Custom Website Development agency in
          Nashik, we specialize in building scalable, secure, and
          high-performance websites that support long-term business growth. Our
          approach goes beyond functionality engineering purpose-driven digital
          experiences that deliver seamless usability, consistent performance,
          and lasting reliability across modern web environments. As a
          performance focused website development agency in Nashik, we believe
          effective digital platforms are built on clean architecture,
          user-centric design, and strategic execution. This disciplined
          methodology ensures stability, scalability, and technical credibility,
          enabling businesses to strengthen engagement, streamline operations,
          and achieve sustainable digital growth.
        </motion.p>
        <img src={image3} alt="" className="image-bss3" />
      </section>
    </>
  );
}

export default Page3;
