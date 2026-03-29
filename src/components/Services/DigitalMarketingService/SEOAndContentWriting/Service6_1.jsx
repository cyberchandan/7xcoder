import "../../page1.css";
import { motion } from "framer-motion";
import digimart from '../../../../assets/SEO/images/1.png';
// import digimart from "/src/assets/SEO/images/1.png";

const Service6_1 = () => {
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
                        SEO & Content Writing
                    </motion.h1>

                    <motion.p
                        className="sub-title-service1"
                        style={{width:"100%"}}
                        initial={{ opacity: 0, y: 60 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: false, amount: 0.3 }}
                    >
                        High Impact SEO & Content Writing. Built for Long Term Visibility.
                    </motion.p>

                    <motion.p
                        className="service-para1-service1"
                        style={{width:"100%"}}
                        initial={{ opacity: 0, x: 120 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.9 }}
                        viewport={{ once: false, amount: 0.3 }}
                    >
                        At 7xcoder.com, SEO & Content Writing is treated as a strategic growth foundation. We create data driven SEO strategies and high quality content that enhance search visibility, build brand authority, and drive consistent organic growth. Our performance led approach focuses on credibility, scalability, and long term ROI ensuring every piece of content attracts intent, delivers value, and converts visibility into meaningful engagement.
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
                                HOW SEO AND CONTENT WRITING WORKS<br /> 
                                <span>HOW PERFORMANCE DRIVEN SEO & CONTENT WORKS</span>
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
                                <h2><span>01.</span> Strategic SEO & Content Architecture</h2>
                                <p>We define clear growth objectives, analyze search intent and audience behavior, and structure keyword led content frameworks that align with business goals and long term visibility.</p>
                            </motion.div>

                            <motion.div
                                className="content-service1"
                                initial={{ opacity: 0, y: 60 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.9 }}
                                viewport={{ once: false, amount: 0.3 }}
                            >
                                <h2><span>02.</span> Precision Content Creation & Optimization</h2>
                                <p>We develop high impact, search optimized content aligned with your brand voice engineered to capture intent, maximize relevance, and drive qualified organic engagement across search platforms.</p>
                            </motion.div>

                            <motion.div
                                className="content-service1"
                                initial={{ opacity: 0, y: 60 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 1 }}
                                viewport={{ once: false, amount: 0.3 }}
                            >
                                <h2><span>03.</span> Performance Monitoring & Search Optimization</h2>
                                <p>We continuously track rankings, traffic behavior, and content performance, refining on page SEO, content depth, and internal structures to ensure scalability, efficiency, and sustained organic growth.</p>
                            </motion.div>

                        </div>

                        <motion.p
                            initial={{ opacity: 0, y: 60 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8 }}
                            viewport={{ once: false, amount: 0.3 }}
                        >
                            SEO & Content Writing delivers more than visibility it builds authority, attracts intent, & drives measurable organic growth. Through strategic SEO planning, intent driven content creation, & performance led optimization, we help brands capture high value search audiences, strengthen credibility, & convert organic visibility into sustained business value.
                        </motion.p>

                    </div>

                </div>

            </main>
        </div>
    )
}

export default Service6_1
