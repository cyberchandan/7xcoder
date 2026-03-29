import "../../page1.css";
import { motion } from "framer-motion";
import digimart from "../../../../assets/PhotographyAndVideography/images/1.png";

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
            Photography & Videography
          </motion.h1>

          <motion.p
            className="sub-title-service1"
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: false, amount: 0.3 }}
          >
            Strategic Photography & Videography. Powered by Visual Storytelling
            & Brand Intelligence.
          </motion.p>

          <motion.p
            className="service-para1-service1"
            initial={{ opacity: 0, x: 120 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9 }}
            viewport={{ once: false, amount: 0.3 }}
          >
            At 7xcoder.com, Photography & Videography go beyond content
            creation. We produce high-quality visual assets that enhance brand
            presence, capture attention, and communicate value across platforms.
            Our performance led approach ensures every photo and video drives
            engagement and supports conversions while maintaining authenticity,
            consistency, and long term brand value.
          </motion.p>

        </div>

        <div className="logo-box2-service1">

          <motion.img
            src={digimart}
            alt="Graphic Design"
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
                HOW PHOTOGRAPHY & VIDEOGRAPHY WORKS <br />
                <span>
                  HOW PERFORMANCE-DRIVEN PHOTOGRAPHY & VIDEOGRAPHY WORKS
                </span>
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
                  <span>01.</span> Strategic Visual Planning Framework
                </h2>
                <p>
                  We define clear brand and communication objectives, analyze
                  audience behavior and visual preferences, and plan the most
                  effective visual formats to build a structured, high impact
                  photography & videography strategy.
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
                  <span>02.</span> High-Impact Visual Production & Storytelling
                </h2>
                <p>
                  We produce premium, brand-aligned photography and videos
                  engineered to capture attention, communicate value, and drive
                  engagement across digital, marketing, and commercial platforms
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
                  <span>03.</span> Performance Optimization & Visual Consistency
                </h2>
                <p>
                  We continuously refine visual quality, formats, and usage to
                  ensure efficiency, scalability, and consistent performance
                  maintaining clarity, authenticity, and long term brand value.
                </p>
              </motion.div>

            </div>

            <motion.p
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: false, amount: 0.3 }}
            >
              With 7xcoder.com, Photography & Videography deliver more than
              visuals they create clarity, engagement, and measurable brand
              impact. Through strategic visual planning, precision-led
              production, and performance-focused execution, we help brands
              capture attention, communicate value, & convert visual presence
              into sustained business value.
            </motion.p>

          </div>

        </div>
      </main>
    </div>
  );
};

export default Page1;
