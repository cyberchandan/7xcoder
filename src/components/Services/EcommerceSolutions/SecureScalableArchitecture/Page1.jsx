import "../../page1.css";
import { motion } from "framer-motion";
import digimart from '../../../../assets/SecureScableArchitecture/image1.png';

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
                        Secure & Scalable Architecture
                    </motion.h1>

                    <motion.p
                        className="sub-title-service1"
                        style={{ width: "100%" }}
                        initial={{ opacity: 0, y: 60 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: false, amount: 0.3 }}
                    >
                        Resilient System Architecture. Built for Security, Scale & Operational Excellence.
                    </motion.p>

                    <motion.p
                        className="service-para1-service1"
                        style={{ width: "100%" }}
                        initial={{ opacity: 0, x: 120 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.9 }}
                        viewport={{ once: false, amount: 0.3 }}
                    >
                        At 7xcoder.com, Secure & Scalable Architecture forms the foundation of sustainable digital growth  not just a technical layer. We design resilient, high-performance architectures that ensure security by design, seamless scalability, and operational stability. Our structured, engineering-driven approach enables businesses to operate confidently, protect digital assets, and scale efficiently through secure, future-ready infrastructure.
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
                                HOW WE ENGINEER SECURITY-FIRST ARCHITECTURES<br /> 
                                <span>OUR APPROACH TO SECURE & SCALABLE ARCHITECTURE</span>
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
                                <h2><span>01.</span> Strategic Architecture Planning & Design</h2>
                                <p>We define technical objectives, assess system requirements, and design scalable architectural blueprints focused on performance, resilience, and long-term digital sustainability.</p>
                            </motion.div>

                            <motion.div
                                className="content-service1"
                                initial={{ opacity: 0, y: 60 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.9 }}
                                viewport={{ once: false, amount: 0.3 }}
                            >
                                <h2><span>02.</span> Security First Engineering & Infrastructure Implementation</h2>
                                <p> We build robust, high-performance system architectures engineered for secure configuration, clean structure, seamless integrations, and reliable cross-platform stability.</p>
                            </motion.div>

                            <motion.div
                                className="content-service1"
                                initial={{ opacity: 0, y: 60 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 1 }}
                                viewport={{ once: false, amount: 0.3 }}
                            >
                                <h2><span>03.</span> Governance, Performance & Scalability Optimization</h2>
                                <p>Through rigorous validation, security hardening, and performance tuning, we ensure long-term stability, protected data environments, and infrastructure that scales confidently with business growth.</p>
                            </motion.div>

                        </div>

                        <motion.p
                            initial={{ opacity: 0, y: 60 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8 }}
                            viewport={{ once: false, amount: 0.3 }}
                        >
                            With 7xcoder.com, Secure & Scalable Architecture delivers more than structural stability  it establishes a resilient foundation for performance, protection, and long-term growth. Through security-first design, intelligent infrastructure planning, and disciplined engineering standards, we help businesses build reliable system foundations, safeguard digital assets, and scale confidently transforming core architecture into a sustainable, high performance growth engine.
                        </motion.p>

                    </div>

                </div>

            </main>
        </div>
    )
}

export default Page1
