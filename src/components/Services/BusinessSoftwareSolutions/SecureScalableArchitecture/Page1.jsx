import React from "react";
import "../../page1.css";
import architecture from "../../../../assets/SecureScalableArcht/images/1.png";

const Page1 = () => {
  return (
    <div className="service_1_root">
      <main className="hero-box-service1">

        {/* LEFT CONTENT */}
        <div className="title-box-service1">
          <h1 className="title2-service1">
            Secure & Scalable Architecture
          </h1>

          <p className="sub-title-service1">
            Architecture Designed for Security, Scalability & Operational Excellence.
          </p>

          <p className="service-para1-service1">
            At 7xcoder.com, Secure & Scalable Architecture is treated as the
            foundation of sustainable digital growth not just a technical framework.
            We design and implement resilient, high-performance architectural
            ecosystems that ensure security by design, seamless scalability,
            and long-term operational stability. Through intelligent system design
            and disciplined engineering standards, we create secure, scalable
            infrastructures that empower businesses to grow confidently and
            sustainably.
          </p>
        </div>

        {/* RIGHT CONTENT */}
       <div className="logo-box2-service1">

          <img src={architecture} alt="Secure Scalable Architecture" />

          <div>

            <div className="social-media-service1">
              <p>
                OUR SECURE ARCHITECTURE FRAMEWORK <br />
                <span>HOW WE DESIGN SECURITY-FIRST SCALABLE SYSTEMS</span>
              </p>
            </div>

            <div className="content-box-service1">

              <div className="content-service1">
                <h2>
                  <span>01.</span> Security-First Architecture Strategy & Planning
                </h2>
                <p>
                  We define system objectives, assess infrastructure requirements,
                  and design scalable architecture frameworks aligned with
                  performance, protection, and long-term business growth.
                </p>
              </div>

              <div className="content-service1">
                <h2>
                  <span>02.</span> Resilient System Design & Implementation
                </h2>
                <p>
                  We build secure, high-performance architectures engineered for
                  stability, clean system structure, and seamless scalability
                  across platforms and environments.
                </p>
              </div>

              <div className="content-service1">
                <h2>
                  <span>03.</span> Governance, Security & Scalability Assurance
                </h2>
                <p>
                  Through rigorous validation, performance optimization, and
                  structured governance models, we ensure long-term stability,
                  data protection, and sustainable architectural scalability.
                </p>
              </div>

            </div>

            <p>
              With 7xcoder.com, Secure & Scalable Architecture delivers more
              than structure it establishes a resilient foundation for
              performance, protection, and long-term growth. Through
              security-first design, intelligent infrastructure planning, and
              disciplined engineering standards, we help organizations build
              stable, future-ready architectures that safeguard digital assets,
              enable scalability, and transform core systems into sustainable,
              high-performance infrastructures.
            </p>

          </div>
        </div>

      </main>
    </div>
  );
};

export default Page1;





       
