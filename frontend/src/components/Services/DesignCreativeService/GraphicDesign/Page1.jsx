import "../../Page1.css";
import { motion } from "framer-motion";
import digimart from "../../../../assets/GraphicDesign/images/1.png";

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
            Graphic Design
          </motion.h1>

          <motion.p
            className="sub-title-service1"
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: false, amount: 0.3 }}
          >
            Graphic Design That Performs. Built for the Future.
          </motion.p>

          <motion.p
            className="service-para1-service1"
            initial={{ opacity: 0, x: 120 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9 }}
            viewport={{ once: false, amount: 0.3 }}
          >
            At 7xcoder.com, graphic design is approached as a strategic
            brand foundation, not just a visual exercise. We create high impact,
            scalable design systems that communicate clearly, build trust, and
            elevate brand perception across all platforms. Our performance
            driven design approach focuses on clarity, consistency, and
            conversion, ensuring every visual element supports business
            objectives, strengthens brand identity, and transforms audience
            attention into meaningful engagement.
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
                OUR GRAPHIC DESIGN PROCESS <br />
                <span>OUR APPROACH TO GRAPHIC DESIGN</span>
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
                  <span>01.</span> Strategic Brand & Visual Foundation
                </h2>
                <p>
                  We define clear brand objectives, analyze audience perception,
                  and establish a cohesive visual strategy to create structured,
                  scalable design systems aligned with long term brand growth
                  and market positioning.
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
                  <span>02.</span> Visual Experience & Design Execution
                </h2>
                <p>
                  We craft high impact, intuitive visual designs supported by
                  precise layout, typography, and color systems engineered to
                  enhance clarity, engagement, & brand recognition across all
                  digital & offline touchpoints.
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
                  <span>03.</span> Consistency, Optimization & Brand Scalability
                </h2>
                <p>
                  We refine and optimize visual assets for consistency,
                  adaptability, and performance, ensuring every design remains
                  effective, recognizable, and scalable as your brand expands
                  across platforms and markets.
                </p>
              </motion.div>

            </div>

            <motion.p
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: false, amount: 0.3 }}
            >
              With 7xcoder.com, graphic design delivers more than visual
              appeal it creates strategic brand systems, consistent visual
              identities, and measurable brand impact. Through insight driven
              strategy, precision led creativity, and performance focused design
              execution, we help brands build powerful visual ecosystems that
              capture attention, strengthen recognition, and convert brand
              perception into long term business value.
            </motion.p>

          </div>

        </div>
      </main>
    </div>
  );
};

export default Page1;
