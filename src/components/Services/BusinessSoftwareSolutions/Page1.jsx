import React from "react";

import "../page1.css";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";

import digimart from "../../../assets/business-software-solutions/images/1.png";

const Page1 = () => {
  return (
    <div className="service_1_root">
      <main className="hero-box-service1">
        <div className="title-box-service1">
          <motion.h1
              className="title2-service1"
              initial={{ opacity:0, y:-60 }}
              whileInView={{ opacity:1, y:0 }}
              transition={{ duration:0.8 }}
              viewport={{ once:false, amount:0.3 }}
            >
              Business Software Solutions
            </motion.h1>
          <motion.p
              className="sub-title-service1"
              initial={{ opacity:0, y:60 }}
              whileInView={{ opacity:1, y:0 }}
              transition={{ duration:0.8 }}
              viewport={{ once:false, amount:0.3 }}
            >
            Engineered for Performance, Scale, and Reliability. Business
            Software Solutions
          </motion.p>
           <motion.p
              className="service-para1-service1"
              initial={{ opacity:0, x:-120 }}
              whileInView={{ opacity:1, x:0 }}
              transition={{ duration:0.9 }}
              viewport={{ once:false, amount:0.3 }}
            >
            At 7xcoder.com, business software solutions are treated as
            strategic digital assets not just technical implementations. We
            design and develop scalable, secure, and high performance software
            systems that streamline operations, enhance efficiency, and deliver
            long-term business value. Our approach is intentional, structured,
            and performance driven built for organizations that prioritize
            reliability, scalability, and measurable operational and digital
            impact.
          </motion.p>
        </div>
        <div className="logo-box2-service1">
          <motion.img
              src={digimart}
              alt=""
              initial={{ opacity:0, scale:0.5 }}
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
                HOW BUSINESS SOFTWARE SOLUTIONS WORKS <br />{" "}
                <span>HOW WE BUILD BUSINESS SOFTWARE SOLUTIONS</span>
              </p>
            </motion.div>
            <div className="content-box-service1">
              <motion.div
                      className="content-service1"
                      initial={{ opacity:0, y:60 }}
                      whileInView={{ opacity:1, y:0 }}
                      transition={{ duration:0.8 }}
                      viewport={{ once:false, amount:0.3 }}
                    >
                <h2>
                  <span>01.</span> Strategic Software Architecture & Planning
                </h2>
                <p>
                  We define clear business objectives, analyze operational
                  requirements, and design a scalable software roadmap aligned
                  with efficiency, performance, and long term organizational
                  growth.
                </p>
              </motion.div>

              <motion.div
                      className="content-service1"
                      initial={{ opacity:0, y:60 }}
                      whileInView={{ opacity:1, y:0 }}
                      transition={{ duration:0.9 }}
                      viewport={{ once:false, amount:0.3 }}
                    >
                <h2>
                  <span>02.</span> High Performance Software Development &
                  Execution
                </h2>
                <p>
                  We build robust, secure, and high performing business software
                  engineered for reliability, clean architecture, and seamless
                  functionality across systems, teams, and workflows.
                </p>
              </motion.div>
              <motion.div
                      className="content-service1"
                      initial={{ opacity:0, y:60 }}
                      whileInView={{ opacity:1, y:0 }}
                      transition={{ duration:1 }}
                      viewport={{ once:false, amount:0.3 }}
                    >
                <h2>
                  <span>03.</span> Quality Assurance, Security & Scalability
                  Management
                </h2>
                <p>
                  We ensure long term stability through rigorous testing,
                  performance optimization, version control, and scalable
                  frameworks strengthening reliability, data security, and
                  sustainable system growth.
                </p>
              </motion.div>
            </div>
            <motion.p
                  initial={{ opacity:0, x:120 }}
                  whileInView={{ opacity:1, x:0 }}
                  transition={{ duration:0.9 }}
                  viewport={{ once:false, amount:0.3 }}
                >
              With 7xcoder.com, business software solutions deliver more
              than functionality they enable operational efficiency, scalable
              systems, and long-term business impact. Through strategic software
              architecture, high-quality development, and disciplined execution,
              we help organizations build reliable software platforms, optimize
              workflows, and transform digital operations into sustainable
              business value.
            </motion.p>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Page1;
