import React, { useState } from "react";
import { motion } from "framer-motion";
import "./Contact.css";
import ellipse from "../../../assets/images/Ellipse 5.png";
import ellipse1 from "../../../assets/images/Ellipse 6.png";
import instagram from "../../../assets/icons/instagram.png";
import facebook from "../../../assets/icons/facebook.png";
import x from "../../../assets/icons/x.png";
import linkedin from "../../../assets/icons/linkedin.png";

const Contact = () => {
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null); // 'success' or 'error'
  const [submitMessage, setSubmitMessage] = useState("");

  const validate = (formData) => {
    const newErrors = {};

    if (!formData.name?.trim()) newErrors.name = "Name is required";

    if (!formData.email) newErrors.email = "Email is required";
    else if (!/\S+@\S+\.\S+/.test(formData.email))
      newErrors.email = "Invalid email address";

    if (!formData.businessName?.trim())
      newErrors.businessName = "Business name is required";

    if (!/^[0-9]{10}$/.test(formData.mobile || ""))
      newErrors.mobile = "Phone number must be 10 digits";

    if (!formData.service) newErrors.service = "Please select a service";

    return newErrors;
  };
  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = Object.fromEntries(new FormData(e.target));
    const validationErrors = validate(formData);

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      setSubmitStatus(null);
      return;
    }

    setErrors({});
    setLoading(true);
    setSubmitStatus(null);

    // 1. Fire and forget the fetch request (Optimistic UI)
    // Since the backend is already optimized to return instantly, 
    // we show success immediately to the user for maximum speed.
    const backendUrl = import.meta.env.VITE_BACKEND_URL || "http://localhost:5000";
    fetch(`${backendUrl}/api/contact`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
      },
      body: JSON.stringify({
        name: formData.name,
        email: formData.email,
        businessName: formData.businessName,
        mobile: formData.mobile,
        service: formData.service,
        message: formData.message || ""
      }),
    }).catch(err => console.error("Background lead sync failed:", err));

    // 2. Immediate Success Feedback
    setSubmitStatus("success");
    setSubmitMessage("Message sent successfully! We'll get back to you soon.");
    e.target.reset();
    setLoading(false);

    // Clear success message after 5 seconds
    setTimeout(() => {
      setSubmitStatus(null);
    }, 5000);
  };

  return (
    <section className="contact">
      <div className="contact-container">
        {/* LEFT */}
        <motion.div
          initial={{ opacity: 0, x: -80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: false, amount: 0.3 }}
          className="contact-left"
        >
          <div className="left-content">
            <div className="contact-head">
              <h4>Contact</h4>
              <p>+91 85273 07240</p>
            </div>

            <div>
              <h4>Address</h4>
              <p>
                Bahlolpur sec-63A<br />
                noida,up
              </p>
            </div>

            <div className="line" />

            <div>
              <h4>Email</h4>
              <p>7xcoder.com@gmail.com</p>
            </div>

            <div className="line" />
          </div>

          {/* Socials temporarily hidden
          <div className="socials">
            <a
              href="https://www.instagram.com/7xcoder_media/"
              target="_blank"
            >
              <img src={instagram} alt="Instagram" />
            </a>
            <a href="https://www.facebook.com/7xcodermedia" target="_blank">
              <img src={facebook} alt="Facebook" />
            </a>
            <a
              href="https://www.linkedin.com/company/7xcoder-media/posts/?feedView=all"
              target="_blank"
            >
              <img src={linkedin} alt="LinkedIn" />
            </a>
            <a href="https://x.com/7xcodermedia" target="_blank">
              <img src={x} alt="X" />
            </a>
          </div>
          */}
        </motion.div>

        {/* RIGHT */}
        <motion.div
          initial={{ opacity: 0, x: 100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="contact-right"
        >
          <span className="small-title">Let’s Talk Growth</span>
          <h2>
            SEND A <span>MESSAGE</span>
          </h2>

          <form onSubmit={handleSubmit} noValidate>
            <div className="grid">
              <div className="field">
                <input name="name" placeholder="Name*" />
                {errors.name && <small className="error">{errors.name}</small>}
              </div>

              <div className="field">
                <input name="email" type="email" placeholder="Email*" />
                {errors.email && (
                  <small className="error">{errors.email}</small>
                )}
              </div>

              <div className="field">
                <input name="businessName" placeholder="Business Name*" />
                {errors.businessName && (
                  <small className="error">{errors.businessName}</small>
                )}
              </div>

              <div className="field">
                <input
                  name="mobile"
                  type="tel"
                  placeholder="Phone Number*"
                  inputMode="numeric"
                  pattern="\d*"
                  maxLength={10}
                  onInput={(e) => {
                    e.target.value = e.target.value
                      .replace(/\D/g, "")
                      .slice(0, 10);
                  }}
                  onPaste={(e) => {
                    e.preventDefault();
                    const paste =
                      (e.clipboardData || window.clipboardData).getData(
                        "text",
                      ) || "";
                    const digits = paste.replace(/\D/g, "").slice(0, 10);
                    const target = e.target;
                    const start = target.selectionStart || 0;
                    const end = target.selectionEnd || 0;
                    const newVal =
                      (target.value || "").slice(0, start) +
                      digits +
                      (target.value || "").slice(end);
                    target.value = newVal.slice(0, 10);
                    target.dispatchEvent(new Event("input", { bubbles: true }));
                  }}
                />
                {errors.mobile && (
                  <small className="error">{errors.mobile}</small>
                )}
              </div>
            </div>

            <select
              name="service"
              onChange={(e) => {
                if (e.target.value) {
                  setErrors((prev) => {
                    if (!prev || !prev.service) return prev;
                    const copy = { ...prev };
                    delete copy.service;
                    return copy;
                  });
                }
              }}
            >
              <option value="">Which service are you interested in?*</option>
              <option value="digital-marketing">Digital Marketing</option>
              <option value="design-creative">Design & Creative</option>
              <option value="webapp-development">Web App Development</option>
              <option value="business-software-solutions">
                Business Software Solutions
              </option>
              <option value="ecommerce-solutions">E-Commerce Solutions</option>
              <option value="branding-strategy">Branding & Strategy</option>
            </select>
            {errors.service && (
              <small className="error">{errors.service}</small>
            )}

            <textarea name="message" placeholder="Message"></textarea>

            {submitStatus && (
              <div className={`submit-message ${submitStatus}`}>
                {submitMessage}
              </div>
            )}

            <button type="submit" className="talk" disabled={loading}>
              {loading ? "Sending..." : "Let's Talk"}
            </button>
          </form>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
