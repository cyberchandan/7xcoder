import React from "react";
import "../../page5.css";

import { NavLink } from "react-router-dom";
import erp from "../../../../assets/VisualEffects(VFX)/icon/1.png";
import crm from "../../../../assets/VisualEffects(VFX)/icon/2.png";
import bpm from "../../../../assets/VisualEffects(VFX)/icon/3.png";
import a from "../../../../assets/VisualEffects(VFX)/icon/4.png";
import dot from "../../../../assets/VisualEffects(VFX)/icon/5.png";
import hr from "../../../../assets/VisualEffects(VFX)/icon/6.png";
import camel from "../../../../assets/VisualEffects(VFX)/icon/7.png";
import finance from "../../../../assets/VisualEffects(VFX)/icon/8.png";
import saas from "../../../../assets/VisualEffects(VFX)/icon/9.png";
import ppt from "../../../../assets/VisualEffects(VFX)/icon/10.png";
import ecom from "../../../../assets/VisualEffects(VFX)/icon/11.png";
import ssas from "../../../../assets/VisualEffects(VFX)/icon/12.png";
import eco from "../../../../assets/VisualEffects(VFX)/icon/13.png";
import ssa from "../../../../assets/VisualEffects(VFX)/icon/14.png";

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
            <img src={img} alt="vfx-icon" key={index} />
          ))}
        </div>
      </section>

      <section className="para-bss5">
        <p>
          At 7xcoder.com, we manage a strategic ecosystem of Visual Effects
          (VFX) capabilities, carefully planning and optimizing each visual
          element based on creative objectives, production context, and audience
          expectations. From cinematic compositing and CGI to motion
          enhancements, simulations, and visual storytelling assets, we design
          platform and format specific VFX strategies focused on realism,
          narrative impact, and visual credibility. Through disciplined
          execution, technical supervision, and continuous quality refinement,
          we deliver consistent visual excellence and measurable cinematic
          impact transforming visuals into immersive experiences while
          protecting visual integrity and production value across every frame
          and platform.
        </p>

                              <button><NavLink to='/contact' className="nav-avoid-blue">Book Your Free Strategy Call</NavLink></button>
      </section>
    </main>
  );
};

export default Page5;
