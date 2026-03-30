import React from "react";
import "./service4.css";
// import arrow from "../assets/Digital_Marketing_Services/icon/arrow1.png";

import icon1 from "../../assets/blog/images/icon1.png";
import icon2 from "../../assets/blog/images/icon2.png";
import icon3 from "../../assets/blog/images/icon3.png";
import icon4 from "../../assets/blog/images/icon4.png";
import icon5 from "../../assets/blog/images/icon5.png";


const blogPhilosophyList = [
  {
    title: "Mission",
    img: icon1,
    description:
      "Our blog’s mission is to empower businesses with clear, actionable digital insights that help them navigate complexity, adopt smarter strategies, and achieve measurable growth in an ever-evolving digital ecosystem.",
  },
  {
    title: "Vision",
    img: icon2,
    description:
      "We envision our blog as a trusted knowledge platform where brands, founders, and marketers discover future-ready ideas, emerging trends, and proven frameworks that drive sustainable digital success.",
  },
  {
    title: "Purpose",
    img: icon3,
    description:
      "The purpose of our blog is to bridge the gap between strategy and execution by translating complex digital concepts into practical guidance that businesses can apply with confidence.",
  },
  {
    title: "Values",
    img: icon4,
    description:
      "Our content is rooted in integrity, relevance, and value creation. We prioritize clarity over complexity, insights over noise, and long term impact over short term trends ensuring every article delivers meaningful takeaways.",
  },
  {
    title: "Approach",
    img: icon5,
    description:
      "Our approach is insight led and execution focused. We combine real world experience, data driven thinking, and creative perspectives to publish content that is scalable, actionable, and aligned with real business goals.",
  },
];

const Service_4 = () => {
  return (
    <section className="service4-container-blog">
      <div className="service4-content-wrapper-blog">
        <p className="service4-tagline-blog">OUR BLOG PHILOSOPHY</p>

        {/* --- Top Row: 5 Cards Grid --- */}
        <div className="service4-cards-grid-blog">
          {blogPhilosophyList.map((item, index) => (
            <div className="service4-philosophy-card-blog" key={index}>
              <div className="service4-icon-box-blog-blog">
                <img src={item.img} alt={item.title} />
              </div>
              <h4>{item.title}</h4>
              <p>{item.description}</p>
            </div>
          ))}
        </div>

        <div className="service4-divider-blog"></div>

        {/* --- Bottom Row: 3-Column Thought Leadership --- */}
        <div className="service4-thought-leadership-blog">
          <div className="service4-tl-col-blog">
            <h3>Thought Leadership That Drives Action</h3>
            <p>
              At 7xcoder.com, our thought leadership goes beyond opinions
              and trends it is built on real world experience, data backed
              insights, and proven execution. We believe true leadership in the
              digital space is defined by the ability to turn ideas into impact.
              Our blogs are designed to help businesses think strategically, act
              decisively, and implement digital solutions that deliver
              measurable outcomes. By sharing practical frameworks, emerging
              industry insights, and performance driven strategies, we empower
              brands, founders, and marketers to move from inspiration to
              execution with confidence, clarity, and long term vision.
            </p>
          </div>
          <div className="service4-tl-col-blog">
            <p>
              Beyond insights, our content is structured to guide decision
              making at every stage of digital growth. We focus on real
              challenges faced by modern businesses and offer clarity through
              actionable guidance, strategic perspectives, and tested
              methodologies. 
            </p>
            <p>
             Each article is crafted to help leaders anticipate
              change, adapt to evolving technologies, and build resilient
              digital strategies that scale. Through consistency, relevance, and
              depth, we aim to create a knowledge ecosystem that supports long
              term success not just awareness, but meaningful progress.
            </p>
          </div>
          <div className="service4-tl-col-blog">
            <p>
              Ultimately, our goal is to equip businesses with the confidence to
              make smarter, faster, and more informed decisions in an
              increasingly complex digital landscape. By combining strategic
              thinking with practical execution, we ensure our content remains
              relevant, impactful, and aligned with real business outcomes.
            </p>
            <p>Whether it’s navigating digital transformation, improving
              performance, or building scalable systems, our blogs are designed
              to serve as a reliable resource for leaders committed to
              sustainable growth and continuous innovation. </p>
            
          </div>
        </div>
      <div className="service4-divider-blog"></div>
      </div>
    </section>
  );
};

export default Service_4;
