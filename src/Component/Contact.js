import React from 'react';
import './ContactPage.css'

const Contact = () => {
  return (
    <div className="contactPage">
      <h2>Contact Us</h2>
      <p>Have questions or suggestions? Feel free to reach out to us!</p>

      <form>
        <label htmlFor="name">Name:</label>
        <input type="text" id="name" name="name" required />

        <label htmlFor="email">Email:</label>
        <input type="email" id="email" name="email" required />

        <label htmlFor="message">Message:</label>
        <textarea id="message" name="message" rows="4" required></textarea>

        <button type="submit">Send Message</button>
      </form>
    </div>
  );
}

export default Contact;
