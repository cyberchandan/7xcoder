import "../../page4.css";

import cloud from "../../../../assets/MotionGraphicsAndAnimation/image 47.png";
import custom from "../../../../assets/MotionGraphicsAndAnimation/image 41.png";
import data from "../../../../assets/MotionGraphicsAndAnimation/image 44.png";
import enterprise from "../../../../assets/MotionGraphicsAndAnimation/image 42.png";
import maintenance from "../../../../assets/MotionGraphicsAndAnimation/image 48.png";
import process from "../../../../assets/MotionGraphicsAndAnimation/image 43.png";
import secure from "../../../../assets/MotionGraphicsAndAnimation/image 46.png";
import system from "../../../../assets/MotionGraphicsAndAnimation/image 45.png";
import { useNavigate } from "react-router";
// import arrow from "../../../../assets/images/";
import arrow from '../../../../assets/business-software-solutions/icon/arrow1.png'


const expertiseList = [
  { title: "UI/UX Design", description: "Drive user engagement and maximize conversions with our data driven UI/UX design solutions, crafted for intuitive navigation, impactful interfaces, and measurable user experience outcomes.", img: custom},
  { title: "Graphic Design", description: "Build a strong consistent brand identity with our expert Graphic Design services crafted to deliver impactful visuals, clear communication, long term brand recognition across all platforms.", img: enterprise },
  { title: "Motion Graphics & Animation", description: "Bring your brand to life with dynamic motion graphics and animations designed to capture attention, simplify complex messages, and drive stronger engagement across digital platforms.", img: process },
  { title: "YouTube Thumbnails & Video", description: "Enhance visibility viewer engagement with high impact YouTube thumbnails, video creatives designed to increase click through rates, strengthen channel branding, audience growth.", img: data },
  { title: "3D Product Visualization", description: "Showcase your products with high quality 3D visualizations designed to highlight detail, realism, and functionality helping engage audiences, enhance product understanding, and purchase decisions.", img: system },
  { title: "Visual Effects (VFX)", description: "Enhance visual storytelling with high quality visual effects designed to add impact, realism, and cinematic depth elevating content quality and audience engagement.", img: secure },
  { title: "Photography & Videography", description: "Capture your brand’s story with professional photography,videography services designed to enhance visual appeal, build credibility, create lasting impact across digital marketing.", img: cloud },
  { title: "Post-Production", description: "Refine, elevate your content through expert post production services, delivering polished visuals, seamless edits, enhanced quality that ensure professional impact consistent brand.", img: maintenance }
];

const MGA_Service4 = () => {
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
      <div className="divider-bss4"></div>

      <h2 className="h2-bss4">
        What We Have <span>to Offer</span>
      </h2>

      <div className="cards-bss4">
        {expertiseList.map((item, index) => (
          <div className="feature-card-bss4" key={index}>
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

export default MGA_Service4;
