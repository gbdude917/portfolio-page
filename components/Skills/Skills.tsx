import SkillsCard from "./SkillsCard";

import classes from "./Skills.module.css";

function Skills() {
  return (
    <section className={classes.skills} id="skills">
      <div className={classes.skillsHeader}>
        <h2>Skills</h2>
        <span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
        <p>
          &quot;Anyone who keeps learning stays young.&quot; <br /> - Henry Ford
        </p>
      </div>

      <div className={classes.content}>
        <div className={classes.languages}>
          <h3>Languages</h3>
          <div className={classes.skillList}>
            <SkillsCard>HTML</SkillsCard>
            <SkillsCard>CSS</SkillsCard>
            <SkillsCard>JavaScript</SkillsCard>
            <SkillsCard>ReactJS</SkillsCard>
            <SkillsCard>TypeScript</SkillsCard>
            <SkillsCard>Next.js</SkillsCard>
            <SkillsCard>SQL</SkillsCard>
            <SkillsCard>Java</SkillsCard>
            <SkillsCard>Python</SkillsCard>
          </div>
        </div>

        <div className={classes.other}>
          <h3>Other</h3>
          <div className={classes.skillList}>
            <SkillsCard>Visual Studio Code</SkillsCard>
            <SkillsCard>Git</SkillsCard>
            <SkillsCard>Agile</SkillsCard>
            <SkillsCard>Eclipse</SkillsCard>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Skills;
