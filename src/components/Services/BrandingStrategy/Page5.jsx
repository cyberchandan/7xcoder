// import React from 'react'
// import './service5.css';

// import erp from "../assets/business-software-solutions/icon/Group 196.png";
// import crm from "../assets/business-software-solutions/icon/Group 226.png";
// import bpm from "../assets/business-software-solutions/icon/Group 227.png";
// import a from "../assets/business-software-solutions/icon/Group 199.png";
// import dot from "../assets/business-software-solutions/icon/Group 231.png";
// import hr from "../assets/business-software-solutions/icon/Group 212.png";
// import camel from "../assets/business-software-solutions/icon/Group 232.png";
// import finance from "../assets/business-software-solutions/icon/Group 196 (2).png";
// import saas from "../assets/business-software-solutions/icon/Group 238.png";
// import ppt from "../assets/business-software-solutions/icon/Group 227 (2).png";
// import ecom from "../assets/business-software-solutions/icon/Group 199 (2).png";
// import ssas from "../assets/business-software-solutions/icon/Group 234.png";
// import nitro from "../assets/business-software-solutions/icon/Group 212 (2).png";
// import api from "../assets/business-software-solutions/icon/Group 235.png";

// const Service6_5 = () => {
//     return (
//         <main className="bss5">
//             <section className="blue-title-bss5">
//                 <h1>E-commerce Solutions We Build
//                     <div>Strategic Digital Commerce Partnerships</div>
//                 </h1>
//             </section>
//             <section className="slider-bss5">
//                 <div className="slider-box-bss5">
//                     <img src={erp} alt="" />
//                     <img src={crm} alt="" />
//                     <img src={bpm} alt="" />
//                     <img src={a} alt="" />
//                     <img src={dot} alt="" />
//                     <img src={hr} alt="" />
//                     <img src={camel} alt="" />
//                     <img src={finance} alt="" />
//                     <img src={saas} alt="" />
//                     <img src={ppt} alt="" />
//                     <img src={ecom} alt="" />
//                     <img src={ssas} alt="" />
//                     <img src={nitro} alt="" />
//                     <img src={api} alt="" />

//                 </div>
//             </section>
//             <section className="para-bss5">
//                 <p>At 7xcoder.com, our E-commerce Solutions are engineered to perform seamlessly across complex digital commerce environments and sales channels. We develop e-commerce platforms aligned with business models, customer journeys, and operational workflows ensuring consistency, performance, and scalability across storefronts, admin systems, and integrations. We specialize in building high quality
//                     e-commerce solutions including custom online stores, B2C and B2B platforms, multi vendor marketplaces, admin dashboards, order and inventory management systems, payment and logistics integrations, and scalable commerce ecosystems. Every solution is optimized for performance, security, scalability, and usability, helping businesses deliver reliable, efficient, and future ready digital commerce operations.</p>
//                 <button>Book Your Free Strategy Call</button>
//             </section>

//         </main>
//     )
// }

// export default Service6_5

// import React from "react";
// import "../page5.css";

// import { NavLink } from "react-router-dom";

// // eslint-disable-next-line no-unused-vars
// import { motion } from "framer-motion";

// import img1 from "../../../assets/branding-and-strategy/images/5-1.png";
// import img2 from "../../../assets/branding-and-strategy/images/5-2.png";
// import img3 from "../../../assets/branding-and-strategy/images/5-3.png";
// import img4 from "../../../assets/branding-and-strategy/images/5-4.png";
// import img5 from "../../../assets/branding-and-strategy/images/5-5.png";
// import img6 from "../../../assets/branding-and-strategy/images/5-6.png";
// import img7 from "../../../assets/branding-and-strategy/images/5-7.png";
// import img8 from "../../../assets/branding-and-strategy/images/5-8.png";
// import img9 from "../../../assets/branding-and-strategy/images/5-9.png";
// import img10 from "../../../assets/branding-and-strategy/images/5-10.png";
// import img11 from "../../../assets/branding-and-strategy/images/5-11.png";
// import img12 from "../../../assets/branding-and-strategy/images/5-12.png";
// import img13 from "../../../assets/branding-and-strategy/images/5-13.png";
// import img14 from "../../../assets/branding-and-strategy/images/5-14.png";

// const logos = [
//   img1,
//   img2,
//   img3,
//   img4,
//   img5,
//   img6,
//   img7,
//   img8,
//   img9,
//   img10,
//   img11,
//   img12,
//   img13,
//   img14,
// ];

// const Page5 = () => {
//   return (
//     <main className="bss5">
//       <section className="blue-title-bss5">
//         <motion.h1
//           initial={{ opacity: 0, y: -60 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.8 }}
//           viewport={{ once: false, amount: 0.3 }}
//         >
//           Branding & Strategy Solutions We Build
//           <div>Strategic Brand Growth Partnerships</div>
//         </motion.h1>
//       </section>

