import React from "react";
import styles from "./ExperienceStyles.module.css";
import eduImage from "../../assets/edu.png"; 

function Experience() {
  return (
    <section className={styles.container}>
      <h1 className="sectionTitle">Experience</h1>
      <div className={styles.timeline}>
        <div className={`${styles.cardContainer} ${styles.left}`}>
          <img src={eduImage} alt="School" className={styles.timelineImage} />
          <div className={styles.textBox}>
            <h2>Computer Science</h2>
            <p>Vivekananda Vidyalaya, Chennai</p>
            <p>Marks: 91.8% (12th)</p>
            <p>2008-2022</p>
          </div>
        </div>
        <div className={`${styles.cardContainer} ${styles.right}`}>
          <img src={eduImage} alt="College" className={styles.timelineImage} />
          <div className={styles.textBox}>
            <h2>Computer Science and Engineering</h2>
            <p>RMD Engineering College</p>
            <p>CGPA: 8.49</p>
            <p>2022-2026</p>
          </div>
        </div>
        <div className={`${styles.cardContainer} ${styles.left}`}>
          <img src={eduImage} alt="Internship" className={styles.timelineImage} />
          <div className={styles.textBox}>
            <h2>Software Developer Intern</h2>
            <p>Sysaxiom, Chennai</p>
            <p>Jun 2024- Jul 2024</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Experience;
