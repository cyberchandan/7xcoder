import React from 'react'
import { motion } from "framer-motion";
import "../../page2.css";

import frame1 from "../../../../assets/email-influencer/images/frame1.png";
import frame2 from "../../../../assets/email-influencer/images/frame2.png";
import frame3 from "../../../../assets/email-influencer/images/frame5.png";
import frame4 from "../../../../assets/email-influencer/images/frame6.png";
import frame5 from "../../../../assets/email-influencer/images/frame4.png";
import frame6 from "../../../../assets/email-influencer/images/frame3.png";

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

const Page2 = () => {
  return (
    <>
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
          Benefits of Email & Influencer Marketing with 7xcoder.com
        </motion.div>

        <motion.div
          className="benefites-containr-2"
          variants={containerVariant}
          initial="hidden"
          whileInView="visible"
          viewport={{ once:false, amount:0.2 }}
        >

          <div className="column-2 custom-border-2 right-pad-30">

            <Benefit img={frame1} title="Strategic Relationship Positioning"
              text="We align email journeys and influencer collaborations with clear business objectives and audience insights ensuring every message and partnership strengthens brand credibility, relevance, and long term trust." />

            <Benefit img={frame2} title="Qualified Lead Nurturing & Demand Generation"
              text="We design structured email funnels and influencer activation paths that turn engagement into qualified leads and measurable business outcomes, supporting scalable growth." />

          </div>

          <div className="column-2 custom-border-2 left-pad-50 right-pad-30">

            <Benefit img={frame6} title="Performance Driven Engagement & Influence"
              text="Our strategies focus on high-quality engagement rather than vanity reach, helping your brand consistently connect with receptive audiences through meaningful communication and authentic influence." />

            <Benefit img={frame5} title="Data Backed Optimization & Intelligence"
              text="Every campaign is guided by performance analytics, engagement metrics, and audience insights enabling continuous optimization, smarter decision making, and predictable results." />

          </div>

          <div className="column-2 left-pad-50 right-pad-30">

            <Benefit img={frame3} title="Consistent Brand Voice & Message Control"
              text="From email copy to creator-led storytelling, we maintain brand consistency across all touchpoints protecting brand identity while delivering a seamless, trustworthy audience experience." />

            <Benefit img={frame4} title="Scalable Growth with Authentic Reach"
              text="Through refined segmentation, automation, and curated influencer partnerships, we ensure scalable campaign growth while maintaining authenticity, efficiency, and long term value." />

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
            Email & Influencer Marketing with 7xcoder.com is designed to build credibility, trust, and measurable influence at scale. We craft high engagement email journeys and strategically aligned influencer ecosystems that strengthen brand authority, amplify reach, and drive consistent, performance led growth.
By combining data driven personalization, precise audience segmentation, and carefully curated creator partnerships, we ensure every message and collaboration delivers relevance and impact. Our approach transforms engagement into qualified demand and long term brand value while preserving authenticity, consistency, and message integrity across every digital touchpoint.
            <br /><br />
            <span className="second-text">Key Highlights</span>
          </p>

          <motion.ul style={{width:'100%'}} variants={containerVariant}>

            <motion.li className="second-text" variants={fadeUp}>
              Strategic Influence & Engagement Capture Reach high intent audiences with precision through personalized email journeys and aligned influencer partnerships.
            </motion.li>

            <motion.li className="second-text" variants={fadeUp}>
              Performance Led Relationship Growth ROI driven execution powered by data and continuous optimization to drive measurable influence and conversions.
            </motion.li>

            <motion.li className="second-text" variants={fadeUp}>
              Controlled Brand Voice & Messaging Integrity Maintain consistent brand tone, credibility, & narrative across email communications and influencer collaborations.
            </motion.li>

            <motion.li className="second-text" variants={fadeUp}>
              Qualified Demand & Conversion Impact Transform engagement into high quality leads, informed decision making, and measurable business outcomes.
            </motion.li>

            <motion.li className="second-text" variants={fadeUp}>
              Scalable & Cost Efficient Growth Ecosystems Optimize outreach, partnerships, & performance to build sustainable, scalable growth with long term brand value.
            </motion.li>

          </motion.ul>

        </motion.div>

      </section>
    </>
  )
}

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
)

export default Page2
