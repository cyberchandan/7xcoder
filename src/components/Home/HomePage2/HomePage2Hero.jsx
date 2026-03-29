import "./HomePage2Hero.css";
import { motion } from "framer-motion";



import heroImage from "../../../assets/images/hero.png";
import rocket from "../../../assets/images/rocket.png";
import vectorRight from "../../../assets/images/Vector (right)1.png";
import vectorLeft from "../../../assets/images/Vector (left)2.png";
import leftCoat from "../../../assets/icons/leftCoat.png";
import rightCoat from "../../../assets/icons/rightCoat.png";
import { NavLink } from "react-router";


const HomePage2Hero = () => {
  
  return (
    <section className="hero-home2">
      <div className="hero-container-home2">
        {/* ===== TOP ROW ===== */}
        <div className="hero-top-home2">
          {/* LEFT TEXT */}
          <motion.div 
            initial={{ opacity: 0, x: -120 }}
  whileInView={{ opacity: 1, x: 0 }}
  transition={{ duration: 0.8 }}
  viewport={{ once: false, amount: 0.3 }}
          className="hero-text-home2">
            <h1 className="hero-title-home2">
              Enter the 7xcoder system. Power <img src={rightCoat} alt="" />
              <br />
              every digital move you make!
            </h1>

            <p className="hero-desc-home2">
              We provide result-driven digital marketing services that boost
              online visibility, engagement, and business growth through
              strategic SEO, social media, and performance campaigns.
            </p>
            <NavLink to="/contact" className="hero-btn-home2">
              Build With 7xcoder!
            </NavLink>
          </motion.div>

          {/* RIGHT CHARACTER */}
          <div className="hero-visual-home2">
            <img src={vectorRight} className="hero-vector-home2" alt="" />
            <motion.div
            initial={{ opacity: 0, x: 120 }}
  whileInView={{ opacity: 1, x: 0 }}
  transition={{ duration: 0.8 }}
  viewport={{ once: false, amount: 0.3 }}
            >

            <img src={heroImage} className="hero-img-home2" alt="" />
            </motion.div>
          </div>
        </div>

        {/* ===== BOTTOM ROW ===== */}
        <div className="hero-bottom-home2">
          {/* ROCKET */}
          <div className="rocket-home2">
            <img src={vectorLeft} className="rocket-vector-home2" alt="" />
            <motion.div
  initial={{ opacity: 0, y: 60 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.8 }}
  viewport={{ once: false, amount: 0.3 }}
>
  <img src={rocket} className="rocket-img-home2" alt="" />
</motion.div>
          </div>

          {/* WELCOME TEXT */}
          <motion.div
            initial={{ opacity: 0, y: 60 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.8 }}
  viewport={{ once: false, amount: 0.3 }}
          className="welcome-home2">
            <h2>
              <img src={leftCoat} alt="" />
              Welcome to 7xcoder.com
            </h2>

            <p>
              Whether you’re a startup entering the global market, a digital
              agency seeking a strategic partner, or an enterprise ready to
              scale across regions — 7xcoder.com integrates seamlessly into
              your growth journey.
              <br />
              Working with clients across industries and geographies, we combine
              strategy, creativity, technology, and performance marketing into a
              scalable digital system built for global impact.
              <br />
              From startups to scale-ups, we adapt to diverse markets, align
              with your vision, and deliver results that transcend borders.
              <br />
              This is digital growth without boundaries.
              <br />
              This is 7xcoder.com.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HomePage2Hero;
