import React from "react";
import styles from "./ProjectsStyles.module.css";
import Viberr from "../../assets/viberr.png";
import styles from './ProjectsStyles.module.css';
import ProjectCard from '../../common/ProjectCard';

function Projects() {
  return (
    <section id="projects" className={styles.container}>
      <div className="sectionTitle">Projects</div>
      <div className={styles.projectsContainer}>
        <div>
          <a href="https://github.com/m-vishal-10/NewsFeed" target="_blank">
            <img className="hover" src={Viberr} alt="Viberr" />
            <h3>NewsFeed</h3>
            <p>News Articles</p>
          </a>
        </div>
        
        <div>
          <a href="https://github.com/m-vishal-10/NewsFeed" target="_blank">
            <img className="hover" src={Viberr} alt="Viberr" />
            <h3>Digital Awareness</h3>
            <p>Digital Awareness App</p>    
          </a>
        </div>
      </div>
    </section>
  );
}

export default Projects;
