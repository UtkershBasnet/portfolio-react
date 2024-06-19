import React from "react";
import { FaGithub } from "react-icons/fa";
import { CgFileDocument } from "react-icons/cg";

const ProjectBox = ({ projectPhoto, projectName }) => {
  const desc = {
    PortfolioDesc:"The React Portfolio is a personal website designed to showcase my projects, skills, and experiences. Built entirely using the React framework, this portfolio aims to provide a modern, responsive, and interactive user experience. It serves as a digital resume, project showcase, and contact point for potential employers or collaborators.",
    PortfolioGithub:
      "https://github.com/UtkershBasnet/portfolio-react",
    PortfolioWebsite: "https://portfolio-react-one-dusky.vercel.app/",

    QuizAppDesc:"The Basic Quiz App is an interactive web application designed to test users' knowledge on various topics. Developed using HTML, CSS, and JavaScript, this project features a simple, user-friendly interface that allows users to answer multiple-choice questions and view their scores at the end of the quiz.",
    QuizAppGithub: "https://github.com/UtkershBasnet/quizApp",

    ProductServiceDesc:"The Product/Service Management System is a comprehensive web application developed using Spring Boot and APIs, designed to manage products or services within an organization. This project serves as a backend system that facilitates CRUD operations (Create, Read, Update, Delete) for products or services through RESTful APIs.",
    ProductServiceGithub: "https://github.com/UtkershBasnet/ProductService",
  };

  let show = "";
  if (desc[projectName + "Github"] === "") {
    show = "none";
  }

  return (
    <div className="projectBox">
      {/* <img className="projectPhoto" src={projectPhoto} alt="Project display" /> */}
      <div>
        <br />
        <h3>{projectName}</h3>
        <br />
        {desc[projectName + "Desc"]}
        <br />

        <a
          style={{ display: show }}
          href={desc[projectName + "Github"]}
          target="_blank"
          rel="noopener noreferrer"
        >
          <button className="projectbtn">
            <FaGithub /> Github
          </button>
        </a>

        <a
          href={desc[projectName + "Website"]}
          target="_blank"
          rel="noopener noreferrer"
        >
          <button className="projectbtn">
            <CgFileDocument /> Demo
          </button>
        </a>
      </div>
    </div>
  );
};

export default ProjectBox;
