import '../../page1.css'
import { motion } from "framer-motion";
import digimart from '../../../../assets/BrandIdentityDesignSystems/image1.png';

const Page1 = () => {
    return (
        <div className='service_1_root'>

            <main className='hero-box-service1'>
                <div className="title-box-service1" style={{ width: "100%" }}>

                    <motion.h1
                        className="title2-service1"
                        style={{ width: "100%" }}
                        initial={{ opacity: 0, y: -60 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: false, amount: 0.3 }}
                    >
                        Brand Identity Design Systems
                    </motion.h1>

                    <motion.p
                        className="sub-title-service1"
                        style={{ width: "100%" }}
                        initial={{ opacity: 0, y: 60 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: false, amount: 0.3 }}
                    >
                        Brand Identity Design Systems Built for Consistency, Recognition & Scalable Growth
                    </motion.p>

                    <motion.p
                        className="service-para1-service1"
                        style={{ width: "100%" }}
                        initial={{ opacity: 0, x: 120 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.9 }}
                        viewport={{ once: false, amount: 0.3 }}
                    >
                        At 7xcoder.com, brand identity is developed as a structured business asset  not just a logo or visual layer. We design scalable brand identity systems built to ensure consistency, recognition, and long-term brand stability.  Our approach combines strategic thinking, research-backed insights, and disciplined design execution to create cohesive visual ecosystems. Every identity system is engineered for clarity, adaptability, and measurable impact across digital, marketing, and organizational touchpoints.
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
                                HOW OUR BRAND IDENTITY SYSTEMS WORK<br />
                                <span>HOW WE BUILD SCALABLE IDENTITY FRAMEWORKS</span>
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
                                <h2><span>01.</span> Identity Discovery & Visual Direction</h2>
                                <p>We define core brand attributes, visual tone, design principles through audience insight market understanding. This foundation establishes a clear creative direction for a scalable & future ready identity system.</p>
                            </motion.div>

                            <motion.div
                                className="content-service1"
                                initial={{ opacity: 0, y: 60 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.9 }}
                                viewport={{ once: false, amount: 0.3 }}
                            >
                                <h2><span>02.</span> Identity Architecture & System Development</h2>
                                <p>We design cohesive logo systems, typography structures, color frameworks, and visual elements engineered for clarity, consistency, and adaptability across digital and offline touchpoints.</p>
                            </motion.div>

                            <motion.div
                                className="content-service1"
                                initial={{ opacity: 0, y: 60 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 1 }}
                                viewport={{ once: false, amount: 0.3 }}
                            >
                                <h2><span>03.</span> Brand Guidelines & Scalable Implementation</h2>
                                <p>We institutionalize the identity through structured brand guidelines, usage standards, and implementation systems  ensuring long-term consistency, recognition, and seamless scalability as the business grows.</p>
                            </motion.div>

                        </div>

                        <motion.p
                            initial={{ opacity: 0, y: 60 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8 }}
                            viewport={{ once: false, amount: 0.3 }}
                        >
                            With 7xcoder.com, brand identity goes beyond logos and visuals  it becomes a structured design system built for clarity, consistency, and scalable growth. We create cohesive identity frameworks that ensure your brand looks unified, professional, and recognizable across every touchpoint, helping businesses build strong identity foundations and maintain long-term visual consistency across digital and marketing platforms.
                        </motion.p>

                    </div>
                </div>
            </main>
        </div>
    )
}

export default Page1;
