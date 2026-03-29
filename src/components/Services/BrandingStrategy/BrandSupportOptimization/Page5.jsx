import "../../page5.css";

import { NavLink } from "react-router-dom";
import img1 from "../../../../assets/BrandSupportOptimization/image3.png";
import img2 from "../../../../assets/BrandSupportOptimization/image4.png";
import img3 from "../../../../assets/BrandSupportOptimization/image5.png";
import img4 from "../../../../assets/BrandSupportOptimization/image6.png";
import img5 from "../../../../assets/BrandSupportOptimization/image7.png";
import img6 from "../../../../assets/BrandSupportOptimization/image8.png";
import img7 from "../../../../assets/BrandSupportOptimization/image9.png";
// import img8 from "../../../../assets/branding-and-strategy/images/5-8.png";
// import img9 from "../../../../assets/branding-and-strategy/images/5-9.png";
// import img10 from "../../../../assets/branding-and-strategy/images/5-10.png";
// import img11 from "../../../../assets/branding-and-strategy/images/5-11.png";
// import img12 from "../../../../assets/branding-and-strategy/images/5-12.png";
// import img13 from "../../../../assets/branding-and-strategy/images/5-13.png";
// import img14 from "../../../../assets/branding-and-strategy/images/5-14.png";

const logos = [
    img1, img2, img3, img4, img5, img6, img7,
    // img8, img9, img10, img11, img12, img13, img14,
];

const Page5 = () => {
    return (
        <main className="bss5">
            <section className="blue-title-bss5">
                <h1>
                    Brand Support & Optimization Solutions
                    <div>Strategic Brand Optimization Systems</div>
                </h1>
            </section>

            <section className="slider-bss5">
                <div className="slider-track-bss5">
                    {[...logos, ...logos].map((img, index) => (
                        <img src={img} height="110px" alt="logo" key={index} />
                    ))}
                </div>
            </section>


            <section className="para-bss5">
                <p>
                    At 7xcoder.com, our Brand Support & Optimization solutions are designed to sustain performance across complex brand ecosystems and evolving market touchpoints. We implement structured optimization systems aligned with business objectives, audience behavior, and communication performance ensuring clarity, consistency, and adaptability across digital and organizational channels. We specialize in delivering ongoing brand refinement services, including positioning adjustments, messaging optimization, guideline updates, performance audits, market response analysis, and cross-channel consistency monitoring. Every optimization framework is built for measurable improvement, strategic alignment, and sustained impact helping businesses maintain relevance, strengthen credibility, and ensure long-term brand performance.
                </p>

                <button><NavLink to='/contact' className="nav-avoid-blue">Book Your Free Strategy Call</NavLink></button>

            </section>
        </main>
    );
};

export default Page5;
