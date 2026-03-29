import React from "react";
import { motion } from "framer-motion";
import "../../page5.css";
import { NavLink } from "react-router-dom";

import erp from "../../../../assets/EnterpriseAndMarketplaceSolutions/icon/1.png";
import crm from "../../../../assets/EnterpriseAndMarketplaceSolutions/icon/2.png";
import bpm from "../../../../assets/EnterpriseAndMarketplaceSolutions/icon/3.png";
import a from "../../../../assets/EnterpriseAndMarketplaceSolutions/icon/4.png";
import dot from "../../../../assets/EnterpriseAndMarketplaceSolutions/icon/5.png";
import hr from "../../../../assets/EnterpriseAndMarketplaceSolutions/icon/6.png";
import camel from "../../../../assets/EnterpriseAndMarketplaceSolutions/icon/7.png";
import finance from "../../../../assets/EnterpriseAndMarketplaceSolutions/icon/8.png";
import saas from "../../../../assets/EnterpriseAndMarketplaceSolutions/icon/9.png";
import ppt from "../../../../assets/EnterpriseAndMarketplaceSolutions/icon/10.png";
import ecom from "../../../../assets/EnterpriseAndMarketplaceSolutions/icon/11.png";
import ssas from "../../../../assets/EnterpriseAndMarketplaceSolutions/icon/12.png";
import nitro from "../../../../assets/EnterpriseAndMarketplaceSolutions/icon/13.png";
import api from "../../../../assets/EnterpriseAndMarketplaceSolutions/icon/14.png";

const Page5 = () => {
  const logos = [
    erp,
    crm,
    bpm,
    a,
    dot,
    hr,
    camel,
    finance,
    saas,
    ppt,
    ecom,
    ssas,
    nitro,
    api,
  ];

  return (
    <main className="bss5">
      <section className="blue-title-bss5">
        <h1>
          Enterprise Commerce Platforms
          <div>Long-Term Marketplace Alliances</div>
        </h1>
      </section>
      <section className="slider-bss5">
        <div className="slider-track-bss5">
          {[...logos, ...logos].map((img, index) => (
            <img src={img} alt="software-icon" key={index} />
          ))}
        </div>
      </section>

      <section className="para-bss5">
        <p>
          At 7xcoder.com, our Enterprise & Marketplace Solutions are
          engineered to perform seamlessly across complex digital ecosystems and
          large-scale commerce environments. We architect platforms aligned with
          enterprise business models, multi-vendor structures, customer
          journeys, and operational workflows ensuring consistent performance,
          scalability, and integration across storefronts and enterprise
          systems.
          <br />
          We specialize in building high-performance enterprise marketplaces,
          B2B and B2C platforms, multi-vendor ecosystems, centralized order and
          inventory systems, secure payment infrastructures, and scalable
          commerce architectures optimized for performance, security,
          governance, and long-term scalability.
        </p>
        <button>
          <NavLink to="/contact" className="nav-avoid-blue">
            Book Your Free Strategy Call
          </NavLink>
        </button>
      </section>
    </main>
  );
};

export default Page5;
