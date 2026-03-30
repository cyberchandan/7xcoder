import React, { useState } from "react";
import "./index.css";
import { NavLink, useLocation } from "react-router-dom";

import logo from "../../../assets/images/logo.png";
import igIcon from "../../../assets/images/instgram2.png";
import fbIcon from "../../../assets/images/facebook3.png";
import liIcon from "../../../assets/images/linkedin1.png";
import xIcon from "../../../assets/images/X1.png.png";
import ytIcon from "../../../assets/images/Youtube4.png";
import arrow from "../../../assets/images/Union-1.png";
import eclipse from "../../../assets/images/Ellipse.png";

const AboutUs5 = () => {
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
        <div className="hero-header-row">
          <h1 className="hero-title">Let’s Build Your Growth Strategy</h1>

          <div className="arrow-box">
            <img className="arrow-icon" src={arrow} alt="" />
          </div>
        </div>

        <div className="top-divider" />
      </section>

      {/* FOOTER */}
      <footer className="service-footer">
        <div className="footer-grid">
          {/* BRAND */}
          <div className="footer-col">
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
          </div>

          {/* SERVICES */}
          <div className="footer-col">
            <h3 className="footer-header">SERVICES</h3>
            <ul className="footer-list">
              <li>Social Media Marketing (SMM)</li>
              <li>Search Engine Optimization (SEO)</li>
              <li>Design & Creative Services</li>
              <li>Visual Effects (VFX) & Post–Production</li>
              <li>3D Product Visualization</li>
              <li>UI/UX Design</li>
              <li>Web & App Development</li>
              <li>Custom Web Solutions</li>
              <li>Business Software Solutions</li>
              <li>AI Voice Sales Assistant Integration</li>
              <li>E-commerce Solutions</li>
              <li>Branding & Strategy</li>
              <li>Competitor & Market Research</li>
              <li>E-commerce Website Development</li>
            </ul>
          </div>

          {/* EXPLORE */}
          <div className="footer-col">
            <h3 className="footer-header">EXPLORE</h3>
            <ul className="footer-list">
              <li>Home</li>
              <li>About</li>
              <li>Services</li>
              <li>Blogs</li>
              <li>Company</li>
              <li>Our Team</li>
              <li>Terms & Conditions</li>
              <li>Privacy Policy</li>
              <li>Careers</li>
              <li>Contact Us</li>
              <li>Digital Services</li>
              <li>IT Services</li>
            </ul>
          </div>

          {/* JOURNEY */}
          <div className="footer-col journey-col">
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
          </div>
        </div>

        {/* BOTTOM */}
        <div className="bottom-divider" />

        <div className="footer-bottom">
          {/* Socials temporarily hidden
          <div className="socials">
            <a href="https://www.instagram.com/">
              <img src={igIcon} alt="Instagram" />
            </a>
            <a href="https://www.facebook.com">
              <img src={fbIcon} alt="Facebook" />
            </a>
            <a href="https://www.linkedin.com">
              <img src={liIcon} alt="LinkedIn" />
            </a>
            <a href="https://x.com/">
              <img src={xIcon} alt="X" />
            </a>
            <a href="https:/www.youtube.com">
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

export default AboutUs5;
