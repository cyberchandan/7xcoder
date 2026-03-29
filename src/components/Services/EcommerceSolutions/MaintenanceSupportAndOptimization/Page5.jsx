import React from "react";
import { motion } from "framer-motion";

import "../../page5.css";
import { NavLink } from "react-router-dom";

import erp from "../../../../assets/MaintenanceSupportAndOptimization/icon/1.png";
import crm from "../../../../assets/MaintenanceSupportAndOptimization/icon/2.png";
import bpm from "../../../../assets/MaintenanceSupportAndOptimization/icon/3.png";
import a from "../../../../assets/MaintenanceSupportAndOptimization/icon/4.png";
import dot from "../../../../assets/MaintenanceSupportAndOptimization/icon/5.png";
import hr from "../../../../assets/MaintenanceSupportAndOptimization/icon/6.png";
import camel from "../../../../assets/MaintenanceSupportAndOptimization/icon/7.png";
import finance from "../../../../assets/MaintenanceSupportAndOptimization/icon/8.png";
import saas from "../../../../assets/MaintenanceSupportAndOptimization/icon/9.png";
import ppt from "../../../../assets/MaintenanceSupportAndOptimization/icon/10.png";
import ecom from "../../../../assets/MaintenanceSupportAndOptimization/icon/11.png";
import ssas from "../../../../assets/MaintenanceSupportAndOptimization/icon/12.png";
import nitro from "../../../../assets/MaintenanceSupportAndOptimization/icon/13.png";
import api from "../../../../assets/MaintenanceSupportAndOptimization/icon/14.png";

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
          Continuous Support Systems We Manage
          <div>Performance-Driven Partnerships</div>
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
          At 7xcoder.com, our Maintenance, Support & Optimization services
          are engineered to sustain peak performance across complex digital
          commerce environments and evolving business ecosystems. We ensure
          platforms remain aligned with operational workflows, user
          expectations, and growth objectives maintaining consistent stability,
          security, and scalability across storefronts, admin systems, and
          integrations.
          <br />
          We specialize in performance monitoring, system health audits, version
          upgrades, security patch management, database optimization,
          integration maintenance, and infrastructure tuning. Every engagement
          is focused on speed, reliability, protection, and continuous
          improvement enabling businesses to operate resilient, efficient, and
          future-ready digital platforms without disruption.
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
