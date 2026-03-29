import React from "react";
import { motion } from "framer-motion";
import "../../page3.css";
import image3 from "../../../../assets/Pay_Per_Click/images/2.png";

const Service3_3 = () => {
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
            A Results Driven Pay Per Click (PPC) Advertising Agency in Nashik
          </p>
          At 7xcoder.com, a trusted Pay Per Click (PPC) advertising agency,
          we specialize in driving high intent visibility, controlled
          acquisition, and measurable growth through strategically engineered
          paid media ecosystems. Our focus goes beyond simply running ads we
          design precision led PPC frameworks that target the right audience at
          the right moment with clear commercial intent. As a performance driven
          PPC agency, we believe paid advertising is about capturing demand,
          maximizing efficiency, and delivering predictable ROI. Through
          advanced targeting, data intelligence, and continuous optimization, we
          help brands scale reach, control costs, and convert paid visibility
          into qualified leads and revenue without wasting spend on low value
          traffic. This disciplined, results-first approach ensures sustainable
          growth, stronger market positioning, and long-term performance impact.
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
  );
};

export default Service3_3;
