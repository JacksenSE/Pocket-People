import React from 'react'
import Nav from '../components/Nav';
function Contact() {
  return (
     <>
     <div>
      <Nav/>
      </div>
    <div className="contact-container">
    <h1>Contact</h1>
    <form>
      <div>
        <label htmlFor="name">Name</label>
        <input type="text" id="name" name="name" required />
      </div>
      <div>
        <label htmlFor="email">Email</label>
        <input type="email" id="email" name="email" required />
      </div>
      <div>
        <label htmlFor="message">Message</label>
        <textarea id="message" name="message" required></textarea>
      </div>
      <button type="submit">Submit</button>
    </form>
  </div>
  </>
);
}

export default Contact