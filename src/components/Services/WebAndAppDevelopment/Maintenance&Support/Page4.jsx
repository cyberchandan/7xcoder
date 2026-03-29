import { motion } from "framer-motion";

import "../../page4.css";
import frame1 from "../../../../assets/Maintenance&Support/CustomWebsite.png";
import frame2 from "../../../../assets/Maintenance&Support/MobileApp.png";
import frame3 from "../../../../assets/Maintenance&Support/WebApplication.png";
import frame4 from "../../../../assets/Maintenance&Support/UIUX.png";
import frame5 from "../../../../assets/Maintenance&Support/Backend&API.png";
import frame6 from "../../../../assets/Maintenance&Support/E_CommerceDevelopment.png";
import frame7 from "../../../../assets/Maintenance&Support/PerformanceSecurity.png";
import frame8 from "../../../../assets/Maintenance&Support/MaintenanceSupport.png";
import arrow from "../../../../assets/Maintenance&Support/arrow1.png";

const expertiseList = [
  {
    title: "Custom Website Development",
    description:
      "We build fast, responsive, and scalable websites tailored to your business goals, ensuring strong performance, usability, and long term reliability.",
    img: frame1,
  },
  {
    title: "Mobile App Development (iOS & Android)",
    description:
      "Secure, high performance mobile applications designed for seamless user experience, scalability, and cross platform compatibility.",
    img: frame2,
  },
  {
    title: "Web Application Development",
    description:
      "Feature rich web applications developed with clean architecture and modern technologies to support business operations and future growth.",
    img: frame3,
  },
  {
    title: "UI/UX–Driven Development",
    description:
      "Development powered by user centric UI/UX principles to improve engagement, navigation, and conversion rates across digital platforms.",
    img: frame4,
  },
  {
    title: "Backend & API Development",
    description:
      "Robust, scalable backend systems with secure APIs and third party integrations to ensure smooth data flow and system efficiency.",
    img: frame5,
  },
  {
    title: "E-Commerce Development Solutions",
    description:
      "Conversion focused e-commerce platforms with secure payment gateways, inventory management, and performance optimization.",
    img: frame6,
  },
  {
    title: "Performance, Security & Optimization",
    description:
      "Speed optimization, security enhancements, and stability improvements to deliver reliable, high performing digital products.",
    img: frame7,
  },
  {
    title: `Maintenance & Support`,
    description:
      "Ongoing technical support, updates, monitoring, and enhancements to keep your web and app platforms stable and future ready.",
    img: frame8,
  },
];

const Page4 = () => {
  return (
    <section className="business-software-solution4">
      <p className="blue-bss4">OUR SPECIALIZATION</p>
      <p className="divider-bss4"></p>
      <h2 className="h2-bss4">
        What We Have
        <span> to Offer</span>
      </h2>
      <div className="cards-bss4">
        {expertiseList.map((item, index) => (
          <motion.div
            className={`feature-card-bss4-${index} feature-card-bss4`}
            key={index}
            initial={{ opacity: 0, y: 80 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: index * 0.15 }}
            viewport={{ once: false, amount: 0.2 }}
          >
            <motion.div
              className="icon-box-bss4"
              initial={{ opacity: 0, scale: 0.6 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
            >
              <img src={item.img} alt={item.title} />
            </motion.div>

            <h4>{item.title}</h4>
            <p>{item.description}</p>
            <div className="read-more-wrapper-bss4">
              <button className="read-more-btn-bss4">
                Read More
                <img src={arrow} alt="arrow" className="read-more-icon-bss4" />
              </button>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Page4;
