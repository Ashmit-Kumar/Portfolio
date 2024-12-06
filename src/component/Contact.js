import React, { useState } from "react";
import "./styles/Contact.css";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Message Sent: ", formData);
    // Add email sending logic here (e.g., using EmailJS or a backend service)
    alert("Thank you for reaching out!");
    setFormData({ name: "", email: "", message: "" }); // Clear the form
  };

  return (
    <section className="contact-section">
      <h2 className="contact-title">Get In Touch</h2>
      <form className="contact-form" onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="Your Name"
          required
          className="contact-input"
        />
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Your Email"
          required
          className="contact-input"
        />
        <textarea
          name="message"
          value={formData.message}
          onChange={handleChange}
          placeholder="Your Message"
          required
          className="contact-textarea"
        />
        <button type="submit" className="contact-button">
          Send Message
        </button>
      </form>
    </section>
  );
}

export default Contact;
