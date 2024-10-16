import React, { useEffect, useRef } from "react";

// Import Components
import CareerItem from "../components/CareerItem";

// Import Styles
import "../styles/css/career.css";

// Import Data
import career from "../assets/data/career.json";

function Career() {
  const cardRefs = useRef([]);
  const animatedItems = useRef(new Set()); // Set to track already animated items

  useEffect(() => {
    // Set up the Intersection Observer
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Only animate if the item hasn't been animated before
            if (!animatedItems.current.has(entry.target)) {
              entry.target.classList.add("slide-in");
              animatedItems.current.add(entry.target); // Add to animated set
            }
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
