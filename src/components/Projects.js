import '../css/Projects.css';

function Projects() {
  return (
    <div className="projects-section">
      <h1>Projects</h1>
      <ul className="projects-list">
        <li className="project-item">
          <h2>Project 1</h2>
          <p>Description of project 1...</p>
        </li>
        <li className="project-item">
          <h2>Project 2</h2>
          <p>Description of project 2...</p>  
        </li>
        {/* Add more projects as needed */}
      </ul>
    </div>
  );
}

export default Projects;
