import "../page3.css";

// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";

import image3 from "../../../assets/Web-and-app-development-services/image2.png";

const Service6_3 = () => {
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
          A Strategic Web & App Development Agency in Nashik Focused on Performance, Scalability, & Business Impact
        </p>

        At 7xcoder.com, our Web & App Development services are engineered to perform seamlessly across a wide range of digital platforms and devices. We build platform specific web and mobile solutions aligned with technical requirements, user behavior, and business objectives ensuring consistency, performance, and scalability wherever your digital product is accessed. We specialize in developing high quality digital solutions for websites, web applications, mobile apps (Android & iOS), e-commerce platforms, admin dashboards, SaaS platforms, and integrated systems. Every solution is optimized for performance, security, responsiveness, and user experience helping businesses maintain a strong, reliable, and professional digital presence across all platforms and devices.
      </motion.div>

      <motion.img
        src={image3}
        alt="E-commerce Solutions"
        initial={{ opacity: 0, scale: 0.6 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: false, amount: 0.3 }}
      />

    </section>
  );
};

export default Service6_3;
