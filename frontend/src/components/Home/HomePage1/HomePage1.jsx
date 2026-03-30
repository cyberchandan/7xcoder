import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import "./HomePage1.css";

import image1 from "../../../assets/images/image1.png";
import image2 from "../../../assets/images/image2.png";
import image3 from "../../../assets/images/image3.png";
import image4 from "../../../assets/images/image4.png";
import image5 from "../../../assets/images/image5.png";
import image6 from "../../../assets/images/image6.png";
import image7 from "../../../assets/images/image7.png";

import arrow1 from "../../../assets/icons/arrow1.png";
import arrow2 from "../../../assets/icons/arrow2.png";

const HomePage1 = () => {
  const navigate = useNavigate();

  const handleCallClick = () => {
    navigate("/contact");
  };

  const slides = [
    {
      id: 1,
      title: "Digital Marketing Services",
      description:
        "We provide result-driven digital marketing services that boost online visibility, engagement, and business growth through strategic SEO, social media, and performance campaigns.",
      image: image7,
    },
    {
      id: 2,
      title: "Design & Creative Services",
      description:
        "We create impactful visual designs that communicate your brand story through compelling graphics, creatives, and visually consistent digital experiences.",
      image: image1,
    },
    {
      id: 3,
      title: "Web & App Development",
      description:
        "We build scalable, high-performance websites and applications with clean code, modern technology, and a seamless user experience across all devices.",
      image: image2,
    },
    {
      id: 4,
      title: "Business Software Solutions",
      description:
        "We develop customized business software solutions that streamline operations, improve efficiency, and support scalable growth through smart, secure technology.",
      image: image3,
    },
    {
      id: 5,
      title: "E-commerce Solutions",
      description:
        "We create powerful e-commerce solutions that deliver smooth shopping experiences, secure transactions, and scalable platforms designed to drive online sales.",
      image: image4,
    },
    {
      id: 6,
      title: "Branding & Strategy",
      description:
        "We build strong brand identities and strategic frameworks that define your vision, strengthen market positioning, and create long-term brand value.",
      image: image5,
    },
    {
      id: 7,
      title: "SEO",
      description:
        "We optimize websites for search engines using proven SEO strategies that improve visibility, drive organic traffic, and deliver long-term ranking growth.",
      image: image6,
    },
  ];

  // Properly cloned slides with unique identifiers
  const extendedSlides = [
    { ...slides[slides.length - 1], cloneId: "clone-last" },
    ...slides,
    { ...slides[0], cloneId: "clone-first" },
  ];

  const [currentIndex, setCurrentIndex] = useState(1);
  const [isTransition, setIsTransition] = useState(true);

  // Auto slide
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => prev + 1);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  // Seamless infinite reset
  useEffect(() => {
    if (currentIndex === extendedSlides.length - 1) {
      setTimeout(() => {
        setIsTransition(false);
        setCurrentIndex(1);
      }, 500);
    }

    if (currentIndex === 0) {
      setTimeout(() => {
        setIsTransition(false);
        setCurrentIndex(slides.length);
      }, 500);
    }
  }, [currentIndex, extendedSlides.length, slides.length]);

  // Re-enable animation after jump
  useEffect(() => {
    if (!isTransition) {
      requestAnimationFrame(() => {
        setIsTransition(true);
      });
    }
  }, [isTransition]);

  const handleNext = () => setCurrentIndex((prev) => prev + 1);
  const handlePrev = () => setCurrentIndex((prev) => prev - 1);

  const getActiveDotIndex = (index) => {
    const realIndex = (index - 1 + slides.length) % slides.length;
    if (realIndex <= 1) return 0;
    if (realIndex <= 3) return 1;
    return 2;
  };

  const activeDotIndex = getActiveDotIndex(currentIndex);

  return (
    <section className="section-home1">
      <div className="slider-outer-home1">
        <div className="slider-viewport-home1">
          <div
            className="slider-track-home1"
            style={{
              transform: `translateX(-${currentIndex * 100}%)`,
              transition: isTransition ? "transform 0.5s ease-in-out" : "none",
            }}
          >
            {extendedSlides.map((slide, index) => (
              <div
                key={`${slide.id}-${slide.cloneId || "real"}-${index}`}
                className="slide-home1"
              >
                <div className="slide-inner-home1">
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1 }}
                    viewport={{ once: false, amount: 0.3 }}
                    className="content-home1"
                  >
                    <h4 className="welcome-home1">
                      Welcome to 7xcoder.com
                    </h4>

                    <h1 className="page1-heading-home1">
                      <span className="gradient-text-home1">{slide.title}</span>
                    </h1>

                    <p className="paragraph-home1">{slide.description}</p>

                    <button className="button-home1" onClick={handleCallClick}>
                      Get Your Free Call
                    </button>
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: false, amount: 0.3 }}
                    className="image-container-home1"
                  >
                    <img src={slide.image} alt={slide.title} />
                  </motion.div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="controls-home1">
        <img
          src={arrow2}
          alt="Previous"
          className="arrow-home1"
          onClick={handlePrev}
        />

        <div className="dots-home1">
          {[0, 1, 2].map((dotIndex) => (
            <span
              key={`dot-${dotIndex}`}
              className={`dot-home1 ${
                dotIndex === activeDotIndex ? "active-home1" : ""
              }`}
              onClick={() => {
                if (dotIndex === 0) setCurrentIndex(1);
                if (dotIndex === 1) setCurrentIndex(3);
                if (dotIndex === 2) setCurrentIndex(5);
              }}
            />
          ))}
        </div>

        <img
          src={arrow1}
          alt="Next"
          className="arrow-home1"
          onClick={handleNext}
        />
      </div>
    </section>
  );
};

export default HomePage1;
