import { motion } from "framer-motion";
import "./index.css";
import worldMap from "../../../assets/images/map_final.png";

const AboutUs4 = () => {
  return (
    <div className="page-about4">
      {" "}
      <section className="global-stage-about4">
        {/* Content Wrapper */}
        <div className="global-container-about4">
          {/* Text Overlay */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: false, amount: 0.3 }}
            className="global-text-about4"
          >
            <p className="subtitle-about4">
              Representing 7xcoder.com on the
            </p>
            <h1 className="title-about4">Global Stage!</h1>
          </motion.div>

          {/* Map Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: false, amount: 0.3 }}
            className="map-wrapper-about4"
          >
            <img
              src={worldMap}
              alt="Global Presence Map"
              className="global-map-about4"
            />
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default AboutUs4;
