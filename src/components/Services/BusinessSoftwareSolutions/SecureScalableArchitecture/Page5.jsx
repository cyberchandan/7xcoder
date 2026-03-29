import React from "react";
import "../../page5.css";
import { NavLink } from "react-router-dom";

import instagram from "../../../../assets/SecureScalableArcht/icon/1.png";
import facebook from "../../../../assets/SecureScalableArcht/icon/2.png";
import linkedin from "../../../../assets/SecureScalableArcht/icon/3.png";
import youtube from "../../../../assets/SecureScalableArcht/icon/4.png";
import x from "../../../../assets/SecureScalableArcht/icon/5.png";
import pinterest from "../../../../assets/SecureScalableArcht/icon/6.png";
import snapchat from "../../../../assets/SecureScalableArcht/icon/7.png";
import whatsapp from "../../../../assets/SecureScalableArcht/icon/8.png";
import google from "../../../../assets/SecureScalableArcht/icon/9.png";
import telegram from "../../../../assets/SecureScalableArcht/icon/10.png";
import be from "../../../../assets/SecureScalableArcht/icon/11.png";
import ball from "../../../../assets/SecureScalableArcht/icon/12.png";
import reddit from "../../../../assets/SecureScalableArcht/icon/13.png";
import quora from "../../../../assets/SecureScalableArcht/icon/14.png";

const logos = [
  instagram,
  facebook,
  linkedin,
  youtube,
  x,
  pinterest,
  snapchat,
  whatsapp,
  google,
  telegram,
  be,
  ball,
  reddit,
  quora
];

const Page5 = () => {
  return (
    <main className="bss5">

      <section className="blue-title-bss5">
        <h1>
          Strategic Architecture Partnerships
          <div>Resilient Infrastructure We Build</div>
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
        At 7xcoder.com, our Secure & Scalable Architecture solutions are engineered to perform seamlessly across complex business environments and digital ecosystems. We design infrastructure frameworks aligned with operational requirements, security standards, and long-term business objectives  ensuring consistent performance, resilience, and scalability across systems and departments. We specialize in building high-performance architectural foundations including cloud infrastructure, enterprise system frameworks, API-driven ecosystems, secure data environments, microservices architectures, and scalable deployment models. Every architecture is optimized for security, performance, scalability, and reliability enabling organizations to maintain stable, protected, and future-ready digital operations.
        </p>

        <button>
          <NavLink to="/contact" className="nav-avoid-blue">
            Book Your Free Strategy Call
          </NavLink>
        </button>

      </section>

    </main>
  );
};

export default Page5;
