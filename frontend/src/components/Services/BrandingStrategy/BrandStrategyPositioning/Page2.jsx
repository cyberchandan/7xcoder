import React from 'react'
import '../../page2.css'

import frame1 from '../../../../assets/BrandStrategyPositioning/images/Frame 103.png'
import frame2 from '../../../../assets/BrandStrategyPositioning/images/Frame 104.png'
import frame3 from '../../../../assets/BrandStrategyPositioning/images/Frame 105.png'
import frame4 from '../../../../assets/BrandStrategyPositioning/images/Frame 106.png'
import frame5 from '../../../../assets/BrandStrategyPositioning/images/Frame 107.png'
import frame6 from '../../../../assets/BrandStrategyPositioning/images/Frame 108.png'

const Page2 = () => {
  return (
    <div>
      <section className="digital-marketing-services-2-2">

        <div className="benefites-2">
          BENEFITS
        </div>

        <div className="sub-title-2">
          Benefits of Brand Strategy & Positioning with 7xcoder.com
        </div>

        <div className="benefites-containr-2">

          <div className="column-2 custom-border-2 right-pad-30">

            <div>
              <img width="100px" src={frame1} alt="Icon" />
              <h3 className="benefit-title">
               Clear Market Positioning & Direction
              </h3>
              <p className="benefit-text">
               We define a sharp positioning strategy aligned with business goals, competitive landscape, and audience psychology ensuring clarity, differentiation, and long-term strategic focus.
              </p>
            </div>

            <div>
              <img width="100px" src={frame2} alt="Icon" />
              <h3 className="benefit-title">
                Structured Brand Governance & Control
              </h3>
              <p className="benefit-text">
               We implement clear positioning guidelines and execution standards to maintain consistency, protect brand integrity, and ensure long-term strategic control.
              </p>
            </div>

          </div>

          <div className="column-2 custom-border-2 left-pad-50 right-pad-30">

            <div>
              <img width="100px" src={frame6} alt="Icon" />
              <h3 className="benefit-title">
               Stronger Market Authority & Perception
              </h3>
              <p className="benefit-text">
                Through insight-led positioning and disciplined execution, we shape how your brand is perceived  building trust, credibility, and competitive advantage across all channels.
              </p>
            </div>

            <div>
              <img width="100px" src={frame5} alt="Icon" />
              <h3 className="benefit-title">
                Strategic Alignment & Business Impact
              </h3>
              <p className="benefit-text">
               By aligning positioning with business strategy and operations, we improve execution efficiency, strengthen brand recall, and convert positioning into measurable commercial results.
              </p>
            </div>

          </div>

          <div className="column-2 left-pad-50 right-pad-30">

            <div>
              <img width="100px" src={frame3} alt="Icon" />
              <h3 className="benefit-title">
               Unified Brand Experience Across Touchpoints
              </h3>
              <p className="benefit-text">
                Your positioning is consistently reflected across websites, social media, campaigns, and communications  delivering a seamless and authoritative brand presence.
              </p>
            </div>

            <div>
              <img width="100px" src={frame4} alt="Icon" />
              <h3 className="benefit-title">
                Scalable Positioning Architecture
              </h3>
              <p className="benefit-text">
               We build structured brand frameworks designed to evolve with your market. As your business grows, your positioning remains consistent, adaptable, and strategically strong.
              </p>
            </div>

          </div>

        </div>

        <div className="second-container-2">

          <p className="second-text">
             At 7xcoder.com, brand strategy goes beyond visual identity — we build strategic positioning systems designed to shape perception, strengthen competitive advantage, and drive scalable business growth. Our insight-led and performance-focused approach ensures every brand is clearly positioned, aligned with business objectives, and structured to deliver measurable impact across dynamic and competitive markets.
            <br /><br />
            <span className="second-text">Key Highlights</span>
          </p>

          <ul style={{width:'105%'}}>

            <li className="second-text">
             Strategic Positioning Architecture Future-ready positioning frameworks aligned with business goals, audience intelligence, and long-term growth strategy.
            </li>

            <li className="second-text">
             Performance-Led Brand Positioning Clarity-driven strategies built to strengthen differentiation, improve recall, and enhance competitive market presence.
            </li>

            <li className="second-text">
             Brand Systems & Governance Clear positioning guidelines and scalable systems that ensure consistency, control, and professional execution across all touchpoints.
            </li>

            <li className="second-text">
             High-Impact Brand Perception & Experience Purpose-driven positioning that enhances engagement, strengthens trust, and elevates overall brand perception.
            </li>

            <li className="second-text">
              Long-Term Brand Authority & Credibility Disciplined governance and strategic consistency that build sustained recognition, stability, and competitive credibility.
            </li>

          </ul>

        </div>

      </section>
    </div>
  )
}

export default Page2
