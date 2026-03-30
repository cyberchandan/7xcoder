

import React from "react";
import "../../page5.css";

import erp from "../../../../assets/seo/icon/Group 196.png";
import crm from "../../../../assets/seo/icon/Group 197.png";
import bpm from "../../../../assets/seo/icon/Group 198.png";
import a from "../../../../assets/seo/icon/Group 199.png";
import dot from "../../../../assets/seo/icon/Group 200.png";
import hr from "../../../../assets/seo/icon/Group 201.png";
import camel from "../../../../assets/seo/icon/Group 202.png";
import { NavLink } from "react-router-dom";

const logos = [
    erp, crm, bpm, a, dot, hr, camel
];

const Service6_5 = () => {
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
                    At 7xcoder.com, we manage a strategic ecosystem of SEO & Content Writing initiatives, carefully planning and optimizing every element based on your business goals, industry dynamics, and audience search intent. From website pages and long form content to blogs, landing pages, and authority building assets, we design intent led SEO and content strategies focused on visibility, relevance, and long term performance. Through disciplined execution, advanced keyword intelligence, and continuous optimization, we deliver consistent organic visibility, qualified traffic, and sustainable growth transforming search interactions into measurable business value while strengthening long term brand credibility and trust.</p>

                              <button><NavLink to='/contact' className="nav-avoid-blue">Book Your Free Strategy Call</NavLink></button>
            </section>
        </main>
    );
};

export default Service6_5;
