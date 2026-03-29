import React from 'react'
import { motion } from "framer-motion";
import "../../page1.css";
import digimart from '../../../../assets/email-influencer/images/hero.png';

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
            Email & Influencer Marketing
          </motion.h1>

          <motion.p
            className="sub-title-service1"
            style={{width:"100%"}}
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: false, amount: 0.3 }}
          >
            Insight Driven Email & Influencer Marketing. Designed for Long Term Performance.
          </motion.p>

          <motion.p
            className="service-para1-service1"
            style={{width:"100%"}}
            initial={{ opacity: 0, x: 120 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9 }}
            viewport={{ once: false, amount: 0.3 }}
          >
            At 7xcoder.com, Email & Influencer Marketing is treated as a strategic relationship building engine. We create precision driven email journeys and influencer ecosystems that build trust, expand reach, and deliver measurable impact. Our performance led approach focuses on nurturing intent, driving influence, and converting engagement into long term brand value with authenticity and scalability.
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
                HOW EMAIL & INFLUENCER MARKETING WORKS<br />
                <span>HOW PERFORMANCE DRIVEN EMAIL & INFLUENCER MARKETING WORKS </span>
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
                <h2><span>01.</span>  Strategic Relationship Architecture</h2>
                <p>We define clear campaign objectives, analyze audience behavior, and map influence touchpoints to build structured, ROI driven email and influencer marketing ecosystems.</p>
              </motion.div>

              <motion.div
                className="content-service1"
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.9 }}
                viewport={{ once: false, amount: 0.3 }}
              >
                <h2><span>02.</span> Precision Content & Creator Alignment</h2>
                <p>We develop high impact email content and collaborate with carefully selected creators whose voice and audience align with your brand engineered to build trust, relevance, and meaningful engagement.</p>
              </motion.div>

              <motion.div
                className="content-service1"
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
                viewport={{ once: false, amount: 0.3 }}
              >
                <h2><span>03.</span>  Performance Optimization & Conversion Nurturing</h2>
                <p>We continuously track engagement, optimize messaging, refine creator partnerships, and strengthen conversion journeys to ensure scalability, efficiency, and sustained performance.</p>
              </motion.div>

            </div>

            <motion.p
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: false, amount: 0.3 }}
            >
              With 7xcoder.com, Email & Influencer Marketing delivers more than engagement it builds trust, influences decisions, and drives measurable business impact. Through strategic journey planning, precision audience targeting, and performance driven optimization, we help brands nurture high intent audiences, maximize influence, and convert engagement into sustained long term value.
            </motion.p>

          </div>

        </div>

      </main>
    </div>
  )
}

export default Page1
