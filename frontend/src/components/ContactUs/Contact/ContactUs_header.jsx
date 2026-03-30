import React from 'react'
import './ContactUs-header.css'

const ContactUs_header = () => {
  return (
    <section className="contact-us">
      <div className="contact-header" >
        <h1 className="contact-title">Contact Us</h1>
        <p className="contact-breadcrumb">
          Home | <span>Contact</span>
        </p>
      </div>
    </section>
  )
}

export default ContactUs_header
