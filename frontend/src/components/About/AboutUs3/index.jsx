// import { motion } from "framer-motion";
import { motion, useMotionValue, useSpring, useInView } from "framer-motion";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect, useRef } from "react";
import React from "react";
import "./index.css";

import hero from "../../../assets/images/chandan.jpg";
import vector from "../../../assets/images/Vector 3.png";
import ellipse from "../../../assets/images/Ellipse 6.png";

import star from "../../../assets/images/Group 202.png";
import hand from "../../../assets/images/Group 203.png";
import bulb from "../../../assets/images/Group 204.png";
import human from "../../../assets/images/Group 205.png";
import arrow from "../../../assets/images/Union-1.png";
import { NavLink } from "react-router";

const AboutUs3 = () => {
  useEffect(() => {
  AOS.init({
    duration: 1000,
    once: true,
  });
}, []);
const Counter = ({ value, duration = 5000 }) => {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          let startTime = null;

          const number = parseFloat(value);
          const suffix = value.replace(/[0-9.]/g, "");

          const animate = (timestamp) => {
            if (!startTime) startTime = timestamp;

            const progress = timestamp - startTime;
            const current = Math.min((progress / duration) * number, number);

            if (ref.current) {
              ref.current.textContent =
                Number.isInteger(number)
                  ? Math.floor(current) + suffix
                  : current.toFixed(1) + suffix;
            }

            if (progress < duration) {
              requestAnimationFrame(animate);
            }
          };

          requestAnimationFrame(animate);
        } else {
          // 🔁 RESET when out of view
          if (ref.current) {
            ref.current.textContent = "0";
          }
        }
      },
      { threshold: 0.3 }
    );

    if (el) observer.observe(el);

    return () => observer.disconnect();
  }, [value, duration]);

  return <span ref={ref}>0</span>;
};
  return (
    <div className="about_us_2">
      {/* <img src={ellipse} alt="ellipse" className="ellipse" /> */}
      {/* <img src={vector} alt="vector" className="vector" /> */}
      {/* Co-founder section - commented out for future use
      <main className="about_us">
        <motion.div
          initial={{ opacity: 0, x: -120 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: false, amount: 0.3 }}
          className="info"
        >
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
            <NavLink to="/contact" className="read-more-btn">
              Read More
              <img src={arrow} alt="arrow" className="read-more-icon" />
            </NavLink>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 120 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: false, amount: 0.3 }}
          className="title_box"
        >
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
          initial={{ opacity: 0, scale: 0.5 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: false, amount: 0.3 }}
          className="hero_box"
        >
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
      <div className="blue">
        <p>Innovation That Sets Us Apart</p>
      </div>
      <div className="divider-about3"></div>
      <div className="card_box">
        <div className="card">
          <motion.img
            initial={{ y: -120 }}
            whileInView={{ y: 0 }}
            transition={{ type: "spring", stiffness: 200 }}
            viewport={{ once: false, amount: 0.3 }}
            src={star}
            alt="star"
          />
          <motion.p
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: false, amount: 0.3 }}
          >
            6+ Years of Delivering Smart Digital Solutions
          </motion.p>
        </div>
        <div className="card">
          <motion.img
            initial={{ y: -120 }}
            whileInView={{ y: 0 }}
            transition={{ type: "spring", stiffness: 200 }}
            viewport={{ once: false, amount: 0.3 }}
            src={hand}
            alt="hand"
          />
          <motion.p
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: false, amount: 0.3 }}
          >
            A Team Driving Creative Intelligence
          </motion.p>
        </div>
        <div className="card">
          <motion.img
            initial={{ y: -120 }}
            whileInView={{ y: 0 }}
            transition={{ type: "spring", stiffness: 200 }}
            viewport={{ once: false, amount: 0.3 }}
            src={bulb}
            alt="bulb"
          />
          <motion.p
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: false, amount: 0.3 }}
          >
            Smart Execution for Smarter Results
          </motion.p>
        </div>
        <div className="card">
          <motion.img
            initial={{ y: -120 }}
            whileInView={{ y: 0 }}
            transition={{ type: "spring", stiffness: 200 }}
            viewport={{ once: false, amount: 0.3 }}
            src={human}
            alt="human"
          />
          <motion.p
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: false, amount: 0.3 }}
          >
            Turning Ambition Into Measurable Success
          </motion.p>
        </div>
      </div>
      <div className="divider-about3"></div>
      <div className="digital_mart">
        <div className="marquee">
          <div className="track">
            <span className="star">*</span>
            <span className="tourney">Digital Marketing</span>

            <span className="star">*</span>
            <span>Design & Creative</span>

            <span className="star">*</span>
            <span className="tourney">Web & App Development</span>

            <span className="star">*</span>
            <span>Business Software Solutions</span>

            <span className="star">*</span>
            <span className="tourney">E-commerce Solutions</span>

            <span className="star">*</span>
            <span>Branding & Strategy</span>
          </div>
          <div className="track">
            <span className="star">*</span>
            <span className="tourney">Digital Marketing</span>

            <span className="star">*</span>
            <span>Design & Creative</span>

            <span className="star">*</span>
            <span className="tourney">Web & App Development</span>

            <span className="star">*</span>
            <span>Business Software Solutions</span>

            <span className="star">*</span>
            <span className="tourney">E-commerce Solutions</span>

            <span className="star">*</span>
            <span>Branding & Strategy</span>
          </div>
        </div>
      </div>

      <div className="divider-about3"></div>
      <div className="about_us3_end">
        <div className="div-end">
          <h1><Counter value="178+" /></h1>
          <motion.p
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: false, amount: 0.3 }}
          >
            {" "}
            Success Campaigns
          </motion.p>
        </div>
        <div className="div-end">
          <h1><Counter value="200+" /></h1>
          <motion.p
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: false, amount: 0.3 }}
          >
            Brands Empowered
          </motion.p>
        </div>
        <div className="div-end">
          <h1><Counter value="24/7" />7</h1>
          <motion.p
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: false, amount: 0.3 }}
          >
            Support Availability
          </motion.p>
        </div>
        <div className="div-end">
          <h1><Counter value="100+" /></h1>
          <motion.p
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: false, amount: 0.3 }}
          >
            Optimised Websites
          </motion.p>
        </div>
        <div className="div-end">
          <h1><Counter value="96.7%" /></h1>
          <motion.p
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: false, amount: 0.3 }}
          >
            Continued Partnerships
          </motion.p>
        </div>
      </div>
    </div>
  );
};

export default AboutUs3;
