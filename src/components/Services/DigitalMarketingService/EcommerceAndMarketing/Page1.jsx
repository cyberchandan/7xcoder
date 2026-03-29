import React from 'react';
import { motion } from "framer-motion";

import "../../page1.css";
import digimart from '../../../../assets/EcommerceAndMarketing/images/hero.png';

const Page1 = () => {
  return (
    <div className='service_1_root'>

      <main className='hero-box-service1'>
        <div className="title-box-service1" style={{width:"100%"}}>

          <motion.h1
            className="title2-service1"
            style={{width:"100%"}}
            initial={{ opacity: 0, y: -60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: false, amount: 0.3 }}
          >
            E-commerce Marketing
          </motion.h1>

          <motion.p
            className="sub-title-service1"
            style={{width:"100%"}}
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: false, amount: 0.3 }}
          >
            Strategic E-commerce Marketing. Powered by Data & Conversion Intelligence.
          </motion.p>

          <motion.p
            className="service-para1-service1"
            style={{width:"100%"}}
            initial={{ opacity: 0, x: 120 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9 }}
            viewport={{ once: false, amount: 0.3 }}
          >
            At 7xcoder.com, E-commerce Marketing is treated as a strategic revenue engine. We design precision driven strategies that boost product visibility, optimize acquisition costs, and deliver measurable revenue growth across high intent digital channels. Our performance led approach ensures every campaign drives purchase intent, improves conversions, and maximizes lifetime value while protecting long term brand positioning and profitability.
          </motion.p>

        </div>

        <div className="logo-box2-service1">

          <motion.img
            src={digimart}
            alt="Image"
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: false, amount: 0.3 }}
          />

          <div>

            <motion.div
              className="social-media-service1"
              initial={{ opacity: 0, x: -120 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: false, amount: 0.3 }}
            >
              <p>
                HOW E-COMMERCE MARKETING WORKS<br />
                <span>HOW PERFORMANCE DRIVEN E-COMMERCE MARKETING WORKS </span>
              </p>
            </motion.div>

            <div className="content-box-service1">

              <motion.div
                className="content-service1"
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: false, amount: 0.3 }}
              >
                <h2><span>01.</span> Strategic E-commerce Growth Framework</h2>
                <p>We define clear revenue and growth objectives, analyze customer purchase behavior and demand signals, and select the most effective channels to build a structured, ROI-driven e-commerce marketing strategy.</p>
              </motion.div>

              <motion.div
                className="content-service1"
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.9 }}
                viewport={{ once: false, amount: 0.3 }}
              >
                <h2><span>02.</span> Conversion Focused Product Messaging & Creative</h2>
                <p>We develop high impact product creatives, offers, messaging aligned with your brand engineered to influence purchase intent, maximize relevance, drive qualified transactions across digital storefronts marketplaces.</p>
              </motion.div>

              <motion.div
                className="content-service1"
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
                viewport={{ once: false, amount: 0.3 }}
              >
                <h2><span>03.</span> Performance Optimization & Revenue Control</h2>
                <p>We continuously monitor performance, optimize funnels, targeting, and creatives, and refine conversion paths to ensure efficiency, scalability, and sustained revenue growth.</p>
              </motion.div>

            </div>

            <motion.p
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: false, amount: 0.3 }}
            >
              With 7xcoder.com, E-commerce Marketing delivers more than sales it drives controlled revenue growth, qualified demand, measurable performance impact. Through strategic planning, precision targeting, performance led optimization, we help brands capture high intent shoppers, maximize efficiency, convert marketing spend into sustained business value.
            </motion.p>

          </div>

        </div>

      </main>
    </div>
  )
}

export default Page1
