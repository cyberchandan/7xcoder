
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import frame1 from '../../../assets/branding-and-strategy/images/Frame 120.png'
import frame3 from '../../../assets/branding-and-strategy/images/Frame 121.png'
import frame5 from '../../../assets/branding-and-strategy/images/Frame 122.png'
import frame2 from '../../../assets/branding-and-strategy/images/Frame 123.png'
import frame4 from '../../../assets/branding-and-strategy/images/Frame 124.png'
import frame6 from '../../../assets/branding-and-strategy/images/Frame 125.png'
import '../page2.css'

// Animation Variants (Reusable)
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

// Benefit component
const Benefit = ({ img, title, text }) => (
  <motion.div
    className='e-commerce-services-benefits-div'
    variants={fadeUp}
  >
    <motion.img
      src={img}
      alt={title}
      initial={{ scale: 0.5, opacity: 0 }}
      whileInView={{ scale: 1, opacity: 1 }}
      transition={{ duration: 0.6 }}
    />
    <h3 className="benefit-title">{title}</h3>
    <p className="benefit-text">{text}</p>
  </motion.div>
);

const Page2 = () => {
  return (
    <div>
      <section className="digital-marketing-services-2-2">

        <motion.div
          className="benefites-2"
          variants={fadeDown}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.3 }}
        >
          BENEFITS
        </motion.div>

        <motion.div
          className="sub-title-2"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.3 }}
        >
          Benefits of Branding & Strategy with 7xcoder.com
        </motion.div>

        <motion.div
          className="benefites-containr-2"
          variants={containerVariant}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.2 }}
        >

          <div className="column-2 custom-border-2 right-pad-30">

            <Benefit
              img={frame1}
              title="Business Centric Brand Strategy"
              text="Our branding and strategy solutions are built around your business vision, market positioning, and growth objectives ensuring clear brand direction, strong differentiation, and long term relevance across all touchpoints."
            />

            <Benefit
              img={frame2}
              title="Secure & Consistent Brand Governance"
              text="We establish clear brand guidelines, usage standards, and governance frameworks that protect brand integrity and ensure consistency across teams, platforms, and campaigns."
            />

          </div>

          <div className="column-2 custom-border-2 left-pad-50 right-pad-30">

            <Benefit
              img={frame3}
              title="Scalable & Future Ready Brand Systems"
              text="We create flexible and scalable brand frameworks that grow with your business. As markets, products, and audiences evolve, your brand remains consistent, adaptable, and future ready."
            />

            <Benefit
              img={frame4}
              title="Seamless Brand Integration Across Channels"
              text="Your brand is aligned seamlessly across websites, social media, marketing campaigns, packaging, and internal communications creating a unified and professional brand experience."
            />

          </div>

          <div className="column-2 left-pad-50 right-pad-30">

            <Benefit
              img={frame5}
              title="High Brand Impact & Market Credibility"
              text="Our strategic approach strengthens brand credibility, improves market perception, and ensures consistent brand performance across digital, offline, and communication channels."
            />

            <Benefit
              img={frame6}
              title="Operational Alignment & Brand Efficiency"
              text="By aligning branding with business strategy and operations, we reduce confusion, improve execution speed, and enable teams to communicate and perform with clarity and confidence."
            />

          </div>

        </motion.div>

        <motion.div
          className="second-container-2"
          variants={slideLeft}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.3 }}
        >

          <p className="second-text">
            Branding and strategy at 7xcoder.com go beyond logos and visuals we build strategic brand foundations that drive recognition, trust, and long term business growth. Our structured, insight driven branding approach ensures every brand aligns with business goals, resonates with the right audience, and delivers measurable brand impact across markets.
            <br /><br />
            <span className="second-text">Key Highlights</span>
          </p>

          <motion.ul style={{ marginLeft: '40px', width: '100%' }} variants={containerVariant}>
            <motion.li className="second-text" variants={fadeUp}>Strategic Brand Architecture Future ready brand frameworks aligned with business goals, audience insights, and long term growth.</motion.li>
            <motion.li className="second-text" variants={fadeUp}>Performance Driven Brand Strategy Focused on clarity, differentiation, and market impact to strengthen brand positioning and recall.</motion.li>
            <motion.li className="second-text" variants={fadeUp}>Consistent Brand Systems & Standards Clear guidelines and structured frameworks ensure consistency, maintainability, and professional execution.</motion.li>
            <motion.li className="second-text" variants={fadeUp}>High Impact Brand Experience Purpose driven brand experiences that enhance usability, engagement, and customer trust.</motion.li>
            <motion.li className="second-text" variants={fadeUp}>Brand Stability & Market Credibility Strong brand governance and consistency ensure long term credibility, recognition, and compliance.</motion.li>
          </motion.ul>

        </motion.div>

      </section>
    </div>
  )
}

export default Page2

