import React from 'react'
import { motion } from "framer-motion";
import '../page4.css'

import guidelines from "../../../assets/BrandGuidelinesGovernance/icon/Brand Guidelines & Governance 1 (1).png";
import identity from "../../../assets/BrandGuidelinesGovernance/icon/Brand Identity Design Systems 1 (1).png";
import integration from "../../../assets/BrandGuidelinesGovernance/icon/Brand Integration & Implementation 1 (1).png";
import strategy from "../../../assets/BrandGuidelinesGovernance/icon/Brand Strategy & Positioning 1 (1).png";
import market from "../../../assets/BrandGuidelinesGovernance/icon/Market & Audience Research 1 (1).png";
import messaging from "../../../assets/BrandGuidelinesGovernance/icon/Messaging & Communication Strategy 1 (1).png";
import ongoing from "../../../assets/BrandGuidelinesGovernance/icon/Ongoing Brand Support & Optimization 1 (1).png";
import scalable from "../../../assets/BrandGuidelinesGovernance/icon/Scalable Brand Architecture 1 (1).png";

import arrow from "../../../assets/BrandGuidelinesGovernance/icon/arrow1.png";


const expertiseList = [
  {
    title: "Brand Strategy & Positioning",
    description:
      "We define clear brand purpose, positioning, and value propositions aligned with your business goals, target audience, and market landscape ensuring long term relevance and differentiation.",
    img: strategy,
  },
  {
    title: "Brand Integration & Implementation",
    description:
      "Seamless application of branding across websites, digital platforms, marketing assets, packaging, and internal communications to create a unified and impactful brand experience.",
    img: integration,
  },
  {
    title: "Brand Identity Design Systems",
    description:
      "Comprehensive brand identity systems including logo design, typography, color systems, and visual language crafted to deliver consistency, recognition, and professional brand presence.",
    img: identity,
  },
  {
    title: "Scalable Brand Architecture",
    description:
      "Flexible and scalable brand structures designed to support business expansion, new offerings, sub brands, and evolving market requirements without losing consistency.",
    img: scalable,
  },
  {
    title: "Messaging & Communication Strategy",
    description:
      "Strategic brand messaging frameworks that define tone of voice, brand narrative, and communication guidelines to ensure clarity, consistency, and emotional connection across all channels.",
    img: messaging,
  },
  {
    title: "Brand Guidelines & Governance",
    description:
      "Clear brand guidelines and governance frameworks that protect brand integrity, ensure consistency, and enable teams to execute branding confidently and correctly.",
    img: guidelines,
  },
  {
    title: "Market & Audience Research",
    description:
      "In depth market, competitor, and audience research to uncover insights that inform strategic decisions, strengthen positioning, and support data driven brand growth.",
    img: market,
  },
  {
    title: "Ongoing Brand Support & Optimization",
    description:
      "Continuous brand monitoring, refinement, and optimization to keep your brand relevant, competitive, and aligned with changing business goals and market dynamics.",
    img: ongoing,
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
                <img src={arrow} alt="arrow" className="read-more-icon-bss4"/>
              </button>
            </motion.div>

          </motion.div>

        ))}

      </div>

    </section>
  )
}

export default Page4
