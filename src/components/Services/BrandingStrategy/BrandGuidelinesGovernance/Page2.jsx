import React from 'react'
import '../../page2.css'

import frame1 from '../../../../assets/BrandGuidelinesGovernance/images/Frame 103.png'
import frame2 from '../../../../assets/BrandGuidelinesGovernance/images/Frame 104.png'
import frame3 from '../../../../assets/BrandGuidelinesGovernance/images/Frame 105.png'
import frame4 from '../../../../assets/BrandGuidelinesGovernance/images/Frame 106.png'
import frame5 from '../../../../assets/BrandGuidelinesGovernance/images/Frame 107.png'
import frame6 from '../../../../assets/BrandGuidelinesGovernance/images/Frame 108.png'

const Page2 = () => {
  return (
    <div>
      <section className="digital-marketing-services-2-2">

        <div className="benefites-2">
          BENEFITS
        </div>

        <div className="sub-title-2">
          Benefits of Brand Guidelines & Governance with 7xcoder.com
        </div>

        <div className="benefites-containr-2">

          <div className="column-2 custom-border-2 right-pad-30">

            <div>
              <img src={frame1} alt="Icon" />
              <h3 className="benefit-title">
                Structured Brand Standards
              </h3>
              <p className="benefit-text">
                We create comprehensive guideline systems aligned with business objectives, ensuring clear direction and consistent execution across all platforms.
              </p>
            </div>

            <div>
              <img src={frame2} alt="Icon" />
              <h3 className="benefit-title">
                Controlled Multi-Channel Execution
              </h3>
              <p className="benefit-text">
                We establish usage protocols and compliance systems that ensure consistent brand application across marketing, internal communication, and customer touchpoints.
              </p>
            </div>

          </div>

          <div className="column-2 custom-border-2 left-pad-50 right-pad-30">

            <div>
              <img src={frame6} alt="Icon" />
              <h3 className="benefit-title">
                Stronger Brand Integrity & Credibility
              </h3>
              <p className="benefit-text">
                Defined standards protect brand identity, improve perception, and reinforce trust across digital and offline environments.
              </p>
            </div>

            <div>
              <img src={frame5} alt="Icon" />
              <h3 className="benefit-title">
                Long-Term Brand Protection
              </h3>
              <p className="benefit-text">
                Ongoing monitoring and governance systems safeguard brand equity, maintain compliance, and strengthen sustainable market presence.
              </p>
            </div>

          </div>

          <div className="column-2 left-pad-50 right-pad-30">

            <div>
              <img src={frame3} alt="Icon" />
              <h3 className="benefit-title">
                Cross-Team Consistency
              </h3>
              <p className="benefit-text">
                Clear documentation and operational standards empower teams to execute with alignment, reducing confusion and errors.
              </p>
            </div>

            <div>
              <img src={frame4} alt="Icon" />
              <h3 className="benefit-title">
                Scalable Governance Frameworks
              </h3>
              <p className="benefit-text">
                Our governance models are built to support growth, enabling teams to scale while maintaining brand clarity and control.
              </p>
            </div>

          </div>

        </div>

        <div className="second-container-2">

          <p className="second-text">
           At 7xcoder.com, brand governance goes beyond visual elements  we build structured control systems that protect brand integrity, ensure consistency, and support long-term business credibility. Our insight-driven and process-focused approach ensures every brand standard aligns with business objectives, communication clarity, and operational execution delivering measurable consistency across competitive markets.
            <br /><br />
            <span className="second-text">Key Highlights</span>
          </p>

          <ul style={{width:'105%'}}>

            <li className="second-text">
              Strategic Brand Standards Framework Comprehensive guideline systems aligned with business goals, audience expectations, and long-term brand protection.
            </li>

            <li className="second-text">
             Performance-Driven Governance Systems Clear usage rules and execution standards that strengthen brand consistency and positioning across all channels.
            </li>

            <li className="second-text">
             Consistent Brand Control & Compliance Structured documentation and monitoring systems that ensure accuracy, maintainability, and professional execution.
            </li>

            <li className="second-text">
             Unified Multi-Channel Application Defined standards that maintain clarity and consistency across digital, marketing, and internal platforms.
            </li>

            <li className="second-text">
              Long-Term Brand Stability & Credibility Strong governance frameworks that protect brand equity, reinforce recognition, and sustain market trust.
            </li>

          </ul>

        </div>

      </section>
    </div>
  )
}

export default Page2
