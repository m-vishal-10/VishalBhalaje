import React from "react";
import NewsFeed from "../../assets/news-feed.png"
import DigitalLaw from "../../assets/digital-law.jpg"
import styles from './ProjectsStyles.module.css';
import ProjectCard from '../../common/ProjectCard';

function Projects() {
  return (
    <section id="projects" className={styles.container}>
      <h1 className="sectionTitle">Projects</h1>
      <div className={styles.projectsContainer}>

        <ProjectCard src={NewsFeed} link="https://github.com/m-vishal-10/NewsFeed" h3="News Feed" p="NewsApp with Preference List"/>

        <ProjectCard src={DigitalLaw} link="https://github.com/m-vishal-10/digital-assistant-for-legal-awareness" h3="Digital Awareness" p="Digital App Legal Awareness"/>

      </div>
    </section>
  );
}

export default Projects;
