import { motion } from "framer-motion";
import "../../page3.css";
import image3 from "../../../../assets/PerformanceSecurity&Optimization/image2.png";

const Page3 = () => {
  return (
    <section className="business-software-solution3">
      <motion.div
        className="para-bss3"
        initial={{ opacity: 0, x: -120 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: false, amount: 0.3 }}
      >
        <p className="bss3-heading">
          Performance & Security Driven Digital Solutions Partner in Nashik Focused on Stability, Scalability & Long Term Growth
        </p>
        At 7xcoder.com, a trusted Performance, Security & Optimization partner in Nashik, we specialize in strengthening digital platforms to operate at peak speed, resilience, and protection.
        Our expertise goes beyond routine technical fixes  we engineer high performance environments that ensure seamless user experiences, robust data security, and long term operational stability across evolving digital ecosystems.
        As a performance- driven solutions provider in Nashik, we believe sustainable digital growth is built on intelligent system architecture, proactive security frameworks, and continuous optimization. This structured approach enhances platform reliability, safeguards critical assets, and enables businesses to scale confidently with measurable efficiency and long term digital credibility.

      </motion.div>


      <motion.img
        src={image3}
        alt="E-commerce Solutions"
        className="image-bss3"
        initial={{ opacity: 0, scale: 0.6 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: false, amount: 0.3 }}
      />

    </section>
  );
};

export default Page3;
