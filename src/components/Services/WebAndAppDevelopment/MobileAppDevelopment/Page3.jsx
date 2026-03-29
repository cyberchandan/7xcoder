import { motion } from "framer-motion";
import "../../page3.css";
import image3 from "../../../../assets/MobileAppDevelopment(iOS & Android)/image2.png";

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
          <p>High-Performance Mobile App Development in Nashik</p>
          At 7xcoder.com, a trusted Mobile App Development agency in
          Nashik, we specialize in building scalable, secure, and
          high-performance mobile applications that support long-term business
          growth. Our focus goes beyond functionality engineering purpose driven
          mobile experiences that deliver seamless usability, consistent
          performance, and lasting reliability across Android and iOS
          ecosystems.
          <br />
          As a performance driven mobile development agency in Nashik, we
          believe effective mobile solutions are built on clean architecture,
          user-centric design, and strategic execution. This disciplined
          approach ensures stability, scalability, and technical credibility,
          enabling businesses to strengthen engagement, optimize operations, and
          achieve sustainable digital growth.
        </motion.div>

        <img src={image3} alt="" className="image-bss3" />
      </section>
    </>
  );
};

export default Page3;
