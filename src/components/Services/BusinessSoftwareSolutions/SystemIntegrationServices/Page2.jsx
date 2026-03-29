import React from "react";
import { motion } from "framer-motion";
import "../../page2.css";

import frame1 from "../../../../assets/SystemIntegrationServices/images/image21.png";
import frame2 from "../../../../assets/SystemIntegrationServices/images/image23.png";
import frame3 from "../../../../assets/SystemIntegrationServices/images/image25.png";
import frame4 from "../../../../assets/SystemIntegrationServices/images/image26.png";
import frame5 from "../../../../assets/SystemIntegrationServices/images/image24.png";
import frame6 from "../../../../assets/SystemIntegrationServices/images/image22.png";

const Page2 = () => {
  return (
    <div>
      <section className="digital-marketing-services-2-2">
        <div className="benefites-2">BENEFITS</div>

        <div className="sub-title-2">
          Benefits of System Integration Services with 7xcoder.com
        </div>

        <div className="benefites-containr-2">
          <div className="column-2 custom-border-2 right-pad-30">
            <div>
              <img src={frame1} alt="Icon" />
              <h3 className="benefit-title">Unified System Architecture</h3>
              <p className="benefit-text">
                Integration frameworks designed around your business ecosystem
                ensuring seamless alignment between platforms, workflows, and
                operational objectives.
              </p>
            </div>

            <div>
              <img src={frame2} alt="Icon" />
              <h3 className="benefit-title">
                Workflow Synchronization & Efficiency
              </h3>
              <p className="benefit-text">
                Eliminate system silos by automating cross-platform
                communication, improving collaboration, and enhancing overall
                operational productivity.
              </p>
            </div>
          </div>

          <div className="column-2 custom-border-2 left-pad-50 right-pad-30">
            <div>
              <img src={frame6} alt="Icon" />
              <h3 className="benefit-title">
                Scalable & Future-Ready Integrations
              </h3>
              <p className="benefit-text">
                Flexible integration models that evolve with your organization
                enabling new systems, tools, and technologies to connect without
                disrupting performance.
              </p>
            </div>

            <div>
              <img src={frame5} alt="Icon" />
              <h3 className="benefit-title">
                Secure & Compliant Data Exchange
              </h3>
              <p className="benefit-text">
                Advanced security protocols and governance controls ensure
                protected data flow and regulatory compliance across integrated
                systems.
              </p>
            </div>
          </div>

          <div className="column-2 left-pad-50 right-pad-30">
            <div>
              <img src={frame3} alt="Icon" />
              <h3 className="benefit-title">
                High-Performance Connectivity & Reliability
              </h3>
              <p className="benefit-text">
                Optimized integrations engineered for speed, stability, and
                consistent data exchange minimizing downtime and operational
                friction.
              </p>
            </div>

            <div>
              <img src={frame4} alt="Icon" />
              <h3 className="benefit-title">
                Seamless Cross-Platform Interoperability
              </h3>
              <p className="benefit-text">
                Smooth integration with ERPs, CRMs, payment gateways, SaaS
                tools, and third-party platforms enabling unified operations and
                centralized data visibility.
              </p>
            </div>
          </div>
        </div>

        <div className="second-container-2">
          <p className="second-text">
            System Integration Services at 7xcoder.com go beyond connecting
            platforms we design scalable, secure, and high-performance
            integration ecosystems that unify technologies and accelerate
            long-term operational growth. Our strategic and performance-driven
            approach ensures every integration aligns with business objectives,
            eliminates data silos, and delivers measurable efficiency across
            systems.
            <br />
            <br />
            <span className="second-text">Key Highlights</span>
          </p>

          <ul style={{ width: "105%" }}>
            <li className="second-text">
              Strategic Integration Architecture Robust, future ready
              integration frameworks designed around business processes, system
              dependencies, and long-term scalability.
            </li>
            <li className="second-text">
              Performance Optimized Connectivity Execution focused on speed,
              stability, & accuracy ensuring reliable data synchronization &
              seamless cross platform performance.
            </li>
            <li className="second-text">
              Standards Standardized APIs, clean integration logic, &
              disciplined governance ensure consistency, maintainability, and
              enterprise grade execution.
            </li>
            <li className="second-text">
              Operational Efficiency Role based system connectivity that
              streamlines processes, enhances collaboration, & improves cross
              department productivity.
            </li>
            <li className="second-text">
              Secure integration protocols, protected data exchange mechanisms,
              and stable infrastructure ensure long-term trust, compliance, and
              operational continuity.
            </li>
          </ul>
        </div>
      </section>
    </div>
  );
};

export default Page2;
