import React, { useState, useEffect, useRef } from "react";

// Import Styles
import "../styles/css/fadeincontainer.css";

function FadeInContainer({ children, type, threshold, delay }) {
  const [isVisible, setVisible] = useState(false);
  const sectionRef = useRef();

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisible(entry.isIntersecting);
          }
        });
      },
      {
        threshold: threshold,
      }
    );

    observer.observe(sectionRef.current);

    return () => observer.unobserve(sectionRef.current);
  }, []);

  return (
    <div
      className={`fade-in-${type} ${isVisible ? "is-visible" : ""}`}
      style={{ transitionDelay: `${delay}` }}
      ref={sectionRef}
    >
      {children}
    </div>
  );
}

export default FadeInContainer;
