import '../../Page1.css';
import { motion } from "framer-motion";
import digimart from '../../../../assets/branding-and-strategy/images/1.png';

const Page1 = () => {
    return (
        <div className='service_1_root'>

            <main className='hero-box-service1'>
                <div className="title-box-service1" style={{width:"100%"}}>

                    <motion.h1
                        className="title2-service1"
                        style={{width:"100%"}}
                        initial={{ opacity: 0, y: -60 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: false, amount: 0.3 }}
                    >
                        UI-UX Design
                    </motion.h1>

                    <motion.p
                        className="sub-title-service1"
                        style={{width:"100%"}}
                        initial={{ opacity: 0, y: 60 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: false, amount: 0.3 }}
                    >
                        Data Driven UI-UX Design. Crafted for Scalable, User Centric Experiences.
                    </motion.p>

                    <motion.p
                        className="service-para1-service1"
                        style={{width:"100%"}}
                        initial={{ opacity: 0, x: 120 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.9 }}
                        viewport={{ once: false, amount: 0.3 }}
                    >
                        At 7xcoder.com, UI-UX design is a strategic growth foundation, not just visual styling. We create data informed user experiences that enhance usability, strengthen brand perception, and drive measurable engagement. Our research led, performance focused approach ensures every interface guides user intent, improves efficiency, and delivers seamless experiences that support long term product growth and brand value. 
                    </motion.p>

                </div>

                <div className="logo-box2-service1">

                    <motion.img
                        src={digimart}
                        alt="Image"
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
                                HOW UI-UX DESIGN WORKS<br />
                                <span> HOW USER EXPERIENCE & INTERFACE DESIGN WORKS</span>
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
                                <h2><span>01.</span>Experience Strategy & User Architecture</h2>
                                <p>We define clear experience objectives, analyze user behavior and interaction patterns, and structure intuitive information architecture to create goal driven, scalable user journeys</p>
                            </motion.div>

                            <motion.div
                                className="content-service1"
                                initial={{ opacity: 0, y: 60 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.9 }}
                                viewport={{ once: false, amount: 0.3 }}
                            >
                                <h2><span>02.</span> Interface Design & Visual Communication</h2>
                                <p>We design high impact, user centric interfaces aligned with your brand identity engineered to enhance usability, clarity, and engagement across all digital touchpoints.</p>
                            </motion.div>

                            <motion.div
                                className="content-service1"
                                initial={{ opacity: 0, y: 60 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 1 }}
                                viewport={{ once: false, amount: 0.3 }}
                            >
                                <h2><span>03.</span> Usability Optimization & Experience Refinement</h2>
                                <p>We continuously evaluate user interactions, optimize flows, layouts, and interactions, and refine experiences to improve efficiency, scalability, and long term user satisfaction.</p>
                            </motion.div>

                        </div>

                        <motion.p
                            initial={{ opacity: 0, y: 60 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8 }}
                            viewport={{ once: false, amount: 0.3 }}
                        >
                            With 7xcoder.com, UI/UX design delivers more than aesthetics it drives meaningful engagement, improved usability, & measurable product impact. Through strategic experience planning, user centric design, and continuous optimization, we help brands guide user intent, enhance interaction efficiency, & convert digital experiences into long term business value.
                        </motion.p>

                    </div>
                </div>

            </main>
        </div>
    )
}

export default Page1;
