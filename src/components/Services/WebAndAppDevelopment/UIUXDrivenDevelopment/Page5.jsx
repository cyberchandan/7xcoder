import React from "react";
import "../../page5.css";
import { NavLink } from "react-router-dom";
import instagram from "../../../../assets/UIUXDrivenDevelopment/icon/1.png";
import facebook from "../../../../assets/UIUXDrivenDevelopment/icon/2.png";
import linkedin from "../../../../assets/UIUXDrivenDevelopment/icon/3.png";
import youtube from "../../../../assets/UIUXDrivenDevelopment/icon/4.png";
import x from "../../../../assets/UIUXDrivenDevelopment/icon/5.png";
import pinterest from "../../../../assets/UIUXDrivenDevelopment/icon/6.png";
import snapchat from "../../../../assets/UIUXDrivenDevelopment/icon/7.png";
import whatsapp from "../../../../assets/UIUXDrivenDevelopment/icon/8.png";
import google from "../../../../assets/UIUXDrivenDevelopment/icon/9.png";
import telegram from "../../../../assets/UIUXDrivenDevelopment/icon/10.png";
import be from "../../../../assets/UIUXDrivenDevelopment/icon/11.png";
import ball from "../../../../assets/UIUXDrivenDevelopment/icon/12.png";
import reddit from "../../../../assets/UIUXDrivenDevelopment/icon/13.png";
import quora from "../../../../assets/UIUXDrivenDevelopment/icon/14.png";


const logos = [
     instagram,
  facebook,
  linkedin,
  youtube,
  x,
  pinterest,
  snapchat,
  whatsapp,
  google,
  telegram,
  be,
  ball,
  reddit,
  quora
];

const Page5 = () => {
    return (
        <main className="bss5">
            <section className="blue-title-bss5">
                <h1>
                  Experience-Led Product Engineering
                    <div>Structured Design Frameworks</div>
                </h1>
            </section>

            <section className="slider-bss5">
  <div className="slider-track-bss5">
    {[...logos, ...logos].map((img, index) => (
      <img src={img} alt="logo" key={index} />
    ))}
  </div>
</section>


            <section className="para-bss5">
                <p>
                  At 7xcoder.com, UI-UX driven development is centered on delivering consistent, intuitive experiences across screens, devices, and digital touchpoints. We design interface systems that adapt seamlessly to user behavior, platform requirements, and evolving business needs.
Our expertise spans experience design for websites, web applications, mobile interfaces, dashboards, SaaS platforms, and complex digital systems. Every interface is crafted with a strong focus on usability, responsiveness, visual consistency, and interaction performance helping brands present a cohesive, reliable, and professional digital experience across platforms.
                   </p>

                                                                      <button><NavLink to='/contact' className="nav-avoid-blue">Book Your Free Strategy Call</NavLink></button>

            </section>
        </main>
    );
};

export default Page5;
