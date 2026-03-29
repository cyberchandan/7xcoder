import React from 'react'
import "../../page5.css";



import erp from "../../../../assets/EcommerceAndMarketing/icon/slider1.png";
import crm from "../../../../assets/EcommerceAndMarketing/icon/slider2.png";
import bpm from "../../../../assets/EcommerceAndMarketing/icon/slider3.png";
import a from "../../../../assets/EcommerceAndMarketing/icon/slider4.png";
import dot from "../../../../assets/EcommerceAndMarketing/icon/slider5.png";
import hr from "../../../../assets/EcommerceAndMarketing/icon/slider6.png";
import camel from "../../../../assets/EcommerceAndMarketing/icon/slider7.png";
import { NavLink } from 'react-router-dom';

const logos = [
    erp, crm, bpm, a, dot, hr, camel,
   
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
                        <img src={img} alt="logo" key={index} />
                    ))}
                </div>
            </section>

            <section className="para-bss5">
                <p>
                   At 7xcoder.com, we manage a strategic ecosystem of E-commerce Marketing platforms, carefully selecting and optimizing each channel based on your business objectives, product category, and shopper intent. From D2C websites and marketplaces to Google Shopping, Meta Commerce, and performance driven sales channels, we design platform specific e-commerce strategies focused on visibility, relevance, and conversion efficiency. Through disciplined execution, advanced audience targeting, and continuous performance optimization, we deliver controlled reach, qualified shoppers, and consistent sales performance transforming digital interactions into measurable revenue growth while protecting long-term brand value and profitability.
                   </p>

                              <button><NavLink to='/contact' className="nav-avoid-blue">Book Your Free Strategy Call</NavLink></button>
            </section>
        </main>
  )
}

export default Page5
