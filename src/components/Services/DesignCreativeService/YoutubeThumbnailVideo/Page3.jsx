import React from "react";
import { motion } from "framer-motion";
import "../../page3.css";
import image3 from "../../../../assets/Youtube_Thumbnail&Video/images/2.png";

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
            A Performance Driven YouTube Thumbnails & Video Agency in Nashik
          </p>
          At 7xcoder.com, we help brands drive high-intent viewership,
          consistent channel growth, and measurable performance through
          strategically designed YouTube thumbnails and video content. Our
          approach goes beyond visuals we create click focused thumbnails and
          retention-driven videos aligned with viewer intent and channel goals.
          As a performance driven YouTube Thumbnails & Video agency, we focus on
          attention, retention, and long term value. By optimizing CTR, watch
          time, and content structure, we convert visibility into engaged
          viewers, stronger credibility, and meaningful business results
          ensuring sustainable growth and lasting digital impact.
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
