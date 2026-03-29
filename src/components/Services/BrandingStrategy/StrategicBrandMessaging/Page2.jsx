import { motion } from 'framer-motion';
import frame1 from '../../../../assets/branding-and-strategy/images/Frame 120.png'
import frame3 from '../../../../assets/branding-and-strategy/images/Frame 121.png'
import frame5 from '../../../../assets/branding-and-strategy/images/Frame 122.png'
import frame2 from '../../../../assets/branding-and-strategy/images/Frame 123.png'
import frame4 from '../../../../assets/branding-and-strategy/images/Frame 124.png'
import frame6 from '../../../../assets/branding-and-strategy/images/Frame 125.png'
import '../../page2.css'

// Animation Variants (Reusable)
const containerVariant = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.2, },
  },
};

const fadeUp = {
  hidden: { opacity: 0, y: 60 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" }, },
};

const fadeDown = {
  hidden: { opacity: 0, y: -60 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" }, },
};

const slideLeft = {
  hidden: { opacity: 0, x: -120 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.9, ease: "easeOut" }, },
};

// Benefit component
const Benefit = ({ img, title, text }) => (
  <motion.div className='e-commerce-services-benefits-div' variants={fadeUp}>
    <motion.img src={img} alt={title} initial={{ scale: 0.5, opacity: 0 }} whileInView={{ scale: 1, opacity: 1 }} transition={{ duration: 0.6 }} />
    <h3 className="benefit-title">{title}</h3>
    <p className="benefit-text">{text}</p>
  </motion.div>
);

const Page2 = () => {
  return (
    <div>
      <section className="digital-marketing-services-2-2">

        <motion.div className="benefites-2" variants={fadeDown} initial="hidden" whileInView="visible" viewport={{ once: false, amount: 0.3 }}>
          BENEFITS
        </motion.div>

        <motion.div className="sub-title-2" variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: false, amount: 0.3 }}>
          Benefits of Strategic Brand Messaging with 7xcoder.com
        </motion.div>

        <motion.div className="benefites-containr-2" variants={containerVariant} initial="hidden" whileInView="visible" viewport={{ once: false, amount: 0.2 }}>

          <div className="column-2 custom-border-2 right-pad-30">
            <Benefit img={frame1} title="Clear & Differentiated Market Communication" text="We craft messaging aligned with business goals and market positioning ensuring clarity, strong differentiation, and long-term relevance across all communication touchpoints." />
            <Benefit img={frame2} title="Structured Messaging Governance" text="We establish clear messaging guidelines, tone-of-voice standards, and communication frameworks that maintain consistency across teams, campaigns, and platforms." />
          </div>

          <div className="column-2 custom-border-2 left-pad-50 right-pad-30">
            <Benefit img={frame3} title="Scalable & Future-Ready Messaging Systems" text="Our structured messaging frameworks evolve with your business, keeping communication consistent, adaptable, and strategically aligned as markets and audiences change." />
            <Benefit img={frame4} title="Unified Communication Across Channels" text="Your brand voice remains aligned across websites, social media, marketing campaigns, internal communication, and customer interactions creating a seamless brand experience." />
          </div>

          <div className="column-2 left-pad-50 right-pad-30">
            <Benefit img={frame5} title="Stronger Brand Perception & Credibility" text="Insight-led messaging strengthens brand perception, builds trust, and ensures consistent communication performance across digital and offline channels." />
            <Benefit img={frame6} title="Strategic Alignment & Communication Efficiency" text="By aligning messaging with business strategy and operations, we reduce confusion, improve execution clarity, and empower teams to communicate with confidence and impact." />
          </div>

        </motion.div>

        <motion.div className="second-container-2" variants={slideLeft} initial="hidden" whileInView="visible" viewport={{ once: false, amount: 0.3 }}>

          <p className="second-text">
            At 7xcoder.com, brand messaging goes beyond taglines and content we build structured communication foundations that drive recognition, trust, and long-term business growth. Our insight-driven and performance-focused approach ensures every message aligns with business goals, resonates with the right audience, and delivers measurable communication impact across competitive markets.
            <br /><br />
            <span className="second-text">Key Highlights</span>
          </p>

          <motion.ul style={{width: '100%' }} variants={containerVariant}>
            <motion.li className="second-text" variants={fadeUp}>Strategic Messaging Architecture Future-ready communication frameworks aligned with business objectives, audience psychology, and long-term positioning.</motion.li>
            <motion.li className="second-text" variants={fadeUp}>Performance-Driven Messaging Strategy Clear, differentiated messaging designed to strengthen positioning, improve recall, and enhance market influence.</motion.li>
            <motion.li className="second-text" variants={fadeUp}>Consistent Messaging Systems & Standards Structured tone of voice guidelines & communication frameworks that ensure clarity & consistency across platforms.</motion.li>
            <motion.li className="second-text" variants={fadeUp}>High Impact Communication Experience Purpose driven messaging that enhances engagement, strengthens credibility, and builds customer trust.</motion.li>
            <motion.li className="second-text" variants={fadeUp}>Long Term Brand Credibility & Authority Disciplined messaging governance ensures sustained clarity, recognition, & strategic communication control as the brand grows.</motion.li>
          </motion.ul>
        </motion.div>

      </section>
    </div>
  )
}

export default Page2
