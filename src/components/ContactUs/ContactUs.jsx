import React, { useState } from "react";
import emailjs from "emailjs-com";
import "./ContactUs.css";

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .send(
        "service_gnmqj7c", // Replace with your EmailJS service ID
        "template_wk0zbfp", // Replace with your template ID
        formData,
        "cgB3q1Sht1gLfFiIA" // Replace with your public key
      )
      .then(
        (result) => {
          alert("✅ Message sent successfully!");
          setFormData({
            name: "",
            email: "",
            subject: "",
            message: ""
          });
        },
        (error) => {
          alert("❌ Failed to send message. Please try again.");
        }
      );
  };

  return (
    <div className="contact-container">
      <div className="contact-card">
        <h2>Contact Us</h2>
        <p>We're here to help! Fill out the form and we’ll get back to you soon.</p>
        <form onSubmit={handleSubmit} className="contact-form">
          <div className="form-group">
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              required
              value={formData.name}
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              required
              value={formData.email}
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <input
              type="text"
              name="subject"
              placeholder="Subject"
              required
              value={formData.subject}
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <textarea
              name="message"
              rows="5"
              placeholder="Your Message"
              required
              value={formData.message}
              onChange={handleChange}
            />
          </div>
          <button type="submit">Send Message</button>
        </form>
      </div>
    </div>
  );
};

export default ContactUs;
