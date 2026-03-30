import "../../page1.css";
import { motion } from "framer-motion";
import digimart from "../../../../assets/MotionGraphicsAndAnimation/1.png";

const MGA_Service1 = () => {
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
            Motion Graphics & Animation
          </motion.h1>

          <motion.p
            className="sub-title-service1"
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: false, amount: 0.3 }}
          >
            Strategy Led Motion Graphics & Animation. Designed for Lasting Impact.
          </motion.p>

          <motion.p
            className="service-para1-service1"
            initial={{ opacity: 0, x: 120 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9 }}
            viewport={{ once: false, amount: 0.3 }}
          >
            At 7xcoder.com, Motion Graphics & Animation go beyond visuals to become strategic storytelling tools. We craft precision led motion narratives that capture attention, communicate value, and strengthen brand identity across digital platforms. Our performance driven approach focuses on clarity, emotional engagement, and retention, transforming motion into lasting brand recall and measurable business impact while maintaining authenticity, consistency, and scalability.
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
                THE MOTION DESIGN PROCESS <br />
                <span>OUR MOTION GRAPHICS & ANIMATION PROCESS</span>
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
                <h2><span>01.</span>Strategic Development Framework</h2>
                <p>We define clear digital objectives, understand business requirements, and architect a scalable development roadmap aligned with long-term growth, performance, and usability goals.</p>
              </motion.div>

              <motion.div
                className="content-service1"
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.9 }}
                viewport={{ once: false, amount: 0.3 }}
              >
                <h2><span>02.</span>Precision Motion Design & Narrative Alignment</h2>
                <p>We create high-impact motion graphics where visuals, pacing, and storytelling align with your brand to capture attention and drive emotional engagement.</p>
              </motion.div>

              <motion.div
                className="content-service1"
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
                viewport={{ once: false, amount: 0.3 }}
              >
                <h2><span>03.</span>Performance Optimization & Audienceon Retenti</h2>
                <p>We refine motion flow and timing using engagement insights to improve clarity, retention, and long-term performance.</p>
              </motion.div>

            </div>

            <motion.p
              className="bottom-para-service1"
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: false, amount: 0.3 }}
            >
              With 7xcoder.com, Motion Graphics & Animation deliver more than visual engagement they tell powerful stories, shape perception, and drive measurable brand impact. Through strategic storytelling, precision led motion design, and performance driven refinement, we help brands capture attention, strengthen emotional connection, and convert visual engagement into sustained long-term brand value.
            </motion.p>

          </div>
        </div>
      </main>
    </section>
  );
};

export default MGA_Service1;
