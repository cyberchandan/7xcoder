import React from "react";
import { motion } from "framer-motion";
import "../../page1.css";
import uiux from "../../../../assets/UIUXDrivenDevelopment/images/1.png";

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
            UI-UX Driven Development
          </motion.h1>

          <motion.p
            className="sub-title-service1"
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: false, amount: 0.3 }}
          >
            UI–UX Centered Development Solutions. Optimized for Performance and Growth.
          </motion.p>

          <motion.p
            className="service-para1-service1"
            initial={{ opacity: 0, x: 120 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9 }}
            viewport={{ once: false, amount: 0.3 }}
          >
            At 7xcoder.com, UI–UX driven development begins with experience,
            not code. We design and build digital interfaces where usability,
            interaction flow, and visual clarity work together to create
            scalable, high-performance digital products across web and app
            platforms. Our approach combines human-centered design, structured
            development, and performance optimization crafted for brands that
            demand consistency, scalability, and measurable experience-led
            impact.
          </motion.p>

        </div>

        <div className="logo-box2-service1">

          <motion.img
            src={uiux}
            alt="UI UX Development"
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
                EXPERIENCE DRIVEN DESIGN. OUR METHODOLOGY <br />
                <span>HOW WE DESIGN EXPERIENCE LED DIGITAL SOLUTIONS</span>
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
                  <span>01.</span> User Insight & Experience Strategy
                </h2>
                <p>
                  We analyze user behavior, business intent, and interaction
                  patterns to define a clear experience strategy that guides
                  design decisions and long-term scalability.
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
                  <span>02.</span> Interface Design & Experience Execution
                </h2>
                <p>
                  We craft intuitive interfaces and seamless interaction flows,
                  combining visual clarity with structured development to
                  deliver consistent experiences across platforms.
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
                  <span>03.</span> Validation, Optimization & Experience Scalability
                </h2>
                <p>
                  We refine and strengthen experiences through usability
                  testing, performance optimization, and scalable design
                  systems ensuring reliability, consistency, and long-term
                  value.
                </p>
              </motion.div>

            </div>

            <motion.p
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: false, amount: 0.3 }}
            >
              With 7xcoder.com, UI–UX driven development is focused on
              shaping meaningful digital experiences, not just delivering
              features. We design experience-led interfaces that scale smoothly,
              perform consistently, and support long-term business outcomes. By
              combining user centered design thinking, refined execution, and
              performance focused development, we help brands create reliable
              digital products, elevate user engagement, and turn design
              quality into lasting digital value.
            </motion.p>

          </div>
        </div>
      </main>
    </div>
  );
};

export default Page1;
