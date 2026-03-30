
import React from 'react'
import { useNavigate } from 'react-router';
import "../page4.css";

// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";

import cloud from "../../../assets/design-creative/icon/Photography & Videography 2.png";
import custom from "../../../assets/design-creative/icon/UIUXDesign.png";
import data from "../../../assets/design-creative/icon/YouTube Thumbnails & Video 2.png";
import enterprise from "../../../assets/design-creative/icon/GraphicDesign.png";
import maintenance from "../../../assets/design-creative/icon/Post-Production 1.png";
import process from "../../../assets/design-creative/icon/Motion Graphics & Animation 1.png";
import secure from "../../../assets/design-creative/icon/Visual Effects (VFX) 1.png";
import system from "../../../assets/design-creative/icon/3D Product Visualization 1.png";
import arrow from "../../../assets/design-creative/icon/arrow1.png";

const expertiseList = [
  {
    title: "UI/UX Design",
    description:
      "Drive user engagement and maximize conversions with our data driven UI/UX design solutions, crafted for intuitive navigation, impactful interfaces, and measurable user experience outcomes.",
    img: custom,
  },
  {
    title: "Graphic Design",
    description:
      "Build a strong and consistent brand identity with our expert Graphic Design services crafted to deliver impactful visuals, clear communication, and long term brand recognition across all platforms.",
    img: enterprise,
  },
  {
    title: "Motion Graphics & Animation",
    description:
      "Bring your brand to life with dynamic motion graphics and animations designed to capture attention, simplify complex messages, and drive stronger engagement across digital platforms.",
    img: process,
  },
  {
    title: "YouTube Thumbnails & Video",
    description:
      "Enhance visibility and viewer engagement with high impact YouTube thumbnails and video creatives designed to increase click through rates, sustained audience growth.",
    img: data,
  },
  {
    title: "3D Product Visualization",
    description:
      "Showcase your products with high quality 3D visualizations designed to highlight detail, realism, and functionality helping engage audiences, enhance product, and purchase decisions.",
    img: system,
  },
  {
    title: "Visual Effects (VFX)",
    description:
      "Enhance visual storytelling with high quality visual effects designed to add impact, realism, and cinematic depth elevating content quality and audience engagement, effects designed to add impact.",
    img: secure,
  },
  {
    title: "Photography & Videography",
    description:
      "Capture your brand’s story with professional photography and videography visual appeal, build credibility, & create lasting impact digital and marketing platforms.",
    img: cloud,
  },
  {
    title: "Post-Production",
    description:
      "Refine and elevate your content through expert post production services, delivering polished visuals, seamless edits, and enhanced quality that ensure professional impact and consistent brand excellence.",
    img: maintenance,
  },
];


const Page4 = () => {

const navigate = useNavigate(); 

  const handleGraphicDesign = () => {
    navigate('/services/graphic-design');
  };
 
  const handleYoutubeThumbnailVideo = () => {
    navigate('/services/youtube-thumbnail-video');
  };

  const handleUiUxDesign = () => {
    navigate('/services/ui-ux-design');
  };

   const handlePostProduction = () => {
    navigate('/services/post-product');
  };

   const handle3PDV = () => {
    navigate('/services/product-visualisation');
  };

   const handleMotionGraphics = () => {
    navigate('/services/motion-graphics');
  };

   const handleVisualEffests = () => {
    navigate('/services/visual-effests');
  };

   const handlePhotographyVideography = () => {
    navigate('/services/photography-videography');
  };

  return (
    <section className="business-software-solution4">

      <motion.p
        className="blue-bss4"
        initial={{ opacity: 0, y: -60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: false, amount: 0.3 }}
      >
        OUR SPECIALIZATION
      </motion.p>

      <motion.p
        className="divider-bss4"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: false, amount: 0.3 }}
      ></motion.p>

      <motion.h2
        className="h2-bss4"
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: false, amount: 0.3 }}
      >
        What We Have
        <span> to Offer</span>
      </motion.h2>

      <div className="cards-bss4">
        {expertiseList.map((item, index) => (
          <motion.div
            className={`feature-card-bss4-${index} feature-card-bss4`}
            key={index}
            initial={{ opacity: 0, y: 80 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: index * 0.15 }}
            viewport={{ once: false, amount: 0.2 }}
          >
            
            <motion.div
              className="icon-box-bss4"
              initial={{ opacity: 0, scale: 0.6 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
            >
              <img src={item.img} alt={item.title} />
            </motion.div>

            <h4>{item.title}</h4>
            <p>{item.description}</p>

            <div className="read-more-wrapper-bss4">
              <button 
                className="read-more-btn-bss4"
                onClick={
                  item.title === "Graphic Design"
                    ? handleGraphicDesign
                    : item.title === "YouTube Thumbnails & Video"
                    ? handleYoutubeThumbnailVideo
                    : item.title === "UI/UX Design"
                    ? handleUiUxDesign
                    : item.title === "Post-Production"
                    ? handlePostProduction
                    : item.title === "Photography & Videography"
                    ? handlePhotographyVideography
                    : item.title === "Visual Effects (VFX)"
                    ? handleVisualEffests
                    : item.title === "3D Product Visualization"
                    ? handle3PDV
                    : item.title === "Motion Graphics & Animation"
                    ? handleMotionGraphics
                    : undefined
                }
              >   
                Read More
                <img src={arrow} alt="arrow" className="read-more-icon-bss4" />
              </button>
            </div>

          </motion.div>
        ))}
      </div>

    </section>
  )
}

export default Page4

