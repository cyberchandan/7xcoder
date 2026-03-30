import React from "react";
import { motion } from "framer-motion";
import "../../Page3.css";
import image3 from "../../../../assets/GraphicDesign/images/2.png";

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
          <p>A Performance Driven Graphic Design Agency in Nashik</p>
          At 7xcoder.com, a trusted Graphic Design agency, we specialize in
          creating high impact visual systems that deliver clear brand
          communication, consistent identity, and measurable brand value. Our
          focus goes beyond aesthetics or decorative visuals we craft precision
          led design solutions that align with your business objectives,
          audience expectations, and market positioning
          <br />
          As a performance driven design partner, we believe graphic design is
          about building cohesive, scalable, and future ready brand systems.
          Through strategic brand planning, audience centric visual design, and
          continuous creative refinement, we help brands strengthen recognition,
          enhance engagement, and transform visual interactions into meaningful
          business outcomes. This quality-first, disciplined approach ensures
          long term brand consistency, a stronger market presence, and sustained
          business value.
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

export default Page3;
