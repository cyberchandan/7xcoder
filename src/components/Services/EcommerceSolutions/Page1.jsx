import React from 'react'

import "../page1.css";

// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";

import digimart from '../../../assets/ecommerce-solutions/images/1.png';

const Page1 = () => {
  return (
    <div className='service_1_root'>

      <main className='hero-box-service1'>

        <div className="title-box-service1" style={{width:"100%"}}>

          <motion.h1
            className="title2-service1"
            style={{width:"100%"}}
            initial={{ opacity:0, y:-60 }}
            whileInView={{ opacity:1, y:0 }}
            transition={{ duration:0.8 }}
            viewport={{ once:false, amount:0.3 }}
          >
            E-commerce Solutions
          </motion.h1>

          <motion.p
            className="sub-title-service1"
            style={{width:"100%"}}
            initial={{ opacity:0, y:60 }}
            whileInView={{ opacity:1, y:0 }}
            transition={{ duration:0.8 }}
            viewport={{ once:false, amount:0.3 }}
          >
            Optimized E-commerce Platforms Designed for Performance and Sales Growth
          </motion.p>

          <motion.p
            className="service-para1-service1"
            style={{width:"100%"}}
            initial={{ opacity:0, x:-120 }}
            whileInView={{ opacity:1, x:0 }}
            transition={{ duration:0.9 }}
            viewport={{ once:false, amount:0.3 }}
          >
            At 7xcoder.com, e-commerce solutions are treated as strategic growth platforms, not just online stores. We design and develop scalable, secure, and high performance e-commerce systems that optimize user experience, streamline operations, and drive consistent revenue growth. Our approach is structured, data driven, and conversion focused, built for businesses that demand reliability, scalability, and measurable commercial impact across their digital commerce ecosystem.
          </motion.p>

        </div>

        <div className="logo-box2-service1">

          <motion.img
            src={digimart}
            alt="Image"
            initial={{ opacity:0, scale:0.6 }}
            whileInView={{ opacity:1, scale:1 }}
            transition={{ duration:0.8 }}
            viewport={{ once:false, amount:0.3 }}
          />

          <div>

            <motion.div
              className="social-media-service1"
              initial={{ opacity:0, x:-120 }}
              whileInView={{ opacity:1, x:0 }}
              transition={{ duration:0.8 }}
              viewport={{ once:false, amount:0.3 }}
            >
              <p>
                HOW E-COMMERCE SOLUTIONS WORK
                <br />
                <span>HOW WE BUILD E-COMMERCE SOLUTIONS</span>
              </p>
            </motion.div>

            <div className="content-box-service1">

              <motion.div
                className="content-service1"
                initial={{ opacity:0, y:80 }}
                whileInView={{ opacity:1, y:0 }}
                transition={{ duration:0.8 }}
                viewport={{ once:false, amount:0.3 }}
              >
                <h2>
                  <span>01.</span> Strategic E-commerce Architecture & Planning
                </h2>
                <p>
                  We define clear commercial goals, analyze customer journeys, and design a scalable e-commerce roadmap focused on performance, conversion optimization, and long term digital commerce growth.
                </p>
              </motion.div>

              <motion.div
                className="content-service1"
                initial={{ opacity:0, y:80 }}
                whileInView={{ opacity:1, y:0 }}
                transition={{ duration:0.9 }}
                viewport={{ once:false, amount:0.3 }}
              >
                <h2>
                  <span>02.</span> High Performance E-commerce Development & Execution
                </h2>
                <p>
                  We build secure, fast, and conversion driven e-commerce platforms engineered for reliability, clean architecture, seamless integrations, and smooth shopping experiences across devices and channels.
                </p>
              </motion.div>

              <motion.div
                className="content-service1"
                initial={{ opacity:0, y:80 }}
                whileInView={{ opacity:1, y:0 }}
                transition={{ duration:1 }}
                viewport={{ once:false, amount:0.3 }}
              >
                <h2>
                  <span>03.</span> Quality Assurance, Security & Scalability Optimization
                </h2>
                <p>
                  We ensure long term platform stability through rigorous testing, performance tuning, security hardening, and scalable frameworks that support traffic growth, data protection, and sustained revenue expansion.
                </p>
              </motion.div>

            </div>

            <motion.p
              initial={{ opacity:0, x:120 }}
              whileInView={{ opacity:1, x:0 }}
              transition={{ duration:0.9 }}
              viewport={{ once:false, amount:0.3 }}
            >
              With 7xcoder.com, e-commerce solutions deliver more than just online transactions they enable scalable commerce, optimized customer journeys, and long term revenue growth. Through strategic e-commerce architecture, high performance development, and disciplined execution, we help businesses build reliable digital commerce platforms, streamline operations, and convert their online presence into sustainable commercial value.
            </motion.p>

          </div>
        </div>

      </main>

    </div>
  )
}

export default Page1
