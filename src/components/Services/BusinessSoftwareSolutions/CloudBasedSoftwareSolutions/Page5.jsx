import React from "react";

import "../../page5.css";
import { NavLink } from "react-router-dom";

import erp from "../../../../assets/CloudBasedSoftwareSolutions/icon/1.png";
import crm from "../../../../assets/CloudBasedSoftwareSolutions/icon/2.png";
import bpm from "../../../../assets/CloudBasedSoftwareSolutions/icon/3.png";
import a from "../../../../assets/CloudBasedSoftwareSolutions/icon/4.png";
import dot from "../../../../assets/CloudBasedSoftwareSolutions/icon/5.png";
import hr from "../../../../assets/CloudBasedSoftwareSolutions/icon/6.png";
import camel from "../../../../assets/CloudBasedSoftwareSolutions/icon/7.png";
import finance from "../../../../assets/CloudBasedSoftwareSolutions/icon/8.png";
import saas from "../../../../assets/CloudBasedSoftwareSolutions/icon/9.png";
import ppt from "../../../../assets/CloudBasedSoftwareSolutions/icon/10.png";
import ecom from "../../../../assets/CloudBasedSoftwareSolutions/icon/11.png";
import ssas from "../../../../assets/CloudBasedSoftwareSolutions/icon/12.png";
import nitro from "../../../../assets/CloudBasedSoftwareSolutions/icon/13.png";
import api from "../../../../assets/CloudBasedSoftwareSolutions/icon/14.png";

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
          Strategic Cloud Innovation Partnerships
          <div>Cloud-Native Platforms We Build</div>
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
          At 7xcoder.com, our Cloud-Based Software Solutions are engineered
          to perform seamlessly across complex business environments and
          distributed systems. We develop cloud-native platforms aligned with
          operational requirements, user roles, and strategic objectives
          ensuring consistent performance, secure accessibility, and scalable
          infrastructure across teams and workflows
          <br />
          We specialize in delivering high-quality cloud solutions including
          SaaS platforms, cloud-hosted enterprise systems, CRM and ERP cloud
          deployments, workflow automation tools, cloud dashboards, and
          integrated multi-cloud ecosystems. Every solution is optimized for
          performance, security, scalability, and usability enabling
          organizations to maintain agile, reliable, and future-ready digital
          operations in a dynamic cloud environment.
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
