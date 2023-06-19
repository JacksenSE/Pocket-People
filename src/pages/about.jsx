import React from 'react';
import Nav from '../components/Nav'
function About() {
  return (
    <>
    <div>
    <Nav/>
    </div>
    <div className="about-container">
      <div>
        <h1>Meet the Author</h1>
      </div>
      <div>
        <img
          src="https://images.unsplash.com/photo-1664575602554-2087b04935a5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80"
          alt="Author"
          className="author-image"
        />
      </div>
      <div>
        <h2>About the Author</h2>
      </div>
      <div>
        <p>"John Doe is a talented author with a passion for storytelling. With a keen imagination and a love for literature, John has crafted captivating tales that transport readers to enchanting worlds and explore the depths of human emotions. His unique writing style combines vivid descriptions, intricate character development, and thought-provoking themes, creating narratives that leave a lasting impact. John's literary works have garnered critical acclaim and a devoted following, making him a rising star in the literary world. Through his words, John aims to inspire, entertain, and challenge readers, inviting them on unforgettable literary journeys."</p>
      </div>
    </div>
    </>
  );
}

export default About;
