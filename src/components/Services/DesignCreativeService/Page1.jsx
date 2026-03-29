
import React from 'react'
import "../page1.css";

// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";

import digimart from "../../../assets/design-creative/images/1.png";


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
            Design & Creative Services
          </motion.h1>

          <motion.p
            className="sub-title-service1"
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: false, amount: 0.3 }}
          >
            Strategic Design & Creative Services. Built to Elevate Brand
            Authority.
          </motion.p>

          <motion.p
            className="service-para1-service1"
            initial={{ opacity: 0, x: -120 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9 }}
            viewport={{ once: false, amount: 0.3 }}
          >
            At 7xcoder.com, design and creativity are treated as strategic
            brand assets, not just visual execution. We craft sophisticated
            design systems and creative frameworks that elevate brand
            perception, command attention, and create lasting influence across
            digital and offline touchpoints. Our work is intentional,
            disciplined, and performance driven built for organizations that
            value precision, consistency, and measurable brand impact.
          </motion.p>

        </div>

        <div className="logo-box2-service1">

          <motion.img
            src={digimart}
            alt=""
            initial={{ opacity: 0, scale: 0.6 }}
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
                HOW DESIGN & CREATIVE WORKS <br />{" "}
                <span>HOW OUR DESIGN & CREATIVE PROCESS WORKS</span>
              </p>
            </motion.div>

            <div className="content-box-service1">

              <motion.div
                className="content-service1"
                initial={{ opacity: 0, y: 80 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: false, amount: 0.3 }}
              >
                <h2>
                  <span>01.</span> Creative Framework
                </h2>
                <p>
                  We define clear brand objectives, understand business goals,
                  and establish a strong creative direction to build a
                  structured design roadmap aligned with long term brand
                  positioning.
                </p>
              </motion.div>

              <motion.div
                className="content-service1"
                initial={{ opacity: 0, y: 80 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.9 }}
                viewport={{ once: false, amount: 0.3 }}
              >
                <h2>
                  <span>02.</span> High Impact Design Execution
                </h2>
                <p>
                  We create premium, purpose driven designs aligned with your
                  brand identity crafted to capture attention, communicate
                  value, and deliver consistent visual impact across all
                  touchpoints.
                </p>
              </motion.div>

              <motion.div
                className="content-service1"
                initial={{ opacity: 0, y: 80 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
                viewport={{ once: false, amount: 0.3 }}
              >
                <h2>
                  <span>03.</span> Brand Consistency & Creative Governance
                </h2>
                <p>
                  We ensure design consistency, manage revisions efficiently,
                  and maintain creative standards across platforms strengthening
                  brand credibility, recognition, and long term equity.
                </p>
              </motion.div>

            </div>

            <motion.p
              initial={{ opacity: 0, x: 120 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.9 }}
              viewport={{ once: false, amount: 0.3 }}
            >
              With 7xcoder.com, design and creative services deliver more
              than aesthetics they build brand authority, visual consistency,
              and long term business impact. Through strategic design thinking,
              premium creative execution, and disciplined brand alignment, we
              help brands communicate clearly, strengthen credibility, and
              transform visual identity into lasting value.
            </motion.p>

          </div>
        </div>
      </main>
    </div>
  )
}

export default Page1

