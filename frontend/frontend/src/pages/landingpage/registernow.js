import React, { useState, useEffect } from 'react';
import '../../styles/landingpage/registernow.css';

const RegisterNow = () => {
  const [textIndex, setTextIndex] = useState(0);
  const texts = ["What Are You Waiting For ?", "Join Us Now!", "Start Today!"]; // Add more texts as needed
  const delay = 3000; // Delay in milliseconds between text changes
  const handleredirect = () => {
    window.location.href = '/auth'; // Navigate to the '/auth' URL when the button is clicked
};
  useEffect(() => {
    const interval = setInterval(() => {
      setTextIndex((prevIndex) => (prevIndex + 1) % texts.length);
    }, delay);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="registernow">
      <div className="lastimage"></div>
      <div className="lasttext">
        <h1>{texts[textIndex]}</h1>
        <button onClick={handleredirect}>Get Started</button>
      </div>
    </section>
  );
};

export default RegisterNow;
