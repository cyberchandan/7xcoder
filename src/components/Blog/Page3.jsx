import React from "react";
import "./service3.css";
// import arrow from "../assets/images/arrow1.png";
import arrow from '../../assets/business-software-solutions/icon/arrow1.png'

import blogImg5 from "../../assets/blog/images/blog7.png";
import blogImg6 from "../../assets/blog/images/blog8.png";
import blogImg3 from "../../assets/blog/images/blog5.png";
import blogImg4 from "../../assets/blog/images/blog6.png";

const Service3_3 = () => {
  // Array to hold your 4 cards' data
  const blogData = [
    {
      id: 1,
      date: "May 2025",
      title: "Increase Website Traffic with High Impact SEO Strategies SEO & Digital Marketing",
      img: blogImg3,
    },
    {
      id: 2,
      date: "August 2025",
      title: "Designing Creative Brand Stories That Connect Emotionally and Stand Out in a Competitive Market",
      img: blogImg4,
    },
    {
      id: 3,
      date: "October 2025",
      title: "Create Scalable Websites & Apps with Modern Development Website & App Development",
      img: blogImg5,
    },
    {
      id: 4,
      date: "November 2025",
      title: "Empowering Businesses with Custom Software Solutions Designed for Efficiency and Scalability",
      img: blogImg6,
    },
  ];

  return (
    <section className="business-software-solution3-blog">
      <div className="sc3-blog-grid-blog">
        {blogData.map((blog) => (
          <div className="sc3-card-container-blog" key={blog.id}>
            <div className="sc3-image-box" >
              <img src={blog.img} alt={blog.title} />
            </div>
            <p className="sc3-meta-text-blog">
              {blog.date} <span className="dot-separator-blog">•</span> Admin{" "}
                <span className="dot-separator-blog">•</span> No Comments
            </p>
            <p className="sc3-description-blog">
              {blog.title}
            </p>
            <div className="sc3-action-area-blog">
              <button className="sc3-read-more-btn-blog">
                Read More
                <img src={arrow} alt="arrow" className="sc3-btn-icon-blog" />
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Service3_3;
