import React from 'react';
import './Project.css'

function Projects() {
  const projects = [
    {
      image: 'https://static1.makeuseofimages.com/wordpress/wp-content/uploads/2022/01/url-shortener.jpg',
      title: 'URL Shortner',
      content: 'A URL shortener is a tool that takes a long web address (URL) and converts it into a shorter, more manageable version, usually with a unique identifier.'
    },
    {
      image: 'https://img.freepik.com/premium-vector/event-management-wedding-planner-manager-planning-event-conference-party_501813-2157.jpg',
      title: 'Event Registration System',
      content: 'Event registration system is an online platform that allows users to register for events, such as conferences, webinars, etc.'
    },
    {
      image: 'https://i0.wp.com/www.lovelycoding.org/wp-content/uploads/2022/09/Restaurant-Management-System.webp?fit=640%2C427&ssl=1',
      title: 'Restaurant Management System',
      content: 'Restaurant management system is software designed to streamline and automate operations improving efficiency and customer service.'
    }
  ];

  const renderProjects = () => {
    return projects.map((project, index) => {
      const isLeft = index % 2 === 0;
      return (
        <div key={index} className={`card ${isLeft ? 'left' : 'right'}`}>
          {isLeft ? (
            <>
              <img src={project.image} alt={project.title} />
              <div className="text">
                <h1>{project.title}</h1>
                <p>{project.content}</p>
              </div>
            </>
          ) : (
            <>
              <div className="text">
                <h1>{project.title}</h1>
                <p>{project.content}</p>
              </div>
              <img src={project.image} alt={project.title} />
            </>
          )}
        </div>
      );
    });
  };

  return (
    <div className="container">
      <h1 className="title">My Projects</h1>
      <div className="projects">
        {renderProjects()}
      </div>
    </div>
  );
}

export default Projects;