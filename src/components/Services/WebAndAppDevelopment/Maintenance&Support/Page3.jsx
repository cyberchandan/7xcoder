import { motion } from "framer-motion";

import "../../page3.css";

import image3 from "../../../../assets/Maintenance&Support/image2.png";

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
            A Trusted Maintenance & Support Agency in Nashik<br />{" "} Ensuring
            Reliability, Performance & Business Continuity
          </p>
          At 7xcoder.com, a trusted Maintenance & Support partner in
          Nashik, we specialize in safeguarding and optimizing digital platforms
          to ensure long-term stability, security, and performance.
          <br />
          Our focus extends beyond routine support we deliver structured,
          proactive maintenance solutions that keep websites and applications
          running smoothly, securely, and efficiently across evolving digital
          environments.
          <br />
          As a reliability-driven support provider in Nashik, we believe
          sustainable digital growth depends on continuous monitoring, timely
          upgrades, and preventive system management. This disciplined approach
          ensures operational continuity, protects digital assets, and enables
          businesses to maintain a resilient, high-performing digital presence
          with confidence.
        </motion.div>

        <img src={image3} alt="" className="image-bss3" />
      </section>
    </>
  );
};

export default Page3;
