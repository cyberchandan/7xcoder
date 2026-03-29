import { motion } from "framer-motion";
import mission from "../../../assets/icons/Group 194.png";
import vision from "../../../assets/icons/Group 195.png";
import purpose from "../../../assets/icons/Group 196.png";
import values from "../../../assets/icons/Group 197.png";
import approach from "../../../assets/icons/Group 198.png";


import "./index.css";

const expertiseList = [
  {
    title: "Mission",
    description:
      "Our mission at 7xcoder.com is to empower businesses with smart digital strategies, creative design, and performance-driven solutions that deliver measurable growth. We focus on building strong brands, meaningful digital experiences, and long-term success for our clients.",
    img:mission
    },
  {
    title: "Vision",
    description:
      "Our vision at 7xcoder.com is to become a trusted digital growth partner for brands by delivering innovative, scalable, and result-driven solutions in a rapidly evolving digital world.",
      img:vision
  },
  {
    title: "Purpose",
    description:
      "Our purpose at 7xcoder.com is to help businesses grow by turning ideas into impactful digital experiences through strategy, creativity, and technology.",
      img:purpose
  },
  {
    title: "Values",
    description:
      "At 7xcoder.com, our values are rooted in integrity, creativity, and a results-driven mindset. We believe in transparent communication, strong collaboration, and delivering high-quality work that creates real value for our clients and long-term partnerships.",
      img:values
  },
  {
    title: "Approach",
    description:
      "Our approach at 7xcoder.com is strategy-first and execution-focused. We combine research, creativity, and technology to deliver tailored digital solutions that are scalable, measurable, and aligned with our clients’ business goals.",
      img:approach
  }
];

const AboutUs1 = () => {
  return (
    <section className="about-section-about1">
      <div className="about-container-about1">
        <motion.h1 
          initial={{ opacity: 0 }}
  whileInView={{ opacity: 1 }}
  transition={{ duration: 0.8 }}
  viewport={{ once: false, amount: 0.3 }}
        className="page1-about-heading">
          <span className="gradient-text-about1">About Us</span>
        </motion.h1>

        <motion.p 
          initial={{ opacity: 0, y: 60 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.8 }}
  viewport={{ once: false, amount: 0.3 }}
        className="about-subtitle-about1">Digital solutions that drive growth.</motion.p>

        <motion.p 
  initial={{ opacity: 0, x: 120 }}
  whileInView={{ opacity: 1, x: 0 }}
  transition={{ duration: 0.8 }}
  viewport={{ once: false, amount: 0.3 }}
        className="about-description-about1">
          We provide result-driven digital marketing services that boost online
          visibility, engagement, and business growth through strategic SEO,
          social media, and performance campaigns.
        </motion.p>

        <span className="about-tag-1-about1">OUR EXPERTISE</span>

        <motion.div 
          initial={{ opacity: 0, x: 120 }}
  whileInView={{ opacity: 1, x: 0 }}
  transition={{ duration: 0.8 }}
  viewport={{ once: false, amount: 0.3 }}
        className="cards-about1">
          {expertiseList.map((item, index) => (
            <div className="feature-card-1-about1" key={index}>
              <div className="icon-box-1-about1">
                <img src={item.img} alt={item.title} />
              </div>

              <h4>{item.title}</h4>
              <p>{item.description}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default AboutUs1;
