import React from "react";
import "../../page1.css";
import { motion } from "framer-motion";
import digimart from "../../../../assets/MarketAndAudienceResearch/images/1.png";

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
            Market & Audience Research
          </motion.h1>

          <motion.p
            className="sub-title-service1"
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: false, amount: 0.3 }}
          >
            Market & Audience Research Built to Uncover Insights and Drive
            Strategic Growth
          </motion.p>

          <motion.p
            className="service-para1-service1"
            initial={{ opacity: 0, x: 120 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9 }}
            viewport={{ once: false, amount: 0.3 }}
          >
            At 7xcoder.com, market and audience research is treated as a
            strategic foundation not just data collection. We deliver
            insight-driven research frameworks that uncover market dynamics,
            audience behavior, and competitive positioning to support growth
            decisions. Our structured, research-led approach ensures businesses
            gain clarity on customer expectations and market opportunities
            enabling stronger positioning, smarter communication, and measurable
            impact across competitive markets.
          </motion.p>

        </div>

        <div className="logo-box2-service1">

          <motion.img
            src={digimart}
            alt=""
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
                FROM DATA TO DECISION-MAKING
                <br /> <span>OUR MARKET RESEARCH METHODOLOGY</span>
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
                  <span>01.</span>Market & Audience Discovery
                </h2>
                <p>
                  We analyze market trends, customer behavior, and competitors
                  to build a clear research foundation for strategic growth
                  decisions.
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
                  <span>02.</span>Insight Analysis & Strategy
                </h2>
                <p>
                  We convert data into actionable insights through audience
                  segmentation and structured analysis to support informed
                  positioning and communication.
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
                  <span>03.</span>Research Optimization & Validation
                </h2>
                <p>
                  We refine strategies through performance tracking and feedback
                  analysis, ensuring adaptability and sustained competitive
                  advantage.
                </p>
              </motion.div>

            </div>

            <motion.p
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: false, amount: 0.3 }}
            >
              With 7xcoder.com, market and audience research goes beyond
              data collection it becomes a strategic intelligence system that
              drives informed positioning and long-term growth. We uncover
              actionable insights that clarify market opportunities, audience
              behavior, and competitive dynamics, helping businesses make
              confident decisions and convert research into measurable strategic
              impact.
            </motion.p>

          </div>

        </div>
      </main>
    </div>
  );
};

export default Page1;
