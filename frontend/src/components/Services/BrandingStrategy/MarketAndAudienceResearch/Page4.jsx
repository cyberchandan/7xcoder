import { motion } from "framer-motion";
import "../../page4.css";
import img1 from "../../../../assets/MarketAndAudienceResearch/images/4-1.png";
import img2 from "../../../../assets/MarketAndAudienceResearch/images/4-2.png";
import img3 from "../../../../assets/MarketAndAudienceResearch/images/4-3.png";
import img4 from "../../../../assets/MarketAndAudienceResearch/images/4-4.png";
import img5 from "../../../../assets/MarketAndAudienceResearch/images/4-5.png";
import img6 from "../../../../assets/MarketAndAudienceResearch/images/4-6.png";
import img7 from "../../../../assets/MarketAndAudienceResearch/images/4-7.png";
import img8 from "../../../../assets/MarketAndAudienceResearch/images/4-8.png";
import arrow from "../../../../assets/MarketAndAudienceResearch/icon/arrow1.png";

const expertiseList = [
  {
    title: "Brand Strategy & Positioning",
    description:
      "We define clear brand purpose, positioning, and value propositions aligned with business goals, target audience, and market ensuring long relevance and differentiation.",
    img: img1,
  },
  {
    title: "Brand Identity Design Systems",
    description:
      "Comprehensive brand identity systems including logo design, typography, color systems, and language crafted to deliver consistency, recognition, and professional brand presence.",
    img: img2,
  },
  {
    title: "Messaging & Communication Strategy",
    description:
      "Strategic brand messaging frameworks that define tone of voice, brand narrative, and communication guidelines, consistency, and emotional connection across all channels.",
    img: img3,
  },
  {
    title: "Market & Audience Research",
    description:
      "In depth market, competitor, and audience research to uncover insights that inform strategic decisions, strengthen positioning, and support data driven brand growth.",
    img: img4,
  },
  {
    title: "Brand Integration & Implementation",
    description:
      "Seamless application of branding across websites, digital platforms, marketing assets, packaging, and internal to create a unified and impactful brand experience.",
    img: img5,
  },
  {
    title: "Scalable Brand Architecture",
    description:
      "Flexible and scalable brand structures designed to support business expansion, new offerings, sub brands, and evolving market requirements without losing consistency.",
    img: img6,
  },
  {
    title: "Brand Guidelines & Governance",
    description:
      "Clear brand guidelines and governance frameworks that protect brand integrity, ensure consistency, and enable teams to execute branding confidently and correctly.",
    img: img7,
  },
  {
    title: "Ongoing Brand Support & Optimization",
    description:
      "Continuous brand monitoring, refinement, and optimization to keep your brand relevant, competitive, and aligned with changing business goals and market dynamics.",
    img: img8,
  },
];

const Page4 = () => {
  return (
    <section className="business-software-solution4">
      <p className="blue-bss4">OUR SPECIALIZATION</p>
      <p className="divider-bss4"></p>
      <h2 className="h2-bss4">
        What We Have
        <span> to Offer</span>
      </h2>
      <div className="cards-bss4">
        {expertiseList.map((item, index) => (
          <motion.div
            className={`feature-card-bss4-${index} feature-card-bss4`}
            key={index}
            initial={{ opacity: 0, y: 80 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: index * 0.15 }}
            viewport={{ once: false, amount: 0.2 }}
          >
            <motion.div
              className="icon-box-bss4"
              initial={{ opacity: 0, scale: 0.6 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
            >
              <img src={item.img} alt={item.title} />
            </motion.div>

            <h4>{item.title}</h4>
            <p>{item.description}</p>
            <div className="read-more-wrapper-bss4">
              <button className="read-more-btn-bss4">
                Read More
                <img src={arrow} alt="arrow" className="read-more-icon-bss4" />
              </button>
            </motion.div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Page4;
