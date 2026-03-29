import React from "react";
import { motion } from "framer-motion";
import "./index.css";

import hero from "../../../assets/images/chandan.jpg";

import arrow from "../../../assets/images/Union-1.png";
import { NavLink } from "react-router";


import vectorImg from "../../../assets/images/Vector 3.png";
import ellipseImg from "../../../assets/images/Ellipse 6.png";

const style = {
  backgroundImage: `
    url(${vectorImg}),
    url(${ellipseImg}),
    linear-gradient(90deg, #000103, #000814, #01112c, #00307c)
  `,
  backgroundRepeat: "no-repeat, no-repeat, no-repeat",
  backgroundPosition: "right 10% top, left 0px top 0px, center",
  backgroundSize: `
    clamp(900px, 90vw, 1400px) clamp(500px, 60vw, 830px),
    clamp(260px, 30vw, 300px) 300px,
    cover
  `
};

const AboutUs3 = () => {


  
  return (
    
    <div className="about_us_2" style={style}>
      {/* Co-founder section - commented out for future use
      <main className="about_us">
        <motion.div 
          initial={{ opacity: 0, x: -100 }}
  whileInView={{ opacity: 1, x: 0 }}
  transition={{ duration: 0.8 }}
        className="info">
          <p>
            As CEO & Operations Head, I oversee end-to-end operations including
            delivery planning, workflow optimization, quality assurance,
            resource allocation, and performance tracking. I am accountable for
            building systems that ensure predictable delivery, cost efficiency,
            and operational transparency—critical elements for scaling a global
            digital agency. My role also includes defining operational KPIs,
            managing risk, and continuously improving internal processes to
            support growth at scale
          </p>
          <p>
            I work closely with leadership, clients, and cross-functional teams
            to maintain alignment between business objectives and execution
            realities. My analytical mindset and attention to operational detail
            allow me to proactively identify bottlenecks, streamline workflows,
            and implement solutions that improve productivity and profitability.
            I also lead the adoption of modern tools, automation frameworks, and
            process documentation to ensure consistency and operational
            maturity.
          </p>
          <div className="read-more-wrapper">
            <NavLink to='/contact' className="read-more-btn-home4">

              Read More
              <img src={arrow} alt="arrow" className="read-more-icon" />
            </NavLink>
          </div>
        </motion.div>
        <motion.div 
          initial={{ opacity: 0, x: -100 }}
  whileInView={{ opacity: 1, x: 0 }}
  transition={{ duration: 0.8 }}
        className="title_box">
          <p id="hero_title" className="hero_title">
            Chandan Kumar
          </p>
          <p id="hero_job">Founder & CEO</p>
          <p className="first_letter">
            I am the CEO & Head of Operations at 7xcoder.com, responsible
            for driving operational strategy, execution governance, and scalable
            systems that support the company’s long-term growth and global
            ambitions. With a strong background in software engineering and over
            five years of professional experience, I bring a technology led,
            process driven, and performance oriented approach to managing
            complex digital operations.
          </p>
          <p>
            My engineering foundation enables me to design and implement
            structured operational frameworks that align business strategy with
            execution. At 7xcoder.com, I ensure that digital marketing
            initiatives are not only creative and data driven but also
            technically robust, scalable, and consistently deliver measurable
            outcomes. I play a central role in translating strategic vision into
            repeatable execution models across teams <br /> and clients
          </p>
          <p>
            I bring deep expertise in performance marketing, SEO, growth
            funnels, and analytics driven decision making. Certified in Google
            Ads and Google Analytics, I work hands-on with advanced platforms
            including SEMrush, Google Keyword Planner, and Google Analytics to
            drive acquisition, retention, and scalable digital growth.
          </p>
        </motion.div>
        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }}
  whileInView={{ opacity: 1, scale: 1 }}
  transition={{ duration: 0.8 }}
        className="hero_box">
          <img
            src={hero}
            width="346"
            height="520"
            alt="hero"
            className="hero_img"
          />
        </motion.div>
      </main>
      */}
      
    </div>
    
  );
};

export default AboutUs3;
