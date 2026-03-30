import React from 'react'
import "../../page5.css";

import erp from "../../../../assets/email-influencer/images/slide1.png";
import crm from "../../../../assets/email-influencer/images/slide2.png";
import bpm from "../../../../assets/email-influencer/images/slide3.png";
import a from "../../../../assets/email-influencer/images/slide4.png";
import dot from "../../../../assets/email-influencer/images/slide5.png";
import hr from "../../../../assets/email-influencer/images/slide6.png";
import camel from "../../../../assets/email-influencer/images/slide7.png";
import { NavLink } from 'react-router-dom';


const logos = [
    erp, crm, bpm, a, dot, hr, camel
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
                    At 7xcoder.com, we manage a strategic ecosystem of Email & Influencer Marketing channels, carefully selecting and optimizing each touchpoint based on your brand objectives, industry context, and audience behavior. From personalized email campaigns and automated journeys to creator led storytelling & influencer partnerships, we design platform specific strategies focused on engagement, relevance, and influence. Through disciplined execution, advanced audience targeting, & continuous optimization, we deliver meaningful reach, qualified engagement, & consistent results transforming interactions into measurable growth while preserving long term brand credibility and trust.
                </p>

                              <button><NavLink to='/contact' className="nav-avoid-blue">Book Your Free Strategy Call</NavLink></button>
            </section>
        </main>
  )
}

export default Page5;
