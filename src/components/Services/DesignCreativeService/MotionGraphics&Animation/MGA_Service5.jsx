import "../../page5.css";

import erp from "../../../../assets/MotionGraphicsAndAnimation/image 49.png";
import crm from "../../../../assets/MotionGraphicsAndAnimation/image 50.png";
import bpm from "../../../../assets/MotionGraphicsAndAnimation/image 51.png";
import a from "../../../../assets/MotionGraphicsAndAnimation/image 52.png";
import dot from "../../../../assets/MotionGraphicsAndAnimation/image 53.png";
import hr from "../../../../assets/MotionGraphicsAndAnimation/image 54.png";
import camel from "../../../../assets/MotionGraphicsAndAnimation/image 55.png";
import { NavLink } from "react-router-dom";

const logos = [
  erp, crm, bpm, a, dot, hr, camel
];

const MGA_Service5 = () => {
  return (
    <section className="bss5">
      <div className="bss5-container">

        <div className="blue-title-bss5">
          <h1>
            Social Platforms We Specialize In
            <div>Strategic Partnerships</div>
          </h1>
        </div>

       <section className="slider-bss5">
        <div className="slider-track-bss5">
          {[...logos, ...logos].map((img, index) => (
            <img src={img} alt="motion-graphics-icon" key={index} />
          ))}
        </div>
      </section>

        <div className="para-bss5">
          <p>
            At 7xcoder.com, we manage a strategic ecosystem of motion graphics and animation solutions, carefully designing and optimizing each motion touchpoint based on your brand objectives, industry context, and audience attention behavior. From explainer videos and brand films to social animations and motion led storytelling, we create platform-specific motion strategies focused on clarity, engagement, and message impact. Through disciplined creative execution, refined motion design, and continuous performance optimization, we deliver meaningful audience connection, sustained attention, and consistent visual performance transforming motion interactions into measurable brand growth while preserving long term brand credibility, consistency, and trust.
          </p>

                              <button><NavLink to='/contact' className="nav-avoid-blue">Book Your Free Strategy Call</NavLink></button>

        </div>

      </div>
    </section>
  );
};

export default MGA_Service5;
