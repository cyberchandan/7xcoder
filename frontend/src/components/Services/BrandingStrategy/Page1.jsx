import "../animation.css";
import "../page1.css";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import digimart from "../../../assets/branding-and-strategy/images/1.png";

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
            Branding & Strategy
          </motion.h1>

          <motion.p
            className="sub-title-service1"
            style={{ width: "100%" }}
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: false, amount: 0.3 }}
          >
            Branding & Strategy Built to Drive Market Presence and Long Term
            Growth
          </motion.p>

          <motion.p
            className="service-para1-service1"
            style={{ width: "100%" }}
            initial={{ opacity: 0, x: 120 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9 }}
            viewport={{ once: false, amount: 0.3 }}
          >
            At 7xcoder.com, branding and strategy are treated as long term
            business assets, not just visual identity or messaging. We craft
            scalable, insight driven brand strategies and identities that
            strengthen market positioning, build credibility, and drive
            sustained business growth. Our approach is structured, research led,
            and performance focused, built for organizations that value clarity,
            consistency, and measurable brand impact across their digital and
            market presence.
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
                HOW BRANDING & STRATEGY WORK
                <br />
                <span>HOW WE BUILD BRANDING & STRATEGY</span>
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
                  <span>01.</span> Strategic Brand Discovery & Planning
                </h2>
                <p>
                  We define clear brand objectives, analyze market positioning,
                  audience insights, and competitive landscape, and create a
                  scalable brand strategy roadmap focused on clarity,
                  differentiation, and long term brand growth.
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
                  <span>02.</span> Brand Strategy Development & Execution
                </h2>
                <p>
                  We craft purpose driven brand strategies, positioning
                  frameworks, and visual identity systems engineered for
                  consistency, relevance, and strong market impact across
                  digital and offline touchpoints.
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
                  <span>03.</span> Brand Governance, Consistency & Scalability
                </h2>
                <p>
                  We ensure long-term brand stability through structured
                  guidelines, consistency frameworks, quality checks, and
                  scalable brand systems that support growth, recognition, and
                  sustained brand credibility.
                </p>
              </motion.div>
            </div>

            <motion.p
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: false, amount: 0.3 }}
            >
              With 7xcoder.com, branding and strategy deliver more than
              visual identity they enable clear market positioning, consistent
              brand experiences, and long term business growth. Through
              strategic brand planning, insight driven positioning, and
              disciplined execution, we help businesses build credible brand
              foundations, strengthen market presence, and convert brand
              strategy into sustainable business value.
            </motion.p>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Page1;
