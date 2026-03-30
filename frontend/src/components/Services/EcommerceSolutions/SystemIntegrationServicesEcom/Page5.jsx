import React from "react";
import "../../page5.css";

import img1 from "../../../../assets/SystemIntegrationServicesEcom/images/51.png";
import img2 from "../../../../assets/SystemIntegrationServicesEcom/images/52.png";
import img3 from "../../../../assets/SystemIntegrationServicesEcom/images/53.png";
import img4 from "../../../../assets/SystemIntegrationServicesEcom/images/54.png";
import img5 from "../../../../assets/SystemIntegrationServicesEcom/images/55.png";
import img6 from "../../../../assets/SystemIntegrationServicesEcom/images/56.png";
import img7 from "../../../../assets/SystemIntegrationServicesEcom/images/57.png";
import { NavLink } from "react-router-dom";

const logos = [img1, img2, img3, img4, img5, img6, img7];

const Service3_5 = () => {
  return (
    <main className="bss5">
      <section className="blue-title-bss5">
        <h1>
          Social Platforms We Specialize In
          <div>Strategic Partnerships</div>
        </h1>
      </section>

      <section className="slider-bss5">
        <div className="slider-track-bss5">
          {[...logos, ...logos].map((img, index) => (
            <img src={img} alt="logo" key={index} />
          ))}
        </div>
      </section>

      <section className="para-bss5">
        <p>
         At 7xcoder.com, our System Integration Services are engineered to perform seamlessly across complex digital environments and enterprise platforms. We design integration architectures aligned with business systems, operational workflows, and data ecosystems ensuring consistency, real-time synchronization, and scalable performance across departments and technologies.
We specialize in integrating CRMs, ERPs, e-commerce platforms, payment gateways, inventory systems, HR tools, analytics platforms, and third-party applications into unified digital infrastructures. Every integration is optimized for speed, security, scalability, and reliability  enabling businesses to operate cohesive, efficient, and future-ready technology ecosystems.
        </p>

                              <button><NavLink to='/contact' className="nav-avoid-blue">Book Your Free Strategy Call</NavLink></button>
      </section>
    </main>
  );
};

export default Service3_5;
