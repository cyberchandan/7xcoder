import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";

import { useState } from "react";
import "./index.css";

import img28 from "../../../assets/images/image 28.png";
import img29 from "../../../assets/images/image 29.png";
import img30 from "../../../assets/images/image 30.png";
import img31 from "../../../assets/images/image 31.png";
import img32 from "../../../assets/images/image 32.png";
import img33 from "../../../assets/images/image 33.png";
import img34 from "../../../assets/images/image 34.png";
import img35 from "../../../assets/images/image 35.png";
import img36 from "../../../assets/images/image 36.png";
import img37 from "../../../assets/images/image 37.png";

import integration from "../../../assets/icons/integration.png";
import collaboration from "../../../assets/icons/collaboration.png";
import data from "../../../assets/icons/data.png";

import arrowupright from "../../../assets/icons/arrow-up-right.png";
import union from "../../../assets/images/Union.png";
import Union1 from "../../../assets/images/Union-1.png";

import rohitshinde from "../../../assets/images/chandan.jpg";

/* ================= EXPERTISE ================= */
const expertiseList = [
  {
    title: "Collaboration",
    description:
      "Great results come from great collaboration. We team up with ambitious brands, combining creativity and expertise to craft digital solutions that make an impact, together.",
    img: collaboration,
  },
  {
    title: "Data-Driver Insights",
    description:
      "Insights power innovation. We use data to identify opportunities, refine strategy, and ensure every action drives impact and success.",
    img: data,
  },
  {
    title: "Seamless Integration",
    description:
      "We ensure every system, platform, and tool works together smoothly. Our seamless integration approach keeps your digital ecosystem efficient, secure, and easy to manage.",
    img: integration,
  },
];

/* ================= SERVICES ================= */
const service = [
  {
    id: 1,
    image: img28,
    title: "Design & Creatives",
    desc: "Visually compelling designs crafted to strengthen brand identity and drive engagement.",
    address: "services/design-Creative-Services",
  },
  {
    id: 2,
    image: img29,
    title: "ORM",
    desc: "Proactive strategies to protect, enhance, and strengthen your brand's digital reputation.",
    address: "/services/online-reputation-management",
  },
  {
    id: 3,
    image: img30,
    title: "Branding & Strategy",
    desc: "Strategic positioning and growth-focused planning that builds lasting brand value.",
    address: "services/branding-strategy",
  },
  {
    id: 4,
    image: img31,
    title: "UI/UX Design",
    desc: "User-centric interface and experience design crafted for clarity, usability, conversion.",
    address: "services/ui-ux-design",
  },
  {
    id: 5,
    image: img32,
    title: "HRMS",
    desc: "Integrated HRMS solutions to streamline operations and optimize workforce efficiency.",
    address: "services/hrms",

  },
  {
    id: 6,
    image: img33,
    title: "Pay Per Click (PPC)",
    desc: "Data-driven PPC campaigns focused on high-quality leads and maximum ROI.",
    address: "services/pay-per-click",
  },
  {
    id: 7,
    image: img34,
    title: "Web & App Development",
    desc: "Scalable web and app solutions built for performance, security, and seamless user experience.",
    address: "services/web-and-app-development-services",
  },
  {
    id: 8,
    image: img35,
    title: "Influencer Marketing",
    desc: "Strategic influencer collaborations that amplify reach, credibility, conversions.",
    address: "services/email-and-influencer-marketing",
  },
  {
    id: 9,
    image: img36,
    title: "SEO & Content Writing",
    desc: "Search-optimized content crafted to boost rankings, engage audiences, drive growth.",
    address: "services/seo-and-content-writing",
  },
  {
    id: 10,
    image: img37,
    title: "Social Media Marketing",
    desc: "Impact-driven social strategies designed to grow engagement, brand presence, and results.",
    address: "/services/digital-marketing",
  },
];

