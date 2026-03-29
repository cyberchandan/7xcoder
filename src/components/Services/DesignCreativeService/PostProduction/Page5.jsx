import React from "react";
import "../../page5.css";

import img1 from "../../../../assets/Post-Production/icon/Pr.png";
import img2 from "../../../../assets/Post-Production/icon/DaVinci.png";
import img3 from "../../../../assets/Post-Production/icon/ae.png";
import img4 from "../../../../assets/Post-Production/icon/FinalCutPro.png";
import img5 from "../../../../assets/Post-Production/icon/iMovie.png";
import img6 from "../../../../assets/Post-Production/icon/Au.png";
import img7 from "../../../../assets/Post-Production/icon/Audacity.png";
import { NavLink } from "react-router-dom";

const logos = [img1, img2, img3, img4, img5, img6, img7];

const Service3_5 = () => {
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
            <img src={img} alt="post-production-icon" key={index} />
          ))}
        </div>
      </section>

      <section className="para-bss5">
        <p>
          At 7xcoder.com, we manage a strategic ecosystem of
          post-production workflows, carefully designing and optimizing each
          stage based on your creative goals, content objectives, and platform
          requirements. From editing, sound design, and color grading to
          finishing and delivery formats, we build platform-specific
          post-production strategies focused on clarity, consistency, and
          storytelling impact. Through disciplined execution, technical
          precision, and continuous quality refinement, we deliver transparent
          creative control, polished output, and reliable performance
          transforming raw footage into high-quality content while protecting
          long-term visual standards, brand consistency, and creative value.
        </p>

                              <button><NavLink to='/contact' className="nav-avoid-blue">Book Your Free Strategy Call</NavLink></button>
      </section>
    </main>
  );
};

export default Service3_5;
