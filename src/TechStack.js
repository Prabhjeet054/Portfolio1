import React from 'react';

const TechStack = () => {
  return (
    <section id="techstack">
      <h1>Tech Stack</h1>
      <div className="techstack-container">
        <div className="techstack-item">
          <h2>Front-end</h2>
          <ul>
            <li>HTML5</li>
            <li>CSS3</li>
            <li>JavaScript</li>
            <li>React</li>
          </ul>
        </div>
        <div className="techstack-item">
          <h2>Back-end</h2>
          <ul>
            <li>Node.js</li>
            <li>Express</li>
            <li>MongoDB</li>
          </ul>
        </div>
        <div className="techstack-item">
          <h2>Tools</h2>
          <ul>
            <li>Git</li>
            <li>GitHub</li>
            <li>Visual Studio Code</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default TechStack;