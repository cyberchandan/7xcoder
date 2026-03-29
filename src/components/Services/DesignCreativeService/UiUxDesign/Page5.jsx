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



import React from "react";
import "../../page5.css";
import { NavLink } from "react-router-dom";

import img1 from "../../../../assets/branding-and-strategy/images/5-1.png";
import img2 from "../../../../assets/branding-and-strategy/images/5-2.png";
import img3 from "../../../../assets/branding-and-strategy/images/5-3.png";
import img4 from "../../../../assets/branding-and-strategy/images/5-4.png";
import img5 from "../../../../assets/branding-and-strategy/images/5-5.png";
import img6 from "../../../../assets/branding-and-strategy/images/5-6.png";
import img7 from "../../../../assets/branding-and-strategy/images/5-7.png";
import img8 from "../../../../assets/branding-and-strategy/images/5-8.png";
import img9 from "../../../../assets/branding-and-strategy/images/5-9.png";
import img10 from "../../../../assets/branding-and-strategy/images/5-10.png";
import img11 from "../../../../assets/branding-and-strategy/images/5-11.png";
import img12 from "../../../../assets/branding-and-strategy/images/5-12.png";
import img13 from "../../../../assets/branding-and-strategy/images/5-13.png";
import img14 from "../../../../assets/branding-and-strategy/images/5-14.png";

const logos = [
    img1,img2,img3,img4,img5,img6,img7,img8,img9,img10,img11,img12,img13, img14
];

const Page5 = () => {
    return (
        <main className="bss5">
            <section className="blue-title-bss5">
                <h1>
               Social Platforms We Specialize In
                    <div>Strategic Partnerships</div>
                </h1>
            </section>

             <section className="slider-bss5">
        <div className="slider-track-bss5">
          {[...logos, ...logos].map((img, index) => (
            <img src={img} alt="UI&UX-icon" key={index} />
          ))}
        </div>
      </section>

            <section className="para-bss5">
                <p>
                  At 7xcoder.com, we manage a strategic UI-UX design ecosystem, carefully structuring every experience based on your business goals, product vision, and user behavior. From websites and mobile applications to dashboards, SaaS platforms, and complex digital products, we design platform specific UI-UX strategies focused on usability, clarity, & conversion efficiency. Through disciplined design execution, deep user research, & continuous usability optimization, we deliver intuitive interfaces, qualified user engagement, & consistent experience performance transforming interactions into measurable product growth while protecting long term brand value.
                   </p>

                              <button><NavLink to='/contact' className="nav-avoid-blue">Book Your Free Strategy Call</NavLink></button>
            </section>
        </main>
    );
};

export default Page5;
