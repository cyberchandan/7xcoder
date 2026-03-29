import React from "react";
import { motion } from "framer-motion";
import "../../page3.css"
import image3 from "../../../../assets/branding-and-strategy/images/2.png";

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
          A Strategic UI-UX Design Agency Delivering Measurable Results in Nashik
            </p>
              At 7xcoder.com, a trusted UI-UX Design agency, we specialize in creating intuitive, high impact user experiences that drive engagement, usability, and measurable product growth. Our focus goes beyond visual aesthetics we design precision led UI-UX frameworks that align user needs with business goals, guiding the right users through seamless, conversion focused digital journeys. As a performance driven UI-UX partner, we believe great design is about clarity, efficiency, and intent led interaction. Through in depth user research, data backed design decisions, and continuous experience optimization, we help brands improve adoption, reduce friction, and convert user interaction into meaningful outcomes. This disciplined, results first approach ensures scalable digital experiences, stronger brand perception, and long term product success.
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


