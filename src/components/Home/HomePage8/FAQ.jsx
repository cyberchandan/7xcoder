import React from 'react'
import { motion } from 'framer-motion';
import { useState } from "react";
import "./FAQ.css";

const faqData = [
  {
    id: 1,
    q: "How does digital marketing turn strategy into measurable growth?",
    a: "We combine data-driven planning, performance tracking, and continuous optimization to ensure measurable ROI."
  },
  {
    id: 2,
    q: "How does Local SEO help your business attract nearby customers?",
    a: "Local SEO improves visibility in nearby searches, helping customers find your business faster."
  },
  {
    id:3,
    q: "What services are included in a full-scale digital marketing solution?",
    a: "SEO, paid ads, content marketing, social media, branding, and analytics."
  },
  {
    id: 4,
    q: "How does SEO drive long-term growth for your business?",
    a: "SEO builds authority over time, generating consistent organic traffic."
  },
  {
    id: 5,
    q: "How often should your website be updated to stay effective?",
    a: "Regular updates help performance, UX, and security."
  },
  {
    id: 6,
    q: "What technologies do you use for website development?",
    a: "React, Next.js, Node.js, WordPress, and scalable cloud platforms."
  }
];
const FAQ = () => {
   const [open, setOpen] = useState(null);

  return (
    <section className="faq-wrapper">
      <div className="faq-container">

        <motion.div
        initial={{ opacity: 0, x: -100 }}
  whileInView={{ opacity: 1, x: 0 }}
  transition={{ duration: 0.8 }} 
        className="faq-left">
          <h1>FAQs</h1>
          <p>Got questions? We’ve got answers.</p>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, x: 100 }}
  whileInView={{ opacity: 1, x: 0 }}
  transition={{ duration: 0.8 }}
        className="faq-right">
          {faqData.map((item, i) => (
            <div key={item.id} className="border-wrapper">
              <div  className={`faq-box ${open === i ? "open" : ""}`}>
              <button
                className="faq-question"
                onClick={() => setOpen(open === i ? null : i)}
              >
                <span>{item.q}</span>
                <span className="icon">{open === i ? "−" : "+"}</span>
              </button>

              <div className="faq-answer">
                <p>{item.a}</p>
              </div>
            </div>
            </div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}


export default FAQ
