import { motion } from "framer-motion";
import "./index.css";
import integration from "../../../assets/icons/integration.png";
import arrowupright from "../../../assets/icons/arrow-up-right.png";
import collaboration from "../../../assets/icons/collaboration.png";
import data from "../../../assets/icons/data.png";
import rohitshinde from "../../../assets/images/chandan.jpg";
import { NavLink, useNavigate } from "react-router";

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

const AboutUs2 = () => {
  const navigate = useNavigate();

  const handleButton = () => {
    navigate("/contact");
  };

  return (
    <section className="about-page-about2">
      {/* <div className="bg-vector">
        <svg
          viewBox="0 0 3095 1281"
          preserveAspectRatio="none"
          className="vector-svg"
        >
          <path
            d="M0,700 C800,300 1600,1100 3095,200"
            fill="none"
            stroke="white"
            strokeWidth="2"
            strokeOpacity="0.1"
          />
        </svg>
      </div> */}
      <div className="about-inner-about2">
        {/* ================= TOP SECTION ================= */}
        <motion.div 
          initial={{ opacity: 0, x: -120 }}
  whileInView={{ opacity: 1, x: 0 }}
  transition={{ duration: 0.8 }}
  viewport={{ once: false, amount: 0.3 }}
        className="top-section-about2">
          {/* LEFT TEXT */}
          <div className="top-left-about2">
            <span className="about-tag-about2">ABOUT COMPANY</span>

            <h1 className="about-title-about2">
              We Reinvent Digital <br />
              Experiences
            </h1>

            <p className="about-desc-about2">
              We create intelligent digital solutions that elevate brands and
              accelerate growth. With a commitment to quality and innovation,
              7xcoder.com ensures every experience we build delivers value,
              clarity, and measurable success.
            </p>
            <br />
            <button onClick={handleButton} className="connect-btn-about2">
              Let’s connect
              <img
                src={arrowupright}
                alt="arrow"
                className="btn-arrow-about2"
              />
            </button>
          </div>

          {/* RIGHT CARDS */}
          <motion.div 
            initial={{ opacity: 0, x: 120 }}
  whileInView={{ opacity: 1, x: 0 }}
  transition={{ duration: 0.8 }}
  viewport={{ once: false, amount: 0.3 }}
          className="cards-about2">
            {expertiseList.map((item, index) => (
              <div className="feature-card-1-about2" key={index}>
                <div className="icon-box-1-about2">
                  <img src={item.img} alt={item.title} />
                </div>

                <h4>{item.title}</h4>
                <p>{item.description}</p>
              </div>
            ))}
          </motion.div>
        </motion.div>

        {/* ================= FOUNDER SECTION ================= */}
        <div className="founder-section-about2">
          <motion.div 
            initial={{ opacity: 0, scale: 0.5 }}
  whileInView={{ opacity: 1, scale: 1 }}
  transition={{ duration: 0.8 }}
  viewport={{ once: false, amount: 0.3 }}
          className="founder-image-about2">
            <img src={rohitshinde} alt="Chandan Kumar" />
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y :120 }}
  whileInView={{ opacity: 1, y:0 }}
  transition={{ duration: 0.8 }}
  viewport={{ once: false, amount: 0.3 }}
          className="founder-column-about2">
            <p className="homepage-4-title-about2">Chandan Kumar</p>
            <p className="homepage-4-subTitle-about2">
              Founder & CEO, 7xcoder.com
            </p>

            <p className="homepage-4-text-about2">
              <span className="dropcap-about2">I</span> am the Founder & CEO of
              7xcoder.com, a global minded, performance led digital
              marketing agency built to deliver scalable growth and measurable
              ROI. I lead the company’s strategic direction, overseeing
              everything from market positioning and demand generation to
              execution, optimization, and long-term client success.
              <br />
              <br />
              <br />
              With proven experience as a Digital Marketing Leader, Consultant,
              and Growth Strategist, I have helped organizations across multiple
              sectors accelerate revenue, strengthen digital presence, and
              convert marketing investments into sustainable business outcomes.
              My leadership philosophy combines data intelligence, creative
              strategy, and execution excellence.
            </p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x:120 }}
  whileInView={{ opacity: 1, x:0 }}
  transition={{ duration: 0.8 }}
  viewport={{ once: false, amount: 0.3 }}
          className="founder-column-about2 right-about2">
            <p className="homepage-4-text-about2">
              Beyond client delivery, I am committed to building future ready
              digital talent by sharing global best practices and practical
              knowledge. My long-term vision is to position 7xcoder.com as
              a trusted global growth partner for brands seeking structured,
              ROI-focused digital transformation.
            </p>

            <p className="homepage-4-text-about2">
              Outside of work, I actively follow global automotive trends and
              enjoy experimenting with culinary techniques interests that
              reflect my curiosity, discipline, and continuous learning mindset.
            </p>

            <div className="readmore-wrap-about2">
              <button onClick={handleButton} className="connect-btn-about2">
                Read More
                <img
                  src={arrowupright}
                  alt="arrow"
                  className="btn-arrow-about2"
                />
              </button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs2;
