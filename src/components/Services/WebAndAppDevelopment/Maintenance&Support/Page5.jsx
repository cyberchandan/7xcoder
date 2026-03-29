import { motion } from "framer-motion";
import "../../page5.css";
// import erp from "../../../assets/bussines-software-solutions/icon/Group 196.png";

import Freshdesk from "../../../../assets/Maintenance&Support/Freshdesk.png";
import Zendesk from "../../../../assets/Maintenance&Support/Zendesk.png";
import Jira from "../../../../assets/Maintenance&Support/Jira.png";
import ServiceNow from "../../../../assets/Maintenance&Support/ServiceNow.png";
import Clockify from "../../../../assets/Maintenance&Support/Clockify.png";
import UptimeRobot from "../../../../assets/Maintenance&Support/UptimeRobot.png";
import AmazonCloudWatch from "../../../../assets/Maintenance&Support/AmazonCloudWatch.png";
import { NavLink } from "react-router-dom";

const Page5 = () => {
  const logos = [
    Freshdesk,
    Zendesk,
    Jira,
    ServiceNow,
    Clockify,
    UptimeRobot,
    AmazonCloudWatch,
  ];

  return (
    <main className="bss5">
      <section className="blue-title-bss5">
        <h1>
          Platforms We Protect & Sustain
          <div>Strategic Technology Partnerships</div>
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
          At 7xcoder.com, our Maintenance & Support services are designed
          to ensure seamless performance across all digital platforms and
          devices. We proactively manage, monitor, and optimize your systems to
          maintain consistency, security, and operational stability wherever
          your digital presence operates. We provide comprehensive support for
          websites, web applications, mobile apps (Android & iOS), e-commerce
          platforms, admin dashboards, SaaS products, and integrated systems.
          Every platform is continuously maintained for performance, security,
          responsiveness, and reliability enabling businesses to sustain a
          strong, secure, and uninterrupted digital presence across evolving
          technologies and user environments.
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
