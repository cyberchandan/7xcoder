import React from 'react'
import { useNavigate } from 'react-router-dom'

import '../../page4.css'

import arrow from "../../../../assets/Digital_Marketing_Services/icon/arrow1.png";
import ppc from   "../../../../assets/SystemIntegrationServicesEcom/images/41.png";
import web from   "../../../../assets/SystemIntegrationServicesEcom/images/42.png";
import email from "../../../../assets/SystemIntegrationServicesEcom/images/43.png";
import seo from   "../../../../assets/SystemIntegrationServicesEcom/images/44.png";

import contentIcon from "../../../../assets/SystemIntegrationServicesEcom/images/45.png";
import ormIcon from "../../../../assets/SystemIntegrationServicesEcom/images/46.png";
import ecommerceIcon from "../../../../assets/SystemIntegrationServicesEcom/images/47.png";
import analyticsIcon from "../../../../assets/SystemIntegrationServicesEcom/images/48.png";

const expertiseList = [
  {
    title: "Custom E-commerce Development",
    description:
      "We design and develop custom e-commerce platforms tailored to your business model, product strategy, and customer journey, ensuring scalability, flexibility, and long term growth.",
    img: ppc,
  },
  {
    title: "Enterprise & Marketplace Solutions",
    description:
      "Robust e-commerce systems including multi vendor marketplaces, B2B/B2C platforms, admin dashboards, and seller panels designed to manage large catalogs, users, and transactions efficiently.",
    img: web,
  },
  {
    title: "Checkout & Conversion Optimization",
    description:
      "Optimized checkout flows, cart experiences, and conversion focused UI/UX that reduce friction, improve user engagement, and increase successful transactions.",
    img: email,
  },
  {
    title: "Product, Inventory & Order Management",
    description:
      "Centralized systems to manage products, inventory, pricing, orders, and fulfillment workflows ensuring operational accuracy and seamless order processing.a3",
    img: seo,
  },
  {
    title: "System Integration Services",
    description:
      "Smooth integration with payment gateways, logistics partners, CRMs, ERPs, marketing tools, analytics platforms, and third party services for unified commerce operations.",
    img: contentIcon,
  },
  {
    title: "Secure & Scalable Architecture",
    description:
      "Enterprise grade, scalable e-commerce architectures with secure payment handling, data protection, and performance stability to support business growth and peak traffic.",
    img: ormIcon,
  },
  {
    title: "Cloud Based E-commerce Solutions",
    description:
      "Cloud enabled platforms designed for high availability, faster performance, global accessibility, and optimized scalability across devices and regions.",
    img: ecommerceIcon,
  },
  {
    title: "Maintenance, Support & Optimization",
    description:
      "Ongoing monitoring, updates, performance optimization, security enhancements, and technical support to keep your e-commerce platform reliable, secure, and growth-ready.",
    img: analyticsIcon,
  },
];

const Page4 = () => {
  const navigate = useNavigate(); // ✅ SINGLE HOOK

  const handlePPCClick = () => {
    navigate('/services/pay-per-click');
  };

  const handleOnlineReputationManagement = () => {
    navigate('/services/online-reputation-management');
  };

  const handleAnalyticsAndRoi = () => {
    navigate('/services/analytics-and-roi-tracking');
  };

   const handleEcommerceAndMarketing = () => {
    navigate('/services/ecommerce-and-marketing');
  };

  const handleWebAppClick = () => {
    navigate('/web-and-app-development');
  };

  const handleContentAndVideoClick = () => {
    navigate('/services/content-and-video-marketing');
  };

  const handleEmailInfluencerClick = () => {
    navigate('/services/email-and-influencer-marketing');
  };

  const handleSEOClick = () => {
    navigate('/services/seo-and-content-writing');
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
              <button 
                className="read-more-btn-bss4"
                onClick={
                  item.title === "Pay Per Click ( PPC )"
                    ? handlePPCClick
                    : item.title === "Web & App Development"
                    ? handleWebAppClick
                    : item.title === "Email & Influencer Marketing"
                    ? handleEmailInfluencerClick
                    : item.title === "SEO & Content Writing"
                    ? handleSEOClick
                    :item.title === "E-commerce Marketing"
                    ?handleEcommerceAndMarketing
                    :item.title === "Content & Video Marketing"
                    ?handleContentAndVideoClick
                    :item.title === "Analytics & ROI Tracking"
                    ?handleAnalyticsAndRoi
                    :item.title === "Online Reputation Management"
                    ?handleOnlineReputationManagement
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
  )
}

export default Page4
