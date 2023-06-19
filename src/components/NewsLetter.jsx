import React, { useState } from 'react';

function NewsletterPopup({ open, onClose }) {
  const [email, setEmail] = useState('');

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle the form submission
    // You can add your logic to subscribe the user to the newsletter here
    console.log('Email submitted:', email);
  };

  const handleClose = () => {
    onClose();
  };

  if (!open) {
    return null;
  }

  return (
    <div className={`newsletterPopup ${open ? 'open' : ''}`}>
      <div className="newsletterContent">
        <h2>Subscribe to Our Newsletter</h2>
        <form onSubmit={handleSubmit}>
          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={handleEmailChange}
          />
          <button type="submit">Subscribe</button>
        </form>
        <button className="closeButton" onClick={handleClose}>
          X
        </button>
      </div>
    </div>
  );
}

export default NewsletterPopup;
