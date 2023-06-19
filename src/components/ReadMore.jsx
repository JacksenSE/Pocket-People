import React, { useState } from 'react';

function ReadMorePopup() {
  const [showPopup, setShowPopup] = useState(false);
  const [currentPage, setCurrentPage] = useState(0);

  const togglePopup = () => {
    setShowPopup(!showPopup);
  };

  const nextPage = () => {
    setCurrentPage((prevPage) => prevPage + 1);
  };

  const previousPage = () => {
    setCurrentPage((prevPage) => prevPage - 1);
  };

  const closePopup = () => {
    setShowPopup(false);
  };

  const pages = [
    {
      title: 'Page 1',
      content: `
      Once upon a time, in a land known for its pursuit of knowledge, there lived a young and curious scholar named Ethan. Ethan was passionate about learning and always sought ways to enhance his learning abilities. One day, he embarked on a journey to uncover the secrets of accelerated learning.
      
      Ethan sought the guidance of a wise old teacher who shared a valuable lesson. "To learn faster," the teacher said, "you must cultivate a focused mind and create a conducive environment for learning." Intrigued, Ethan eagerly listened and absorbed every word.
      
      The teacher continued, "Start by setting clear goals for what you wish to learn. Break down the knowledge into manageable chunks and create a structured plan. This will help you stay organized and motivated throughout your learning journey.`
    },
    {
      title: 'Page 2',
      content: `Ethan nodded, realizing the importance of having a roadmap. He diligently crafted a study plan, setting achievable milestones for each topic he wanted to master. With a clear direction, he moved forward with renewed enthusiasm.

      The teacher then emphasized the significance of concentration. "Eliminate distractions and create a sacred space for learning," the teacher advised. Ethan took this advice to heart and designed a tranquil study nook, free from interruptions. He turned off his phone, closed unnecessary tabs on his computer, and embraced the power of focus.
      
      As Ethan immersed himself in his studies, the teacher shared another secret: "Engage multiple senses to enhance retention and understanding." Ethan eagerly explored different learning methods. He read books aloud, drew diagrams to visualize concepts, and discussed ideas with peers. By involving his senses, he found that information became more tangible, making it easier to grasp and recall.`,
    },
    {
      title: 'Page 3',
      content: `The wise teacher further emphasized the value of active learning. "Don't be a passive observer," the teacher said. "Engage with the material actively." Inspired by this advice, Ethan adopted a proactive approach. He posed questions, sought answers, and actively applied his newfound knowledge to real-life situations. By doing so, he noticed his learning accelerating significantly.

      The teacher's final lesson centered on the power of repetition and practice. "Revisit and review what you've learned," the teacher advised. Ethan realized that revisiting concepts reinforced his understanding and solidified them in his memory. He implemented regular revision sessions into his study routine, ensuring that the knowledge he acquired remained fresh and accessible.
      
      Armed with these invaluable lessons, Ethan continued his journey with renewed vigor. He witnessed the remarkable transformation within himself as he learned faster and more effectively. With each milestone reached, Ethan grew in confidence and expertise.`,
    },
    {
        title: 'Page 4',
        content: `As time went on, Ethan became known as a skilled and knowledgeable scholar. People marveled at his ability to learn with incredible speed and accuracy. Yet, he never forgot the teacher who had guided him on this remarkable path.

        And so, Ethan's story became an inspiration for countless others, serving as a testament to the power of focused learning, a conducive environment, active engagement, repetition, and practice. The tale of Ethan teaches us that by applying these principles, we too can unlock the incredible potential within ourselves and embark on our own journeys of accelerated learning.`,
      },
  ];

  return (
    <>
      <button className="read-button" onClick={togglePopup}>
        Read More
      </button>
      {showPopup && (
        <div className="popup-overlay">
          <div className="popup-content">
            <button className="close-button" onClick={closePopup}>
              X
            </button>
            {/* Content for the popup */}
            <h1>{pages[currentPage].title}</h1>
            <p>{pages[currentPage].content}</p>
            <div className="popup-navigation">
              <button onClick={previousPage} disabled={currentPage === 0}>
                Previous
              </button>
              <button onClick={nextPage} disabled={currentPage === pages.length - 1}>
                Next
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default ReadMorePopup;