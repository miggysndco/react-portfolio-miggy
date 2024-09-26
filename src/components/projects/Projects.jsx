import React from 'react';
import project1 from '../../assets/project1.png'; 
import project2 from '../../assets/project2.png'; 
import project3 from '../../assets/project3.jpg'; 
import './projects.css'; // Import the CSS file

const Projects = () => {
  const projectData = [
    {
      title: "LazyGrail",
      details: "A simple sneaker store website featuring an intuitive interface that allows users to browse and shop easily, built using ReactJS.",
      image: project1, 
      github: "https://github.com"
    },
    {
      title: "POS & Inventory System",
      details: "A POS & Inventory System tailored for a pharmacy store using JavaScript, PHP, and MySQL.",
      image: project2, 
      github: "https://github.com"
    },
    {
      title: "The Cube Studio",
      details: "This is a fully functional website where users can schedule appointments and learn more about The Cube Dance Studio.",
      image: project3,
      github: "https://github.com"
    }
  ];

  return (
    <section className="projects section" id="projects">
      <h2 className="section_title">Portfolio</h2>
      <span className="section_subtitle">My projects</span>
      <div className="cards-container">
        {projectData.map((project, index) => (
          <div key={index} className="card">
            <img src={project.image} alt={project.title} className="image" />
            <h3 className="title">{project.title}</h3>
            <p className="details">{project.details}</p>
              <a href={project.github} target="_blank" rel="noopener noreferrer">
                <button className="button">GitHub</button>
              </a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
