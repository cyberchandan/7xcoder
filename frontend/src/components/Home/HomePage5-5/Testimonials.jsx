import { useRef, useState } from "react";
import { motion } from "framer-motion";
import "./Testimonials.css";

import rightarrow from "../../../assets/images/Union-1.png";
import leftarrow from "../../../assets/images/Union.png";
import user from "../../../assets/icons/image.png"

const testimonials = [
  {
    id: 1,
    name: "Yogesh Badgujar",
    role: "Product Manager",
    text:
      "Visiomatrix helped us present our car-care products with a strong, performance-driven brand identity. Their creative approach communicated the effectiveness and reliability of our formulations perfectly. Our customer engagement and product credibility have noticeably improved.",
    img: user,
  },
  {
    id: 2,
    name: "Alice Avis",
    role: "Manager",
    text:
      "Collaborating with Visiomatrix was an exceptionally smooth experience. They captured our brand essence with remarkable clarity and transformed it into compelling narratives and visual assets. A team that truly listens, understands, and performs.",
    img: user,
  },
  {
    id: 3,
    name: "Puru Agrawal",
    role: "Market Executive",
    text:
      "Visiomatrix helped us present our car-care products with a strong, performance-driven brand identity. Their creative approach communicated the effectiveness and reliability of our formulations perfectly. Our customer engagement and product credibility have noticeably improved.",
    img: user,
  },
];

const Testimonials = () => {
  const trackRef = useRef(null);
  const [index, setIndex] = useState(0);
  const CARD_WIDTH = 340;

  const nextSlide = () => {
  if (index < testimonials.length - 1) {
    const i = index + 1;
    setIndex(i);
    const width =
      trackRef.current.children[0].offsetWidth + 30;
    trackRef.current.style.transform = `translateX(-${i * width}px)`;
  }
};

const prevSlide = () => {
  if (index > 0) {
    const i = index - 1;
    setIndex(i);
    const width =
      trackRef.current.children[0].offsetWidth + 30;
    trackRef.current.style.transform = `translateX(-${i * width}px)`;
  }
};


  return (
    <section className="testimonial-section">
      <motion.h2
        initial={{ opacity: 0, x: -100 }}
  whileInView={{ opacity: 1, x: 0 }}
  transition={{ duration: 0.8 }}
      >Feedback from the Clients</motion.h2>


      <div className="divider" />
          <div className="arrow-gap">
            <button className="nav-btn prev" onClick={prevSlide}>
          <img src={leftarrow} alt="arrow" />
          </button>
        <button className="nav-btn next" onClick={nextSlide}>
          <img src={rightarrow} alt="arrow" />
        </button>
          </div>
      <div className="carousel-wrapper">

        <motion.div 
        initial={{ opacity: 0, x: 100 }}
  whileInView={{ opacity: 1, x: 0 }}
  transition={{ duration: 0.8 }}
        className="carousel">
          <div className="carousel-track" ref={trackRef}>
            {testimonials.map((item, i) => (
              <div className="testimonial-card" key={item.id}>
                <img src={item.img} alt={item.name} />

                <div className="client-info">
                  <h4>{item.name}</h4>
                  <span className="role">{item.role}</span>
                </div>

                <p className="testimonial-text">“{item.text}”</p>
              </div>
            ))}
          </div>
        </motion.div>

      </div>

    </section>
  );
};

export default Testimonials;
