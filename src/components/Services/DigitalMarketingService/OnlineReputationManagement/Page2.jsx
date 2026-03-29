import { motion } from "framer-motion";
import frame1 from "../../../../assets/Digital_Marketing_Services/images/image1.png";
import frame3 from "../../../../assets/Digital_Marketing_Services/images/image2.png";
import frame5 from "../../../../assets/Digital_Marketing_Services/images/image3.png";
import frame2 from "../../../../assets/Digital_Marketing_Services/images/image4.png";
import frame4 from "../../../../assets/Digital_Marketing_Services/images/image5.png";
import frame6 from "../../../../assets/Digital_Marketing_Services/images/image6.png";
import "../../page2.css";

// 🔥 SAME GLOBAL SYSTEM
const containerVariant = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const fadeUp = {
  hidden: { opacity: 0, y: 60 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: "easeOut" },
  },
};

const fadeDown = {
  hidden: { opacity: 0, y: -60 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: "easeOut" },
  },
};

const slideLeft = {
  hidden: { opacity: 0, x: -120 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.9, ease: "easeOut" },
  },
};

const Service3_2 = () => {
  return (
    <div>
      <section className="digital-marketing-services-2-2">

        <motion.div
          className="benefites-2"
          variants={fadeDown}
          initial="hidden"
          whileInView="visible"
          viewport={{ once:false, amount:0.3 }}
        >
          BENEFITS
        </motion.div>

        <motion.div
          className="sub-title-2"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once:false, amount:0.3 }}
        >
          Benefits of Online Reputation Management with 7xcoder.com
        </motion.div>

        <motion.div
          className="benefites-containr-2"
          variants={containerVariant}
          initial="hidden"
          whileInView="visible"
          viewport={{ once:false, amount:0.2 }}
        >

          <div className="column-2 custom-border-2 right-pad-30">

            <Benefit img={frame1} title="Strategic Reputation Positioning"
              text="We align ORM initiatives with clear brand objectives, audience sentiment, and platform dynamics ensuring every action strengthens credibility, trust, and market perception." />

            <Benefit img={frame2} title="Credibility & Authority Building"
              text="We design structured reputation frameworks that transform customer feedback, reviews, and brand mentions into long-term trust assets supporting sustained brand authority and confidence." />

          </div>

          <div className="column-2 custom-border-2 left-pad-50 right-pad-30">

            <Benefit img={frame3} title="Trust Driven Visibility & Influence"
              text="Our ORM strategies focus on amplifying positive narratives and authoritative signals rather than reactive damage control, helping your brand influence perception across high impact digital channels." />

            <Benefit img={frame4} title="Data Backed Sentiment Intelligence"
              text="Every ORM action is guided by real-time monitoring, sentiment analysis, and visibility metrics enabling proactive decision making, faster response, and reputation stability." />

          </div>

          <div className="column-2 left-pad-50 right-pad-30">

            <Benefit img={frame5} title="CConsistent Brand Narrative Control"
              text="From reviews and search results to social mentions and media presence, we maintain message consistency across platforms protecting brand equity and delivering a reliable, trustworthy brand experience." />

            <Benefit img={frame6} title="Scalable Reputation Protection & Growth"
              text="Through disciplined monitoring, content optimization, and narrative reinforcement, we ensure reputation growth remains scalable, cost efficient, and resilient over time." />

          </div>

        </motion.div>

        <motion.div
          className="second-container-2"
          variants={slideLeft}
          initial="hidden"
          whileInView="visible"
          viewport={{ once:false, amount:0.3 }}
        >
          <p className="second-text">
            Online Reputation Management with 7xcoder.com is built for
            brands that demand credibility, control, and measurable trust
            outcomes. We move beyond reactive responses to engineer structured,
            high-impact reputation ecosystems that strengthen brand authority,
            manage public perception, and support long-term growth. Our approach
            integrates real-time sentiment intelligence, strategic narrative
            control, and disciplined reputation optimization to ensure every
            mention, review, and digital signal contributes to lasting brand
            value. Through proactive monitoring, platform specific reputation
            strategies, and continuous refinement, we transform online
            perception into trust, influence, and sustainable business impact.
            <br />
            <br />
            <span className="second-text">Key Highlights</span>
          </p>

          <motion.ul style={{ width: "100%" }} variants={containerVariant}>

            <motion.li className="second-text" variants={fadeUp}>
              Strategic Reputation Control Proactively shape public perception by targeting high impact platforms with precision and relevance.
            </motion.li>

            <motion.li className="second-text" variants={fadeUp}>
              Trust Led Brand Growth Data driven reputation strategies focused on long term credibility, confidence, and brand equity.
            </motion.li>

            <motion.li className="second-text" variants={fadeUp}>
              Controlled Brand Narrative Maintain message consistency and brand integrity across reviews, search results, media, and social channels.
            </motion.li>

            <motion.li className="second-text" variants={fadeUp}>
              Positive Signals & Authority Building Convert customer feedback, mentions, and sentiment into measurable trust and reputation strength.
            </motion.li>

            <motion.li className="second-text" variants={fadeUp}>
              Scalable & Sustainable Reputation Growth Optimize monitoring, response frameworks, and visibility to ensure cost efficient, long term reputation stability.
            </motion.li>

          </motion.ul>

        </motion.div>

      </section>
    </div>
  );
};

// 🔥 SAME reusable component
const Benefit = ({ img, title, text }) => (
  <motion.div
    className="e-commerce-services-benefits-div"
    variants={fadeUp}
  >
    <motion.img
      src={img}
      alt="Icon"
      initial={{ opacity:0, scale:0.6 }}
      whileInView={{ opacity:1, scale:1 }}
      transition={{ duration:0.6, ease:"easeOut" }}
    />
    <h3 className="benefit-title">{title}</h3>
    <p className="benefit-text">{text}</p>
  </motion.div>
);

export default Service3_2;
