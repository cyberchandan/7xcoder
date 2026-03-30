import { motion } from "framer-motion";
import frame1 from '../../../../assets/seo/images/Frame 120.png'
import frame2 from '../../../../assets/seo/images/Frame 121.png'
import frame3 from '../../../../assets/seo/images/Frame 124.png'
import frame4 from '../../../../assets/seo/images/Frame 125.png'
import frame5 from '../../../../assets/seo/images/Frame 123.png'
import frame6 from '../../../../assets/seo/images/Frame 122.png'
import "../../page4.css";

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

const Service6_2 = () => {
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
          Benefits of SEO & Content Writing with 7xcoder.com
        </motion.div>

        <motion.div
          className="benefites-containr-2"
          variants={containerVariant}
          initial="hidden"
          whileInView="visible"
          viewport={{ once:false, amount:0.2 }}
        >

          <div className="column-2 custom-border-2 right-pad-30">

            <Benefit img={frame1} title={<>
              Strategic Search <br /> Positioning
            </>} text="We align SEO and content strategies with clear business objectives, search intent, and competitive insights ensuring every page and piece of content strengthens visibility, authority, and long term search performance." />

            <Benefit img={frame2} title="Qualified Traffic & Lead Generation"
              text="We design intent focused content frameworks that transform organic traffic into qualified leads and measurable business outcomes supporting scalable growth and predictable acquisition." />

          </div>

          <div className="column-2 custom-border-2 left-pad-50 right-pad-30">

            <Benefit img={frame6} title="Scalable & Future Ready Platforms"
              text="Our SEO strategies focus on high-intent search visibility rather than vanity traffic, helping your brand consistently reach decision ready audiences with greater relevance, engagement, and conversion potential." />

            <Benefit img={frame5} title="Data Backed Optimization & Intelligence"
              text="Every SEO and content decision is guided by in depth analytics, keyword intelligence, and performance insights enabling continuous optimization, smarter content investments, and sustained organic growth." />

          </div>

          <div className="column-2 left-pad-50 right-pad-30">

            <Benefit img={frame3} title="Consistent Brand Voice & Content Authority"
              text="From website pages to long form content, we maintain clarity, consistency, and credibility across all content touchpoints protecting brand equity while delivering a trusted and seamless user experience." />

            <Benefit img={frame4} title="Scalable Growth with Long Term ROI"
              text="Through disciplined SEO execution, content refinement, and structural optimization, we ensure scalable organic growth while maintaining efficiency, relevance, and long term profitability." />

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
            SEO & Content Writing with 7xcoder.com is built for brands that demand authority, consistency, and measurable organic performance. We move beyond basic content production to engineer structured, intent led SEO ecosystems that strengthen search positioning, improve visibility quality, and deliver predictable organic growth. Our approach integrates advanced keyword intelligence, search behavior analysis, and disciplined content optimization to ensure every page, article, and asset contributes to long term brand value. Through intent driven content strategies, platform aligned SEO execution, and continuous performance refinement, we transform organic visibility into qualified traffic, meaningful engagement, and sustainable business impact.
            <br /><br />
            <span className="second-text">Key Highlights</span>
          </p>

          <motion.ul style={{width:'100%'}} variants={containerVariant}>

            <motion.li className="second-text" variants={fadeUp}>
              Strategic Search Demand Capture Target high intent search audiences with precision through intent led SEO strategies and relevant, value driven content.
            </motion.li>

            <motion.li className="second-text" variants={fadeUp}>
              Performance Led Organic Growth ROI focused execution powered by data, search analytics, & continuous optimization to drive measurable organic performance.
            </motion.li>

            <motion.li className="second-text" variants={fadeUp}>
              Controlled Brand Voice & Authority Maintain message clarity, consistency, and brand integrity across all content and search touchpoints.
            </motion.li>

            <motion.li className="second-text" variants={fadeUp}>
              Qualified Traffic & Lead Generation Convert organic visibility into high quality traffic, engaged users, and measurable business outcomes.
            </motion.li>

            <motion.li className="second-text" variants={fadeUp}>
              Scalable & Sustainable Growth Optimize content frameworks, keyword strategies, and performance to drive long term, cost efficient organic growth.
            </motion.li>

          </motion.ul>

        </motion.div>

      </section>
    </div>
  )
};

// 🔥 SAME reusable component
const Benefit = ({ img, title, text }) => (
  <motion.div
    className='e-commerce-services-benefits-div'
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

export default Service6_2;
