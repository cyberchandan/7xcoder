import React from "react";

import "../../page2.css";

import frame1 from "../../../../assets/Enterprise&InternalSystems/icon1.png";
import frame2 from "../../../../assets/Enterprise&InternalSystems/icon2.png";
import frame3 from "../../../../assets/Enterprise&InternalSystems/icon3.png";
import frame4 from "../../../../assets/Enterprise&InternalSystems/icon4.png";
import frame5 from "../../../../assets/Enterprise&InternalSystems/icon5.png";
import frame6 from "../../../../assets/Enterprise&InternalSystems/icon6.png";

const Page2 = () => {
  return (
    <div>
      <section className="digital-marketing-services-2-2">
        <div className="benefites-2">BENEFITS</div>

        <div className="sub-title-2">
          Enterprise & Internal Systems Strategic Business Advantages
        </div>

        <div className="benefites-containr-2">
          <div className="column-2 custom-border-2 right-pad-30">
            <div>
              <img src={frame1} alt="Icon" />
              <h3 className="benefit-title">
                Enterprise-Aligned System Architecture
              </h3>
              <p className="benefit-text">
                Internal platforms designed around organizational structure,
                governance models, and operational workflows ensuring seamless
                alignment between technology and business strategy.
              </p>
            </div>

            <div>
              <img src={frame2} alt="Icon" />
              <h3 className="benefit-title">
                Process Optimization & Workflow Automation
              </h3>
              <p className="benefit-text">
                Automation of repetitive tasks and structured process management
                improves accuracy, reduces manual effort, and enhances
                enterprise productivity.
              </p>
            </div>
          </div>

          <div className="column-2 custom-border-2 left-pad-50 right-pad-30">
            <div>
              <img src={frame3} alt="Icon" />
              <h3 className="benefit-title">
                Scalable & Future-Ready Infrastructure
              </h3>
              <p className="benefit-text">
                Modular enterprise architectures built to evolve with business
                expansion, supporting new users, departments, and integrations
                without operational disruption.
              </p>
            </div>

            <div>
              <img src={frame4} alt="Icon" />
              <h3 className="benefit-title">
                Secure, Compliant & Controlled Environments
              </h3>
              <p className="benefit-text">
                Advanced security frameworks, access governance, and
                compliance-ready structures safeguard sensitive enterprise data
                and maintain regulatory standards.
              </p>
            </div>
          </div>

          <div className="column-2 left-pad-50 right-pad-30">
            <div>
              <img src={frame5} alt="Icon" />
              <h3 className="benefit-title">
                High Performance & Operational Reliability
              </h3>
              <p className="benefit-text">
                Systems engineered for speed, stability, and uptime ensuring
                consistent performance even under heavy workloads and
                mission-critical environments.
              </p>
            </div>

            <div>
              <img src={frame6} alt="Icon" />
              <h3 className="benefit-title">
                Seamless Enterprise Integrations
              </h3>
              <p className="benefit-text">
                Smooth integration with ERPs, CRMs, HR systems, financial tools,
                and third-party platforms enabling unified operations and
                centralized data control.
              </p>
            </div>
          </div>
        </div>

        <div className="second-container-2">
          <p className="second-text">
            Enterprise & Internal Systems at 7xcoder.com go beyond
            operational tools — we build scalable, secure, and high-performance
            internal infrastructures that strengthen governance, streamline
            workflows, and drive long-term organizational growth. Our strategic
            and performance-driven approach ensures every system aligns with
            enterprise objectives, enhances operational control, and delivers
            measurable business impact.
            <br />
            <br />
            <span className="second-text">Key Highlights</span>
          </p>

          <ul style={{ width: "105%" }}>
            <li className="second-text">
              Enterprise System Architecture Robust, future ready internal
              architectures designed around organizational structure, governance
              models, and long-term scalability.
            </li>
            <li className="second-text">
              Performance Engineered Infrastructure Focused on speed, stability,
              and reliability to ensure optimized performance across
              mission-critical operations.
            </li>
            <li className="second-text">
              Standardized Frameworks & Governance Structured development
              standards clean system frameworks ensure consistency,
              maintainability, & enterprise grade execution.
            </li>
            <li className="second-text">
              Operational Efficiency & Role Based Experiences Process centric
              system designs that improve productivity, streamline workflows,
              and enhance collaboration.
            </li>
            <li className="second-text">
              Security, Compliance & System Integrity Advanced security
              protocols and stable infrastructure ensure long-term trust,
              compliance, and operational continuity.
            </li>
          </ul>
        </div>
      </section>
    </div>
  );
};

export default Page2;
