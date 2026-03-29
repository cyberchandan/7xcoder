import "../../page5.css";



import erp from "../../../../assets/SecureScableArchitecture/image3.png";
import crm from "../../../../assets/SecureScableArchitecture/image4.png";
import bpm from "../../../../assets/SecureScableArchitecture/image5.png";
import a from "../../../../assets/SecureScableArchitecture/image6.png";
import dot from "../../../../assets/SecureScableArchitecture/image7.png";
import hr from "../../../../assets/SecureScableArchitecture/image8.png";
import camel from "../../../../assets/SecureScableArchitecture/image9.png";
// import finance from "../../../../assets/ecommerce-solutions/icon/Group 196 (2).png";
// import saas from "../../../../assets/ecommerce-solutions/icon/Group 238.png";
// import ppt from "../../../../assets/ecommerce-solutions/icon/Group 227 (2).png";
// import ecom from "../../../../assets/ecommerce-solutions/icon/Group 199 (2).png";
// import ssas from "../../../../assets/ecommerce-solutions/icon/Group 234.png";
// import nitro from "../../../../assets/ecommerce-solutions/icon/Group 212 (2).png";
// import api from "../../../../assets/ecommerce-solutions/icon/Group 235.png";
import { NavLink } from 'react-router-dom';

const logos = [
  erp, crm, bpm, a, dot, hr, camel,
  // finance, saas, ppt, ecom, ssas, nitro, api
];



const Page5 = () => {
  return (
    <main className="bss5">
      <section className="blue-title-bss5">
        <h1>
          Resilient Infrastructure We Architect
          <div>Strategic Digital Growth Alliances</div>
        </h1>
      </section>

      <section className="slider-bss5">
        <div className="slider-track-bss5">
          {[...logos, ...logos].map((img, index) => (
            <img src={img} alt="creative-icon" key={index} />
          ))}
        </div>
      </section>


      <section className="para-bss5">
        <p>
          At 7xcoder.com, our Secure & Scalable Architecture solutions are engineered to perform seamlessly across complex digital ecosystems and enterprise environments. We design system foundations aligned with business models, operational workflows, and technology landscapes  ensuring consistency, high performance, and long-term scalability across applications, databases, and infrastructure layers.
          We specialize in building resilient cloud architectures, secure application frameworks, scalable infrastructure models, API-ready environments, data protection layers, and enterprise-grade system foundations. Every architecture is optimized for performance, security, scalability, and stability  enabling organizations to operate reliable, protected, and future-ready digital infrastructures.
        </p>

        <button><NavLink to='/contact' className="nav-avoid-blue">Book Your Free Strategy Call</NavLink></button>
      </section>
    </main>
  )
}

export default Page5
