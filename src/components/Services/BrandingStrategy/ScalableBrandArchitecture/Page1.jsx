import React from "react";
import "../../page1.css";
import { motion } from "framer-motion";
import digimart from "../../../../assets/ScalableBrandArchitecture/images/1.png";

const Page1 = () => {
  return (
    <div className="service_1_root">
      <main className="hero-box-service1">
        <div className="title-box-service1">

          <motion.h1
            className="title2-service1"
            initial={{ opacity: 0, y: -60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: false, amount: 0.3 }}
          >
            Scalable Brand Architecture
          </motion.h1>

          <motion.p
            className="sub-title-service1"
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: false, amount: 0.3 }}
          >
            Scalable Brand Architecture Built for Clarity, Structure &
            Sustainable Growth
          </motion.p>

          <motion.p
            className="service-para1-service1"
            initial={{ opacity: 0, x: 120 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9 }}
            viewport={{ once: false, amount: 0.3 }}
          >
            At 7xcoder.com, brand architecture is developed as a long-term
            structural asset not just a visual or messaging layer. We design
            scalable brand frameworks that define hierarchy, strengthen
            positioning, and support sustainable expansion. Our structured,
            research-led approach ensures every brand element is aligned for
            clarity, consistency, and future growth. The result is a cohesive
            architecture system that enables businesses to expand confidently
            while maintaining strong brand identity and credibility.
          </motion.p>

        </div>

        <div className="logo-box2-service1">

          <motion.img
            src={digimart}
            alt=""
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
                OUR BRAND ARCHITECTURE FRAMEWORK
                <br /> <span>FROM STRUCTURE TO SCALABLE GROWTH</span>
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
                <h2>
                  <span>01.</span>Brand Structure Discovery & Planning
                </h2>
                <p>
                  We define architectural objectives by analyzing business
                  models, market segments, audience clusters, and competitors.
                  This establishes a clear brand hierarchy and scalable roadmap
                  for long-term expansion.
                </p>
              </motion.div>

              <motion.div
                className="content-service1"
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.9 }}
                viewport={{ once: false, amount: 0.3 }}
              >
                <h2>
                  <span>02.</span>Architecture Design & System Alignment
                </h2>
                <p>
                  We develop structured brand frameworks, portfolio hierarchies,
                  and relationship models that ensure logical alignment,
                  differentiation, and consistency across sub-brands, products,
                  and services.
                </p>
              </motion.div>

              <motion.div
                className="content-service1"
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
                viewport={{ once: false, amount: 0.3 }}
              >
                <h2>
                  <span>03.</span>Governance, Control & Scalable Expansion
                </h2>
                <p>
                  We implement structured guidelines and monitoring systems that
                  maintain architectural clarity, protect brand equity, and
                  support sustainable growth as your business evolves.
                </p>
              </motion.div>

            </div>

            <motion.p
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: false, amount: 0.3 }}
            >
              With 7xcoder.com, brand architecture goes beyond visual
              identity it creates a structured foundation that supports clear
              hierarchy and long-term expansion. We design scalable brand
              systems that enable businesses to grow without losing clarity or
              consistency. Through strategic architectural planning and
              disciplined execution, we help organizations build cohesive brand
              portfolios and transform brand strategy into sustainable growth
              infrastructure.
            </motion.p>

          </div>

        </div>
      </main>
    </div>
  );
};

export default Page1;
