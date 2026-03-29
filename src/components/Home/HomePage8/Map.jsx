import React from "react";
import { motion } from "framer-motion";
import worldMap from "../../../assets/images/map_final.png";
import "./Map.css";

const Map = () => {
  return (
    <section className="global-stage">
      {/* Content Wrapper */}
      <div className="global-container">
        {/* Text Overlay */}
        <motion.div
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="global-text"
        >
          <p className="subtitle">Representing 7xcoder.com on the</p>
          <h1 className="title">Global Stage!</h1>
        </motion.div>

        {/* Map Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="map-wrapper"
        >
          <img
            src={worldMap}
            alt="Global Presence Map"
            className="global-map"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default Map;
