import React from 'react';
import '../../styles/landingpage/features.css';

const Features = () => {
  return (
    <section className="feature">

      <div className="feature-main">
        <div className="colorcircle" style={{ backgroundColor: '#050315' }}></div>
        <div className="featuredetails">
          <h1>First Feature</h1>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eosamet consectetur adipisicing elit.</p>
        </div>
      </div>

      <div className="feature-main">
        <div className="colorcircle" style={{ backgroundColor: '#FFC300' }}></div>
        <div className="featuredetails">
          <h1>Second Feature</h1>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eosamet consectetur adipisicing elit.</p>
        </div>
      </div>

      <div className="feature-main">
        <div className="colorcircle" style={{ backgroundColor: '#CE47FF' }}></div>
        <div className="featuredetails">
          <h1>Third Feature</h1>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eosamet consectetur adipisicing elit.</p>
        </div>
      </div>

    </section>
  );
};

export default Features;
