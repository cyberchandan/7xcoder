import React from 'react'
import '../../page2.css'

import frame1 from '../../../../assets/UIUXDrivenDevelopment/images/Frame 103.png'
import frame2 from '../../../../assets/UIUXDrivenDevelopment/images/Frame 104.png'
import frame3 from '../../../../assets/UIUXDrivenDevelopment/images/Frame 105.png'
import frame4 from '../../../../assets/UIUXDrivenDevelopment/images/Frame 106.png'
import frame5 from '../../../../assets/UIUXDrivenDevelopment/images/Frame 107.png'
import frame6 from '../../../../assets/UIUXDrivenDevelopment/images/Frame 108.png'

import { motion } from "framer-motion"

// 🔥 SAME reusable animation system
const containerVariant = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2,
    },
  },
}

const fadeUp = {
  hidden: { opacity: 0, y: 60 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: "easeOut" },
  },
}

const fadeDown = {
  hidden: { opacity: 0, y: -60 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: "easeOut" },
  },
}

const slideLeft = {
  hidden: { opacity: 0, x: -120 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.9, ease: "easeOut" },
  },
}

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
          Benefits of UI-UX Driven Development with 7xcoder.com
        </motion.div>

        <motion.div
          className="benefites-containr-2"
          variants={containerVariant}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.2 }}
        >

          <div className="column-2 custom-border-2 right-pad-30">
            <Benefit img={frame1} title="Experience-Led Strategy & Design Thinking"
              text="We begin with user behavior, intent, and business context designing digital experiences that are purposeful, intuitive, and aligned with real user needs and business goals" />

            <Benefit img={frame2} title="Human-Centered Interface & Interaction Design"
              text="We craft intuitive navigation, clear visual hierarchies, and meaningful interactions that improve engagement, usability, and conversion across web and app platforms." />
          </div>

          <div className="column-2 custom-border-2 left-pad-50 right-pad-30">
            <Benefit img={frame6} title="Custom & Scalable Experience Systems"
              text="Every interface is thoughtfully designed from scratch, supported by scalable design systems that grow seamlessly as products evolve without compromising usability or consistency." />

            <Benefit img={frame5} title="Design Consistency, Security & Reliability"
              text="Through structured design standards and implementation discipline, we ensure consistent experiences, data safety awareness, and reliable system behavior over time." />
          </div>

          <div className="column-2 left-pad-50 right-pad-30">
            <Benefit img={frame3} title="Performance-Focused Experience Architecture"
              text="Our UI-UX designs are optimized for speed, clarity, and interaction efficiency, ensuring smooth user journeys and responsive experiences even under heavy usage." />

            <Benefit img={frame4} title="Continuous Experience Optimization & Support"
              text="Post-launch, we refine and enhance user experiences through usability insights, performance feedback, and iterative improvements keeping digital products relevant and competitive." />
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
            At 7xcoder.com, UI-UX driven development is centered around creating meaningful digital experiences, not just functional interfaces. We design and build experience-first platforms where usability, visual clarity, and interaction design work together to support long-term business growth. Our design led approach blends user insights, structured execution, and performance optimization ensuring every digital product aligns with business intent, elevates user satisfaction, and delivers measurable experience driven impact across digital touchpoints.
            <br /><br />
            <span className="second-text">Key Highlights</span>
          </p>

          <motion.ul
            style={{ width: '105%' }}
            variants={containerVariant}
          >
            <motion.li className="second-text" variants={fadeUp}>
              We design digital experiences by aligning user behavior, business intent, and interaction logic to create intuitive and scalable experience frameworks
            </motion.li>

            <motion.li className="second-text" variants={fadeUp}>
              Design and development are optimized for smooth interactions, fast response, and consistent performance across all user touchpoints.
            </motion.li>

            <motion.li className="second-text" variants={fadeUp}>
              Reusable design components and clear system guidelines ensure consistency, maintainability, and professional execution at scale.
            </motion.li>

            <motion.li className="second-text" variants={fadeUp}>
              User-friendly interfaces and meaningful interactions are crafted to increase engagement, improve usability, and support conversion goals.
            </motion.li>

            <motion.li className="second-text" variants={fadeUp}>
              Disciplined implementation, data-aware design practices, and stable system behavior ensure long-term trust and experience consistency.
            </motion.li>
          </motion.ul>
        </motion.div>

      </section>
    </div>
  )
}

// 🔥 Reusable Benefit component (same pattern as previous file)
const Benefit = ({ img, title, text }) => (
  <motion.div
    variants={fadeUp}
  >
    <motion.img
      width="100px"
      src={img}
      alt="Icon"
      initial={{ opacity: 0, scale: 0.6 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      viewport={{ once: false }}
    />
    <h3 className="benefit-title">{title}</h3>
    <p className="benefit-text">{text}</p>
  </motion.div>
)

export default Page2
