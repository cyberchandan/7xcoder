import React from "react";
import { motion } from "framer-motion";
import "../../page5.css";
import { NavLink } from "react-router-dom";

import erp from "../../../../assets/SystemIntegrationServices/icon/1.png";
import crm from "../../../../assets/SystemIntegrationServices/icon/2.png";
import bpm from "../../../../assets/SystemIntegrationServices/icon/3.png";
import a from "../../../../assets/SystemIntegrationServices/icon/4.png";
import dot from "../../../../assets/SystemIntegrationServices/icon/5.png";
import hr from "../../../../assets/SystemIntegrationServices/icon/6.png";
import camel from "../../../../assets/SystemIntegrationServices/icon/7.png";
import finance from "../../../../assets/SystemIntegrationServices/icon/8.png";
import saas from "../../../../assets/SystemIntegrationServices/icon/9.png";
import ppt from "../../../../assets/SystemIntegrationServices/icon/10.png";
import ecom from "../../../../assets/SystemIntegrationServices/icon/11.png";
import ssas from "../../../../assets/SystemIntegrationServices/icon/12.png";
import nitro from "../../../../assets/SystemIntegrationServices/icon/13.png";
import api from "../../../../assets/SystemIntegrationServices/icon/14.png";

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
          Strategic Connectivity Partnerships
          <div>Integrated Systems We Build</div>
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
          At 7xcoder.com, our System Integration Services are engineered to
          operate seamlessly across complex business environments and technology
          ecosystems. We design integration frameworks aligned with operational
          requirements, user roles, and strategic objectives ensuring consistent
          performance, secure data flow, and scalable connectivity across
          departments and platforms.
          <br />
          We specialize in delivering high-performance integration solutions
          including ERP and CRM integrations, API-based system connectivity,
          workflow synchronization, SaaS integrations, payment gateway
          integrations, and fully unified enterprise ecosystems. Every
          integration is optimized for speed, security, scalability, &
          reliability enabling organizations to eliminate silos, enhance
          collaboration, & maintain efficient, future-ready digital operations.
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
