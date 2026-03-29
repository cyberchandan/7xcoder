import React from "react";
import "../../page2.css";

import frame1 from "../../../../assets/3d-product-visualisation/images/frame1.png";
import frame2 from "../../../../assets/3d-product-visualisation/images/frame2.png";
import frame3 from "../../../../assets/3d-product-visualisation/images/frame3.png";
import frame4 from "../../../../assets/3d-product-visualisation/images/frame4.png";
import frame5 from "../../../../assets/3d-product-visualisation/images/frame5.png";
import frame6 from "../../../../assets/3d-product-visualisation/images/frame6.png";

const Page2 = () => {
  return (
    <>
      <section className="digital-marketing-services-2-2">
        <div className="benefites-2">BENEFITS</div>

        <div className="sub-title-2">
          Benefits of 3D Product Visualization with 7xcoder.com
        </div>

        <div className="benefites-containr-2">
          <div className="column-2 custom-border-2 right-pad-30">
            <div className="e-commerce-services-benefits-div">
              <img src={frame1} alt="Icon" />
              <h3 className="benefit-title">Strategic Product Storytelling</h3>
              <p className="benefit-text">
                We align 3D visualization strategies with clear product
                objectives, buyer intent, and market context ensuring every
                visual communicates value, differentiation, and clarity.
              </p>
            </div>

            <div className="e-commerce-services-benefits-div">
              <img src={frame2} alt="Icon" />
              <h3 className="benefit-title">
                Qualified Buyer Interest & Conversion Support
              </h3>
              <p className="benefit-text">
                We create 3D product visuals that turn attention into informed
                interest, supporting decision-making, conversions, and
                measurable sales impact.
              </p>
            </div>
          </div>

          <div className="column-2 custom-border-2 left-pad-50 right-pad-30">
            <div className="e-commerce-services-benefits-div">
              <img src={frame6} alt="Icon" />
              <h3 className="benefit-title">
                Performance Driven Attention & Engagement
              </h3>
              <p className="benefit-text">
                Our 3D visuals are designed to capture attention, improve
                understanding, and increase buyer confidence focusing on
                meaningful engagement rather than surface-level impressions.
              </p>
            </div>

            <div className="e-commerce-services-benefits-div">
              <img src={frame5} alt="Icon" />
              <h3 className="benefit-title">
                Data-Informed Visualization Optimization
              </h3>
              <p className="benefit-text">
                Every visualization is refined using performance feedback,
                platform insights, and user behavior enabling smarter iterations
                and sustained effectiveness.
              </p>
            </div>
          </div>

          <div className="column-2 left-pad-50 right-pad-30">
            <div className="e-commerce-services-benefits-div">
              <img src={frame3} alt="Icon" />
              <h3 className="benefit-title">
                Consistent Product Narrative & Visual Identity
              </h3>
              <p className="benefit-text">
                From materials and textures to lighting and motion, we maintain
                visual accuracy and consistency across all product assets
                protecting brand integrity while delivering a cohesive product
                experience.
              </p>
            </div>

            <div className="e-commerce-services-benefits-div">
              <img src={frame4} alt="Icon" />
              <h3 className="benefit-title">
                Scalable Growth with Long-Term Product Value
              </h3>
              <p className="benefit-text">
                Through modular 3D asset systems and optimized workflows, we
                ensure scalable product visualization while maintaining
                efficiency, quality, and long-term brand value.
              </p>
            </div>
          </div>
        </div>

        <div className="second-container-2">
          <p className="second-text">
            3D Product Visualization with 7xcoder.com is built for brands
            that demand clarity, accuracy, and measurable product impact. We
            move beyond basic visuals to engineer structured, buyer-first 3D
            visualization systems that enhance product understanding, strengthen
            brand perception, and support predictable conversion outcomes. Our
            approach integrates product intelligence, visual precision, and
            disciplined performance optimization to ensure every 3D render,
            animation, and visual asset contributes to long-term product and
            brand value. Through intent-led product storytelling,
            platform-specific visualization strategies, and continuous
            refinement, we transform visual attention into buyer confidence,
            informed decisions, and sustainable business impact.
            <br />
            <br />
            <span className="second-text">Key Highlights</span>
          </p>

          <ul style={{ marginLeft: "40px", width: "100%" }}>
            <li className="second-text">
              Communication Reach the right buyers with clarity through
              purpose-led 3D product visuals designed to capture attention
              influence purchase intent.
            </li>
            <li className="second-text">
              Engagement ROI-focused execution powered by data, platform
              insights, & continuous refinement to deliver measurable engagement
              & conversion performance.
            </li>
            <li className="second-text">
              Controlled Product Narrative & Visual Consistency Maintain
              accuracy, message clarity, and visual integrity across all 3D
              product assets and customer touchpoints.
            </li>
            <li className="second-text">
              Qualified Buyer Interest & Conversion Support Convert visual
              attention into informed interest, confident decision-making, and
              measurable business outcomes.
            </li>
            <li className="second-text">
              Visualization Growth Optimize 3D asset frameworks & delivery
              workflows to achieve long-term, cost-efficient growth with lasting
              brand and product impact.
            </li>
          </ul>
        </div>
      </section>
    </>
  );
};

export default Page2;
