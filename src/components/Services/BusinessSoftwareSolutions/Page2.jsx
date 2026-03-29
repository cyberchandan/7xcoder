
import React from 'react'

import '../page2.css'
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";

import frame1 from '../../../assets/business-software-solutions/images/Frame 120.png'
import frame2 from '../../../assets/business-software-solutions/images/Frame 121.png'
import frame3 from '../../../assets/business-software-solutions/images/Frame 122.png'
import frame4 from '../../../assets/business-software-solutions/images/Frame 123.png'
import frame5 from '../../../assets/business-software-solutions/images/Frame 125.png'
import frame6 from '../../../assets/business-software-solutions/images/Frame 124.png'

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
              <h3 className="benefit-title">
                Business Centric Software Architecture
              </h3>
              <p className="benefit-text">
                Our software solutions are tailored to your business workflows and objectives, ensuring seamless alignment between technology and operations for improved efficiency and long term effectiveness.
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
              <h3 className="benefit-title">
                Process Automation & Efficiency
              </h3>
              <p className="benefit-text">
                By automating repetitive and manual tasks, our software reduces errors, saves time, and enhances productivity across teams, enabling organizations to focus on strategic initiatives.
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
              <h3 className="benefit-title">
                Scalable & Future Ready Systems
              </h3>
              <p className="benefit-text">
                We build flexible and modular architectures that scale effortlessly as your organization grows. New features, users, and integrations can be added without affecting system stability or performance.
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
                Secure & Compliant Development
              </h3>
              <p className="benefit-text">
                We implement industry standard security measures, role based access control, and data protection protocols to safeguard sensitive information and ensure compliance with business and regulatory requirements.
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
              <h3 className="benefit-title">
                High Performance & Reliability
              </h3>
              <p className="benefit-text">
                Our systems are engineered for speed, stability, and consistent performance, ensuring minimal downtime and smooth operations even under high workloads or peak usage.
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
              <h3 className="benefit-title">
                Seamless System Integrations
              </h3>
              <p className="benefit-text">
                Our solutions integrate smoothly with existing tools, CRMs, ERPs, payment systems, and third party platforms, enabling unified operations and efficient data flow across systems.
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
            Business Software Solutions at 7xcoder.com go beyond building functional systems we develop scalable, secure, and high-performance software that drives long term operational and business growth. Our strategic, performance driven development approach ensures every software solution aligns with business objectives, streamlines workflows, and delivers measurable impact across operations.
            <br /><br />
            <span className="second-text">Key Highlights</span>
          </p>

          <ul style={{width:'105%'}} >
            <motion.li className="second-text" initial={{opacity:0,y:40}} whileInView={{opacity:1,y:0}} transition={{duration:0.5}}>
              Strategic Software Architecture Robust, future ready software architectures designed around business processes, operational needs, and long term scalability.
            </motion.li>

            <motion.li className="second-text" initial={{opacity:0,y:40}} whileInView={{opacity:1,y:0}} transition={{duration:0.6}}>
              Performance Driven Development Execution focused on speed, stability, and efficiency, ensuring optimized system performance, reliability, and measurable outcomes.
            </motion.li>

            <motion.li className="second-text" initial={{opacity:0,y:40}} whileInView={{opacity:1,y:0}} transition={{duration:0.7}}>
              Consistent Systems & Code Standards Standardized frameworks & clean code practices ensure consistency, maintainability, & professional execution across systems.
            </motion.li>

            <motion.li className="second-text" initial={{opacity:0,y:40}} whileInView={{opacity:1,y:0}} transition={{duration:0.8}}>
              High Impact Functionality & User Experience  Intuitive, role based software experiences that improve usability, productivity, and operational efficiency.
            </motion.li>

            <motion.li className="second-text" initial={{opacity:0,y:40}} whileInView={{opacity:1,y:0}} transition={{duration:0.9}}>
              Security, Stability & Technical Credibility Secure coding practices, strong data protection, reliable system performance ensure long term trust, compliance, & stability.
            </motion.li>
          </ul>
        </motion.div>

      </section>
    </div>
  )
}

export default Page2

