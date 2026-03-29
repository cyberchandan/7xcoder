import "../../page1.css";
import { motion } from "framer-motion";
import digimart from "../../../../assets/SystemIntegrationServicesEcom/images/1.png";

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
           System Integration Services
          </motion.h1>

          <motion.p
            className="sub-title-service1"
            style={{ width: "100%" }}
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: false, amount: 0.3 }}
          >
             High-Performance Integration Frameworks. Built for Stability & Scale.
          </motion.p>

          <motion.p
            className="service-para1-service1"
            style={{ width: "100%" }}
            initial={{ opacity: 0, x: 120 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9 }}
            viewport={{ once: false, amount: 0.3 }}
          >
At 7xcoder.com, System Integration Services are strategic enablers of unified digital ecosystems not just technical connections. We design and implement scalable, secure, high-performance integration frameworks that connect platforms, synchronize data, and streamline cross-system operations. Through intelligent integration design and disciplined execution, we transform fragmented systems into cohesive, scalable digital infrastructures that support long-term growth.
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
                HOW WE CONNECT & UNIFY DIGITAL PLATFORMS
                <br /> <span>OUR APPROACH TO ENTERPRISE SYSTEM INTEGRATION</span>
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
                  <span>01.</span> Strategic Integration Architecture & Planning
                </h2>
                <p>
We define integration objectives, analyze system dependencies, and design a scalable architecture roadmap focused on seamless connectivity, data synchronization, and long-term operational efficiency.
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
                  <span>02.</span>High-Performance Integration Development & Deployment
                </h2>
                <p>
We build secure, reliable integration frameworks engineered for clean architecture, API efficiency, real-time data exchange, and smooth cross-platform communication.
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
                  <span>03.</span>Governance, Security & Scalability Management
                </h2>
                <p>
Through structured testing, performance optimization, and secure configuration, we ensure stable integrations, protected data flows, and scalable infrastructure that supports business growth.
                </p>
              </motion.div>

            </div>

            <motion.p
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: false, amount: 0.3 }}
            >
With 7xcoder.com, System Integration Services deliver more than connectivity  they create unified digital ecosystems that drive operational efficiency and scalable growth. Through strategic integration architecture, high-performance API frameworks, and disciplined execution, we help businesses connect platforms, streamline data flows, and transform fragmented systems into reliable, scalable infrastructures that generate measurable long-term value.
            </motion.p>

          </div>

        </div>
      </main>
    </div>
  );
};

export default Service3_1;
