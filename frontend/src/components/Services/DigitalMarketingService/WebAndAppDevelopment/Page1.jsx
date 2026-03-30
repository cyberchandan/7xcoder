import "../../page1.css";
import { motion } from "framer-motion";
import digimart from "../../../../assets/WebAndApp/images/1.png";

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
            Web & App Development
          </motion.h1>

          <motion.p
            className="sub-title-service1"
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: false, amount: 0.3 }}
          >
            High Performance Web & App Development. Built for the Future.
          </motion.p>

          <motion.p
            className="service-para1-service1"
            initial={{ opacity: 0, x: 120 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9 }}
            viewport={{ once: false, amount: 0.3 }}
          >
            At 7xcoder.com, web and app development is treated as a
            strategic digital foundation, not just a build task. We create high
            performance, scalable platforms that deliver seamless user
            experiences across devices. Our performance led approach focuses on
            speed, usability, and long term digital ROI ensuring every website
            and application supports growth and converts intent into action.
          </motion.p>

        </div>

        <div className="logo-box2-service1">

          <motion.img
            src={digimart}
            alt="Web & App Development"
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
                HOW WEB & APP DEVELOPMENT WORKS <br />
                <span>HOW WEBSITE & APPLICATION DEVELOPMENT WORKS</span>
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
                  <span>01.</span> Strategic Digital Architecture
                </h2>
                <p>
                  We define clear business objectives, analyze user behavior,
                  and design scalable system architecture to build structured,
                  performance driven websites and applications aligned with long
                  term growth goals.
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
                  <span>02.</span> User Experience & Interface Engineering
                </h2>
                <p>
                  We create high impact, intuitive UI/UX designs supported by
                  clean, efficient development engineered to enhance usability,
                  engagement, and conversion across all devices.
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
                  <span>03.</span> Performance Optimization & Scalability
                  Control
                </h2>
                <p>
                  We continuously optimize speed, security, and functionality
                  while refining system scalability to ensure reliability,
                  efficiency, and sustained digital performance as your business
                  grows.
                </p>
              </motion.div>

            </div>

            <motion.p
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: false, amount: 0.3 }}
            >
              With 7xcoder.com, web and app development delivers more than
              functionality it creates scalable digital platforms, seamless user
              experiences, and measurable business impact. Through strategic
              planning, precision engineering, and performance driven
              optimization, we help brands build high performing digital
              solutions that engage users, support growth, and convert digital
              interactions into sustained business value.
            </motion.p>

          </div>

        </div>
      </main>
    </div>
  );
};

export default Page1;
