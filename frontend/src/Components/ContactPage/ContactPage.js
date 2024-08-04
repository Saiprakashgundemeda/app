import React, { useState } from 'react';
import { useSpring, animated } from 'react-spring';
import './ContactPage.css';

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    country: '',
    mobile: '',
    date: '',
    time: '',
    company: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  const fadeIn = useSpring({
    from: { opacity: 0 },
    to: { opacity: 1 },
    config: { duration: 1000 },
  });

  return (
    <animated.div style={fadeIn} className="contact-page">
      <div className="form-container">
        <h2 className="form-title">Request a Call Back</h2>
        <form className="contact-form" onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            required
            className="form-input"
          />
          <input
            type="email"
            name="email"
            placeholder="Email ID"
            value={formData.email}
            onChange={handleChange}
            required
            className="form-input"
          />
          <input
            type="text"
            name="country"
            placeholder="Country"
            value={formData.country}
            onChange={handleChange}
            required
            className="form-input"
          />
          <input
            type="tel"
            name="mobile"
            placeholder="Mobile Number"
            value={formData.mobile}
            onChange={handleChange}
            required
            className="form-input"
          />
          <input
            type="date"
            name="date"
            placeholder="Preferred Date"
            value={formData.date}
            onChange={handleChange}
            required
            className="form-input"
          />
          <input
            type="time"
            name="time"
            placeholder="Preferred Time"
            value={formData.time}
            onChange={handleChange}
            required
            className="form-input"
          />
          <input
            type="text"
            name="company"
            placeholder="Company"
            value={formData.company}
            onChange={handleChange}
            className="form-input"
          />
          <textarea
            name="message"
            placeholder="Message"
            value={formData.message}
            onChange={handleChange}
            required
            className="form-textarea"
          />
          <button type="submit" className="submit-button">Submit</button>
        </form>
      </div>
    </animated.div>
  );
};

export default ContactPage;

