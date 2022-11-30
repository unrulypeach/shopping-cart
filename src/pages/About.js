import React from 'react';
import casette from '../styles/images/casette-stack.jpg';

function About() {
  return (
    <div
      className="about-pic"
      style={{ backgroundImage: `url(${casette})` }}
    >
      About time
    </div>
  );
}

export default About;
