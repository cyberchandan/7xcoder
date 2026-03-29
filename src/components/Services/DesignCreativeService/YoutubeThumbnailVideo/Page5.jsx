import React from "react";
import "../../page5.css";

import img1 from "../../../../assets/Youtube_Thumbnail&Video/icon/ps.png";
import img2 from "../../../../assets/Youtube_Thumbnail&Video/icon/ai.png";
import img3 from "../../../../assets/Youtube_Thumbnail&Video/icon/pr.png";
import img4 from "../../../../assets/Youtube_Thumbnail&Video/icon/ae.png";
import img5 from "../../../../assets/Youtube_Thumbnail&Video/icon/canva.png";
import img6 from "../../../../assets/Youtube_Thumbnail&Video/icon/DaVinci.png";
import img7 from "../../../../assets/Youtube_Thumbnail&Video/icon/CapCut.png";
import { NavLink } from "react-router-dom";

const logos = [img1, img2, img3, img4, img5, img6, img7];

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
            <img src={img} alt="youtube-thumbnail-video-icon" key={index} />
          ))}
        </div>
      </section>

      <section className="para-bss5">
        <p>
          At 7xcoder.com, we manage a strategic ecosystem of YouTube
          thumbnails and video initiatives, carefully planning and optimizing
          every visual and content element based on your channel goals, audience
          behavior, and platform dynamics. From click driven thumbnails and long
          form videos to Shorts, series content, and authority building video
          assets, we design intent-led visual and video strategies focused on
          attention, relevance, and long-term channel performance. Through
          disciplined execution, viewer-intent analysis, and continuous
          performance optimization, we deliver consistent visibility, qualified
          viewership, and sustainable channel growth transforming impressions
          into meaningful engagement and measurable business value while
          strengthening long-term channel credibility and trust.
        </p>

                              <button><NavLink to='/contact' className="nav-avoid-blue">Book Your Free Strategy Call</NavLink></button>
      </section>
    </main>
  );
};

export default Page5;
