import React from 'react';
import styles from './ExperienceStyles.module.css';
import eduImage from '../../assets/edu.png';
import ExperienceCard from '../../common/ExperienceCard';

function Experience() {
  const experiences = [
    {
      src: eduImage,
      alt: 'School',
      title: 'Computer Science',
      details: ['Vivekananda Vidyalaya, Chennai', 'Marks: 91.8% (12th)', '2008-2022'],
    },
    {
      src: eduImage,
      alt: 'College',
      title: 'Computer Science and Engineering',
      details: ['RMD Engineering College', 'CGPA: 8.49', '2022-2026'],
    },
    {
      src: eduImage,
      alt: 'Internship',
      title: 'Software Developer Intern',
      details: ['Sysaxiom, Chennai', 'Jun 2024 - Jul 2024'],
    }
    // Add more experiences here
  ];

  return (
    <section className={styles.container}>
      <h1 className={styles.sectionTitle}>Experience</h1>
      <div className={styles.timeline}>
        {experiences.map((exp, index) => (
          <ExperienceCard
            key={index}
            src={exp.src}
            alt={exp.alt}
            title={exp.title}
            details={exp.details}
            position={index % 2 === 0 ? 'left' : 'right'} // Alternating position based on index
          />
        ))}
      </div>
    </section>
  );
}

export default Experience;
