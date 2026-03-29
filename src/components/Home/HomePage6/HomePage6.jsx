import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "./HomePage6.css";
import { motion } from "framer-motion";

import wordpress from "../../../assets/images/Group 120.png";
import googlePartner from "../../../assets/images/Group 126.png";
import meta from "../../../assets/images/Group 121.png";
import bing from "../../../assets/images/Group 122.png";
import html5 from "../../../assets/images/Group 123.png";
import linkedin from "../../../assets/images/Group 124.png";
import googleAds from "../../.././assets/images/Group 125.png";

import dotIcon1 from "../../../assets/images/Group 129.png";
import dotIcon2 from "../../../assets/images/Group 130.png";
import dotIcon3 from "../../../assets/images/Group 131.png";
import growthArrow from "../../../assets/images/growth arrow 1.png";

export default function HomePage6() {
  const logos = [
    wordpress,
    googlePartner,
    meta,
    bing,
    html5,
    linkedin,
    googleAds,
  ];

  return (
    <section className="partners-home6">
      <div className="top-line-home6" />

      <motion.div
        initial={{ opacity: 0, x: 100 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        className="heading-home6"
      >
        <h1>Powered by Strong Partnerships</h1>
        <p>Partners & Certificates</p>
      </motion.div>

      {/* ===== INFINITE LOGO SCROLLER ===== */}
      <div className="logo-slider-home6">
        <div className="logo-track-home6">
          {[...logos, ...logos].map((logo, i) => (
            <div className="logo-pill-home6" key={i}>
              <img src={logo} alt="partner" />
            </div>
          ))}
        </div>
      </div>

      <div className="cards-wrapper-home6">
        <img src={growthArrow} className="arrow-bg-home6" alt="" />

        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: false }}
          className="cards-row-home6"
        >
          <div className="card-item-home6">
            <img src={dotIcon1} className="card-dot-home6" alt="" />
            <div className="info-card-home6">
              <h3>Data & Intelligence</h3>
              <p>
                We analyze patterns, user behavior, and performance metrics to
                uncover what truly drives results. Every insight fuels smarter
                decisions, optimized campaigns, and sustainable brand growth. At
                7xcoder.com, data powers precision, performance, and
                progress.
              </p>
            </div>
          </div>

          <div className="card-item-home6">
            <img src={dotIcon2} className="card-dot-home6" alt="" />
            <div className="info-card-home6 active-home6">
              <h3>Design That Works</h3>
              <p>
                We don’t design for trends—we design for results. Every pixel is
                purposeful, every interaction intentional. Design at 7xcoder
                Media is engineered to perform.
              </p>
            </div>
          </div>

          <div className="card-item-home6">
            <img src={dotIcon3} className="card-dot-home6" alt="" />
            <div className="info-card-home6">
              <h3>Strategy & Planning</h3>
              <p>
                We develop data-backed digital strategies that align brand
                vision with customer behavior and market dynamics. Our approach
                ensures every campaign, channel, and investment works together
                to drive consistent, scalable results.
              </p>
            </div>
          </div>
        </motion.div>
      </div>

      <motion.p
        initial={{ opacity: 0, x: -100 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        className="footer-text-home6"
      >
        We don’t guess—we engineer growth. Every engagement begins with Data &
        Intelligence, where we decode real user behavior, market dynamics, and
        performance signals to uncover where true opportunities exist. These
        insights directly inform Design That Works—intuitive, conversion-focused
        experiences built to guide attention, remove friction, and drive action.
        Finally, Strategy & Planning aligns channels, capital, timelines, and
        execution into a clear, scalable roadmap. This three-step system
        eliminates guesswork, minimizes risk, and transforms insight into
        execution and execution into measurable ROI. It’s not a one-off campaign
        or a creative experiment—it’s a repeatable, performance-led growth
        engine built to scale brands with precision and confidence.
      </motion.p>
    </section>
  );
}
