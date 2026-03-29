import React from 'react'

import '../../page2.css'

import frame1 from '../../../../assets/CheckoutConversionOptimization/images/Frame 103.png'
import frame2 from '../../../../assets/CheckoutConversionOptimization/images/Frame 104.png'
import frame3 from '../../../../assets/CheckoutConversionOptimization/images/Frame 105.png'
import frame4 from '../../../../assets/CheckoutConversionOptimization/images/Frame 106.png'
import frame5 from '../../../../assets/CheckoutConversionOptimization/images/Frame 107.png'
import frame6 from '../../../../assets/CheckoutConversionOptimization/images/Frame 108.png'

const Page2 = () => {
  return (
    <div>
      <section className="digital-marketing-services-2-2">

        <div className="benefites-2">
          BENEFITS
        </div>

        <div className="sub-title-2">
          Benefits of Checkout & Conversion Optimization with 7xcoder.com
        </div>

        <div className="benefites-containr-2">

          <div className="column-2 custom-border-2 right-pad-30">

            <div>
              <img src={frame1} alt="Icon" />
              <h3 className="benefit-title">
               Conversion-Centric Checkout Architecture
              </h3>
              <p className="benefit-text">
                Our checkout systems are engineered around user behavior, 
                trust signals, and friction reduction  ensuring seamless 
                alignment between customer intent and transaction completion.
              </p>
            </div>

            <div>
              <img src={frame2} alt="Icon" />
              <h3 className="benefit-title">
                Secure & Trust-Driven Payment Systems
              </h3>
              <p className="benefit-text">
                We implement secure payment gateways, encrypted transactions, 
                compliance standards, and trust-building elements that increase 
                customer confidence and reduce abandonment
              </p>
            </div>

          </div>

          <div className="column-2 custom-border-2 left-pad-50 right-pad-30">

            <div>
              <img src={frame6} alt="Icon" />
              <h3 className="benefit-title">
               High Performance & Transaction Stability
              </h3>
              <p className="benefit-text">
               Optimized for speed, security, and uptime  ensuring smooth payments, 
               fast processing, and uninterrupted checkout experiences during high traffic periods.
              </p>
            </div>

            <div>
              <img src={frame5} alt="Icon" />
              <h3 className="benefit-title">
                Data-Driven Optimization & Revenue Growth
              </h3>
              <p className="benefit-text">
                Through A/B testing, behavioral analytics, funnel tracking, and performance 
                tuning, we reduce drop-offs, increase conversions, and maximize revenue per visitor.
              </p>
            </div>

          </div>

          <div className="column-2 left-pad-50 right-pad-30">

            <div>
              <img src={frame3} alt="Icon" />
              <h3 className="benefit-title">
               Seamless System Integrations
              </h3>
              <p className="benefit-text">
                Checkout flows integrate smoothly with CRMs, ERPs, payment gateways, 
                logistics partners, and analytics tools  creating a unified and efficient 
                commerce ecosystem.
              </p>
            </div>

            <div>
              <img src={frame4} alt="Icon" />
              <h3 className="benefit-title">
                Scalable & Performance-Optimized Checkout Flows
              </h3>
              <p className="benefit-text">
                We build fast, modular checkout experiences that handle traffic spikes, 
                promotional campaigns, and peak demand without impacting speed or reliability.
              </p>
            </div>

          </div>

        </div>

        <div className="second-container-2">

          <p className="second-text">
            Checkout & Conversion Optimization at 7xcoder.com goes beyond minor 
            UI improvements  we engineer high-performance checkout ecosystems 
            designed to reduce friction, increase trust, and maximize completed transactions.
            Our strategic, data-driven optimization approach ensures every checkout flow aligns 
            with user behavior, business goals, and measurable revenue impact
            <br /><br />
            <span className="second-text">Key Highlights</span>
          </p>

          <ul style={{width:'105%'}}>

            <li className="second-text">
              Strategic Checkout Architecture Conversion-focused checkout flows designed around user 
              intent, behavioral insights, and streamlined purchase journeys
            </li>

            <li className="second-text">
              Performance-Optimized Execution Fast, lightweight, and stable checkout systems engineered 
              to minimize abandonment and ensure seamless transactions.
            </li>

            <li className="second-text">
              Structured Systems & Clean Logic Optimized code, modular frameworks & standardized 
              checkout processes ensure reliability, maintainability & consistent performance.
            </li>

            <li className="second-text">
              Frictionless payment steps, trust signals, smart validations, and simplified form 
              flows that enhance usability and boost conversion rates.
            </li>

            <li className="second-text">
              Secure payment gateways, encrypted transactions, and stable processing infrastructure 
              ensure customer confidence and long-term commercial credibility.
            </li>

          </ul>

        </div>

      </section>
    </div>
  )
}

export default Page2
