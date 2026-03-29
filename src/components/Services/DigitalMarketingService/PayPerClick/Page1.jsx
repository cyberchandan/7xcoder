import "../../page1.css";
import { motion } from "framer-motion";
import digimart from "../../../../assets/Pay_Per_Click/images/1.png";

const Service3_1 = () => {
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
            Pay Per Click ( PPC )
          </motion.h1>

          <motion.p
            className="sub-title-service1"
            style={{ width: "100%" }}
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: false, amount: 0.3 }}
          >
            Data Driven PPC Strategy. Built for Scalable Performance.
          </motion.p>

          <motion.p
            className="service-para1-service1"
            style={{ width: "100%" }}
            initial={{ opacity: 0, x: 120 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9 }}
            viewport={{ once: false, amount: 0.3 }}
          >
            At 7xcoder.com, Pay Per Click advertising is treated as a strategic growth engine, not just a traffic tactic. We design precision driven PPC campaigns that maximize visibility, control acquisition costs, & deliver measurable returns across high intent digital channels. Our approach is analytical & performance led built for organizations that value accountability, scalability, & ROI focused execution, with every campaign optimized to convert intent into action while protecting long term brand value.
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
                HOW PPC ADVERTISING WORKS
                <br /> <span>HOW PAY PER CLICK ADVERTISING WORKS</span>
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
                  <span>01.</span> Strategic Campaign Architecture
                </h2>
                <p>
                  We define clear performance objectives, analyze search intent and audience behavior, and select the most effective platforms to build a structured, ROI driven PPC campaign framework.
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
                  <span>02.</span>Precision Ad Creative & Messaging
                </h2>
                <p>
                  We develop high impact, conversion focused ad creatives and copy aligned with your brand engineered to capture intent, maximize relevance, and drive qualified actions across paid channels.
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
                  <span>03.</span> Performance Optimization & Conversion Control
                </h2>
                <p>
                We continuously monitor performance, optimize bids, targeting, and creatives, and refine conversion paths to ensure efficiency, scalability, and sustained return on ad spend.
                </p>
              </motion.div>

            </div>

            <motion.p
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: false, amount: 0.3 }}
            >
              With 7xcoder.com, Pay Per Click advertising delivers more than traffic it drives controlled growth, qualified demand, & measurable revenue impact. Through strategic campaign planning, precision targeting, & performance driven optimization, we help brands capture high intent audiences, maximize efficiency, & convert ad spend into sustained business value.
            </motion.p>

          </div>

        </div>
      </main>
    </div>
  );
};

export default Service3_1;
