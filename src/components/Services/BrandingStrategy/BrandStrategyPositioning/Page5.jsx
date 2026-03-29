import React from "react";
import "../../page5.css";
import { NavLink } from "react-router-dom";

import instagram from "../../../../assets/BrandStrategyPositioning/icon/1.png";
import facebook from "../../../../assets/BrandStrategyPositioning/icon/2.png";
import linkedin from "../../../../assets/BrandStrategyPositioning/icon/3.png";
import youtube from "../../../../assets/BrandStrategyPositioning/icon/4.png";
import x from "../../../../assets/BrandStrategyPositioning/icon/5.png";
import pinterest from "../../../../assets/BrandStrategyPositioning/icon/6.png";
import snapchat from "../../../../assets/BrandStrategyPositioning/icon/7.png";
import whatsapp from "../../../../assets/BrandStrategyPositioning/icon/8.png";
import google from "../../../../assets/BrandStrategyPositioning/icon/9.png";
import telegram from "../../../../assets/BrandStrategyPositioning/icon/10.png";
import be from "../../../../assets/BrandStrategyPositioning/icon/11.png";
import ball from "../../../../assets/BrandStrategyPositioning/icon/12.png";
import reddit from "../../../../assets/BrandStrategyPositioning/icon/13.png";
import quora from "../../../../assets/BrandStrategyPositioning/icon/14.png";

const logos = [
  instagram,
  facebook,
  linkedin,
  youtube,
  x,
  pinterest,
  snapchat,
  whatsapp,
  google,
  telegram,
  be,
  ball,
  reddit,
  quora
];

const Page5 = () => {
  return (

    <main className="bss5">

      <section className="blue-title-bss5">

        <h1>
         Strategic Brand Positioning Solutions
          <div>Partnering to Build Market Leaders</div>
        </h1>

      </section>

      <section className="slider-bss5">

        <div className="slider-track-bss5">

          {[...logos, ...logos].map((img, index) => (
            <img src={img} alt="logo" key={index}/>
          ))}

        </div>

      </section>

      <section className="para-bss5">

        <p>
         At 7xcoder.com, our Brand Strategy & Positioning solutions are engineered to perform across complex markets and evolving competitive landscapes. We develop data-driven positioning frameworks and cohesive brand systems aligned with business vision, audience intelligence, and strategic communication  ensuring clarity, consistency, and scalable market presence across digital and organizational channels. We specialize in delivering high-impact positioning solutions, including brand positioning strategy, identity architecture, messaging frameworks, audience and market research, brand governance systems, and multi-channel implementation. Every framework is built for differentiation, authority, and measurable performance  helping businesses establish credible, recognizable, and future-ready market positions.
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
