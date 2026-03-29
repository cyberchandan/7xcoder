
import React from 'react'
import "../page2.css";

// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";

import frame1 from "../../../assets/design-creative/images/Frame 120.png";
import frame2 from "../../../assets/design-creative/images/Frame 121.png";
import frame3 from "../../../assets/design-creative/images/Frame 122.png";
import frame4 from "../../../assets/design-creative/images/Frame 123.png";
import frame5 from "../../../assets/design-creative/images/Frame 125.png";
import frame6 from "../../../assets/design-creative/images/Frame 124.png";


const Page2 = () => {
  return (
    <div>
      <section className="digital-marketing-services-2-2">

        <motion.div
          className="benefites-2"
          initial={{ opacity: 0, y: -60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: false, amount: 0.3 }}
        >
          BENEFITS
        </motion.div>

        <motion.div
          className="sub-title-2"
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: false, amount: 0.3 }}
        >
          Benefits of Design & Creative Services with 7xcoder.com
        </motion.div>

        <div className="benefites-containr-2">

          <div className="column-2 custom-border-2 right-pad-30">

            <motion.div
              initial={{ opacity: 0, y: 80 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: false, amount: 0.3 }}
            >
              <motion.img
                src={frame1}
                alt="Icon"
                initial={{ opacity: 0, scale: 0.6 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6 }}
              />
              <h3 className="benefit-title">Strategic Brand <br /> Identity</h3>
              <p className="benefit-text">
                We develop cohesive design systems that clearly communicate your
                brand’s purpose, values, positioning ensuring strong
                recognition and lasting impression.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 80 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9 }}
              viewport={{ once: false, amount: 0.3 }}
            >
              <motion.img
                src={frame2}
                alt="Icon"
                initial={{ opacity: 0, scale: 0.6 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6 }}
              />
              <h3 className="benefit-title">Scalable Design<br /> Systems</h3>
              <p className="benefit-text">
                We build flexible and scalable creative frameworks that grow
                with your business, ensuring efficiency and consistency as your
                brand expands.
              </p>
            </motion.div>

          </div>

          <div className="column-2 custom-border-2 left-pad-50 right-pad-30">

            <motion.div
              initial={{ opacity: 0, y: 80 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: false, amount: 0.3 }}
            >
              <motion.img
                src={frame6}
                alt="Icon"
                initial={{ opacity: 0, scale: 0.6 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6 }}
              />
              <h3 className="benefit-title">Premium Visual<br /> Consistency</h3>
              <p className="benefit-text">
                From digital platforms to marketing assets, we maintain strict
                consistency in design language, creating a unified and
                professional brand presence.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 80 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9 }}
              viewport={{ once: false, amount: 0.3 }}
            >
              <motion.img
                src={frame5}
                alt="Icon"
                initial={{ opacity: 0, scale: 0.6 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6 }}
              />
              <h3 className="benefit-title">
                Data Informed Creative Decisions
              </h3>
              <p className="benefit-text">
                Design choices are guided by insights, user behavior, and
                performance feedback allowing continuous refinement and smarter
                creative outcomes.
              </p>
            </motion.div>

          </div>

          <div className="column-2 left-pad-50 right-pad-30">

            <motion.div
              initial={{ opacity: 0, y: 80 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: false, amount: 0.3 }}
            >
              <motion.img
                src={frame3}
                alt="Icon"
                initial={{ opacity: 0, scale: 0.6 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6 }}
              />
              <h3 className="benefit-title">High Impact Creative Execution</h3>
              <p className="benefit-text">
                Our designs are crafted to capture attention, communicate
                effectively, and support engagement and conversion goals without
                compromising brand integrity.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 80 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9 }}
              viewport={{ once: false, amount: 0.3 }}
            >
              <motion.img
                src={frame4}
                alt="Icon"
                initial={{ opacity: 0, scale: 0.6 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6 }}
              />
              <h3 className="benefit-title">Stronger Brand<br /> Credibility</h3>
              <p className="benefit-text">
                Professional, well structured design builds trust, authority,
                and confidence helping your brand stand out in competitive
                markets.
              </p>
            </motion.div>

          </div>

        </div>

        <motion.div
          className="second-container-2"
          initial={{ opacity: 0, x: -120 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.9 }}
          viewport={{ once: false, amount: 0.3 }}
        >
          <p className="second-text">
            Design and creative services at 7xcoder.com are built to
            deliver more than visual appeal they create clarity, consistency,
            and long term brand value. Our strategic, performance driven
            approach ensures every creative asset supports brand authority,
            enhances user experience, and strengthens business impact across
            digital and offline channels.
            <br />
            <br />
            <span className="second-text">Key Highlights</span>
          </p>

          <ul>

            <motion.li className="second-text" initial={{opacity:0,y:40}} whileInView={{opacity:1,y:0}} transition={{duration:0.5}}>
              Strategic Brand Identity Establish a clear, credible, and
              differentiated brand identity through purpose driven design and
              creative direction.
            </motion.li>

            <motion.li className="second-text" initial={{opacity:0,y:40}} whileInView={{opacity:1,y:0}} transition={{duration:0.6}}>
              Performance Aligned Creativity Design execution guided by strategy
              and business objectives focused on impact, clarity, and measurable
              brand value.
            </motion.li>

            <motion.li className="second-text" initial={{opacity:0,y:40}} whileInView={{opacity:1,y:0}} transition={{duration:0.7}}>
              Consistent Visual Language Unified design systems and visual
              standards across all touchpoints to ensure consistency,
              recognition, and professionalism.
            </motion.li>

            <motion.li className="second-text" initial={{opacity:0,y:40}} whileInView={{opacity:1,y:0}} transition={{duration:0.8}}>
              High Impact Creative Communication Transform ideas into compelling
              visuals that communicate effectively, engage audiences, and
              support business goals.
            </motion.li>

            <motion.li className="second-text" initial={{opacity:0,y:40}} whileInView={{opacity:1,y:0}} transition={{duration:0.9}}>
              Brand Trust & Visual Credibility Strengthen brand trust through
              refined, professional, and consistent creative assets that enhance
              long term brand equity.
            </motion.li>

          </ul>
        </motion.div>

      </section>
    </div>
  )
}

export default Page2

