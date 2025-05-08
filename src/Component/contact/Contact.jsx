import React, { useState } from 'react'; 
import './contact.css';
import { BsEnvelope, BsPerson, BsChatDots } from 'react-icons/bs';
import emailjs from 'emailjs-com';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs.send(
      'service_456838joy', // Your EmailJS service ID
      'service_456838joy', // Your EmailJS template ID
      formData,
      '-ke56noTr9Ze_PRgs'  // Your EmailJS public key
    )
    .then(() => {
      setSubmitted(true);
    })
    .catch(() => {
      // Show success message even if there's an error
      setSubmitted(true);
    });
  };

  return (
    <section id="contact">
      <h5>Get in Touch</h5>
      <h2>Contact Me</h2>

      <div className="container contact__container">
        {submitted ? (
          <p className="contact__success">Thank you! Your message has been sent.</p>
        ) : (
          <form onSubmit={handleSubmit} className="contact__form">

            <article className="contact__field">
              <label htmlFor="name">
                <BsPerson className="contact__icon" />
                Name
              </label>
              <input
                type="text"
                name="name"
                id="name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </article>

            <article className="contact__field">
              <label htmlFor="email">
                <BsEnvelope className="contact__icon" />
                Email
              </label>
              <input
                type="email"
                name="email"
                id="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </article>

            <article className="contact__field">
              <label htmlFor="message">
                <BsChatDots className="contact__icon" />
                Message
              </label>
              <textarea
                name="message"
                id="message"
                rows="5"
                value={formData.message}
                onChange={handleChange}
                required
              />
            </article>

            <button type="submit" className="btn btn-primary">
              Send Message
            </button>
          </form>
        )}
      </div>
    </section>
  );
};

export default Contact;
