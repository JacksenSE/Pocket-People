import React, { useState, useEffect } from 'react';
import Nav from './Nav';
import NewsletterPopup from './NewsLetter';


function Home() {
  const [isNewsletterOpen, setNewsletterOpen] = useState(false);

  useEffect(() => {
    const isNewsletterShown = localStorage.getItem('newsletterShown');
    if (!isNewsletterShown) {
      setNewsletterOpen(true);
      localStorage.setItem('newsletterShown', 'true');
    }
  }, []);

  const closeNewsletter = () => {
    setNewsletterOpen(false);
  };

  return (
    <>
      <Nav />
      <div>
        <NewsletterPopup open={isNewsletterOpen} onClose={closeNewsletter} />
      </div>
    </>
  );
}

export default Home;