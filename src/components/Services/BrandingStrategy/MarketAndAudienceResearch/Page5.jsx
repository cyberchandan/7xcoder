import React from "react";

import "../../page5.css";
import { NavLink } from "react-router-dom";

import erp from "../../../../assets/MarketAndAudienceResearch/icon/1.png";
import crm from "../../../../assets/MarketAndAudienceResearch/icon/2.png";
import bpm from "../../../../assets/MarketAndAudienceResearch/icon/3.png";
import a from "../../../../assets/MarketAndAudienceResearch/icon/4.png";
import dot from "../../../../assets/MarketAndAudienceResearch/icon/5.png";
import hr from "../../../../assets/MarketAndAudienceResearch/icon/6.png";
import camel from "../../../../assets/MarketAndAudienceResearch/icon/7.png";
import finance from "../../../../assets/MarketAndAudienceResearch/icon/8.png";
import saas from "../../../../assets/MarketAndAudienceResearch/icon/9.png";
import ppt from "../../../../assets/MarketAndAudienceResearch/icon/10.png";
import ecom from "../../../../assets/MarketAndAudienceResearch/icon/11.png";
import ssas from "../../../../assets/MarketAndAudienceResearch/icon/12.png";
import nitro from "../../../../assets/MarketAndAudienceResearch/icon/13.png";
import api from "../../../../assets/MarketAndAudienceResearch/icon/14.png";

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
          Market & Audience Research Experts
          <div>Market & Audience Research Solutions</div>
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
          At 7xcoder.com, our Market & Audience Research solutions are
          designed to perform across complex market environments and evolving
          customer ecosystems. We develop structured research frameworks aligned
          with business objectives, industry dynamics, and audience intelligence
          ensuring clarity, accuracy, and scalability across digital and offline
          markets.
          <br />
          We specialize in delivering high-impact research solutions, including
          market analysis, audience segmentation, competitive benchmarking,
          demand assessment, behavioral insights, and multi-channel data
          interpretation. Every research framework is built for precision,
          strategic clarity, and measurable impact helping businesses make
          informed decisions, identify growth opportunities, and strengthen
          long-term competitive positioning.
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
