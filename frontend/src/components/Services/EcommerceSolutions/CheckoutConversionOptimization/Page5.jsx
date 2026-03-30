import React from "react";
import "../../page5.css";
import { NavLink } from "react-router-dom";

import instagram from "../../../../assets/CheckoutConversionOptimization/icon/1.png";
import facebook from "../../../../assets/CheckoutConversionOptimization/icon/2.png";
import linkedin from "../../../../assets/CheckoutConversionOptimization/icon/3.png";
import youtube from "../../../../assets/CheckoutConversionOptimization/icon/4.png";
import x from "../../../../assets/CheckoutConversionOptimization/icon/5.png";
import pinterest from "../../../../assets/CheckoutConversionOptimization/icon/6.png";
import snapchat from "../../../../assets/CheckoutConversionOptimization/icon/7.png";
import whatsapp from "../../../../assets/CheckoutConversionOptimization/icon/8.png";
import google from "../../../../assets/CheckoutConversionOptimization/icon/9.png";
import telegram from "../../../../assets/CheckoutConversionOptimization/icon/10.png";
import be from "../../../../assets/CheckoutConversionOptimization/icon/11.png";
import ball from "../../../../assets/CheckoutConversionOptimization/icon/12.png";
import reddit from "../../../../assets/CheckoutConversionOptimization/icon/13.png";
import quora from "../../../../assets/CheckoutConversionOptimization/icon/14.png";

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
          Conversion Solutions We Deliver
          <div>Strategic Revenue Alliances</div>
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
        At 7xcoder.com, our Checkout & Conversion Optimization services 
        are engineered to maximize performance across complex digital commerce 
        environments and high-traffic sales channels. We refine checkout journeys 
        aligned with customer behavior, purchase intent, and operational workflows 
        ensuring consistent speed, seamless processing, and higher conversion rates 
        across storefronts and payment systems. We specialize in optimizing checkout 
        flows, cart experiences, payment integrations, trust signals, validation logic, 
        and post-purchase funnels. Every optimization is focused on speed, security, 
        sability, and measurable revenue impact enabling businesses to reduce abandonment,
        increase completed transactions, and build reliable, high-performing digital 
        commerce systems.
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
