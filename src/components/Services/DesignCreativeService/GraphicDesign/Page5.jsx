import React from "react";
import "../../Page5.css";
import { NavLink } from "react-router-dom";
import erp from "../../../../assets/GraphicDesign/icon/1.png";
import crm from "../../../../assets/GraphicDesign/icon/2.png";
import bpm from "../../../../assets/GraphicDesign/icon/3.png";
import a from "../../../../assets/GraphicDesign/icon/4.png";
import dot from "../../../../assets/GraphicDesign/icon/5.png";
import hr from "../../../../assets/GraphicDesign/icon/6.png";
import camel from "../../../../assets/GraphicDesign/icon/7.png";
import finance from "../../../../assets/GraphicDesign/icon/8.png";
import saas from "../../../../assets/GraphicDesign/icon/9.png";
import ppt from "../../../../assets/GraphicDesign/icon/10.png";
import ecom from "../../../../assets/GraphicDesign/icon/11.png";
import ssas from "../../../../assets/GraphicDesign/icon/12.png";
import eco from "../../../../assets/GraphicDesign/icon/13.png";
import ssa from "../../../../assets/GraphicDesign/icon/14.png";

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
            <img src={img} alt="graphic-design-icon" key={index} />
          ))}
        </div>
      </section>

      <section className="para-bss5">
        <p>
          At 7xcoder.com, we build a strategic ecosystem of graphic design
          solutions, carefully crafted and refined based on your brand goals,
          industry context, and audience perception. From brand identity systems
          and marketing creatives to digital assets and visual communication
          frameworks, we design solution specific design strategies focused on
          clarity, consistency, and scalable brand impact. Through disciplined
          creative execution, audience centric visual design, and continuous
          refinement, we deliver cohesive brand systems, engaging visual
          experiences, and consistent design performance transforming brand
          interactions into measurable growth while supporting long term brand
          equity and market value.
        </p>

                              <button><NavLink to='/contact' className="nav-avoid-blue">Book Your Free Strategy Call</NavLink></button>
      </section>
    </main>
  );
};

export default Page5;
