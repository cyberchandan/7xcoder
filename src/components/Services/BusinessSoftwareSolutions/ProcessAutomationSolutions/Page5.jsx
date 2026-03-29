import React from 'react'

import '../../page5.css'
import { NavLink } from 'react-router-dom';

import erp from "../../../../assets/ProcessAutomationSolution/image3.png";
import crm from "../../../../assets/ProcessAutomationSolution/image4.png";
import bpm from "../../../../assets/ProcessAutomationSolution/image5.png";
import a from "../../../../assets/ProcessAutomationSolution/image6.png";
import dot from "../../../../assets/ProcessAutomationSolution/image7.png";
import hr from "../../../../assets/ProcessAutomationSolution/image8.png";
import camel from "../../../../assets/ProcessAutomationSolution/image9.png";
// import finance from "../../../../assets/business-software-solutions/icon/Group 196 (2).png";
// import saas from "../../../../assets/business-software-solutions/icon/Group 238.png";
// import ppt from "../../../../assets/business-software-solutions/icon/Group 227 (2).png";
// import ecom from "../../../../assets/business-software-solutions/icon/Group 199 (2).png";
// import ssas from "../../../../assets/business-software-solutions/icon/Group 234.png";
// import nitro from "../../../../assets/business-software-solutions/icon/Group 212 (2).png";
// import api from "../../../../assets/business-software-solutions/icon/Group 235.png";

const Page5 = () => {
  const logos = [
    erp, crm, bpm, a, dot, hr, camel,
    // finance, saas, ppt, ecom, ssas, nitro, api
  ];

  return (
    <main className="bss5">
      <section className="blue-title-bss5">
        <h1>Automation Systems We Build
          <div>Intelligent Automation Alliances</div>
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
        <p>At 7xcoder.com, our Process Automation Solutions are engineered to operate seamlessly across complex business environments and workflows. We design intelligent automation frameworks aligned with operational requirements, user roles, and strategic objectives ensuring consistency, speed, and scalability across departments and systems. We specialize in building high-impact automation solutions including workflow automation platforms, ERP and CRM process integrations, internal task automation tools, approval flow systems, SaaS-based automation models, and fully integrated business process ecosystems. Every solution is optimized for performance, security, scalability, and accuracy   enabling organizations to reduce manual effort, enhance productivity, and maintain efficient, future-ready digital operations.</p>
        <button><NavLink to='/contact' className="nav-avoid-blue">Book Your Free Strategy Call</NavLink></button>
      </section>

    </main>
  )
}

export default Page5
