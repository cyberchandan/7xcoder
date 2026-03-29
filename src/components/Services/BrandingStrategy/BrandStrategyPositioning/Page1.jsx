import React from "react";
import "../../page1.css";
import cloud from "../../../../assets/BrandStrategyPositioning/images/1.png";

const Page1 = () => {
  return (
    <div className="service_1_root">
      <main className="hero-box-service1">
        <div className="title-box-service1">

          <h1 className="title2-service1">
            Brand Strategy & Positioning
          </h1>

          <p className="sub-title-service1">
          Brand Strategy Engineered for Clear Positioning and Competitive Dominance
          </p>

          <p className="service-para1-service1">
          At 7xcoder.com, brand strategy is built as a long-term competitive asset  not a creative exercise. We design data-driven positioning frameworks that define market perception, sharpen differentiation, and establish sustainable authority. By combining research intelligence, audience psychology, and performance strategy, we craft scalable brand positioning systems that deliver clarity, consistency, and measurable impact across digital, offline, and multi-channel ecosystems.
          </p>

        </div>

        <div className="logo-box2-service1">

          <img src={cloud} alt="Cloud Ecommerce" />

          <div>

            <div className="social-media-service1">
              <p>
                STRATEGIC BRAND POSITIONING SYSTEM<br />
                <span>FROM CLARITY TO COMPETITIVE AUTHORITY</span>
              </p>
            </div>

            <div className="content-box-service1">

              <div className="content-service1">
                <h2>
                  <span>01.</span> Strategic Market & Brand Intelligence
                </h2>
                <p>
                 We align business goals with market insights, audience understanding, and competitive positioning to create a clear and scalable brand strategy focused on differentiation and long-term growth.
                </p>
              </div>

              <div className="content-service1">
                <h2>
                  <span>02.</span>   Positioning & Identity Systems
                </h2>
                <p>
                We turn insights into strong positioning frameworks and cohesive brand systems that shape perception and ensure clarity, consistency, and measurable market impact.
                </p>
              </div>

              <div className="content-service1">
                <h2>
                  <span>03.</span>  Brand Governance & Growth
                </h2>
                <p>
                We implement structured guidelines and oversight to maintain brand consistency, support scalability, and build long-term credibility in the market.
                </p>
              </div>

            </div>

            <p>
            At 7xcoder.com, brand strategy goes beyond visual identity  it becomes a structured engine for competitive growth. We shape positioning, perception, and performance to create consistent brand experiences that strengthen market presence and long-term business value. Through research-led strategy, insight-driven positioning, and disciplined execution, we help businesses establish credible market authority and translate brand clarity into measurable commercial impact.
            </p>

          </div>

        </div>
      </main>
    </div>
  );
};

export default Page1;
