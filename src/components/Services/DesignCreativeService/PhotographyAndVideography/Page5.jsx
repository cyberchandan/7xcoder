import React from "react";
import "../../page5.css";

import erp from "../../../../assets/PhotographyAndVideography/icon/1.png";
import crm from "../../../../assets/PhotographyAndVideography/icon/2.png";
import bpm from "../../../../assets/PhotographyAndVideography/icon/3.png";
import a from "../../../../assets/PhotographyAndVideography/icon/4.png";
import dot from "../../../../assets/PhotographyAndVideography/icon/5.png";
import hr from "../../../../assets/PhotographyAndVideography/icon/6.png";
import camel from "../../../../assets/PhotographyAndVideography/icon/7.png";
import finance from "../../../../assets/PhotographyAndVideography/icon/8.png";
import saas from "../../../../assets/PhotographyAndVideography/icon/9.png";
import ppt from "../../../../assets/PhotographyAndVideography/icon/10.png";
import ecom from "../../../../assets/PhotographyAndVideography/icon/11.png";
import ssas from "../../../../assets/PhotographyAndVideography/icon/12.png";
import eco from "../../../../assets/PhotographyAndVideography/icon/13.png";
import ssa from "../../../../assets/PhotographyAndVideography/icon/14.png";
import { NavLink } from "react-router-dom";
const logos = [
  erp, crm, bpm, a, dot, hr, camel,
  finance, saas, ppt, ecom, ssas, eco, ssa
];

const Page5 = () => {
  return (
    <main className="bss5">
      <section className="blue-title-bss5">
        <h1>
          Social Platforms We Specialize In
          <div>Strategic Partnerships</div>
        </h1>
      </section>

      <section className="slider-bss5">
        <div className="slider-track-bss5">
          {[...logos, ...logos].map((img, index) => (
            <img src={img} alt="photography-icon" key={index} />
          ))}
        </div>
      </section>

      <section className="para-bss5">
        <p>
          At 7xcoder.com, we manage a strategic ecosystem of photography
          and videography solutions, carefully planning and executing each
          visual asset based on your brand objectives, industry context, and
          audience intent. From product photography and lifestyle shoots to
          brand films, promotional videos, and campaign visuals, we design
          format specific visual strategies focused on clarity, relevance, and
          engagement. Through disciplined production workflows, audience-led
          visual planning, and continuous creative refinement, we deliver
          consistent visual impact, qualified audience attention, and reliable
          performance transforming visual interactions into measurable brand
          value while protecting long-term identity, credibility, and
          positioning.
        </p>

                              <button><NavLink to='/contact' className="nav-avoid-blue">Book Your Free Strategy Call</NavLink></button>
      </section>
    </main>
  );
};

export default Page5;
