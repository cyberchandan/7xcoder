import frame1 from '../../../../assets/MotionGraphicsAndAnimation/image 35.png';
import frame2 from '../../../../assets/MotionGraphicsAndAnimation/image 38.png';
import frame3 from '../../../../assets/MotionGraphicsAndAnimation/image 37.png';
import frame4 from '../../../../assets/MotionGraphicsAndAnimation/image 40.png';
import frame5 from '../../../../assets/MotionGraphicsAndAnimation/image 39.png';
import frame6 from '../../../../assets/MotionGraphicsAndAnimation/image 36.png';
import '../../page2.css';

const MGA_Service2 = () => {
  return (
    <section className="digital-marketing-services-2-2">
      

        <p className="benefites-2">BENEFITS</p>
        {/* <div className="divider-bss4"></div> */}

        <h2 className="sub-title-2">
          Benefits of Motion Graphics & Animation with 7xcoder.com
        </h2>

        <div className="benefites-containr-2">

          <div className="column-2 custom-border-2 right-pad-30">
            <Benefit img={frame1} title=" Strategic Storytelling & Motion Positioning"
              text="We align motion strategy with clear brand objectives and audience behavior, creating purposeful animations that communicate value, strengthen brand identity, and enhance long-term brand recall." />
            <div className="benefit-card-border"></div>


            <Benefit img={frame2} title="Conversion Focused Motion Communication"
              text="We design motion assets that guide viewer attention and influence action transforming visual engagement into clicks, conversions, and measurable business outcomes." />
            <div className="benefit-card-border"></div>
          </div>

          <div className="column-2 custom-border-2 right-pad-30">
            <Benefit img={frame6} title="Performance Driven Engagement & Retention"
              text="Our motion design focuses on clarity, pacing, and emotional resonance capturing attention quickly, sustaining viewer interest, and driving meaningful engagement across digital platforms." />
            <div className="benefit-card-border"></div>

            <Benefit img={frame5} title="Data Informed Motion Optimization"
              text="Every animation is refined using engagement insights, watch-time data, and performance feedback enabling smarter creative enhancements and sustained motion effectiveness." />
            <div className="benefit-card-border"></div>
          </div>

          <div className="column-2">
            <Benefit img={frame3} title="Consistent Brand Motion & Visual Control"
              text="From explainer videos to social animations, we maintain consistent motion language, visual style, and storytelling tone protecting brand integrity while delivering cohesive, professional motion experiences." />
            <div className="benefit-card-border"></div>

            <Benefit img={frame4} title="Scalable Growth with Motion Reliability"
              text="Our modular animation systems and scalable motion frameworks ensure your brand can expand across campaigns and platforms while maintaining quality, consistency, and performance." />
            <div className="benefit-card-border"></div>
          </div>

        </div>

        <div className="second-container-2">
          <p className="second-text">
            Motion Graphics & Animation with 7xcoder.com are designed to build clarity, emotional connection, and measurable brand impact at scale. We craft high engagement motion narratives and animation systems that strengthen brand storytelling, amplify message recall, and deliver consistent, performance led visibility across digital platforms. By combining strategic storytelling, precision led motion design, and data informed creative refinement, we ensure every animation delivers relevance, clarity, and impact. Our approach transforms visual engagement into audience retention and long term brand value while preserving authenticity, consistency, and message integrity across every motion touchpoint.
            <br /><br />
            <span className="second-text">
              Key Highlights
            </span>
          </p>

          <ul className="highlights-list">
            <li className="second-text">Strategic Storytelling & Audience Engagement Capture attention and connect audiences through purpose-led motion narratives designed for clarity and impact.</li>
            <li className="second-text">Performance Led Motion Engagement Data informed motion design optimized for attention, retention, and measurable engagement across digital platforms.</li>
            <li className="second-text">Controlled Brand Motion & Visual Integrity Maintain consistent motion language, visual style, and storytelling tone across all animations and brand touchpoints.</li>
            <li className="second-text">Turn visual engagement into recall, action, and meaningful business outcomes through strategic motion.</li>
            <li className="second-text">Build modular animation systems that scale across campaigns and platforms while maintaining quality and brand value.</li>
          </ul>
        </div>
      
    </section>
  );
};

const Benefit = ({ img, title, text }) => (
  <div className="e-commerce-services-benefits-div">
    <img src={img} alt="" />
    <h3 className="benefit-title">{title}</h3>
    <p className="benefit-text">{text}</p>
  </div>
);

export default MGA_Service2;
