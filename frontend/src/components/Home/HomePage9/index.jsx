import React, { useState } from "react";
import { motion } from "framer-motion";
import "./index.css";
import { NavLink } from "react-router-dom";

import logo from "../../../assets/images/logo.png";
import igIcon from "../../../assets/images/instgram2.png";
import fbIcon from "../../../assets/images/facebook3.png";
import liIcon from "../../../assets/images/linkedin1.png";
import xIcon from "../../../assets/images/X1.png.png";
import ytIcon from "../../../assets/images/Youtube4.png";
import arrow from "../../../assets/images/Union-1.png";
import eclipse from "../../../assets/images/Ellipse.png";

const HomePage9 = () => {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [showPopup, setShowPopup] = useState(false);

  const handleSubscribe = async (e) => {
    e.preventDefault();

    if (!email.trim()) {
      setError("Please enter your email address.");
      return;
    }

    try {
      const response = await fetch(
        `${import.meta.env.VITE_BACKEND_URL}/api/subscribe`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ email }),
        },
      );

      const data = await response.json();

      if (response.ok) {
        setError("");
        setEmail("");
        setShowPopup(true);
      } else {
        setError(data.message || "Error subscribing. Please try again.");
      }
    } catch (err) {
      console.error("Subscription error:", err);
      setError("An error occurred. Please try again later.");
    }
  };
  return (
    <div className="page-root decalotype-font">
      {/* HERO */}
      {/* <img src={eclipse} className="eclipse" alt="" /> */}
      <section className="hero-section">
        <motion.div
          initial={{ y: -100 }}
          animate={{ y: 0 }}
          transition={{ type: "spring", stiffness: 200 }}
          className="hero-header-row"
        >
          <h1 className="hero-title">Let’s Build Your Growth Strategy</h1>

          <div className="arrow-box">
            <img className="arrow-icon" src={arrow} alt="" />
          </div>
        </motion.div>

        <div className="top-divider" />
      </section>

      {/* FOOTER */}
      <footer className="service-footer">
        <div className="footer-grid">
          {/* BRAND */}
          <motion.div
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="footer-col"
          >
            <div className="logo-section">
              <img src={logo} alt="7xcoder" className="brand-logo" style={{ width: "180px", height: "auto" }} />
              {/* text removed per user request */}
            </div>

            <p className="brand-text">
              At 7xcoder.com, we don’t just market brands we engineer
              digital growth systems. <br />
              Built with a global mindset and driven by performance, we help
              businesses cut through noise, capture attention, and convert
              audiences into loyal customers. <br />
              Founded in India and working with brands acoress industries our
              team of strategies, designer, marketers, and technologists blends
              creativity with data to deliver measurable results. From brand
              positioning and SEO to high-impact creatives, social media, and
              conversion focused campaigns every move is intentional, every
              outcome is tracked.We believe in clarity over clutter, strategy
              over shortcuts, andresults over promises.
              <br /> 7xcoder.com is where ambition meets execution and
              digital presence turn into digital dominace.
              <br /> Think Global. Build Strong. Grow with 7xcoder.
            </p>

            <div className="contact-block">
              {/* Co-founder/Future contact block ignored
              <span className="blue-label">For Sales</span>
              <p className="brand-text brand-contact">+91 85273 07240</p>

              <span className="blue-label">For Careers</span>
              <p className="brand-text brand-contact">+91 85273 07240</p>
              */}
            </div>
          </motion.div>

          {/* SERVICES */}
          <div className="footer-col">
            <h3 className="footer-header">SERVICES</h3>
            <motion.ul
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: false }}
              className="footer-list"
            >
              <li>
                <NavLink
                  style={{ color: "#ffffff" }}
                  to="/services/digital-marketing"
                >
                  Social Media Marketing (SMM)
                </NavLink>
              </li>
              <li>
                <NavLink
                  style={{ color: "#ffffff" }}
                  to="/services/seo-and-content-writing"
                >
                  Search Engine Optimization (SEO)
                </NavLink>
              </li>
              <li>
                <NavLink
                  style={{ color: "#ffffff" }}
                  to="/services/design-Creative-Services"
                >
                  Design & Creative Services
                </NavLink>
              </li>
              <li>
                <NavLink
                  style={{ color: "#ffffff" }}
                  to="/services/visual-effests"
                >
                  Visual Effects (VFX) & Post–Production
                </NavLink>
              </li>
              <li>
                <NavLink
                  style={{ color: "#ffffff" }}
                  to="/services/product-visualisation"
                >
                  3D Product Visualization
                </NavLink>
              </li>
              <li>
                <NavLink
                  style={{ color: "#ffffff" }}
                  to="/services/ui-ux-design"
                >
                  UI/UX Design
                </NavLink>
              </li>
              <li>
                <NavLink
                  style={{ color: "#ffffff" }}
                  to="/services/web-and-app-development-services"
                >
                  Web & App Development
                </NavLink>
              </li>
              <li>
                <NavLink style={{ color: "#ffffff" }} to="">
                  Custom Web Solutions
                </NavLink>
              </li>
              <li>
                <NavLink
                  style={{ color: "#ffffff" }}
                  to="/services/business-software-solutions"
                >
                  Business Software Solutions
                </NavLink>
              </li>
              <li>
                <NavLink style={{ color: "#ffffff" }} to="">
                  AI Voice Sales Assistant Integration
                </NavLink>
              </li>
              <li>
                <NavLink
                  style={{ color: "#ffffff" }}
                  to="/services/ecommerce-solutions"
                >
                  E-commerce Solutions
                </NavLink>
              </li>
              <li>
                <NavLink
                  style={{ color: "#ffffff" }}
                  to="/services/branding-strategy"
                >
                  Branding & Strategy
                </NavLink>
              </li>
              <li>
                <NavLink style={{ color: "#ffffff" }} to="">
                  Competitor & Market Research
                </NavLink>
              </li>
              <li>
                <NavLink style={{ color: "#ffffff" }} to="">
                  E-commerce Website Development
                </NavLink>
              </li>
            </motion.ul>
          </div>

          {/* EXPLORE */}
          <div className="footer-col">
            <h3 className="footer-header">EXPLORE</h3>
            <motion.ul
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: false }}
              className="footer-list"
            >
              <li>
                <NavLink style={{ color: "#ffffff" }} to="/">
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink style={{ color: "#ffffff" }} to="/about">
                  About
                </NavLink>
              </li>
              <li>
                <NavLink style={{ color: "#ffffff" }} to="/services">
                  Services
                </NavLink>
              </li>
              <li>
                <NavLink style={{ color: "#ffffff" }} to="/blog">
                  Blogs
                </NavLink>
              </li>
              <li>
                <NavLink style={{ color: "#ffffff" }} to="">
                  Company
                </NavLink>
              </li>
              <li>
                <NavLink style={{ color: "#ffffff" }} to="">
                  Our Team
                </NavLink>
              </li>
              <li>
                <NavLink style={{ color: "#ffffff" }} to="">
                  Terms & Conditions
                </NavLink>
              </li>
              <li>
                <NavLink style={{ color: "#ffffff" }} to="">
                  Privacy Policy
                </NavLink>
              </li>
              <li>
                <NavLink style={{ color: "#ffffff" }} to="/careers">
                  Careers
                </NavLink>
              </li>
              <li>
                <NavLink style={{ color: "#ffffff" }} to="/contact">
                  Contact Us
                </NavLink>
              </li>
              <li>
                <NavLink style={{ color: "#ffffff" }} to="">
                  Digital Services
                </NavLink>
              </li>
              <li>
                <NavLink style={{ color: "#ffffff" }} to="">
                  IT Services
                </NavLink>
              </li>
            </motion.ul>
          </div>

          {/* JOURNEY */}
          <motion.div
            initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="footer-col journey-col"
          >
            <h3 className="footer-header">Start Your Growth Journey</h3>

            <p className="address-text">
              Bahlolpur sec-63A noida,up
            </p>
            <p className="footer-para2">
              Our office serves as a hub for strategy, creativity, and digital
              innovation, where ideas are transformed into impactful digital
              solutions. From this central workspace, our team collaborates
              closely with clients across regions and industries, ensuring
              seamless communication, reliable support, and consistent
              execution. We focus on building scalable strategies, delivering
              measurable results, and driving long-term growth through data
              driven insights, creative excellence, and performance oriented
              digital solutions.
            </p>

            <div className="contact-block">
              <span className="blue-label">For Sales</span>
              <p className="brand-text brand-contact">
                7xcoder.com@gmail.com
              </p>

              <span className="blue-label">For Careers</span>
              <p className="brand-text brand-contact">7xcoder.com@gmail.com</p>
            </div>

            {/* FORM — CORRECT POSITION */}
            <div className="subscribe-block">
              <p className="subscribe-title">Stay ahead of the curve.</p>
              <p className="subscribe-text">
                Subscribe for updates, trends, and insights.
              </p>

              <form className="subscribe-form" onSubmit={handleSubscribe}>
                <input
                  type="email"
                  placeholder="Enter your work email"
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value);
                    setError("");
                  }}
                />

                <button type="submit">Subscribe</button>
              </form>
              {error && (
                <p
                  style={{
                    color: "red",
                    fontSize: "13px",
                    marginTop: "6px",
                  }}
                >
                  {error}
                </p>
              )}
            </div>
          </motion.div>
        </div>

        {/* BOTTOM */}
        <div className="bottom-divider" />

        <div className="footer-bottom">
          {/* Socials temporarily hidden
          <div className="socials-footer">
            <a
              href="https://www.instagram.com/7xcoder_media/"
              target="_blank"
            >
              <img src={igIcon} alt="Instagram" />
            </a>
            <a href="https://www.facebook.com/7xcodermedia" target="_blank">
              <img src={fbIcon} alt="Facebook" />
            </a>
            <a
              href="https://www.linkedin.com/company/7xcoder-media/posts/?feedView=all"
              target="_blank"
            >
              <img src={liIcon} alt="LinkedIn" />
            </a>
            <a href="https://x.com/7xcodermedia" target="_blank">
              <img src={xIcon} alt="X" />
            </a>
            <a href="https://www.youtube.com/@7xcodermedia" target="_blank">
              <img src={ytIcon} alt="YouTube" />
            </a>
          </div>
          */}

          <p>© Copyright 2026 by 7xcoder.com</p>
        </div>
      </footer>
      {showPopup && (
        <div className="popup-overlay">
          <div className="popup-box">
            <h3>Thank You!</h3>
            <p>You have successfully subscribed.</p>
            <button onClick={() => setShowPopup(false)}>Close</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default HomePage9;
