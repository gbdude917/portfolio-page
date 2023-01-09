import ProjectCard from "./ProjectCard";

import classes from "./Projects.module.css";

function Projects() {
  return (
    <section className={classes.projects} id="projects">
      <div className={classes.projectsHeader}>
        <h2>Projects</h2>
        <span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
        <p>
          "Every project is an opportunity to learn, to figure out problems and
          challenges, to invent and reinvent." <br /> - David Rockwell
        </p>
      </div>

      <div className={classes.projectList}>
        <ProjectCard
          imgPath="/images/boardgame-site.png"
          link="https://github.com/gbdude917/boardgame-ecommerce-site"
          alt="board game ecommerce site image"
        />
        <ProjectCard
          imgPath="/images/recipe-manager.png"
          link="https://github.com/cse110-fa21-group24/cse110-fa21-group24"
          alt="recipe manager website image"
        />
        <ProjectCard
          imgPath="/images/musical-bpm.png"
          link="https://github.com/gbdude917/musical-bpm-calc-ts"
          alt="musical bpm website image"
        />
      </div>
    </section>
  );
}

export default Projects;
