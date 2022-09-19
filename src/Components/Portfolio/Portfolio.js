import React from "react";
import "./portfolio.css";
import IMGA from "../../Assets/aboutme.jpg";
const portfolioData = [
  {
    id: 1,
    image: IMGA,
    title: "My portfolio",
    github: "https://github.com/PratP104",
    demo: "https://github.com/PratP104",
  },
  {
    id: 2,
    image: IMGA,
    title: "My portfolio",
    github: "https://github.com/PratP104",
    demo: "https://github.com/PratP104",
  },
  {
    id: 3,
    image: IMGA,
    title: "My portfolio",
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
                <img src={image} alt={title} />
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
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default Portfolio;
