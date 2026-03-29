import React from "react";
import { motion } from "framer-motion";
import "../../page3.css";

import image3 from "../../../../assets/3d-product-visualisation/images/hero2.png";

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
            A Strategic 3D Product Visualization Agency Focused on Growth in
            Nashik
          </p>
          At 7xcoder.com, a trusted 3D Product Visualization agency, we
          specialize in delivering product clarity, buyer confidence, and
          measurable business impact through strategically engineered 3D
          visualization ecosystems. Our focus goes beyond creating visuals. we
          design precision led 3D frameworks that present products with
          accuracy, realism, and intent, connecting with buyers at the right
          stage of their decision journey. As a performance driven 3D Product
          Visualization partner, we believe impact is built through clarity,
          consistency, and credibility. Through product intelligence, visual
          precision, and continuous optimization, we help brands enhance product
          understanding, strengthen perception, and convert visual attention
          into informed decisions and business outcomes. This disciplined,
          results first approach ensures scalable visualization systems,
          stronger product positioning, and long term brand and commercial
          value.
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
}

export default Page3;
