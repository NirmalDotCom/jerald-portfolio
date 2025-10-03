import React, { useState, useEffect } from 'react';
import content from '../content.json';

const Portfolio = () => {
  const { portfolio } = content;
  const [activeCategory, setActiveCategory] = useState('All');
  const [filteredProjects, setFilteredProjects] = useState(portfolio.projects);
  const [showModal, setShowModal] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);

  // Get unique categories for filter buttons
  const categories = ['All', ...new Set(portfolio.projects.map(project => project.category))];

  // Filter projects when activeCategory changes
  useEffect(() => {
    if (activeCategory === 'All') {
      setFilteredProjects(portfolio.projects);
    } else {
      setFilteredProjects(
        portfolio.projects.filter(project => project.category === activeCategory)
      );
    }
  }, [activeCategory, portfolio.projects]);

  // Handle project click to open modal
  const handleProjectClick = (project) => {
    setSelectedProject(project);
    setShowModal(true);
  };

  // Close modal
  const closeModal = () => {
    setShowModal(false);
    setSelectedProject(null);
  };

  return (
    <article className="portfolio active" data-page="portfolio">
      <header>
        <h2 className="h2 article-title">{portfolio.title}</h2>
      </header>

      <section className="projects">
        {/* Filter Buttons */}
        <ul className="filter-list" id="portfolio-filter-list">
          {categories.map((category, index) => (
            <li key={index} className="filter-item">
              <button
                className={activeCategory === category ? 'active' : ''}
                onClick={() => setActiveCategory(category)}
                data-filter-btn
              >
                {category}
              </button>
            </li>
          ))}
        </ul>

        {/* Project List */}
        <ul className="project-list" id="portfolio-project-list">
          {filteredProjects.map((project, index) => (
            <li
              key={index}
              className="project-item active"
              data-filter-item
              data-category={project.category}
            >
              <a href={project.url}>
                <figure className="project-img">
                  <div
                    className="project-item-icon-box"
                    onClick={(e) => {
                      e.preventDefault(); // Prevent <a> tag from navigating
                      handleProjectClick(project);
                    }}
                  >
                    <ion-icon name="eye-outline"></ion-icon>
                  </div>
                  <img
                    src={project.image}
                    alt={project.title}
                    loading="lazy"
                  />
                </figure>
                <h3 className="project-title">{project.title}</h3>
                <p className="project-category">{project.category}</p>
              </a>
            </li>
          ))}
        </ul>
      </section>

      {/* Modal for project details */}
      {showModal && selectedProject && (
        <div className="modal-overlay" onClick={closeModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close" onClick={closeModal}>
              &times;
            </button>
            <img src={selectedProject.image} alt={selectedProject.title} className="modal-image" />
            <h3>{selectedProject.title}</h3>
            <p>Category: {selectedProject.category}</p>
            {selectedProject.code && (
              <pre className="modal-code">
                <code>{selectedProject.code}</code>
              </pre>
            )}
          </div>
        </div>
      )}
    </article>
  );
};

export default Portfolio;
