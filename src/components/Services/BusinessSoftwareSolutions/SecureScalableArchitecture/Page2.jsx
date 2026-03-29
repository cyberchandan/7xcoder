import React from 'react'

import '../../page2.css'

import frame1 from '../../../../assets/SecureScalableArcht/images/Frame 103.png'
import frame2 from '../../../../assets/SecureScalableArcht/images/Frame 104.png'
import frame3 from '../../../../assets/SecureScalableArcht/images/Frame 105.png'
import frame4 from '../../../../assets/SecureScalableArcht/images/Frame 106.png'
import frame5 from '../../../../assets/SecureScalableArcht/images/Frame 107.png'
import frame6 from '../../../../assets/SecureScalableArcht/images/Frame 108.png'

const Page2 = () => {
  return (
    <div>
      <section className="digital-marketing-services-2-2">

        <div className="benefites-2">
          BENEFITS
        </div>

        <div className="sub-title-2">
         Benefits of Secure & Scalable Architecture with 7xcoder.com
        </div>

        <div className="benefites-containr-2">

          <div className="column-2 custom-border-2 right-pad-30">

            <div>
              <img src={frame1} alt="Icon" />
              <h3 className="benefit-title">
               Security-First Architectural Design
              </h3>
              <p className="benefit-text">
                Architectures built with protection at the core   ensuring robust defense layers, data integrity, and long-term system resilience.
              </p>
            </div>

            <div>
              <img src={frame2} alt="Icon" />
              <h3 className="benefit-title">
                Operational Resilience & Continuity
              </h3>
              <p className="benefit-text">
               Redundant systems, failover strategies, and structured governance models ensure uninterrupted performance and business continuity.
              </p>
            </div>

          </div>

          <div className="column-2 custom-border-2 left-pad-50 right-pad-30">

            <div>
              <img src={frame6} alt="Icon" />
              <h3 className="benefit-title">
              High-Performance & System Stability
              </h3>
              <p className="benefit-text">
               Infrastructure engineered for speed, reliability, and consistent uptime   even under heavy workloads and enterprise-scale operations.
              </p>
            </div>

            <div>
              <img src={frame5} alt="Icon" />
              <h3 className="benefit-title">
                Seamless Platform Compatibility
              </h3>
              <p className="benefit-text">
                Architectures designed for interoperability enabling smooth integration across applications, services, and enterprise ecosystems.
              </p>
            </div>

          </div>

          <div className="column-2 left-pad-50 right-pad-30">

            <div>
              <img src={frame3} alt="Icon" />
              <h3 className="benefit-title">
               Compliance & Governance Alignment
              </h3>
              <p className="benefit-text">
               Structured security standards, access controls, and compliance-ready frameworks protect sensitive data and support regulatory requirements.
              </p>
            </div>

            <div>
              <img src={frame4} alt="Icon" />
              <h3 className="benefit-title">
                Scalable & Future-Ready Infrastructure
              </h3>
              <p className="benefit-text">
                Modular, growth-oriented frameworks designed to expand seamlessly as business demands evolve   without compromising performance.
              </p>
            </div>

          </div>

        </div>

        <div className="second-container-2">

          <p className="second-text">
            Secure & Scalable Architecture at 7xcoder.com goes beyond system design  we build resilient, high-performance infrastructures that safeguard digital assets and enable long-term organizational growth. Our strategic, security-first engineering approach ensures every architecture aligns with business objectives, supports operational efficiency, and delivers measurable digital stability.
            <br /><br />
            <span className="second-text">Key Highlights</span>
          </p>

          <ul style={{width:'105%'}}>

            <li className="second-text">
             Strategic Architecture Blueprint Robust, future ready system frameworks designed around business workflows, infrastructure requirements, and long-term scalability.
            </li>

            <li className="second-text">
             Optimized Infrastructure Execution focused on speed, stability, and reliability ensuring consistent system performance under evolving operational demands.
            </li>

            <li className="second-text">
              Structured Frameworks & Engineering Standards Standardized architectural models disciplined practices ensure maintainability, scalability, enterprise-grade execution.
            </li>

            <li className="second-text">
             Resilient System Design & Operational Continuity Intelligent infrastructure planning that enhances uptime, reduces risk, and strengthens operational resilience.
            </li>

            <li className="second-text">
              Security-first design principles, advanced protection mechanisms, and stable infrastructure ensure long-term trust, regulatory compliance, and architectural stability
            </li>

          </ul>

        </div>

      </section>
    </div>
  )
}

export default Page2
