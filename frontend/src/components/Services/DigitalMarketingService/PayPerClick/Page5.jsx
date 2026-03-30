import React from "react";
import "../../page5.css";

import img1 from "../../../../assets/Pay_Per_Click/icon/googleA.png";
import img2 from "../../../../assets/Pay_Per_Click/icon/meta.png";
import img3 from "../../../../assets/Pay_Per_Click/icon/linkedin.png";
import img4 from "../../../../assets/Pay_Per_Click/icon/microsoft.png";
import img5 from "../../../../assets/Pay_Per_Click/icon/youtubeA.png";
import img6 from "../../../../assets/Pay_Per_Click/icon/AzAds.png";
import img7 from "../../../../assets/Pay_Per_Click/icon/XAds.png";
import { NavLink } from "react-router-dom";


const logos = [
  img1,
  img2,
  img3,
  img4,
  img5,
  img6,
  img7
];

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
          At 7xcoder.com, we manage a strategic ecosystem of Pay Per Click
          (PPC) advertising platforms, carefully selecting and optimizing each
          channel based on your business goals, industry landscape, and audience
          intent. From Google Search, Display, YouTube, Meta, and LinkedIn Ads
          to intent driven paid channels, we design platform specific PPC
          strategies focused on visibility, relevance, and conversion
          efficiency. Through disciplined execution, advanced targeting, and
          continuous optimization, we deliver controlled reach, qualified
          traffic, and consistent performance transforming paid interactions
          into measurable growth while protecting long term brand value.
        </p>

                              <button><NavLink to='/contact' className="nav-avoid-blue">Book Your Free Strategy Call</NavLink></button>
      </section>
    </main>
  );
};

export default Service3_5;
