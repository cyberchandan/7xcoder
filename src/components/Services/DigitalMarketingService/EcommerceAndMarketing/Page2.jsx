import React from "react";
import { motion } from "framer-motion";
import "../../page2.css";

import frame1 from "../../../../assets/EcommerceAndMarketing/images/frame1.png";
import frame2 from "../../../../assets/EcommerceAndMarketing/images/frame2.png";
import frame3 from "../../../../assets/EcommerceAndMarketing/images/frame5.png";
import frame4 from "../../../../assets/EcommerceAndMarketing/images/frame6.png";
import frame5 from "../../../../assets/EcommerceAndMarketing/images/frame4.png";
import frame6 from "../../../../assets/EcommerceAndMarketing/images/frame3.png";

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
          Benefits of E-commerce Marketing with 7xcoder.com
        </motion.div>

        <motion.div
          className="benefites-containr-2"
          variants={containerVariant}
          initial="hidden"
          whileInView="visible"
          viewport={{ once:false, amount:0.2 }}
        >

          <div className="column-2 custom-border-2 right-pad-30">

            <Benefit img={frame1} title="Strategic E-commerce Positioning"
              text="We align e-commerce strategies with revenue objectives, customer intent, and competitive insights ensuring every campaign and funnel contributes to stronger market presence and performance clarity." />

            <Benefit img={frame2} title="Qualified Sales & Revenue Growth"
              text="We design conversion focused e-commerce funnels that turn traffic into qualified purchases and measurable revenue supporting scalable growth and predictable sales outcomes." />

          </div>

          <div className="column-2 custom-border-2 left-pad-50 right-pad-30">

            <Benefit img={frame6} title="Performance-Driven Demand Generation"
              text="Our e-commerce strategies focus on high-intent shoppers rather than vanity traffic, helping your brand consistently reach purchase-ready audiences with greater efficiency, relevance, and conversion potential." />

            <Benefit img={frame5} title="Data-Backed Optimization & Intelligence"
              text="Every e-commerce campaign is guided by deep performance analytics, customer behavior insights, and ROI metrics enabling continuous optimization, smarter decisions, and sustained growth." />

          </div>

          <div className="column-2 left-pad-50 right-pad-30">

            <Benefit img={frame3} title="Consistent Brand & Shopping Experience"
              text="From product discovery to checkout optimization, we maintain consistency across creatives, messaging, and user experience protecting brand equity while delivering a seamless, trustworthy buying journey." />

            <Benefit img={frame4} title="Scalable Growth with Cost Efficiency"
              text="Through disciplined budget control, funnel optimization, and audience refinement, we ensure scalable e-commerce growth while maintaining cost efficiency and long term profitability." />

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
            E-commerce Marketing with 7xcoder.com is built for brands that demand precision, scalability, and measurable revenue performance. We move beyond basic promotions to engineer structured, high intent e-commerce ecosystems that strengthen market positioning, optimize customer acquisition costs, and deliver predictable sales growth. Our approach integrates advanced shopper behavior analysis, data intelligence, and disciplined performance optimization to ensure every impression, click, and interaction contributes to long term business value. Through intent driven product storytelling, platform specific e-commerce strategies, and continuous funnel refinement, we transform digital visibility into qualified purchases, higher conversion efficiency, and sustainable revenue impact. 
            <br /><br />
            <span className="second-text">Key Highlights</span>
          </p>

          <motion.ul style={{ width: "100%" }} variants={containerVariant}>

            <motion.li className="second-text" variants={fadeUp}>
              Strategic Shopper Demand Capture Reach high intent shoppers with precision through data driven targeting and channel specific e-commerce strategies.
            </motion.li>

            <motion.li className="second-text" variants={fadeUp}>
              Performance Led Revenue Growth ROI focused execution powered by analytics, conversion data, and continuous optimization to drive measurable sales growth.
            </motion.li>

            <motion.li className="second-text" variants={fadeUp}>
              Controlled Brand & Product Messaging Maintain consistent brand identity, pricing integrity, and product storytelling across all e-commerce touchpoints.
            </motion.li>

            <motion.li className="second-text" variants={fadeUp}>
              Qualified Sales & Conversions Convert traffic into high-quality purchases and measurable revenue through optimized funnels and checkout experiences.
            </motion.li>

            <motion.li className="second-text" variants={fadeUp}>
              Scalable & Cost-Efficient Growth Optimize budgets, acquisition costs, and performance frameworks to achieve sustainable, profitable e-commerce scale.
            </motion.li>

          </motion.ul>

        </motion.div>

      </section>
    </>
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

export default Page2;
