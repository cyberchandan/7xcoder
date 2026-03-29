import "../page5.css";

// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";

import erp from "../../../assets/business-software-solutions/icon/Group 196.png";
import crm from "../../../assets/business-software-solutions/icon/Group 226.png";
import bpm from "../../../assets/business-software-solutions/icon/Group 227.png";
import a from "../../../assets/business-software-solutions/icon/Group 199.png";
import dot from "../../../assets/business-software-solutions/icon/Group 231.png";
import hr from "../../../assets/business-software-solutions/icon/Group 212.png";
import camel from "../../../assets/business-software-solutions/icon/Group 232.png";
import finance from "../../../assets/business-software-solutions/icon/Group 196 (2).png";
import saas from "../../../assets/business-software-solutions/icon/Group 238.png";
import ppt from "../../../assets/business-software-solutions/icon/Group 227 (2).png";
import ecom from "../../../assets/business-software-solutions/icon/Group 199 (2).png";
import ssas from "../../../assets/business-software-solutions/icon/Group 234.png";
import nitro from "../../../assets/business-software-solutions/icon/Group 212 (2).png";
import api from "../../../assets/business-software-solutions/icon/Group 235.png";
import { NavLink } from "react-router-dom";

const logos = [
  erp, crm, bpm, a, dot, hr, camel,
  finance, saas, ppt, ecom, ssas, nitro, api
];

const Service6_5 = () => {
  return (
    <section className="bss5">
      <div className="bss5-container">

        <div className="blue-title-bss5">

          <motion.h1
            initial={{ opacity:0, y:-60 }}
            whileInView={{ opacity:1, y:0 }}
            transition={{ duration:0.8 }}
            viewport={{ once:false, amount:0.3 }}
          >
            Web & App Platforms We Develop
            <span>Strategic Technology Partnerships</span>
          </motion.h1>

        </div>


        <motion.section
          className="slider-bss5"
          initial={{ opacity:0 }}
          whileInView={{ opacity:1 }}
          transition={{ duration:0.8 }}
          viewport={{ once:false, amount:0.3 }}
        >
          <div className="slider-track-bss5">
            {[...logos, ...logos].map((img, index) => (
              <img src={img} alt="creative-icon" key={index} />
            ))}
          </div>
        </motion.section>


        <motion.div
          className="para-bss5"
          initial={{ opacity:0, x:-120 }}
          whileInView={{ opacity:1, x:0 }}
          transition={{ duration:0.9 }}
          viewport={{ once:false, amount:0.3 }}
        >

          <p>
            At 7xcoder.com, our Web & App Development services are engineered to perform seamlessly across a wide range of digital platforms and devices. We build platform specific web and mobile solutions aligned with technical requirements, user behavior, and business objectives ensuring consistency, performance, and scalability wherever your digital product is accessed. We specialize in developing high quality digital solutions for websites, web applications, mobile apps (Android & iOS), e-commerce platforms, admin dashboards, SaaS platforms, and integrated systems. Every solution is optimized for performance, security, responsiveness, and user experience helping businesses maintain a strong, reliable, and professional digital presence across all platforms and devices.
          </p>

          <motion.button
            initial={{ opacity:0, scale:0.9 }}
            whileInView={{ opacity:1, scale:1 }}
            transition={{ duration:0.5 }}
            viewport={{ once:false, amount:0.3 }}
          >
            <NavLink to='/contact' className="nav-avoid-blue">
              Book Your Free Strategy Call
            </NavLink>
          </motion.button>

        </motion.div>

      </div>
    </section>
  );
};

export default Service6_5;
