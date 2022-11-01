import React from "react";
import "./about.css";
import ME from "../../Assets/aboutme.jpg";
import { FaAward } from "react-icons/fa";
import { AiOutlineFundProjectionScreen } from "react-icons/ai";

const About = () => {
  return (
    <section id="about">
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="About ME" />
          </div>
        </div>
        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <FaAward className="about__icon" />
              <h5>Experience</h5>
              <small>1+ year working</small>
            </article>

            <article className="about__card">
              <AiOutlineFundProjectionScreen className="about__icon" />
              <h5>Projects</h5>
              <small>6+ Completed</small>
            </article>
          </div>
          <p>
            Enthusiast Frontend Developer with skill-sets of HTML, CSS,
            Javascript, React. Also familiar with Github, Typescript, NextJS,
            Redux. Seeking for challenging opportunity to work and grow more
            with new learnings.
          </p>

          <a href="#contact" className="btn btn-primary">
            Let's Talk
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
