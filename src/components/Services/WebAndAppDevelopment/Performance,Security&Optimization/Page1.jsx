import { motion } from "framer-motion";
import "../../page1.css";
import digimart from "../../../../assets/PerformanceSecurity&Optimization/image1.png";

const Page1 = () => {
  return (
    <section className="service_1_root">
      <main className="hero-box-service1">
        <div className="title-box-service1">

          <motion.h1
            className="title2-service1"
            initial={{ opacity: 0, y: -60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: false, amount: 0.3 }}
          >
            Performance, Security & Optimization
          </motion.h1>

          <motion.p
            className="sub-title-service1"
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: false, amount: 0.3 }}
          >
            Built for Speed, Protected by Design, Optimized for Growth.
          </motion.p>

          <motion.p
            className="service-para1-service1"
            initial={{ opacity: 0, x: 120 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9 }}
            viewport={{ once: false, amount: 0.3 }}
          >
            At 7xcoder.com, performance, security, and optimization form the foundation of every digital solution we build. We enhance speed, stability, and resilience to ensure platforms remain fast, secure, and reliable at scale. Through performance tuning, proactive security, and continuous optimization, we eliminate bottlenecks, strengthen protection, and deliver seamless user experiences with long-term operational efficiency.
          </motion.p>

        </div>

        <div className="logo-box2-service1">

          <motion.img
            src={digimart}
            alt="E-commerce"
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: false, amount: 0.3 }}
          />

          <div className="right-content-service1">

            <motion.div
              className="social-media-service1"
              initial={{ opacity: 0, x: -120 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: false, amount: 0.3 }}
            >
              <p>
                HOW Performance, Security & Optimization <br />
                <span>THE PROCESS BEHIND PERFORMANCE, SECURITY & OPTIMIZATION</span>
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
                <h2><span>01.</span>Performance Strategy & System Assessment</h2>
                <p>We analyze system architecture, identify bottlenecks, and align performance goals to ensure speed, efficiency, and scalability.</p>
              </motion.div>

              <motion.div
                className="content-service1"
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.9 }}
                viewport={{ once: false, amount: 0.3 }}
              >
                <h2><span>02.</span>Security & Optimization Implementation</h2>
                <p>We strengthen security layers and optimize code, databases, and infrastructure to deliver stable, fast, and protected systems.</p>
              </motion.div>

              <motion.div
                className="content-service1"
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
                viewport={{ once: false, amount: 0.3 }}
              >
                <h2><span>03.</span>Continuous Monitoring & Improvement</h2>
                <p>We ensure long-term reliability through ongoing monitoring, performance audits, and proactive enhancements for sustained growth and security.</p>
              </motion.div>

            </div>

            <motion.p
              className="bottom-para-service1"
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: false, amount: 0.3 }}
            >
              With 7xcoder.com, Performance, Security & Optimization go beyond technical enhancements they establish the foundation for resilient, high performing digital ecosystems. Through intelligent performance engineering, proactive security frameworks, & optimization, we empower brands to deliver faster experiences, safeguard digital assets, & sustain long term operational excellence. Our approach transforms digital infrastructure into a secure, scalable, & future ready competitive advantage.
            </motion.p>

          </div>
        </div>
      </main>
    </section>
  );
};

export default Page1;
