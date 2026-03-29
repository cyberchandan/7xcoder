import React from "react";

import "../../page5.css";
import { NavLink } from "react-router-dom";

import erp from "../../../../assets/ScalableBrandArchitecture/icon/1.png";
import crm from "../../../../assets/ScalableBrandArchitecture/icon/2.png";
import bpm from "../../../../assets/ScalableBrandArchitecture/icon/3.png";
import a from "../../../../assets/ScalableBrandArchitecture/icon/4.png";
import dot from "../../../../assets/ScalableBrandArchitecture/icon/5.png";
import hr from "../../../../assets/ScalableBrandArchitecture/icon/6.png";
import camel from "../../../../assets/ScalableBrandArchitecture/icon/7.png";
import finance from "../../../../assets/ScalableBrandArchitecture/icon/8.png";
import saas from "../../../../assets/ScalableBrandArchitecture/icon/9.png";
import ppt from "../../../../assets/ScalableBrandArchitecture/icon/10.png";
import ecom from "../../../../assets/ScalableBrandArchitecture/icon/11.png";
import ssas from "../../../../assets/ScalableBrandArchitecture/icon/12.png";
import nitro from "../../../../assets/ScalableBrandArchitecture/icon/13.png";
import api from "../../../../assets/ScalableBrandArchitecture/icon/14.png";

const Page5 = () => {
  const logos = [
    erp,
    crm,
    bpm,
    a,
    dot,
    hr,
    camel,
    finance,
    saas,
    ppt,
    ecom,
    ssas,
    nitro,
    api,
  ];

  return (
    <main className="bss5">
      <section className="blue-title-bss5">
        <h1>
          Strategic Brand Architecture Systems
          <div>Brand Architecture Solutions</div>
        </h1>
      </section>
      <section className="slider-bss5">
        <div className="slider-track-bss5">
          {[...logos, ...logos].map((img, index) => (
            <img src={img} alt="software-icon" key={index} />
          ))}
        </div>
      </section>

      <section className="para-bss5">
        <p>
          At 7xcoder.com, our Scalable Brand Architecture solutions are
          designed to structure complex brand ecosystems with clarity and
          strategic alignment. We develop architecture frameworks aligned with
          business vision, audience segmentation, and market positioning
          ensuring consistency, hierarchy clarity, and scalability across
          digital, marketing, and organizational platforms.
          <br />
          We specialize in delivering structured brand architecture systems,
          including master brand frameworks, sub-brand hierarchies, portfolio
          alignment models, governance standards, expansion strategies, and
          cross-channel integration systems. Every architecture is built for
          clarity, logical structure, and sustainable growth enabling businesses
          to expand confidently while maintaining strong brand equity and market
          coherence.
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
