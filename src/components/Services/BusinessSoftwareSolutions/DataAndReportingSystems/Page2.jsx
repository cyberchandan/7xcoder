import React from "react";

import "../../page2.css";

import frame1 from "../../../../assets/DataAndReportingSystems/images/image21.png";
import frame2 from "../../../../assets/DataAndReportingSystems/images/image23.png";
import frame3 from "../../../../assets/DataAndReportingSystems/images/image25.png";
import frame4 from "../../../../assets/DataAndReportingSystems/images/image26.png";
import frame5 from "../../../../assets/DataAndReportingSystems/images/image24.png";
import frame6 from "../../../../assets/DataAndReportingSystems/images/image22.png";

const Page2 = () => {
  return (
    <div>
      <section className="digital-marketing-services-2-2">
        <div className="benefites-2">BENEFITS</div>

        <div className="sub-title-2">
          Benefits of Data & Reporting Systems with 7xcoder.com
        </div>

        <div className="benefites-containr-2">
          <div className="column-2 custom-border-2 right-pad-30">
            <div>
              <img src={frame1} alt="Icon" />
              <h3 className="benefit-title">
                Business-Aligned Data Architecture
              </h3>
              <p className="benefit-text">
                Data platforms structured around your business objectives,
                ensuring seamless alignment between information, analytics, and
                strategic decision-making.
              </p>
            </div>

            <div>
              <img src={frame2} alt="Icon" />
              <h3 className="benefit-title">
                Advanced Analytics & Reporting Efficiency
              </h3>
              <p className="benefit-text">
                Automated reporting frameworks that eliminate manual data
                compilation, improve accuracy, and enhance productivity across
                departments.
              </p>
            </div>
          </div>

          <div className="column-2 custom-border-2 left-pad-50 right-pad-30">
            <div>
              <img src={frame6} alt="Icon" />
              <h3 className="benefit-title">
                Scalable & Future-Ready Data Systems
              </h3>
              <p className="benefit-text">
                Flexible data infrastructures designed to grow with your
                organization supporting expanding datasets, new integrations,
                and advanced analytics without performance loss.
              </p>
            </div>

            <div>
              <img src={frame5} alt="Icon" />
              <h3 className="benefit-title">
                Secure & Compliant Data Governance
              </h3>
              <p className="benefit-text">
                Robust security protocols, access controls, and governance
                models ensure data integrity, regulatory compliance, and
                long-term trust.
              </p>
            </div>
          </div>

          <div className="column-2 left-pad-50 right-pad-30">
            <div>
              <img src={frame3} alt="Icon" />
              <h3 className="benefit-title">
                High-Performance Data Processing & Reliability
              </h3>
              <p className="benefit-text">
                Optimized systems engineered for speed, accuracy, and stability
                delivering real-time insights with minimal latency and maximum
                reliability.
              </p>
            </div>

            <div>
              <img src={frame4} alt="Icon" />
              <h3 className="benefit-title">Seamless Data Integrations</h3>
              <p className="benefit-text">
                Smooth integration with ERPs, CRMs, financial tools, SaaS
                platforms, and third-party systems enabling unified data
                visibility and streamlined reporting.
              </p>
            </div>
          </div>
        </div>

        <div className="second-container-2">
          <p className="second-text">
            Data & Reporting Systems at 7xcoder.com go beyond structured
            dashboards we design scalable, secure, and high-performance data
            ecosystems that transform raw information into actionable business
            intelligence. Our strategic and performance-driven approach ensures
            every reporting solution aligns with organizational goals, enhances
            visibility, and delivers measurable operational impact.
            <br />
            <br />
            <span className="second-text">Key Highlights</span>
          </p>

          <ul style={{ width: "105%" }}>
            <li className="second-text">
              Strategic Data Architecture Robust, future-ready data frameworks
              designed around business objectives, data flows, and long-term
              scalability.
            </li>
            <li className="second-text">
              Data Processing Execution focused on speed, accuracy, and
              stability ensuring reliable reporting, real-time insights, and
              measurable decision-making outcomes.
            </li>
            <li className="second-text">
              Models & Clean Frameworks Standardized data structures and
              disciplined development practices ensure consistency,
              maintainability, professional execution.
            </li>
            <li className="second-text">
              Insight-Driven Dashboards & User Experience Role-based, intuitive
              reporting interfaces that enhance visibility, improve
              productivity, and strengthen strategic control.
            </li>
            <li className="second-text">
              Advanced data protection protocols, access governance, and stable
              infrastructure ensure long-term trust, compliance, and reporting
              reliability.
            </li>
          </ul>
        </div>
      </section>
    </div>
  );
};

export default Page2;
