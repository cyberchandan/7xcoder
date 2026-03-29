import React from 'react'
import { motion } from "framer-motion";
import '../../page4.css'

import custom from "../../../assets/UIUXDrivenDevelopment/icon/Custom Website Development 4.png";
import backend from "../../../assets/UIUXDrivenDevelopment/icon/Backend & API Development 1.png";
import mobile from "../../../assets/UIUXDrivenDevelopment/icon/Mobile App Development (iOS & Android) 1.png";
import ecommerce from "../../../assets/UIUXDrivenDevelopment/icon/E-Commerce Development Solutions 1.png";
import web from "../../../assets/UIUXDrivenDevelopment/icon/Web Application Development 2.png";
import performance from "../../../assets/UIUXDrivenDevelopment/icon/Performance, Security & Optimization 1.png";
import uiux from "../../../assets/UIUXDrivenDevelopment/icon/UI/UX–Driven Development.png";
import maintenance from "../../../assets/UIUXDrivenDevelopment/icon/Maintenance, Support & Continuous Improvement 1.png";

import arrow from "../../../assets/UIUXDrivenDevelopment/icon/arrow1.png";


const expertiseList = [
  {
    title: "Custom Website Development",
    description:
      "We build fast, responsive, and scalable websites tailored to your business goals, ensuring strong performance, usability, and long term reliability.",
    img: custom,
  },
  {
    title: "Backend & API Development",
    description:
      "Robust, scalable backend systems with secure APIs and third party integrations to ensure smooth data flow and system efficiency.",
    img: backend,
  },
  {
    title: "Mobile App Development (iOS & Android)",
    description:
      "Secure, high performance mobile applications designed for seamless user experience, scalability, and cross platform compatibility.",
    img: mobile,
  },
  {
    title: "E-Commerce Development Solutions",
    description:
      "Conversion focused e-commerce platforms with secure payment gateways, inventory management, and performance optimization.",
    img: ecommerce,
  },
  {
    title: "Web Application Development",
    description:
      "Feature rich web applications developed with clean architecture and modern technologies to support business operations and future growth",
    img: web,
  },
  {
    title: "Performance, Security & Optimization",
    description:
      "Speed optimization, security enhancements, and stability improvements to deliver reliable, high performing digital products.",
    img: performance,
  },
  {
    title: "UI/UX–Driven Development",
    description:
      "Development powered by user centric UI/UX principles to improve engagement, navigation, and conversion rates across digital platforms.",
    img: uiux,
  },
  {
    title: "Maintenance & Support",
    description:
      "Ongoing technical support, updates, monitoring, and enhancements to keep your web and app platforms stable and future ready.",
    img: maintenance,
  }
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
  )
}

export default Page4
