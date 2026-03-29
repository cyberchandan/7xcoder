import '../../page1.css'
import { motion } from "framer-motion";
import digimart from '../../../../assets/BrandSupportOptimization/image1.png';

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
                        Brand Support & Optimization
                    </motion.h1>

                    <motion.p
                        className="sub-title-service1"
                        style={{ width: "100%" }}
                        initial={{ opacity: 0, y: 60 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: false, amount: 0.3 }}
                    >
                        Brand Support & Optimization Designed for Consistent Performance and Sustainable Growth
                    </motion.p>

                    <motion.p
                        className="service-para1-service1"
                        style={{ width: "100%" }}
                        initial={{ opacity: 0, x: 120 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.9 }}
                        viewport={{ once: false, amount: 0.3 }}
                    >
                        At 7xcoder.com, brand support goes beyond maintenance it ensures your brand evolves with clarity, consistency, and performance focus. We provide structured optimization systems that refine positioning, enhance execution quality, and strengthen long-term market presence. Our research-led and performance-driven approach continuously evaluates brand effectiveness across digital and offline channels enabling smarter adjustments, improved consistency, and measurable growth impact over time.
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
                                MONITOR. REFINE. ENHANCE.<br />
                                <span>OUR BRAND OPTIMIZATION FRAMEWORK</span>
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
                                <h2><span>01.</span> Brand Performance Assessment</h2>
                                <p>We evaluate brand positioning, communication effectiveness, market response, and competitive shifts to identify optimization opportunities and performance gaps.</p>
                            </motion.div>

                            <motion.div
                                className="content-service1"
                                initial={{ opacity: 0, y: 60 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.9 }}
                                viewport={{ once: false, amount: 0.3 }}
                            >
                                <h2><span>02.</span> Strategic Refinement & Enhancement</h2>
                                <p>We refine brand messaging, visual consistency, and execution systems to improve clarity, relevance, and measurable market impact across digital and offline channels.</p>
                            </motion.div>

                            <motion.div
                                className="content-service1"
                                initial={{ opacity: 0, y: 60 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 1 }}
                                viewport={{ once: false, amount: 0.3 }}
                            >
                                <h2><span>03.</span> Ongoing Monitoring & Scalable Optimization</h2>
                                <p>We implement structured review systems, quality checks, and performance tracking to ensure long-term consistency, adaptability, and sustained brand growth.</p>
                            </motion.div>

                        </div>

                        <motion.p
                            initial={{ opacity: 0, y: 60 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8 }}
                            viewport={{ once: false, amount: 0.3 }}
                        >
                            With 7xcoder.com, brand support goes beyond maintenance  it ensures your brand continuously performs and evolves with market dynamics. We strengthen positioning and maintain consistent brand experiences that drive long-term business growth. Through structured performance reviews and disciplined optimization, we help businesses enhance clarity, improve market alignment, and convert brand performance into measurable commercial impact.
                        </motion.p>

                    </div>
                </div>
            </main>
        </div>
    )
}

export default Page1;
