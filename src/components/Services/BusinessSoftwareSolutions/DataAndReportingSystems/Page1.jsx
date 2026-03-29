import React from "react";

import "../../page1.css";

import digimart from "../../../../assets/DataAndReportingSystems/images/1.png";

const Page1 = () => {
  return (
    <div className="service_1_root">
      <main className="hero-box-service1">
        <div className="title-box-service1">
          <h1 className="title2-service1">Data & Reporting Systems</h1>
          <p className="sub-title-service1">
            Intelligent Data Systems. Optimized for Performance, Precision &
            Decision Making.
          </p>
          <p className="service-para1-service1">
            At 7xcoder.com, Data & Reporting Systems are treated as
            strategic intelligence assets not just technical tools. We design
            and develop scalable, secure, and high-performance data platforms
            that transform raw information into actionable insights and drive
            informed decision-making. Through intelligent data architecture and
            disciplined execution, we enable enterprises to gain clarity,
            optimize performance, and achieve sustainable, data-driven growth.
          </p>
        </div>
        <div className="logo-box2-service1">
          <img src={digimart} alt="" />
          <div>
            <div className="social-media-service1">
              <p>
                HOW DATA & REPORTING SYSTEMS WORK
                <br /> <span>OUR DATA ARCHITECTURE & REPORTING PROCESS</span>
              </p>
            </div>
            <div className="content-box-service1">
              <div className="content-service1">
                <h2>
                  <span>01.</span>Strategic Data Architecture & Planning
                </h2>
                <p>
                  We define reporting objectives, analyze data sources, and
                  design scalable data architectures aligned with accuracy,
                  performance, and long-term business intelligence goals.
                </p>
              </div>
              <div className="content-service1">
                <h2>
                  <span>02.</span>High-Performance Data Platform Development
                </h2>
                <p>
                  We build secure, reliable data systems engineered for seamless
                  data processing, structured reporting, and real-time insights
                  across departments and workflows.
                </p>
              </div>
              <div className="content-service1">
                <h2>
                  <span>03.</span>Data Governance, Security & Scalability
                </h2>
                <p>
                  Through rigorous validation, performance optimization, and
                  structured governance frameworks, we ensure data accuracy,
                  protection, and sustainable system scalability.
                </p>
              </div>
            </div>
            <p>
              With 7xcoder.com, Data & Reporting Systems deliver more than
              structured information they empower clarity, precision, and
              strategic decision-making. Through intelligent data architecture,
              high-performance reporting frameworks, and disciplined execution,
              we help organizations transform complex datasets into reliable
              insights, optimize performance visibility, and convert business
              data into measurable, long-term value.
            </p>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Page1;
