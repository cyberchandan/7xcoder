import React from 'react'
import '../../page2.css'

import frame1 from '../../../../assets/BrandIntegrationImplementation/images/Frame 103.png'
import frame2 from '../../../../assets/BrandIntegrationImplementation/images/Frame 104.png'
import frame3 from '../../../../assets/BrandIntegrationImplementation/images/Frame 105.png'
import frame4 from '../../../../assets/BrandIntegrationImplementation/images/Frame 106.png'
import frame5 from '../../../../assets/BrandIntegrationImplementation/images/Frame 107.png'
import frame6 from '../../../../assets/BrandIntegrationImplementation/images/Frame 108.png'

const Page2 = () => {
  return (
    <div>
      <section className="digital-marketing-services-2-2">

        <div className="benefites-2">
          BENEFITS
        </div>

        <div className="sub-title-2">
          Benefits of Brand Integration & Implementation with 7xcoder.com
        </div>

        <div className="benefites-containr-2">

          <div className="column-2 custom-border-2 right-pad-30">

            <div>
              <img src={frame1} alt="Icon" />
              <h3 className="benefit-title">
                Strategy-to-Execution Alignment
              </h3>
              <p className="benefit-text">
               We ensure your brand strategy is fully aligned with business operations, 
               marketing systems, and communication workflows transforming planning into 
               consistent real-world execution.
              </p>
            </div>

            <div>
              <img src={frame2} alt="Icon" />
              <h3 className="benefit-title">
                Structured Governance & Control
              </h3>
              <p className="benefit-text">
               Clear execution guidelines, quality standards, and monitoring systems protect 
               brand integrity and maintain consistency across teams and campaigns.
              </p>
            </div>

          </div>

          <div className="column-2 custom-border-2 left-pad-50 right-pad-30">

            <div>
              <img src={frame6} alt="Icon" />
              <h3 className="benefit-title">
                 Stronger Brand Consistency & Credibility
              </h3>
              <p className="benefit-text">
              Disciplined implementation strengthens brand presence, builds trust, 
              and ensures uniform performance across digital, offline, and multi-channel 
              environments.
              </p>
            </div>

            <div>
              <img src={frame5} alt="Icon" />
              <h3 className="benefit-title">
                Operational Efficiency & Performance
              </h3>
              <p className="benefit-text">
               By aligning brand systems with business processes, we reduce confusion, improve 
               execution speed, and enable teams to deliver consistent results with clarity and 
               confidence.
              </p>
            </div>

          </div>

          <div className="column-2 left-pad-50 right-pad-30">

            <div>
              <img src={frame3} alt="Icon" />
              <h3 className="benefit-title">
               Unified Multi-Channel Implementation
              </h3>
              <p className="benefit-text">
               Your brand is seamlessly integrated across websites, social media, marketing 
               campaigns, packaging, and internal communications delivering a cohesive experience 
               at every touchpoint.
              </p>
            </div>

            <div>
              <img src={frame4} alt="Icon" />
              <h3 className="benefit-title">
                Scalable Integration Frameworks
              </h3>
              <p className="benefit-text">
                We implement structured brand systems designed to scale seamlessly as your business 
                grows, ensuring consistency across evolving platforms and markets.
              </p>
            </div>

          </div>

        </div>

        <div className="second-container-2">

          <p className="second-text">
            At 7xcoder.com, brand integration goes beyond logos and visuals  
            we transform strategy into consistent, real-world execution that drives 
            recognition, trust, and long-term growth. Our structured and performance-focused 
            approach ensures your brand is seamlessly aligned with business operations, 
            marketing systems, and communication channels  delivering measurable impact 
            across markets.
            <br /><br />
            <span className="second-text">Key Highlights</span>
          </p>

          <ul style={{width:'105%'}}>

            <li className="second-text">
             Strategic Brand Alignment We align brand systems with business goals, internal 
             workflows, and customer touchpoints to ensure clear and consistent execution
            </li>

            <li className="second-text">
              Performance-Driven Implementation Disciplined rollout processes strengthen brand 
              presence, improve execution speed, and enhance market consistency.
            </li>

            <li className="second-text">
              Structured Brand Governance Clear guidelines and quality controls maintain brand 
              integrity across teams, platforms, and campaigns.
            </li>

            <li className="second-text">
             Unified Brand Experience Seamless integration across digital, marketing, and 
             operational channels ensures a cohesive and professional brand presence.
            </li>

            <li className="second-text">
             Long-Term Brand Stability Continuous monitoring and scalable systems 
             support sustained credibility, recognition, and operational efficiency.
            </li>

          </ul>

        </div>

      </section>
    </div>
  )
}

export default Page2
