import "../../page1.css";
import { motion } from "framer-motion";
import digimart from "../../../../assets/ContentAndVideoMarketing/images/1.png";

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
            Content & Video Marketing
          </motion.h1>

          <motion.p
            className="sub-title-service1"
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: false, amount: 0.3 }}
          >
            Data Driven Content & Video Strategy. Built for Scalable Impact.
          </motion.p>

          <motion.p
            className="service-para1-service1"
            initial={{ opacity: 0, x: 120 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9 }}
            viewport={{ once: false, amount: 0.3 }}
          >
            At 7xcoder.com, Content & Video Marketing is treated as a
            strategic growth engine. We create precision driven content and
            video strategies that capture attention, strengthen brand
            narratives, and deliver measurable impact across digital channels.
            Our performance led approach ensures every asset is optimized to
            influence intent, drive engagement, and convert visibility into
            action while protecting long term brand value.
          </motion.p>

        </div>

        <div className="logo-box2-service1">

          <motion.img
            src={digimart}
            alt="Content & Video Marketing"
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
                HOW CONTENT & VIDEO MARKETING WORKS <br />
                <span>HOW CONTENT AND VIDEO MARKETING WORKS</span>
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
                  <span>01.</span> Strategic Content & Video Framework
                </h2>
                <p>
                  We define clear objectives, analyze audience behavior, and
                  select the right formats and platforms to build a structured,
                  high impact content and video strategy.
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
                  <span>02.</span> High Impact Creative & Storytelling
                </h2>
                <p>
                  We produce premium, brand aligned content and videos designed
                  to capture attention, communicate value, and drive engagement
                  through purposeful storytelling across digital channels.
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
                  <span>03.</span> Performance Optimization & Engagement Control
                </h2>
                <p>
                  We continuously monitor performance, optimize formats,
                  distribution, and messaging, and refine engagement paths to
                  ensure efficiency, scalability, and sustained content impact.
                </p>
              </motion.div>

            </div>

            <motion.p
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: false, amount: 0.3 }}
            >
              With 7xcoder.com, Content & Video Marketing delivers more
              than visibility it drives meaningful engagement, brand influence,
              and measurable growth. Through strategic content planning,
              impactful storytelling, and performance driven distribution, we
              help brands capture attention, strengthen connection, and convert
              visibility into sustained business value.
            </motion.p>

          </div>

        </div>
      </main>
    </div>
  );
};

export default Page1;
