import React from 'react'
import "../../page5.css";


import { NavLink } from 'react-router-dom';
import erp from "../../../../assets/3d-product-visualisation/images/slide1.png";
import crm from "../../../../assets/3d-product-visualisation/images/slide2.png";
import bpm from "../../../../assets/3d-product-visualisation/images/slide3.png";
import a from "../../../../assets/3d-product-visualisation/images/slide4.png";
import dot from "../../../../assets/3d-product-visualisation/images/slide5.png";
import hr from "../../../../assets/3d-product-visualisation/images/slide6.png";
import camel from "../../../../assets/3d-product-visualisation/images/slide7.png";


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
      <img src={img} alt="creative-icon" key={index} />
    ))}
  </div>
</section>

            <section className="para-bss5">
                <p>
                  At 7xcoder.com, we manage a strategic ecosystem of 3D product visualization solutions, carefully planning and optimizing each visual asset based on your product goals, industry requirements, and buyer behavior. From high detail product renders and explainer animations to interactive 3D assets and product storytelling visuals, we design platform specific visualization strategies focused on clarity, accuracy, and product impact. Through disciplined execution, product intelligence, and continuous visual optimization, we deliver clear product communication, qualified buyer interest, and consistent results transforming visual interactions into measurable growth while strengthening long term product credibility, brand value, and market relevance.
                </p>

                              <button><NavLink to='/contact' className="nav-avoid-blue">Book Your Free Strategy Call</NavLink></button>
            </section>
        </main>
  )
}

export default Page5
