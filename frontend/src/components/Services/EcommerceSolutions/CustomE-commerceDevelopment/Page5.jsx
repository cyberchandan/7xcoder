import React from 'react'
import "../../page5.css";



import erp from "../../../../assets/CustomEcommerceDevelopment/image3.png";
import crm from "../../../../assets/CustomEcommerceDevelopment/image4.png";
import bpm from "../../../../assets/CustomEcommerceDevelopment/image5.png";
import a from "../../../../assets/CustomEcommerceDevelopment/image6.png";
import dot from "../../../../assets/CustomEcommerceDevelopment/image7.png";
import hr from "../../../../assets/CustomEcommerceDevelopment/image8.png";
import camel from "../../../../assets/CustomEcommerceDevelopment/image9.png";
// import finance from "../../../../assets/ecommerce-solutions/icon/Group 196 (2).png";
// import saas from "../../../../assets/ecommerce-solutions/icon/Group 238.png";
// import ppt from "../../../../assets/ecommerce-solutions/icon/Group 227 (2).png";
// import ecom from "../../../../assets/ecommerce-solutions/icon/Group 199 (2).png";
// import ssas from "../../../../assets/ecommerce-solutions/icon/Group 234.png";
// import nitro from "../../../../assets/ecommerce-solutions/icon/Group 212 (2).png";
// import api from "../../../../assets/ecommerce-solutions/icon/Group 235.png";
import { NavLink } from 'react-router-dom';

const logos = [
  erp, crm, bpm, a, dot, hr, camel,
  // finance, saas, ppt, ecom, ssas, nitro, api
];



const Page5 = () => {
  return (
    <main className="bss5">
      <section className="blue-title-bss5">
        <h1>
          Long-Term Digital Commerce Partnerships
          <div>Tailored E-commerce Platforms We Build</div>
        </h1>
      </section>

      <section className="slider-bss5">
        <div className="slider-track-bss5">
          {[...logos, ...logos].map((img, index) => (
            <img src={img} alt="creative-icon" key={index} />
          ))}
        </div>
      </section>


      <section className="para-bss5">
        <p>
          At 7xcoder.com, our Custom E-commerce Development services are engineered to perform seamlessly across complex digital commerce ecosystems and multi-channel sales environments. We architect tailored e-commerce platforms aligned with your business model, customer journey, and operational workflows  ensuring consistent performance, scalability, and integration across storefronts and admin systems. We specialize in building high-performance custom online stores, B2C and B2B platforms, multi-vendor marketplaces, advanced dashboards, inventory management systems, secure payment gateways, and scalable commerce infrastructures  optimized for speed, security, and conversion efficiency.
        </p>

        <button><NavLink to='/contact' className="nav-avoid-blue">Book Your Free Strategy Call</NavLink></button>
      </section>
    </main>
  )
}

export default Page5
