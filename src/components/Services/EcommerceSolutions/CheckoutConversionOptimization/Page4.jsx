import React from 'react'
import '../../page4.css'

import checkout from "../../../../assets/CheckoutConversionOptimization/icon/Checkout & Conversion Optimization 1.png";
import cloud from "../../../../assets/CheckoutConversionOptimization/icon/Cloud Based E-commerce Solutions 1.png";
import custom from "../../../../assets/CheckoutConversionOptimization/icon/Custom E-commerce Development 1.png";
import enterprise from "../../../../assets/CheckoutConversionOptimization/icon/Enterprise & Marketplace Solutions 1.png";
import maintenance from "../../../../assets/CheckoutConversionOptimization/icon/Maintenance, Support & Optimization 2.png";
import product from "../../../../assets/CheckoutConversionOptimization/icon/Product, Inventory & Order Management 1.png";
import secure from "../../../../assets/CheckoutConversionOptimization/icon/Secure & Scalable Architecture 2.png";
import system from "../../../../assets/CheckoutConversionOptimization/icon/System Integration Services 2.png";
import arrow from "../../../../assets/CheckoutConversionOptimization/icon/arrow1.png";


const expertiseList = [
  {
    title: "Custom E-commerce Development",
    description:
      "We design and develop custom e-commerce platforms tailored to your business model, product strategy, and customer journey, ensuring scalability, flexibility, and long term growth.",
    img: custom,
  },
  {
    title: "System Integration Services",
    description:
      "Smooth integration with payment gateways, logistics partners, CRMs, ERPs, marketing tools, analytics platforms, and third party services for unified commerce operations.",
    img: system,
  },
  {
    title: "Enterprise & Marketplace Solutions",
    description:
      "Robust e-commerce systems including multi vendor marketplaces, B2B/B2C platforms, admin dashboards, and seller panels designed to manage large catalogs, users, and transactions efficiently.",
    img: enterprise,
  },
  {
    title: "Secure & Scalable Architecture",
    description:
      "Enterprise grade, scalable e-commerce architectures with secure payment handling, data protection, and performance stability to support business growth and peak traffic.",
    img: secure,
  },
  {
    title: "Checkout & Conversion Optimization",
    description:
      "Optimized checkout flows, cart experiences, and conversion focused UI/UX that reduce friction, improve user engagement, and increase successful transactions.",
    img: checkout,
  },
  {
    title: "Cloud Based E-commerce Solutions",
    description:
      "Cloud enabled platforms designed for high availability, faster performance, global accessibility, and optimized scalability across devices and regions.",
    img: cloud,
  },
  {
    title: "Product, Inventory & Order Management",
    description:
      "Centralized systems to manage products, inventory, pricing, orders, and fulfillment workflows ensuring operational accuracy and seamless order processing.",
    img: product,
  },
  {
    title: "Maintenance, Support & Optimization",
    description:
      "Ongoing monitoring, updates, performance optimization, security enhancements, and technical support to keep your e-commerce platform reliable, secure, and growth-ready.",
    img: maintenance,
  }
];

const Page4 = () => {
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
          <div className={`feature-card-bss4-${index} feature-card-bss4`} key={index}>

            <div className="icon-box-bss4">
              <img src={item.img} alt={item.title} />
            </div>

            <h4>{item.title}</h4>

            <p>{item.description}</p>

            <div className="read-more-wrapper-bss4">
              <button className="read-more-btn-bss4">
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
