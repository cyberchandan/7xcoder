import { motion } from "framer-motion";
import "../../page3.css"
import image3 from "../../../../assets/StrategicBrandMessaging/image2.png";

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
            A Strategic Brand Messaging Company in Nashik Focused on Clarity, Positioning & Market Influence
          </p>
          At 7xcoder.com, a trusted Strategic Brand Messaging company in Nashik, we specialize in building scalable, insight-driven communication frameworks that support sustainable business growth. Our expertise goes beyond visuals  we develop purpose-led messaging systems that define positioning, shape perception, and ensure long-term consistency across digital and offline channels.
          <br /><br />
          As a performance-focused brand messaging partner in Nashik, we believe impactful brands are built on clear positioning, audience intelligence, and disciplined communication execution. Our structured approach ensures clarity, credibility, and scalability helping businesses strengthen brand communication and achieve consistent market influence.
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


