import "../../page5.css";

import { NavLink } from "react-router-dom";
import img1 from "../../../../assets/BrandIdentityDesignSystems/image3.png";
import img2 from "../../../../assets/BrandIdentityDesignSystems/image4.png";
import img3 from "../../../../assets/BrandIdentityDesignSystems/image5.png";
import img4 from "../../../../assets/BrandIdentityDesignSystems/image6.png";
import img5 from "../../../../assets/BrandIdentityDesignSystems/image7.png";
import img6 from "../../../../assets/BrandIdentityDesignSystems/image8.png";
import img7 from "../../../../assets/BrandIdentityDesignSystems/image9.png";
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
                    Strategic Brand Identity Solutions
                    <div>Brand Identity Design Systems</div>
                </h1>
            </section>

            <section className="slider-bss5">
                <div className="slider-track-bss5">
                    {[...logos, ...logos].map((img, index) => (
                        <img width="130px" src={img} alt="logo" key={index} />
                    ))}
                </div>
            </section>


            <section className="para-bss5">
                <p>
                    At 7xcoder.com, our Brand Identity Design Systems are engineered to perform seamlessly across complex brand ecosystems and multiple touchpoints. We develop structured visual identity frameworks aligned with business vision, brand personality, and communication standards ensuring clarity, consistency, and scalability across digital, marketing, and organizational platforms.
                    We specialize in delivering high-quality identity solutions, including logo systems, typography frameworks, color architectures, visual language development, brand guidelines, and multi-channel implementation systems. Every identity system is crafted for recognition, adaptability, and long-term impact helping businesses build credible, cohesive, and future-ready brand presence across evolving markets.
                </p>

                <button><NavLink to='/contact' className="nav-avoid-blue">Book Your Free Strategy Call</NavLink></button>

            </section>
        </main>
    );
};

export default Page5;