//       <motion.section
//         className="slider-bss5"
//         initial={{ opacity: 0 }}
//         whileInView={{ opacity: 1 }}
//         transition={{ duration: 0.8 }}
//         viewport={{ once: false, amount: 0.3 }}
//       >
//         <div className="slider-track-bss5">
//           {[...logos, ...logos].map((img, index) => (
//             <img src={img} alt="logo" key={index} />
//           ))}
//         </div>
//       </motion.section>

//       <motion.section
//         className="para-bss5"
//         initial={{ opacity: 0, y: 80 }}
//         whileInView={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.9 }}
//         viewport={{ once: false, amount: 0.3 }}
//       >
//         <p>
//           At 7xcoder.com, our Branding & Strategy solutions are designed to
//           perform seamlessly across complex brand ecosystems and market
//           touchpoints. We develop brand strategies and identity systems aligned
//           with business vision, audience insights, and communication frameworks
//           ensuring consistency, clarity, and scalability across digital,
//           marketing, and organizational channels. We specialize in delivering
//           high quality branding and strategy solutions including brand
//           positioning, visual identity systems, messaging frameworks, brand
//           guidelines, market and audience research, and multi channel brand
//           implementation. Every solution is crafted for clarity, consistency,
//           scalability, and impact, helping businesses build credible,
//           recognizable, and future ready brands that perform across markets.
//         </p>

//         <motion.button
//           initial={{ opacity: 0, scale: 0.9 }}
//           whileInView={{ opacity: 1, scale: 1 }}
//           transition={{ duration: 0.5 }}
//         >
//           <NavLink to="/contact" className="nav-avoid-blue">
//             Book Your Free Strategy Call
//           </NavLink>
//         </motion.button>
//       </motion.section>
//     </main>
//   );
// };

// export default Page5;



//...........................animation fixing.......new code...............................

import React from "react";
import "../page5.css";
import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";

import img1 from "../../../assets/branding-and-strategy/images/5-1.png";
import img2 from "../../../assets/branding-and-strategy/images/5-2.png";
import img3 from "../../../assets/branding-and-strategy/images/5-3.png";
import img4 from "../../../assets/branding-and-strategy/images/5-4.png";
import img5 from "../../../assets/branding-and-strategy/images/5-5.png";
import img6 from "../../../assets/branding-and-strategy/images/5-6.png";
import img7 from "../../../assets/branding-and-strategy/images/5-7.png";
import img8 from "../../../assets/branding-and-strategy/images/5-8.png";
import img9 from "../../../assets/branding-and-strategy/images/5-9.png";
import img10 from "../../../assets/branding-and-strategy/images/5-10.png";
import img11 from "../../../assets/branding-and-strategy/images/5-11.png";
import img12 from "../../../assets/branding-and-strategy/images/5-12.png";
import img13 from "../../../assets/branding-and-strategy/images/5-13.png";
import img14 from "../../../assets/branding-and-strategy/images/5-14.png";

const logos = [
  img1, img2, img3, img4, img5, img6, img7,
  img8, img9, img10, img11, img12, img13, img14
];

const Page5 = () => {
  return (
    <main className="bss5">

      {/* 🔵 Heading */}
      <section className="blue-title-bss5">
        <motion.h1
          initial={{ opacity: 0, y: -40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.4 }}
        >
          Branding & Strategy Solutions We Build
          <div>Strategic Brand Growth Partnerships</div>
        </motion.h1>
      </section>

      {/* 🔵 Slider */}
      <motion.section
        className="slider-bss5"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
        viewport={{ once: true, amount: 0.3 }}
      >
        <div className="slider-track-bss5">
          {[...logos, ...logos].map((img, index) => (
            <img src={img} alt="logo" key={index} />
          ))}
        </div>
      </motion.section>

      {/* 🔵 Content */}
      <motion.section
        className="para-bss5"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
        viewport={{ once: true, amount: 0.3 }}
      >
        <p>
          At 7xcoder.com, our Branding & Strategy solutions are designed to
          perform seamlessly across complex brand ecosystems and market
          touchpoints. We develop brand strategies and identity systems aligned
          with business vision, audience insights, and communication frameworks
          ensuring consistency, clarity, and scalability across digital,
          marketing, and organizational channels. We specialize in delivering
          high quality branding and strategy solutions including brand
          positioning, visual identity systems, messaging frameworks, brand
          guidelines, market and audience research, and multi channel brand
          implementation. Every solution is crafted for clarity, consistency,
          scalability, and impact, helping businesses build credible,
          recognizable, and future ready brands that perform across markets.
        </p>

        <motion.button
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.97 }}
          transition={{ duration: 0.4, ease: "easeOut" }}
        >
          <NavLink to="/contact" className="nav-avoid-blue">
            Book Your Free Strategy Call
          </NavLink>
        </motion.button>
      </motion.section>

    </main>
  );
};

export default Page5;
