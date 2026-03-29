import { useNavigate } from 'react-router-dom'
import React from "react";
import { motion } from "framer-motion";
import "../../page4.css";
import cloud from "../../../../assets/PhotographyAndVideography/icon/Photography & Videography 2.png";
import custom from "../../../../assets/PhotographyAndVideography/icon/UIUXDesign.png";
import data from "../../../../assets/PhotographyAndVideography/icon/YouTube Thumbnails & Video 2.png";
import enterprise from "../../../../assets/PhotographyAndVideography/icon/Photography & Videography 2.png";
import maintenance from "../../../../assets/PhotographyAndVideography/icon/Post-Production 1.png";
import process from "../../../../assets/PhotographyAndVideography/icon/Motion Graphics & Animation 1.png";
import secure from "../../../../assets/PhotographyAndVideography/icon/Visual Effects (VFX) 1.png";
import system from "../../../../assets/PhotographyAndVideography/icon/3D Product Visualization 1.png";
import arrow from "../../../../assets/PhotographyAndVideography/icon/arrow1.png";

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
      "Enhance visibility and viewer engagement with high impact YouTube thumbnails and video creatives designed to increase click through rates, strengthen channel branding, and drive sustained audience growth.",
    img: data,
  },
  {
    title: "3D Product Visualization",
    description:
      "Showcase your products with high quality 3D visualizations designed to highlight detail, realism, and functionality helping engage audiences, enhance product understanding, and purchase decisions.",
    img: system,
  },
  {
    title: "Visual Effects (VFX)",
    description:
      "Enhance visual storytelling with high quality visual effects designed to add impact, realism, and cinematic depth elevating content quality and audience engagement.",
    img: secure,
  },
  {
    title: "Photography & Videography",
    description:
      "Capture your brand’s story with professional photography and videography services designed to enhance visual appeal, build credibility, & create lasting impact across digital and marketing platforms.",
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

  const navigate = useNavigate(); // ✅ SINGLE HOOK

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
      <p className="blue-bss4">OUR SPECIALIZATION</p>
      <p className="divider-bss4"></p>
      <h2 className="h2-bss4">
        What We Have
        <span> to Offer</span>
      </h2>
      <div className="cards-bss4">
        {expertiseList.map((item, index) => (
          <div
            className={`feature-card-bss4-${index} feature-card-bss4`}
            key={index}
          >
            <div className="icon-box-bss4">
              <img src={item.img} alt={item.title} />
            </div>

            <h4>{item.title}</h4>
            <p>{item.description}</p>
            <div className="read-more-wrapper-bss4">
              <button className="read-more-btn-bss4"
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
                        :undefined
                        }
              >
                Read More
                <img src={arrow} alt="arrow" className="read-more-icon-bss4" />
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Page4;
