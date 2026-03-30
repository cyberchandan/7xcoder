import React from "react";
import { motion } from "framer-motion";
import "../../page1.css";
import digimart from "../../../../assets/3d-product-visualisation/images/hero.png";

const Page1 = () => {
  return (
    <div className="service_1_root">
      <main className="hero-box-service1">
        <div className="title-box-service1" style={{ width: "100%" }}>

          <motion.h1
            className="title2-service1"
            style={{ width: "100%" }}
            initial={{ opacity: 0, y: -60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: false, amount: 0.3 }}
          >
            3D Product Visualization
          </motion.h1>

          <motion.p
            className="sub-title-service1"
            style={{ width: "100%" }}
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: false, amount: 0.3 }}
          >
            Data Driven 3D Product Visualization. Built for Scalable Impact.
          </motion.p>

          <motion.p
            className="service-para1-service1"
            style={{ width: "100%" }}
            initial={{ opacity: 0, x: 120 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9 }}
            viewport={{ once: false, amount: 0.3 }}
          >
            At 7xcoder.com, 3D Product Visualization goes beyond visuals.
            We create precision-driven 3D visuals and animations that improve
            product clarity, strengthen brand perception, and support digital
            and sales performance. Our performance led approach focuses on
            influencing buyer intent, building confidence, and turning attention
            into action while maintaining accuracy, consistency, and long term
            brand value.
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
                HOW 3D PRODUCT VISUALIZATION WORKS
                <br />{" "}
                <span>HOW STRATEGIC 3D PRODUCT VISUALIZATION WORKS</span>
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
                  <span>01.</span> Strategic Product Visualization Framework
                </h2>
                <p>
                  We define clear product communication objectives, analyze buyer behavior, and plan visualization formats to build a structured, high-impact 3D product visualization strategy.
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
                  <span>02.</span> High Precision 3D Modeling & Visual Storytelling
                </h2>
                <p>
                 We create premium, brand-aligned 3D models and animations designed to enhance product clarity, communicate value, and drive engagement through purposeful visual storytelling.
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
                  <span>03.</span> Performance Optimization & Conversion Support
                </h2>
                <p>
                  We continuously refine visual accuracy, presentation, and delivery formats to improve efficiency, scalability, and sustained impact across digital, marketing, and sales channels.
                </p>
              </motion.div>

            </div>

            <motion.p
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: false, amount: 0.3 }}
            >
              With 7xcoder.com, 3D Product Visualization delivers more than visuals it builds product clarity, buyer confidence, and measurable business impact. Through strategic visualization planning, high precision 3D execution, and performance focused optimization, we help brands communicate value clearly, strengthen perception, and convert attention into informed decisions and sustained business growth.
            </motion.p>

          </div>

        </div>
      </main>
    </div>
  );
};

export default Page1;
