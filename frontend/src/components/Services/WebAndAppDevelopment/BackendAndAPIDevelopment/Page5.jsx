import React from "react";
import { motion } from "framer-motion";

import "../../page5.css";
import { NavLink } from "react-router-dom";

import erp from "../../../../assets/backend-api-development/icon/image1.png";
import crm from "../../../../assets/backend-api-development/icon/image2.png";
import bpm from "../../../../assets/backend-api-development/icon/image3.png";
import abc from "../../../../assets/backend-api-development/icon/image4.png";
import dot from "../../../../assets/backend-api-development/icon/image5.png";
import hrm from "../../../../assets/backend-api-development/icon/image6.png";
import cam from "../../../../assets/backend-api-development/icon/image7.png";


const Page5 = () => {
  const logos = [
    erp,
    crm,
    bpm,
    abc,
    dot,
    hrm,
    cam,
  ];

  return (
    <main className="bss5">
      <section className="blue-title-bss5">
        <h1>
          Web & App Platforms We Develop
          <div>Strategic Technology Partnerships</div>
        </h1>
      </section>
      <section className="slider-bss5">
        <div className="slider-track-bss5">
          {[...logos, ...logos].map((img, index) => (
            <img width="130px" src={img} alt="software-icon" key={index} />
          ))}
        </div>
      </section>

      <section className="para-bss5">
        <p>
          At 7xcoder.com, our Backend & API Development services are
          engineered to power reliable, scalable digital infrastructures behind
          modern applications. We design server-side systems and APIs that align
          with technical requirements, data workflows, and business logic
          ensuring stability, performance, and scalability at every layer of the
          platform.
          <br />
          Our expertise includes backend systems for web applications, mobile
          platforms, SaaS products, e-commerce engines, admin and analytics
          dashboards, and complex integrated ecosystems. Every backend solution
          is built with a strong focus on performance optimization, security,
          system resilience, and seamless integration enabling businesses to
          maintain robust, efficient, and future-ready digital operations.
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
