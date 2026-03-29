import "../../page1.css";
import { motion } from "framer-motion";
import digimart from "../../../../assets/Post-Production/images/1.png";

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
            Post-Production
          </motion.h1>

          <motion.p
            className="sub-title-service1"
            style={{ width: "100%" }}
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: false, amount: 0.3 }}
          >
            Precision Post-Production. Engineered for Visual Performance.
          </motion.p>

          <motion.p
            className="service-para1-service1"
            style={{ width: "100%" }}
            initial={{ opacity: 0, x: 120 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9 }}
            viewport={{ once: false, amount: 0.3 }}
          >
            At 7xcoder.com, Post-Production goes beyond editing to support stronger storytelling & higher visual standards. We build precision driven workflows that enhance visual clarity, refine narratives, & deliver consistent, high-quality output across digital and commercial content. Our performance led approach ensures every cut, transition, sound design, & color grade is intentional designed to elevate impact, guide audience attention, & support long term content value & brand performance.
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
                HOW POST-PRODUCTION WORKS
                <br /> <span>HOW PERFORMANCE-DRIVEN POST-PRODUCTION WORKS</span>
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
                  <span>01.</span> Strategic Post-Production Planning
                </h2>
                <p>
                  We define clear creative and quality objectives, align storytelling intent, and structure post-production workflows to support visual consistency, narrative clarity, and performance goals.
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
                  <span>02.</span>Precision Editing & Visual Enhancement
                </h2>
                <p>
                  We integrate editing, sound design, color grading, and visual effects into a seamless post-production pipeline delivering polished output with clear storytelling, technical accuracy, and professional finish.
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
                  <span>03.</span> Quality Control & Performance Refinement
                </h2>
                <p>
                  We continuously review visuals, pacing, and audio balance, refining details to improve impact, scalability, and long-term content value across platforms and formats.
                </p>
              </motion.div>

            </div>

            <motion.p
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: false, amount: 0.3 }}
            >
              With 7xcoder.com, Post-Production delivers more than polished visuals it drives clarity, consistency, & measurable creative impact. Through structured post-production workflows, precision editing, & disciplined refinement, we help brands enhance storytelling, improve visual quality, & convert raw footage into high-performance content with lasting value.
            </motion.p>

          </div>

        </div>
      </main>
    </div>
  );
};

export default Service3_1;
