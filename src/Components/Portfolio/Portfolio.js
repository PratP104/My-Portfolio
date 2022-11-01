import React from "react";
import "./portfolio.css";
import PORTFOLIO from "../../Assets/portfolioss.png";
import CODECLAY from "../../Assets/codeclay.png";
const portfolioData = [
  {
    id: 1,
    image: PORTFOLIO,
    title: "Portfolio App",
    github: "https://github.com/PratP104",
    demo: "https://pratp104.github.io/My-Portfolio/#",
  },
  {
    id: 2,
    image: PORTFOLIO,
    title: "Food Ordering App",
    github: "https://github.com/PratP104",
    demo: "https://github.com/PratP104",
  },
  {
    id: 3,
    image: CODECLAY,
    title: "CodeClay Website",
    github: "https://github.com/PratP104",
    demo: "https://github.com/PratP104",
  },
];

const Portfolio = () => {
  return (
    <section id="portfolio">
      <h5>Work Done</h5>
      <h2>Portfolio</h2>
      <div className="container portfolio__container">
        {portfolioData.map(({ id, image, title, github, demo }) => {
          return (
            <article key={id} className="portfolio__item">
              <div className="portfolio__item-image">
                <img src={image} alt={title}></img>
              </div>
              <h3>{title}</h3>
              <div className="portfolio__item-cta">
                <a
                  href={github}
                  className="btn"
                  target={"_blank"}
                  rel="noreferrer"
                >
                  Github
                </a>
                <a
                  href={demo}
                  className="btn btn-primary"
                  target={"_blank"}
                  rel="noreferrer"
                >
                  Live Demo
                </a>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default Portfolio;
