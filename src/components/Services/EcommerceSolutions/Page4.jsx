import React from 'react'
import "../page4.css";
import { NavLink } from 'react-router';

// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";

import cloud from "../../../assets/ecommerce-solutions/icon/Cloud Based Software Solutions 1.png";
import custom from "../../../assets/ecommerce-solutions/icon/Custom Business Software Development 1.png";
import data from "../../../assets/ecommerce-solutions/icon/Data Management & Reporting Systems 1.png";
import enterprise from "../../../assets/ecommerce-solutions/icon/Enterprise & Internal Systems 1.png";
import maintenance from "../../../assets/ecommerce-solutions/icon/Maintenance, Support & Optimization 1.png";
import process from "../../../assets/ecommerce-solutions/icon/Process Automation Solutions 1.png";
import secure from "../../../assets/ecommerce-solutions/icon/Secure & Scalable Architecture 1.png";
import system from "../../../assets/ecommerce-solutions/icon/System Integration Services 1.png";
import arrow from '../../../assets/ecommerce-solutions/icon/arrow1.png'


const expertiseList = [
  {
    title: "Custom E-commerce Development",
    description:
      "We design and develop custom e-commerce platforms tailored to your business model, product strategy, and customer journey, ensuring scalability, flexibility, and long term growth.",
    img: custom,
    red:"/services/custom-e-commerce-development",
  },
  {
    title: "Enterprise & Marketplace Solutions",
    description:
      "Robust e-commerce systems including multi marketplaces, B2B/B2C platforms, dashboards, and seller designed to manage catalogs, users, transactions efficiently.",
    img: enterprise,
    red:"/services/enterprise-marketplace-solutions",
  },
  {
    title: "Checkout & Conversion Optimization",
    description:
      "Optimized checkout flows, cart experiences, and conversion focused UI/ UX that reduce friction, improve user engagement, and increase successful transactions.",
    img: process,
    red:"/services/checkout-conversion-optimization",
  },
{
  title: "Product, Inventory & Order Management",
    description:
  "Centralized systems to manage products, inventory, pricing, orders, and fulfillment workflows ensuring operational accuracy and seamless order processing.",
    img: data,
    red:"/services/product-inventory-order-management",
  },
{
  title: "System Integration Services",
    description:
  "Smooth integration with payment gateways, logistics partners, CRMs, ERPs, marketing tools, analytics platforms, and third party services for unified commerce operations.",
    img: system,
    red:"/services/system-integration-services-ecom",
  },
{
  title: "Secure & Scalable Architecture",
    description:
  "Enterprise grade, scalable e-commerce architectures with secure payment handling, data protection, and performance stability to support business growth and peak traffic.",
    img: secure,
    red:"/services/secure-scalable-architecture",
  },
{
  title: "Cloud Based E-commerce Solutions",
    description:
  "Cloud enabled platforms designed for high availability, faster performance, global accessibility, and optimized scalability across devices and regions.",
    img: cloud,
    red:"/services/cloud-based-e-com-solutions",
  },
{
  title: "Maintenance, Support & Optimization",
    description:
  "Ongoing monitoring, updates, performance optimization, security enhancements, and technical support to keep your e-commerce platform reliable, secure, and growth-ready.",
    img: maintenance,
    red:"/services/maintenance-support-optimization",
  }
];


const Page4 = () => {
  return (
    <section className="business-software-solution4">

      <motion.p
        className="blue-bss4"
        initial={{ opacity:0, y:-60 }}
        whileInView={{ opacity:1, y:0 }}
        transition={{ duration:0.8 }}
        viewport={{ once:false, amount:0.3 }}
      >
        OUR SPECIALIZATION
      </motion.p>

      <motion.p
        className="divider-bss4"
        initial={{ opacity:0 }}
        whileInView={{ opacity:1 }}
        transition={{ duration:0.8 }}
        viewport={{ once:false, amount:0.3 }}
      ></motion.p>

      <motion.h2
        className="h2-bss4"
        initial={{ opacity:0, y:60 }}
        whileInView={{ opacity:1, y:0 }}
        transition={{ duration:0.8 }}
        viewport={{ once:false, amount:0.3 }}
      >
        What We Have
        <span> to Offer</span>
      </motion.h2>

      <div className="cards-bss4">
        {expertiseList.map((item, index) => (
          <motion.div
            className={`feature-card-bss4-${index} feature-card-bss4`}
            key={index}
            initial={{ opacity:0, y:80 }}
            whileInView={{ opacity:1, y:0 }}
            transition={{ duration:0.8, delay:index * 0.15 }}
            viewport={{ once:false, amount:0.2 }}
          >

            <motion.div
              className="icon-box-bss4"
              initial={{ opacity:0, scale:0.6 }}
              whileInView={{ opacity:1, scale:1 }}
              transition={{ duration:0.6 }}
            >
              <img src={item.img} alt={item.title} />
            </motion.div>

            <h4>{item.title}</h4>
            <p>{item.description}</p>

            <div className="read-more-wrapper-bss4">
              <NavLink to={item.red} className="read-more-btn-bss4">
                Read More
                <img src={arrow} alt="arrow" className="read-more-icon-bss4" />
              </NavLink>
            </div>

          </motion.div>
        ))}
      </div>

    </section>
  )
}

export default Page4
