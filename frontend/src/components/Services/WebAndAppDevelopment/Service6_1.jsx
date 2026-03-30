import "../page1.css";

// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";

import digimart from "../../../assets/Web-and-app-development-services/image1.png";

const Service6_1 = () => {
  return (
    <section className="service_1_root">
      <main className="hero-box-service1">

        <div className="title-box-service1">

          <motion.h1
            className="title2-service1"
            initial={{ opacity:0, y:-60 }}
            whileInView={{ opacity:1, y:0 }}
            transition={{ duration:0.8 }}
            viewport={{ once:false, amount:0.3 }}
          >
            Web & App Development
          </motion.h1>

          <motion.p
            className="sub-title-service1"
            initial={{ opacity:0, y:60 }}
            whileInView={{ opacity:1, y:0 }}
            transition={{ duration:0.8 }}
            viewport={{ once:false, amount:0.3 }}
          >
            Web & App Development Solutions. Engineered for Performance and Scale.
          </motion.p>

          <motion.p
            className="service-para1-service1"
            initial={{ opacity:0, x:-120 }}
            whileInView={{ opacity:1, x:0 }}
            transition={{ duration:0.9 }}
            viewport={{ once:false, amount:0.3 }}
          >
            At 7xcoder.com, web and app development are treated as strategic digital assets, not just technical builds. We engineer scalable websites and applications that deliver seamless user experiences, strong performance, and long term business value across digital platforms.
            Our work is intentional, structured, and performance driven built for organizations that value reliability, scalability, and measurable digital impact.
          </motion.p>

        </div>

        <div className="logo-box2-service1">

          <motion.img
            src={digimart}
            alt="E-commerce"
            initial={{ opacity:0, scale:0.6 }}
            whileInView={{ opacity:1, scale:1 }}
            transition={{ duration:0.8 }}
            viewport={{ once:false, amount:0.3 }}
          />

          <div className="right-content-service1">

            <motion.div
              className="social-media-service1"
              initial={{ opacity:0, x:-120 }}
              whileInView={{ opacity:1, x:0 }}
              transition={{ duration:0.8 }}
              viewport={{ once:false, amount:0.3 }}
            >
              <p>
                HOW WEB & APP DEVELOPMENT WORKS <br />
                <span>HOW OUR WEB & APP DEVELOPMENT PROCESS WORKS</span>
              </p>
            </motion.div>

            <div className="content-box-service1">

              <motion.div
                className="content-service1"
                initial={{ opacity:0, y:80 }}
                whileInView={{ opacity:1, y:0 }}
                transition={{ duration:0.8 }}
                viewport={{ once:false, amount:0.3 }}
              >
                <h2><span>01.</span>Strategic Development Framework</h2>
                <p>
                  We define clear digital objectives, understand business requirements, and architect a scalable development roadmap aligned with long-term growth, performance, and usability goals.
                </p>
              </motion.div>

              <motion.div
                className="content-service1"
                initial={{ opacity:0, y:80 }}
                whileInView={{ opacity:1, y:0 }}
                transition={{ duration:0.9 }}
                viewport={{ once:false, amount:0.3 }}
              >
                <h2><span>02.</span>High Performance Build & Execution</h2>
                <p>
                  We develop robust, secure, and high performing websites and applications engineered for seamless user experience, clean architecture, and consistent functionality across devices and platforms.
                </p>
              </motion.div>

              <motion.div
                className="content-service1"
                initial={{ opacity:0, y:80 }}
                whileInView={{ opacity:1, y:0 }}
                transition={{ duration:1 }}
                viewport={{ once:false, amount:0.3 }}
              >
                <h2><span>03.</span>Quality Assurance & Scalability Governance</h2>
                <p>
                  We ensure code quality, performance optimization, and ongoing stability through structured testing, version control, and scalable frameworks strengthening reliability, security, and long term digital sustainability.
                </p>
              </motion.div>

            </div>

            <motion.p
              className="bottom-para-service1"
              initial={{ opacity:0, x:120 }}
              whileInView={{ opacity:1, x:0 }}
              transition={{ duration:0.9 }}
              viewport={{ once:false, amount:0.3 }}
            >
              With 7xcoder.com, web and app development delivers more than functionality it creates scalable digital experiences, consistent performance, and long term business impact. Through strategic architecture, high quality development, and disciplined execution, we help brands build reliable platforms, enhance user experience, and transform digital presence into lasting value.
            </motion.p>

          </div>
        </div>

      </main>
    </section>
  );
};

export default Service6_1;