const HomePage4 = () => {
  const [serviceIndex, setServiceIndex] = useState(0);
  const visibleCount = 5;

  const nextServices = () => {
    setServiceIndex((prev) =>
      prev + visibleCount >= service.length ? 0 : prev + visibleCount,
    );
  };

  const prevServices = () => {
    setServiceIndex((prev) =>
      prev - visibleCount < 0
        ? service.length - visibleCount
        : prev - visibleCount,
    );
  };

  return (
    <section className="about-page-home4">
      <div className="about-inner-home4">
        {/* ================= ARROWS ================= */}
        <div className="arrow-home4">
          <img src={union} alt="Prev" onClick={prevServices} />
          <img src={Union1} alt="Next" onClick={nextServices} />
        </div>

        {/* ================= SERVICES GRID ================= */}
        <div className="services-grid-home4">
          {service
            .slice(serviceIndex, serviceIndex + visibleCount)
            .map((item, i) => (
              <motion.div 
               initial={{ opacity: 0, x: 100 }}
  whileInView={{ opacity: 1, x: 0 }}
  transition={{ duration: 0.8 }}
              className="feature-card-1-home4" key={item.id}>
                <div style={{ width: "186px", margin: "auto" }}>
                  <motion.div 
                     initial={{ opacity: 0, rotate: -20 }}
  whileInView={{ opacity: 1, rotate: 0 }}
  transition={{ duration: 0.8 }}
                  className="service-icon-home4">
                    <img src={item.image} alt={item.title} />
                  </motion.div>

                  <h3 className="service-title-home4">{item.title}</h3>
                  <p className="service-desc-home4">{item.desc}</p>

                  <div className="read-more-wrapper-home4">
                    <NavLink to={item.address} className="read-more-btn-home4">
                      Read More
                      <img
                        src={Union1}
                        alt="arrow"
                        className="read-more-icon-home4"
                      />
                    </NavLink>
                  </div>
                </div>
              </motion.div>
            ))}
        </div>

        {/* ================= FOUNDER SECTION ================= */}
        <div className="founder-section-home4">
          {/* IMAGE */}
          <motion.div 
             initial={{ opacity: 0, scale: 0.8 }}
  whileInView={{ opacity: 1, scale: 1 }}
  transition={{ duration: 0.8 }}
          className="founder-image-home4">
            <img src={rohitshinde} alt="Chandan Kumar" />
          </motion.div>

          {/* MAIN TEXT */}
          <motion.div 
          initial={{ opacity: 0, x: 100 }}
  whileInView={{ opacity: 1, x: 0 }}
  transition={{ duration: 0.8 }}
          className="founder-column-home4 text-reduce-top">
            <p className="homepage-4-title-home4">Chandan Kumar</p>
            <p className="homepage-4-subTitle-home4">
              Founder & CEO, 7xcoder.com
            </p>

            <p className="homepage-4-text-home4">
              <span className="dropcap-home4">I</span> am the Founder & CEO of
              7xcoder.com, a global minded, performance led digital
              marketing agency built to deliver scalable growth and measurable
              ROI. I lead the company’s strategic direction, overseeing
              everything from market positioning and demand generation to
              execution, optimization, and long-term client success.
              <br />
              <br />
              With proven experience as a Digital Marketing Leader, Consultant,
              and Growth Strategist, I have helped organizations across multiple
              sectors accelerate revenue, strengthen digital presence, and
              convert marketing investments into sustainable business outcomes.
              My leadership philosophy combines data intelligence, creative
              strategy, and execution excellence.
              <br />
              <br />I bring deep expertise in performance marketing, SEO, growth
              funnels, and analytics driven decision making. Certified in Google
              Ads and Google Analytics, I work hands-on with advanced platforms
              including SEMrush, Google Keyword Planner, and Google Analytics to
              drive acquisition, retention, and scalable digital growth.
            </p>
          </motion.div>

          {/* SIDE TEXT */}
          <motion.div 
          initial={{ opacity: 0, x: 100 }}
  whileInView={{ opacity: 1, x: 0 }}
  transition={{ duration: 0.8 }}
          className="founder-column-home4 right-home4">
            <p className="homepage-4-text-home4">
              Beyond client delivery, I am committed to building future ready
              digital talent by sharing global best practices and practical
              knowledge. My long-term vision is to position 7xcoder.com as
              a trusted global growth partner for brands seeking structured,
              ROI-focused digital transformation.
            </p>

            <p className="homepage-4-text-home4">
              Outside of work, I actively follow global automotive trends and
              enjoy experimenting with culinary techniques interests that
              reflect my curiosity, discipline, and continuous learning mindset.
            </p>

            <div className="read-more-wrapper-home4 home4-main-btn">
              <NavLink to="/contact" className="read-more-btn-home4">
                Read More
                <img
                  src={Union1}
                  alt="arrow"
                  className="read-more-icon-home4"
                />
              </NavLink>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HomePage4;
