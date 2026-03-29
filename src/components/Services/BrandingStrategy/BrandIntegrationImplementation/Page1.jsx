import React from "react";
import "../../page1.css";
import { motion } from "framer-motion";
import brand from "../../../../assets/BrandIntegrationImplementation/images/1.png";

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
            Brand Integration & Implementation
          </motion.h1>

          <motion.p
            className="sub-title-service1"
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: false, amount: 0.3 }}
          >
            Brand Integration & Implementation Built for Consistency, Alignment & Scalable Growth
          </motion.p>

          <motion.p
            className="service-para1-service1"
            initial={{ opacity: 0, x: 120 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9 }}
            viewport={{ once: false, amount: 0.3 }}
          >
            At 7xcoder.com, brand integration goes beyond design & strategy it ensures 
            your brand is executed with clarity, consistency, & operational alignment. 
            We implement structured brand systems that translate strategy into seamless 
            real world performance. Our disciplined, process driven approach ensures your 
            brand is consistently integrated across digital platforms, marketing channels, 
            internal operations, & customer touchpoints resulting in stronger brand presence 
            & measurable business impact.
          </motion.p>

        </div>

        <div className="logo-box2-service1">

          <motion.img
            src={brand}
            alt="Brand Integration Implementation"
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
                HOW BRAND INTEGRATION WORKS <br />
                <span>HOW WE IMPLEMENT STRATEGY INTO ACTION</span>
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
                  <span>01.</span> Brand Alignment & Planning
                </h2>
                <p>
                We define integration objectives by aligning brand strategy 
                with business operations, communication channels, and internal 
                workflows  creating a clear execution roadmap for consistent rollout.
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
                  <span>02.</span> Cross-Channel Integration
                </h2>
                <p>
                We implement brand systems across digital platforms, marketing campaigns, 
                internal teams, and customer touchpoints  ensuring clarity, consistency, and 
                unified brand presence.
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
                  <span>03.</span>  Governance & Scalable Execution
                </h2>
                <p>
                We establish structured guidelines, quality controls, and performance 
                oversight to maintain long-term brand consistency, operational efficiency, 
                and sustainable growth.
                </p>
              </motion.div>

            </div>

            <motion.p
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: false, amount: 0.3 }}
            >
            With 7xcoder.com, brand integration goes beyond visual identity  it ensures 
            your strategy is executed consistently across every platform and touchpoint. We 
            align brand systems with operations and marketing channels to deliver unified brand 
            experiences and long-term business impact. Through structured implementation planning 
            and disciplined rollout, we help businesses strengthen brand presence and translate 
            strategy into measurable performance.
            </motion.p>

          </div>

        </div>
      </main>
    </div>
  );
};

export default Page1;
