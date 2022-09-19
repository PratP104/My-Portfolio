import React from "react";
import "./experience.css";
import { HiBadgeCheck } from "react-icons/hi";
import { RiCheckDoubleLine } from "react-icons/ri";
import Slider from "../Slider/Slider";

const Experience = () => {
  return (
    <section id="experience">
      <h5>Have A Look On</h5>
      <h2>My Experience</h2>

      <div className="container experience__container">
        <div className="experience__frontend">
          <h3>Frontend Developemt Skills</h3>
          <div className="experience__content">
            <article className="experience__details">
              <HiBadgeCheck className="experience__icon" />
              <h4>HTML</h4>
              <small className="text-light">Certified</small>
            </article>
            <article className="experience__details">
              <HiBadgeCheck className="experience__icon" />
              <h4>CSS</h4>
              <small className="text-light">Certified</small>
            </article>
            <article className="experience__details">
              <HiBadgeCheck className="experience__icon" />
              <h4>Javascript</h4>
              <small className="text-light">Certified</small>
            </article>
            <article className="experience__details">
              <HiBadgeCheck className="experience__icon" />
              <h4>ReactJS</h4>
              <small className="text-light">Certified</small>
            </article>
            <article className="experience__details">
              <HiBadgeCheck className="experience__icon" />
              <h4>Familiar With</h4>
              <RiCheckDoubleLine className="experience__icon" />
              <small className="text-light">Redux </small>
              <RiCheckDoubleLine className="experience__icon" />
              <small className="text-light">NextJS </small>
              <RiCheckDoubleLine className="experience__icon" />
              <small className="text-light">Typescript </small>
              <RiCheckDoubleLine className="experience__icon" />
              <small className="text-light">Bootstrap </small>
            </article>
          </div>
        </div>
        <div className="certificate__container">
          <h3>Certificates</h3>
          <Slider />
        </div>
      </div>
    </section>
  );
};

export default Experience;
