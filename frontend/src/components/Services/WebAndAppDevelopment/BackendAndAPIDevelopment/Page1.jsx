import React from 'react'
import { motion } from "framer-motion";
import '../../page1.css'

import digimart from '../../../../assets/backend-api-development/images/image1.png';

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
                Backend & API Development
            </motion.h1>

            <motion.p
                className="sub-title-service1"
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: false, amount: 0.3 }}
            >
                Scalable Backend & API Architecture Powering High Performance Platforms
            </motion.p>

            <motion.p
                className="service-para1-service1"
                initial={{ opacity: 0, x: 120 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.9 }}
                viewport={{ once: false, amount: 0.3 }}
            >
                At 7xcoder.com, Backend & API Development is approached as the foundation of scalable digital systems. We design and build secure, high performance backend architectures and APIs that power seamless data flow, system reliability, long term platform growth. Our development philosophy emphasizes structured architecture, performance optimization, system integrity supporting organizations that require stability, scalability, measurable outcomes across complex digital environments.
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
                        HOW WE ENGINEER SCALABLE BACKEND & API SYSTEMS <br /> 
                        <span>THE FRAMEWORK BEHIND OUR BACKEND & API DEVELOPMENT</span>
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
                        <h2><span>01.</span> System Architecture & Backend Strategy</h2>
                        <p>We analyze business logic, data flow, and integration requirements to design a scalable backend architecture that supports long-term performance and system growth.</p>
                    </motion.div>

                    <motion.div
                        className="content-service1"
                        initial={{ opacity: 0, y: 60 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.9 }}
                        viewport={{ once: false, amount: 0.3 }}
                    >
                        <h2><span>02.</span> Secure Backend & API Engineering</h2>
                        <p>We develop high-performance backend services and APIs with strong security practices, clean service architecture, and reliable communication across platforms and systems.</p>
                    </motion.div>

                    <motion.div
                        className="content-service1"
                        initial={{ opacity: 0, y: 60 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1 }}
                        viewport={{ once: false, amount: 0.3 }}
                    >
                        <h2><span>03.</span> Testing, Optimization & Scalability Control</h2>
                        <p>We ensure system stability and scalability through rigorous testing, performance tuning, version control, and maintainable backend frameworks.</p>
                    </motion.div>

                </div>

                <motion.p
                    initial={{ opacity: 0, y: 60 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: false, amount: 0.3 }}
                >
                    With 7xcoder.com, Backend & API Development goes beyond system functionality to power scalable, resilient digital infrastructures. Through well-defined system architecture, secure development practices, and disciplined execution, we help organizations create dependable backend platforms that support seamless integrations and sustainable digital growth.
                </motion.p>

            </div>
        </div>

    </main>
    </div>
  )
}

export default Page1
