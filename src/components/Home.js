import React from 'react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { GrMail } from 'react-icons/gr';
import { SiLeetcode } from 'react-icons/si';
import Typing from './Typing';
import '../css/Home.css';

function Home() {
  return (
    <>
      <div className="home-section">
        <h1 className="name-title"> Hi there👋</h1>
        <h1 className="name-title"> I'M UTKERSH BASNET</h1>

        <div className="background-overlay">
          <Typing
            text={[
              "Software Developer",
              "MERN Stack Developer"
            ]}
            typingSpeed={100}
            deletingSpeed={50}
            duration={1000} />
        </div>
        <div className="footerLinks">
        <a href="https://github.com/UtkershBasnet" target="_blank" rel="noopener noreferrer">
          <FaGithub />
        </a>
        <a href="www.linkedin.com/in/utkersh-basnet" target="_blank" rel="noopener noreferrer">
          <FaLinkedin />
        </a>
        <a href="mailto:utkershbasnet@gmail.com" target="_blank" rel="noopener noreferrer">
          <GrMail />
        </a>
        <a href="https://leetcode.com/u/UtkershBasnet/" target="_blank" rel="noopener noreferrer">
          <SiLeetcode />
        </a>
      </div>

      </div>
      
    </>
  );
}

export default Home;
