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
  <motion.div className='e-commerce-services-benefits-div' variants={fadeUp}>
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
          Benefits of Brand Identity Design Systems with 7xcoder.com
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
              title="Structured & Strategic Visual Direction"
              text="We design identity systems aligned with your business vision and brand personality ensuring clarity, differentiation, and long-term visual relevance."
            />

            <Benefit
              img={frame2}
              title="Consistent Brand Governance & Control"
              text="We establish clear identity guidelines, usage standards, and system rules that protect brand integrity and ensure visual consistency across teams and campaigns."
            />
          </div>

          <div className="column-2 custom-border-2 left-pad-50 right-pad-30">
            <Benefit
              img={frame3}
              title="Scalable & Future-Ready Identity Systems"
              text="Our flexible design frameworks evolve with your business, keeping your brand consistent, adaptable, and visually strong across every stage of growth."
            />

            <Benefit
              img={frame4}
              title="Seamless Multi-Channel Visual Integration"
              text="Your brand identity is unified across websites, social media, marketing materials, packaging, and internal communications delivering a polished and cohesive experience."
            />
          </div>

          <div className="column-2 left-pad-50 right-pad-30">
            <Benefit
              img={frame5}
              title="Strong Brand Recognition & Credibility"
              text="A cohesive identity system strengthens recall, builds trust, and creates a professional brand presence across digital and offline platforms."
            />

            <Benefit
              img={frame6}
              title="Design Efficiency & Operational Clarity"
              text="Structured identity systems reduce confusion, improve execution speed, and empower teams to maintain high-quality brand implementation with confidence."
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
            At 7xcoder.com, brand identity goes beyond logos and surface visuals we build structured identity systems designed to strengthen recognition, ensure consistency, and support long-term business growth. Our insight-led and system-driven approach ensures every visual element aligns with business objectives, reflects brand personality, and delivers a unified presence across digital and physical touchpoints.
            <br /><br />
            <span className="second-text">Key Highlights</span>
          </p>

          <motion.ul style={{ width: '100%' }} variants={containerVariant}>
            <motion.li className="second-text" variants={fadeUp}>Strategic Identity Architecture Future-ready visual frameworks aligned with business goals, audience perception, and long-term scalability.</motion.li>
            <motion.li className="second-text" variants={fadeUp}>Performance-Focused Visual Systems Identity systems designed for clarity, differentiation, and strong brand recall across competitive markets.</motion.li>
            <motion.li className="second-text" variants={fadeUp}>Consistent Design Standards & Guidelines Structured brand guidelines and visual rules that maintain consistency, usability, and professional execution.</motion.li>
            <motion.li className="second-text" variants={fadeUp}>High-Impact Visual Experience Purpose-driven design systems that enhance engagement, strengthen recognition, and build customer trust.</motion.li>
            <motion.li className="second-text" variants={fadeUp}>Long-Term Brand Stability & Recognition Disciplined identity governance ensures lasting credibility, adaptability, and visual consistency as your business grows.</motion.li>
          </motion.ul>
        </motion.div>
      </section>
    </div>
  )
}

export default Page2
