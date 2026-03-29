import "../../page1.css";
import { motion } from "framer-motion";
import digimart from "../../../../assets/Youtube_Thumbnail&Video/images/1.png";

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
            YouTube Thumbnails & Video
          </motion.h1>

          <motion.p
            className="sub-title-service1"
            style={{ width: "100%" }}
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: false, amount: 0.3 }}
          >
            Performance Driven YouTube Thumbnails & Video. Designed to Capture
            Attention.
          </motion.p>

          <motion.p
            className="service-para1-service1"
            style={{ width: "100%" }}
            initial={{ opacity: 0, x: 120 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9 }}
            viewport={{ once: false, amount: 0.3 }}
          >
            At 7xcoder.com, YouTube Thumbnails & Video go beyond creative
            assets to become strategic growth tools. We design data informed
            thumbnails and high impact videos that drive clicks, strengthen
            channel identity, and grow audiences consistently. Our performance
            led approach focuses on attention, retention, long term ROI,
            ensuring every visual converts visibility into meaningful engagement
            & sustained growth.
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
                YOUTUBE THUMBNAILS & VIDEO PROCESS
                <br /> <span>PERFORMANCE DRIVEN YOUTUBE VISUAL STRATEGY</span>
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
                  <span>01.</span> Strategic Channel & Visual Architecture
                </h2>
                <p>
                  We define clear channel growth objectives, analyze viewer
                  intent and audience behavior, and structure thumbnail and
                  video frameworks aligned with your content goals and long term
                  channel performance.
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
                  <span>02.</span>Precision Thumbnail & Video Creation
                </h2>
                <p>
                  We design high impact thumbnails & compelling video content
                  aligned with your brand identity engineered to capture
                  attention, maximize click through rates, drive qualified
                  viewer engagement across YouTube.
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
                  <span>03.</span> Performance Monitoring & Video Optimization
                </h2>
                <p>
                  We continuously track impressions, CTR, watch time, and
                  retention, refining thumbnails, video structure, and pacing to
                  ensure scalability, efficiency, and sustained channel growth.
                </p>
              </motion.div>

            </div>

            <motion.p
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: false, amount: 0.3 }}
            >
              YouTube Thumbnails & Video deliver more than views they build
              channel authority, capture attention, & drive measurable audience
              growth. Through strategic visual planning, click driven thumbnail
              design, & retention focused video execution, we help brands
              attract high intent viewers, strengthen channel credibility, &
              convert visibility into sustained engagement & long term channel
              value.
            </motion.p>

          </div>

        </div>
      </main>
    </div>
  );
};

export default Page1
