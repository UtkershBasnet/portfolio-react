import React, { useEffect } from "react";
import '../css/About.css';

const perc = {
    java: 80,
    javascript: 70,
    python: 70,
    typescript: 60,
    react1: 60,
    springboot: 50,
    node: 60
};

function increase() {
    const elements = document.querySelectorAll('.progress-bar');

    for (let i = 0; i < elements.length; i++) {
        const element = elements[i];
        const name = element.classList[1];
        const width = perc[name];
        element.style.width = `${width}%`;
    }
    return "done";
}

function decrease() {
    const elements = document.querySelectorAll('.progress-bar');
    for (let i = 0; i < elements.length; i++) {
        const element = elements[i];
        element.style.width = '0%';
    }
}

function Skills() {
    useEffect(() => {
        decrease();
        setTimeout(() => {
            increase();
        }, 500);
    }, []);

    return (
        <>
            <div className="SkillsBody poppins">
                <div className="SkillsContainer">
                    <div className="skillTab ">
                        <div className="heading bebas-neue-regular">SKILLS</div>
                        <div className="skillsProgressBars">
                            <div className="label bebas-neue-regular">
                                JAVA
                                <div class="progress-container">
                                    <div class="progress-bar java"><span></span></div>
                                </div>
                            </div>
                            <div className="label bebas-neue-regular">
                                JAVASCRIPT
                                <div class="progress-container">
                                    <div class="progress-bar javascript"><span></span></div>
                                </div>
                            </div>
                            <div className="label bebas-neue-regular">
                                PYTHON
                                <div class="progress-container">
                                    <div class="progress-bar python"><span></span></div>
                                </div>
                            </div>
                            <div className="label bebas-neue-regular">
                                REACT
                                <div class="progress-container">
                                    <div class="progress-bar react1"><span></span></div>
                                </div>
                            </div>
                            <div className="label bebas-neue-regular">
                                SPRINGBOOT
                                <div class="progress-container">
                                    <div class="progress-bar springboot"><span></span></div>
                                </div>
                            </div>
                            <div className="label bebas-neue-regular">
                                NODE
                                <div class="progress-container">
                                    <div class="progress-bar node"><span></span></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Skills;
