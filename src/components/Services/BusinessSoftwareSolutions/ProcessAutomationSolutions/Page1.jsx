import React from 'react'
import '../../page1.css'
import { motion } from "framer-motion";
import digimart from '../../../../assets/ProcessAutomationSolution/image1.png';

const Page1 = () => {
    return (
        <div className='service_1_root'>

            <main className='hero-box-service1'>
                <div className="title-box-service1">

                    <motion.h1
                        className="title2-service1"
                        initial={{ opacity: 0, y: -60 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: false, amount: 0.3 }}
                    >
                        Process Automation Solutions
                    </motion.h1>

                    <motion.p
                        className="sub-title-service1"
                        initial={{ opacity: 0, y: 60 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: false, amount: 0.3 }}
                    >
                        Intelligent Process Automation. Optimized for Productivity & Performance.
                    </motion.p>

                    <motion.p
                        className="service-para1-service1"
                        initial={{ opacity: 0, x: 120 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.9 }}
                        viewport={{ once: false, amount: 0.3 }}
                    >
                        At 7xcoder.com, Process Automation Solutions are treated as strategic efficiency drivers  not just implementations. We design and deploy scalable, secure, high-performance automation systems that eliminate bottlenecks, streamline workflows, and enhance operational accuracy. Through intelligent automation architecture and disciplined execution, we transform repetitive processes into seamless, data-driven workflows that accelerate business growth and long-term efficiency.
                    </motion.p>

                </div>

                <div className="logo-box2-service1">

                    <motion.img
                        src={digimart}
                        alt=""
                        initial={{ opacity: 0, scale: 0.5 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: false, amount: 0.3 }}
                    />

                    <div>

                        <motion.div
                            className="social-media-service1"
                            initial={{ opacity: 0, x: -120 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8 }}
                            viewport={{ once: false, amount: 0.3 }}
                        >
                            <p>
                                OUR PROCESS AUTOMATION FRAMEWORK<br />
                                <span>THE STRATEGY BEHIND OUR AUTOMATION SOLUTIONS </span>
                            </p>
                        </motion.div>

                        <div className="content-box-service1">

                            <motion.div
                                className="content-service1"
                                initial={{ opacity: 0, y: 60 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.8 }}
                                viewport={{ once: false, amount: 0.3 }}
                            >
                                <h2><span>01.</span> Workflow & Automation Strategy</h2>
                                <p>We identify operational bottlenecks, define automation objectives, and design scalable automation frameworks aligned with efficiency, accuracy, and long-term business growth.</p>
                            </motion.div>

                            <motion.div
                                className="content-service1"
                                initial={{ opacity: 0, y: 60 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.9 }}
                                viewport={{ once: false, amount: 0.3 }}
                            >
                                <h2><span>02.</span> Automation Development & Deployment</h2>
                                <p>We build secure, high-performance automation systems engineered to streamline repetitive tasks, integrate workflows, and ensure seamless execution across teams and platforms.</p>
                            </motion.div>

                            <motion.div
                                className="content-service1"
                                initial={{ opacity: 0, y: 60 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 1 }}
                                viewport={{ once: false, amount: 0.3 }}
                            >
                                <h2><span>03.</span> Performance & Process Governance</h2>
                                <p>Through structured testing, continuous monitoring, and scalable automation architecture, we ensure long-term stability, system reliability, and sustained operational efficiency.</p>
                            </motion.div>

                        </div>

                        <motion.p
                            initial={{ opacity: 0, y: 60 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8 }}
                            viewport={{ once: false, amount: 0.3 }}
                        >
                            With 7xcoder.com, Process Automation Solutions deliver more than efficiency  they create streamlined operations, scalable workflows, and measurable business impact. Through intelligent automation architecture and disciplined execution, we help organizations eliminate manual dependencies, optimize process accuracy, transform repetitive operations into fast, reliable, and data-driven systems that drive sustainable growth long-term operational excellence.
                        </motion.p>

                    </div>
                </div>

            </main>
        </div>
    )
}

export default Page1
