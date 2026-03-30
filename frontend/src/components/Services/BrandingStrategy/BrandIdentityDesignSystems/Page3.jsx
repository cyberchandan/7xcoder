import { motion } from "framer-motion";
import "../../page3.css"
import image3 from "../../../../assets/BrandIdentityDesignSystems/image2.png";

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
            A Brand Identity Design Systems Company in Nashik Focused on Consistency, Recognition & Scalable Growth
          </p>
          At 7xcoder.com, a trusted Brand Identity Design Systems company in Nashik, we specialize in building scalable, insight-driven visual identity frameworks that support sustainable business growth. Our work goes beyond logo creation we develop structured identity systems that strengthen recognition, enhance brand perception, and ensure long-term visual consistency across digital and offline platforms.
        <br /><br />
          As a performance-focused identity design partner in Nashik, we believe powerful brands are built on clarity, consistency, and strategic visual execution. Our system-driven approach ensures adaptability, credibility, and scalability  helping businesses maintain a unified and professional brand presence across every touchpoint.
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


