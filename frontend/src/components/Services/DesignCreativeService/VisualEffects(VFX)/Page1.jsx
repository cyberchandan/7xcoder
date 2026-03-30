import "../../page1.css";
import { motion } from "framer-motion";
import digimart from "../../../../assets/VisualEffects(VFX)/images/1.png";

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
            Visual Effects (VFX)
          </motion.h1>

          <motion.p
            className="sub-title-service1"
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: false, amount: 0.3 }}
          >
            Strategic VFX Solutions. Designed to Elevate Visual Storytelling.
          </motion.p>

          <motion.p
            className="service-para1-service1"
            initial={{ opacity: 0, x: 120 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9 }}
            viewport={{ once: false, amount: 0.3 }}
          >
            At 7xcoder.com, Visual Effects (VFX) go beyond post production.
            We create precision-led VFX that enhance realism, elevate visual
            quality, and deliver cinematic impact across films, ads, and digital
            content. Our performance driven approach ensures consistency,
            technical accuracy, and strong narrative alignment driving
            immersive, high quality visual experiences at scale.
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
                HOW VISUAL EFFECTS (VFX) WORKS
                <br />
                <span>HOW STRATEGIC VISUAL EFFECTS (VFX) WORKS</span>
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
                  <span>01.</span>Strategic Visual Planning & Concept Design
                </h2>
                <p>
                  We define clear visual objectives, analyze narrative
                  requirements, scene context, and creative direction, and plan
                  VFX execution to build a structured, impact-driven visual
                  effects strategy.
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
                  <span>02.</span> Precision VFX Execution & Visual Storytelling
                </h2>
                <p>
                  We develop high-quality visual effects, compositing, and
                  enhancements aligned with the story and visual tone designed
                  to elevate realism, reinforce narrative intent, and strengthen
                  cinematic impact across content.
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
                  <span>03.</span> Quality Control & Visual Optimization
                </h2>
                <p>
                  We continuously refine realism, compositing accuracy, motion,
                  and visual consistency to ensure scalability, technical
                  excellence, and long-term visual reliability across platforms
                  and formats.
                </p>
              </motion.div>

            </div>

            <motion.p
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: false, amount: 0.3 }}
            >
              With 7xcoder.com, Visual Effects (VFX) deliver more than
              visuals they elevate storytelling, enhance realism, and create
              lasting cinematic impact. Through strategic visual planning,
              precision led VFX execution, and continuous quality refinement, we
              help brands strengthen visual perception, captivate audiences, and
              convert attention into meaningful engagement and long-term brand
              value.
            </motion.p>

          </div>

        </div>
      </main>
    </div>
  );
};

export default Page1;
