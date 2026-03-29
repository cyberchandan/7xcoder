import React from "react";
import "../../Page5.css";

import erp from "../../../../assets/ContentAndVideoMarketing/icon/1.png";
import crm from "../../../../assets/ContentAndVideoMarketing/icon/2.png";
import bpm from "../../../../assets/ContentAndVideoMarketing/icon/3.png";
import a from "../../../../assets/ContentAndVideoMarketing/icon/4.png";
import dot from "../../../../assets/ContentAndVideoMarketing/icon/5.png";
import hr from "../../../../assets/ContentAndVideoMarketing/icon/6.png";
import camel from "../../../../assets/ContentAndVideoMarketing/icon/7.png";
import finance from "../../../../assets/ContentAndVideoMarketing/icon/8.png";
import saas from "../../../../assets/ContentAndVideoMarketing/icon/9.png";
import ppt from "../../../../assets/ContentAndVideoMarketing/icon/10.png";
import ecom from "../../../../assets/ContentAndVideoMarketing/icon/11.png";
import ssas from "../../../../assets/ContentAndVideoMarketing/icon/12.png";
import { NavLink } from "react-router-dom";


const logos = [
  erp, crm, bpm, a, dot, hr, camel,
  finance, saas, ppt, ecom, ssas
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
            <img src={img} alt="content-marketing-icon" key={index} />
          ))}
        </div>
      </section>

      <section className="para-bss5">
        <p>
          At 7xcoder.com, we manage a strategic ecosystem of Content &
          Video Marketing channels, carefully selecting and optimizing each
          platform based on your brand objectives, industry context, and
          audience behavior. From long form and short form video to social
          content, brand films, and storytelling assets, we design platform
          specific content and video strategies focused on visibility,
          engagement, and narrative impact. Through disciplined execution,
          audience intelligence, and continuous performance optimization, we
          deliver meaningful reach, qualified engagement, and consistent results
          transforming content interactions into measurable growth while
          strengthening long term brand value and relevance.
        </p>

                              <button><NavLink to='/contact' className="nav-avoid-blue">Book Your Free Strategy Call</NavLink></button>
      </section>
    </main>
  );
};

export default Page5;
