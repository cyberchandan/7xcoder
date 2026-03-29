import { motion } from "framer-motion";
import "../../page5.css";
// import erp from "../../../assets/bussines-software-solutions/icon/Group 196.png";
import erp from "../../../../assets/PerformanceSecurity&Optimization/image3.png";
import crm from "../../../../assets/PerformanceSecurity&Optimization/image4.png";
import bpm from "../../../../assets/PerformanceSecurity&Optimization/image5.png";
import a from "../../../../assets/PerformanceSecurity&Optimization/image6.png";
import dot from "../../../../assets/PerformanceSecurity&Optimization/image7.png";
import hr from "../../../../assets/PerformanceSecurity&Optimization/image8.png";
import camel from "../../../../assets/PerformanceSecurity&Optimization/image9.png";

import { NavLink } from "react-router-dom";

const logos = [
  erp, crm, bpm, a, dot, hr, camel
];

const Page5 = () => {
  return (
    <section className="bss5">
      <div className="bss5-container">

        <div className="blue-title-bss5">
          <h1>
            High-Performance & Security Frameworks
            <div>Strategic Technology Partnerships</div>
          </h1>
        </div>

        <section className="slider-bss5">
          <div className="slider-track-bss5">
            {[...logos, ...logos].map((img, index) => (
              <img src={img} alt="creative-icon" key={index} />
            ))}
          </div>
        </section>


        <div className="para-bss5">
          <p>
            At 7xcoder.com, our Performance, Security & Optimization services are designed to strengthen and elevate digital platforms across all environments and infrastructures. We ensure systems operate at peak speed, remain resilient against threats, and scale efficiently under growing user demand delivering consistent performance across web, mobile, cloud, and enterprise ecosystems.
            We specialize in performance tuning, infrastructure optimization, security hardening, vulnerability management, database refinement, caching strategies, and continuous monitoring. Every system is optimized for speed, protection, stability, and operational efficiency enabling businesses to safeguard digital assets, enhance user trust, and maintain a secure, high performing, and future ready digital presence.
          </p>

          <button><NavLink to='/contact' className="nav-avoid-blue">Book Your Free Strategy Call</NavLink></button>

        </div>

      </div>
    </section>
  );
};

export default Page5;
