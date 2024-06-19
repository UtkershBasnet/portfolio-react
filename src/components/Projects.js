import React from "react";
import ProjectBox from "./ProjectBox";
import "../css/Projects.css";

const Projects = () => {
  return (
    <div>
      <h1 className="projectHeading">
        My <b>Projects</b>
      </h1>
      <div className="project">
        <ProjectBox projectName="ProductService" />
        <ProjectBox projectName="Portfolio" />
        <ProjectBox projectName="QuizApp" />
      </div>
    </div>
  );
};

export default Projects;