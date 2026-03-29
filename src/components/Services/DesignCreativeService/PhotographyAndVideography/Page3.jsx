import React from "react";
import { motion } from "framer-motion";
import "../../page3.css";
import image3 from "../../../../assets/PhotographyAndVideography/images/2.png";

const Page3 = () => {
  return (
    <>
      <section className="business-software-solution3">
        <div className="para-bss3">
          <p>A Results Driven Photography & Videography Agency in Nashik</p>
          At 7xcoder.com, we specialize in creating high-impact visual
          presence, audience attention, and measurable brand engagement through
          strategically crafted photography and videography. Our approach goes
          beyond capturing images we focus on connecting the right visuals with
          the right audience at the right moment, using purpose-led storytelling
          and strong visual intent.
          <br />
          As a performance-driven Photography & Videography partner, we believe
          sustainable brand growth is built on clarity, consistency, and
          emotional connection. Through audience insight, visual strategy, and
          continuous creative refinement, we help brands strengthen perception,
          elevate credibility, and convert visual visibility into qualified
          engagement, trust, and long-term brand value.
        </div>

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
