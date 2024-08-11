import styles from "./SkillsStyles.module.css";
import checkMarkIconDark from '../../assets/checkmark-dark.svg';
import checkMarkIconLight from '../../assets/checkmark-light.svg';
import SkillList  from "../../common/SkillList";
import { useTheme } from '../../common/ThemeContext';

function Skills() {

    const { theme } = useTheme();
  const checkMarkIcon = theme === 'light' ? checkMarkIconLight : checkMarkIconDark;

  return (
    <section id="skills" className={styles.container}>
      <h1 className="sectionTitle">Skills</h1>
      <div className={styles.skillList}>
        <SkillList src={checkMarkIcon} skill="Python"/>
        <SkillList src={checkMarkIcon} skill="Java"/>
        <SkillList src={checkMarkIcon} skill="C"/>
        <SkillList src={checkMarkIcon} skill="C++"/>
      </div>
      <hr />
      <div className={styles.skillList}>
        <SkillList src={checkMarkIcon} skill="HTML"/>
        <SkillList src={checkMarkIcon} skill="CSS"/>
        <SkillList src={checkMarkIcon} skill="JavaScript"/>
        <SkillList src={checkMarkIcon} skill=" Kotlin"/>
      </div>
      <hr />
      <div className={styles.skillList}>
        <SkillList src={checkMarkIcon} skill="Android Studio"/>
        <SkillList src={checkMarkIcon} skill="Jetpack Compose"/>
        <SkillList src={checkMarkIcon} skill="Firebase"/>
        <SkillList src={checkMarkIcon} skill="React"/>
        <SkillList src={checkMarkIcon} skill="SpringBoot"/>
        <SkillList src={checkMarkIcon} skill="Rest API"/>
      </div>
      <hr />
      
      

    </section>
  );
}

export default Skills;
