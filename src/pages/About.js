import React from 'react';
import casette from '../styles/images/casette-stack.jpg';

function About() {
  return (
    <div
      className="about-pic"
      style={{ backgroundImage: `url(${casette})` }}
    >
      <div className="about-text-container">
        <div className="header-bg">
          <h1>
            About Us
          </h1>
        </div>
        <span>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
          incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
          exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu
          fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident,
          sunt in culpa qui officia deserunt mollit anim id est laborum.
        </span>
      </div>
    </div>
  );
}

export default About;
