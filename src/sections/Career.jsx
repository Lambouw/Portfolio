import React, { useEffect, useRef } from "react";

// Import Components
import CareerItem from "../components/CareerItem";

// Import Styles
import "../styles/css/career.css";

// Import Data
import career from "../assets/data/career.json";

function Career() {
  const cardRefs = useRef([]);

  useEffect(() => {
    // Set up the Intersection Observer
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Add the slide-in class when the element is in view
            entry.target.classList.add("slide-in");
          } else {
            // Remove the slide-in class when the element is out of view
            entry.target.classList.remove("slide-in");
          }
        });
      },
      { threshold: 0.5 } // 50% of the card must be visible to trigger
    );

    // Observe each card
    cardRefs.current.forEach((card) => {
      if (card) {
        observer.observe(card);
      }
    });

    // Cleanup on component unmount
    return () => {
      cardRefs.current.forEach((card) => {
        if (card) {
          observer.unobserve(card);
        }
      });
    };
  }, []);

  return (
    <div className="career">
      <h1 className="career--heading">Career</h1>
      <div className="height-s"></div>
      <div className="career--container">
        {career.map((careerItem, index) => (
          <CareerItem
            key={index}
            ref={(el) => (cardRefs.current[index] = el)}
            careerItem={careerItem}
          />
        ))}
      </div>
    </div>
  );
}

export default Career;
