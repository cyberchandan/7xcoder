import React from "react";
import { motion } from "framer-motion";
import "../../page4.css";

import cloud from "../../../../assets/Enterprise&InternalSystems/CloudBasedSoftwareSolutions.png";
import custom from "../../../../assets/Enterprise&InternalSystems/CustomBusinessSoftwareDevelopment.png";
import data from "../../../../assets/Enterprise&InternalSystems/DataManagement&ReportingSystems.png";
import enterprise from "../../../../assets/Enterprise&InternalSystems/Enterprise&InternalSystems.png";
import maintenance from "../../../../assets/Enterprise&InternalSystems/MaintenanceSupport&Optimization.png";
import process from "../../../../assets/Enterprise&InternalSystems/ProcessAutomationSolutions.png";
import secure from "../../../../assets/Enterprise&InternalSystems/Secure&ScalableArchitecture.png";
import system from "../../../../assets/Enterprise&InternalSystems/SystemIntegrationServices.png";
import arrow from "../../../../assets/Enterprise&InternalSystems/arrow1.png";

const expertiseList = [
  {
    title: "Custom Business Software Development",
    description:
      "We design and develop tailor made software solutions aligned with your unique business processes, operational goals, and growth plans ensuring flexibility, efficiency, and long term value.",
    img: custom,
  },
  {
    title: "Enterprise & Internal Systems",
    description:
      "Robust ERP, CRM, dashboards, and internal tools engineered to streamline operations, improve collaboration, and support data driven decision making with reliability.",
    img: enterprise,
  },
  {
    title: "Process Automation Solutions",
    description:
      "Intelligent workflow automation that reduces manual effort, minimizes errors, and enhances productivity across departments and business functions.",
    img: process,
  },
  {
    title: "Data Management & Reporting Systems",
    description:
      "Centralized data platforms with real time dashboards and advanced reporting, enabling complete visibility, control, and actionable business insights.",
    img: data,
  },
  {
    title: "System Integration Services",
    description:
      "Seamless integration of software systems with existing tools, third party platforms, APIs, and enterprise applications to ensure smooth data flow and operational continuity.",
    img: system,
  },
  {
    title: "Secure & Scalable Architecture",
    description:
      "Software architectures built with enterprise grade security standards and scalable frameworks to support business expansion without compromising stability or performance.",
    img: secure,
  },
  {
    title: "Cloud Based Software Solutions",
    description:
      "Cloud native and hybrid software solutions designed for flexibility, accessibility, high availability, and optimized performance across devices and locations.",
    img: cloud,
  },
  {
    title: "Maintenance, Support & Optimization",
    description:
      "Ongoing system monitoring, updates, security enhancements, and performance optimization to keep your software reliable, secure, and aligned with evolving business needs.",
    img: maintenance,
  },
];

const Page4 = () => {
  return (
    <section className="business-software-solution4">
      <p className="blue-bss4">OUR SPECIALIZATION</p>
      <p className="divider-bss4"></p>
      <h2 className="h2-bss4">
        What We Have
        <span> to Offer</span>
      </h2>
      <div className="cards-bss4">
        {expertiseList.map((item, index) => (
          <div
            className={`feature-card-bss4-${index} feature-card-bss4`}
            key={index}
          >
            <div className="icon-box-bss4">
              <img src={item.img} alt={item.title} />
            </div>

            <h4>{item.title}</h4>
            <p>{item.description}</p>
            <div className="read-more-wrapper-bss4">
              <button className="read-more-btn-bss4">
                Read More
                <img src={arrow} alt="arrow" className="read-more-icon-bss4" />
              </button>
            </motion.div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Page4;
