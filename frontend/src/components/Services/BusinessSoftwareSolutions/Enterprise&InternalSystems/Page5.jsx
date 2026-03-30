import React from "react";

import "../../page5.css";
import { NavLink } from "react-router-dom";

import SAP from "../../../../assets/Enterprise&InternalSystems/SAP.png";
import OracleNetSuite from "../../../../assets/Enterprise&InternalSystems/OracleNetSuite.png";
import MicrosoftDynamics365 from "../../../../assets/Enterprise&InternalSystems/MicrosoftDynamics365.png";
import Salesforce from "../../../../assets/Enterprise&InternalSystems/Salesforce.png";
import ServiceNow from "../../../../assets/Enterprise&InternalSystems/ServiceNow.png";
import Workday from "../../../../assets/Enterprise&InternalSystems/Workday.png";
import Odoo from "../../../../assets/Enterprise&InternalSystems/Odoo.png";

const Page5 = () => {
  const logos = [
    SAP,
    OracleNetSuite,
    MicrosoftDynamics365,
    Salesforce,
    ServiceNow,
    Workday,
    Odoo,
  ];

  return (
    <main className="bss5">
      <section className="blue-title-bss5">
        <h1>
          Enterprise Platforms We Build
          <div>Strategic Technology Partnerships</div>
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
          At 7xcoder.com, our Enterprise & Internal Systems are engineered
          to operate seamlessly within complex organizational environments. We
          design structured internal platforms aligned with operational
          workflows, governance models, and strategic business objectives
          ensuring consistency, performance, and scalability across departments
          and core functions.We specialize in developing enterprise-grade
          systems including internal management platforms, executive dashboards,
          ERP and CRM infrastructures, workflow automation solutions, SaaS
          ecosystems, and fully integrated enterprise architectures. Every
          system is optimized for performance, security, scalability, and
          usability enabling organizations to maintain controlled, efficient,
          and future-ready digital operations at scale.
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
