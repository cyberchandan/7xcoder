import React from "react";
import "../../page1.css";
import checkout from "../../../../assets/CheckoutConversionOptimization/images/1.png";

const Page1 = () => {
  return (
    <div className="service_1_root">
      <main className="hero-box-service1">
        <div className="title-box-service1">
          <h1 className="title2-service1">Checkout & Conversion Optimization</h1>

          <p className="sub-title-service1">
           Smart Checkout Optimization. Accelerating Conversions & Revenue Growth.
          </p>

          <p className="service-para1-service1">
           At 7xcoder.com, Checkout & Conversion Optimization is treated as a
           strategic revenue accelerator  not just a UI enhancement. We design and 
           refine high-performance checkout systems that reduce friction, enhance 
           user trust, and maximize transaction completion rates. Through intelligent 
           checkout architecture and performance tuning, we transform drop-offs into 
           completed purchases and traffic into sustainable revenue growth.
          </p>
        </div>

        <div className="logo-box2-service1">
          <img src={checkout} alt="Checkout Conversion Optimization" />

          <div>
            <div className="social-media-service1">
              <p>
                HOW CHECKOUT & CONVERSION OPTIMIZATION WORKS <br />
                <span>HOW WE REDUCE CART ABANDONMENT & BOOST SALES</span>
              </p>
            </div>

            <div className="content-box-service1">

              <div className="content-service1">
                <h2>
                  <span>01.</span> Conversion Strategy & Checkout Analysis
                </h2>
                <p>
                 We define revenue goals, analyze user behavior, and map 
                 friction points across the checkout journey to design a 
                 streamlined, high-converting purchase flow.
                </p>
              </div>

              <div className="content-service1">
                <h2>
                  <span>02.</span>High-Performance Checkout Optimization
                </h2>
                <p>
                We build and refine fast, secure, and conversion-driven 
                checkout systems engineered to reduce cart abandonment, 
                simplify payments, and enhance transaction completion rates.
                </p>
              </div>

              <div className="content-service1">
                <h2>
                  <span>03.</span> Continuous Testing, Security & Performance Enhancement
                </h2>
                <p>
                Through A/B testing, performance tuning, and security hardening, we ensure 
                checkout stability, payment reliability, and scalable growth under increasing 
                traffic demands.
                </p>
              </div>

            </div>

            <p>
             With 7xcoder.com, Checkout & Conversion Optimization delivers more than completed 
             transactions  it creates frictionless buying journeys that maximize revenue potential. 
             Through strategic checkout architecture, performance-driven enhancements, and disciplined 
             testing, we help businesses reduce cart abandonment, increase conversion rates, and 
             transform traffic into consistent, sustainable revenue growth
            </p>

          </div>
        </div>
      </main>
    </div>
  );
};

export default Page1;
