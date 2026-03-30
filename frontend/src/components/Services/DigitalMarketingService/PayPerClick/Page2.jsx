import { motion } from "framer-motion";
import frame1 from "../../../../assets/Pay_Per_Click/images/image1.png";
import frame3 from "../../../../assets/Pay_Per_Click/images/image2.png";
import frame5 from "../../../../assets/Pay_Per_Click/images/image3.png";
import frame2 from "../../../../assets/Pay_Per_Click/images/image4.png";
import frame4 from "../../../../assets/Pay_Per_Click/images/image5.png";
import frame6 from "../../../../assets/Pay_Per_Click/images/image6.png";
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
          Benefits of Design & Creative Services with 7xcoder.com
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
              Strategic Brand <br /> Positioning
            </>} text="We align PPC campaigns with clear business objectives, search intent, and competitive insights ensuring every ad placement contributes to stronger market presence, brand relevance, and performance clarity." />

            <Benefit img={frame2} title="Qualified Lead & Demand Generation"
              text="We design conversion focused PPC funnels that turn clicks into qualified leads and measurable revenue, supporting scalable growth and predictable acquisition outcomes." />

          </div>

          <div className="column-2 custom-border-2 left-pad-50 right-pad-30">

            <Benefit img={frame3} title="Performance Driven Demand Capture"
              text="Our PPC strategies focus on high-intent visibility rather than vanity traffic, helping your brand consistently reach decision ready audiences with greater efficiency, relevance, and conversion potential." />

            <Benefit img={frame4} title="Data Backed Optimization & Intelligence"
              text="Every campaign is guided by deep performance analytics, audience signals, and ROI metrics enabling continuous optimization, smarter bidding decisions, and sustained ROAS improvement." />

          </div>

          <div className="column-2 left-pad-50 right-pad-30">

            <Benefit img={frame5} title="Consistent Brand & Message Control"
              text="From ad copy to landing page alignment, we maintain message consistency across all paid channels protecting brand equity while delivering a seamless and trustworthy user experience." />

            <Benefit img={frame6} title="Scalable Growth with Cost Efficiency"
              text="Through disciplined budget control, bid optimization, and audience refinement, we ensure scalable campaign growth while maintaining cost efficiency and long term profitability." />

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
            Pay Per Click (PPC) advertising with 7xcoder.com is built for
            brands that demand precision, accountability, and measurable
            performance. We move beyond basic ad execution to engineer
            structured, high-intent PPC ecosystems that strengthen market
            positioning, optimize acquisition costs, and deliver predictable
            growth. Our approach integrates advanced audience targeting, data
            intelligence, and disciplined optimization to ensure every
            impression, click, and conversion contributes to long term business
            value. Through intent driven messaging, platform specific campaign
            strategies, and continuous performance refinement, we transform paid
            visibility into qualified demand, efficient conversions, and
            sustainable revenue impact.
            <br />
            <br />
            <span className="second-text">Key Highlights</span>
          </p>

          <motion.ul style={{ width: "100%" }} variants={containerVariant}>

            <motion.li className="second-text" variants={fadeUp}>
              Strategic Demand Capture Target high intent audiences with precision and relevance across paid channels
            </motion.li>

            <motion.li className="second-text" variants={fadeUp}>
              Performance Led Growth ROI focused execution driven by data, analytics, and continuous optimization
            </motion.li>

            <motion.li className="second-text" variants={fadeUp}>
              Controlled Brand Messaging Maintain message clarity and brand integrity across all PPC touchpoints
            </motion.li>

            <motion.li className="second-text" variants={fadeUp}>
              Qualified Leads & Conversions Convert ad spend into high quality leads and measurable business outcomes
            </motion.li>

            <motion.li className="second-text" variants={fadeUp}>
              Scalable & Cost-Efficient Campaigns Optimize budgets, bids, and performance to drive sustainable, profitable growth
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
