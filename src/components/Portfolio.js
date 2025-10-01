import React from 'react';
import content from '../content.json';

const Portfolio = () => {
  const { portfolio } = content;
  const categories = [...new Set(portfolio.projects.map(project => project.category))];

  return (
    <article className="portfolio active" data-page="portfolio">
      <header>
        <h2 className="h2 article-title">{portfolio.title}</h2>
      </header>

      <section className="projects">
        <ul className="filter-list">
          <li className="filter-item">
            <button className="active" data-filter-btn>All</button>
          </li>
          {categories.map((category, index) => (
            <li key={index} className="filter-item">
              <button data-filter-btn>{category}</button>
            </li>
          ))}
        </ul>

        <ul className="project-list">
          {portfolio.projects.map((project, index) => (
            <li key={index} className="project-item active" data-filter-item data-category={project.category}>
              <a href={project.url}>
                <figure className="project-img">
                  <div className="project-item-icon-box">
                    <ion-icon name="eye-outline"></ion-icon>
                  </div>
                  <img src={project.image} alt={project.title} loading="lazy" />
                </figure>
                <h3 className="project-title">{project.title}</h3>
                <p className="project-category">{project.category}</p>
              </a>
            </li>
          ))}
        </ul>
      </section>
    </article>
  );
};

export default Portfolio;
