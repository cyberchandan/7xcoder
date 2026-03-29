import React from "react";
import "../../page5.css";

import img1 from "../../../../assets/Online_Reputation_Management/icon/google.png";
import img2 from "../../../../assets/Online_Reputation_Management/icon/concole.png";
import img3 from "../../../../assets/Online_Reputation_Management/icon/trustpilot.png";
import img4 from "../../../../assets/Online_Reputation_Management/icon/glassdoor.png";
import img5 from "../../../../assets/Online_Reputation_Management/icon/facebook.png";
import img6 from "../../../../assets/Online_Reputation_Management/icon/linkedin.png";
import img7 from "../../../../assets/Online_Reputation_Management/icon/quora.png";
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
            <img src={img} alt="logo" key={index} />
          ))}
        </div>
      </section>

      <section className="para-bss5">
        <p>
          At 7xcoder.com, we manage a strategic ecosystem of Online
          Reputation Management platforms, carefully prioritizing and optimizing
          each touchpoint based on your brand objectives, industry environment,
          and audience perception. From search results and review platforms to
          social channels, media mentions, and community discussions, we design
          platform specific ORM strategies focused on credibility, visibility
          control, and trust reinforcement. Through disciplined execution, real
          time sentiment monitoring, and continuous reputation optimization, we
          deliver consistent brand confidence and measurable trust outcomes
          transforming public perception into long-term brand value while
          protecting credibility across all digital touchpoints.
        </p>

                              <button><NavLink to='/contact' className="nav-avoid-blue">Book Your Free Strategy Call</NavLink></button>
      </section>
    </main>
  );
};

export default Service3_5;
