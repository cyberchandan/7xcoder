import React from "react";

import "../../page5.css";
import { NavLink } from "react-router-dom";

import erp from "../../../../assets/DataAndReportingSystems/icon/1.png";
import crm from "../../../../assets/DataAndReportingSystems/icon/2.png";
import bpm from "../../../../assets/DataAndReportingSystems/icon/3.png";
import a from "../../../../assets/DataAndReportingSystems/icon/4.png";
import dot from "../../../../assets/DataAndReportingSystems/icon/5.png";
import hr from "../../../../assets/DataAndReportingSystems/icon/6.png";
import camel from "../../../../assets/DataAndReportingSystems/icon/7.png";
import finance from "../../../../assets/DataAndReportingSystems/icon/8.png";
import saas from "../../../../assets/DataAndReportingSystems/icon/9.png";
import ppt from "../../../../assets/DataAndReportingSystems/icon/10.png";
import ecom from "../../../../assets/DataAndReportingSystems/icon/11.png";
import ssas from "../../../../assets/DataAndReportingSystems/icon/12.png";
import nitro from "../../../../assets/DataAndReportingSystems/icon/13.png";
import api from "../../../../assets/DataAndReportingSystems/icon/14.png";

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
          Strategic Reporting & Analytics Partnerships
          <div>Intelligent Data Platforms We Build</div>
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
          At 7xcoder.com, our Data & Reporting Systems are engineered to
          perform seamlessly across complex business environments and data
          ecosystems. We design intelligent data platforms aligned with
          operational requirements, user roles, and strategic objectives
          ensuring consistency, accuracy, and scalability across departments and
          decision-making layers.
          <br />
          We specialize in building high-quality data infrastructures including
          advanced dashboards, executive reporting systems, business
          intelligence platforms, data integration frameworks, analytics
          solutions, and centralized data management systems. Every solution is
          optimized for performance, security, scalability, and usability
          enabling organizations to maintain accurate insights, efficient
          reporting processes, and future-ready, data-driven operations.
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
