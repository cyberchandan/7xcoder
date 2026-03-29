import '../../page1.css'
import { motion } from "framer-motion";
import digimart from '../../../../assets/StrategicBrandMessaging/image1.png';

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
                        Strategic Brand Messaging
                    </motion.h1>

                    <motion.p
                        className="sub-title-service1"
                        style={{ width: "100%" }}
                        initial={{ opacity: 0, y: 60 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: false, amount: 0.3 }}
                    >
                        Strategic Brand Messaging Designed to Shape Perception and Drive Sustainable Growth
                    </motion.p>

                    <motion.p
                        className="service-para1-service1"
                        style={{ width: "100%" }}
                        initial={{ opacity: 0, x: 120 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.9 }}
                        viewport={{ once: false, amount: 0.3 }}
                    >
                        At 7xcoder.com, brand messaging is treated as a strategic asset  not just words or taglines. We develop insight-driven messaging frameworks that define positioning, shape perception, and communicate competitive value. Our structured, research-led approach ensures every message aligns with business goals, resonates with the right audience, and delivers consistent impact across digital and marketing channels  driving credibility, clarity, and sustainable growth.
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
                                HOW STRATEGIC BRAND MESSAGING WORKS<br />
                                <span>HOW WE BUILD HIGH-IMPACT MESSAGING SYSTEMS</span>
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
                                <h2><span>01.</span> Messaging Discovery & Positioning Clarity</h2>
                                <p>We define communication objectives by analyzing market positioning, audience insights, and competitive messaging. This helps craft clear messaging focused on differentiation, relevance, and long-term authority.</p>
                            </motion.div>

                            <motion.div
                                className="content-service1"
                                initial={{ opacity: 0, y: 60 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.9 }}
                                viewport={{ once: false, amount: 0.3 }}
                            >
                                <h2><span>02.</span> Messaging Framework & Execution</h2>
                                <p>We build structured messaging frameworks, value propositions, brand narratives, and tone-of-voice systems designed for clarity, consistency, and strong market influence across digital and offline channels.</p>
                            </motion.div>

                            <motion.div
                                className="content-service1"
                                initial={{ opacity: 0, y: 60 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 1 }}
                                viewport={{ once: false, amount: 0.3 }}
                            >
                                <h2><span>03.</span> Messaging Governance & Consistency Systems</h2>
                                <p>We ensure long-term communication stability through structured messaging guidelines, execution standards, and content oversight  maintaining credibility, clarity, and scalable impact across touchpoints.</p>
                            </motion.div>

                        </div>

                        <motion.p
                            initial={{ opacity: 0, y: 60 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8 }}
                            viewport={{ once: false, amount: 0.3 }}
                        >
                            With 7xcoder.com, brand messaging goes beyond words  it becomes a structured communication system that defines positioning, shapes perception, and drives business growth. Through strategic messaging planning and disciplined execution, we help businesses build credible communication foundations and transform brand messaging into measurable commercial impact.
                        </motion.p>

                    </div>
                </div>

            </main>
        </div>
    )
}

export default Page1;
