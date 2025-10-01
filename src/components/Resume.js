import React from 'react';
import content from '../content.json';

const Resume = () => {
  const { resume } = content;
  
  return (
    <article className="resume active" data-page="resume">
      <header>
        <h2 className="h2 article-title">{resume.title}</h2>
      </header>

      <section className="timeline">
        <div className="title-wrapper">
          <div className="icon-box">
            <ion-icon name="book-outline"></ion-icon>
          </div>
          <h3 className="h3">Experience</h3>
        </div>
        <ul className="timeline-list">
          {resume.experience.map((item, index) => (
            <li key={index} className="timeline-item">
              <h4 className="h4 timeline-item-title">{item.title}</h4>
              <span>{item.date}</span>
              <p className="timeline-text">{item.description}</p>
            </li>
          ))}
        </ul>
      </section>

      <section className="timeline">
        <div className="title-wrapper">
          <div className="icon-box">
            <ion-icon name="book-outline"></ion-icon>
          </div>
          <h3 className="h3">Education</h3>
        </div>
        <ul className="timeline-list">
          {resume.education.map((item, index) => (
            <li key={index} className="timeline-item">
            <h4 className="h4 timeline-item-title">
            <span className="date">{item.title} - [{item.date}]</span> 
            </h4>
              
              {/* <p className="timeline-text">{item.description}</p> */}
            </li>
          ))}
        </ul>
      </section>

      

      <section className="skill">
        <h3 className="h3 skills-title">My skills</h3>
        <ul className="skills-list content-card">
          {resume.skills.map((skill, index) => (
            <li key={index} className="skills-item">
              <div className="title-wrapper">
                <h5 className="h5">{skill.name}</h5>
                <data value={skill.value}>{skill.value}%</data>
              </div>
              <div className="skill-progress-bg">
                <div className="skill-progress-fill" style={{width: `${skill.value}%`}}></div>
              </div>
            </li>
          ))}
        </ul>
      </section>
    </article>
  );
};

export default Resume;
