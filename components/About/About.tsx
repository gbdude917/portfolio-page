import Image from "next/image";

import classes from "./About.module.css";

function About() {
  return (
    <section className={classes.about} id="about">
      <div className={classes.container}>
        <div className={classes.aboutHeader}>
          <h2>About</h2>
          <span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
          <p>
            “Life is constantly teaching us that we are mirrors of one another
            and that no one is an island!” <br /> - Auliq Ice, The Law of the
            Universe
          </p>
        </div>
        <div className={classes.mainContent}>
          <div className={classes.images}>
            <div className={classes.card}>
              <Image
                className={classes.myImage}
                src="/images/gabriel-leong.jpg"
                width={250}
                height={375}
                alt="picture of me"
              />
            </div>
          </div>
          <div className={classes.text}>
            Hi! My name is Gabriel Leong, and I am so excited that you stopped
            by my personal page to learn more about me. I am currently a fourth
            year Computer Engineering student at the University of California
            San Diego. While at UCSD, I have learned a a great deal about the
            principles and fundamentals of programming, honed my skills in the
            aspect of web development, and expanded my knowledge further through
            online courses and personal projects.
            <br />
            <br />
            My dream is to work in the web development field and create
            interactive and user-friendly websites for people to use and enjoy,
            particularly on the frontend side of development. In my free time, I
            like to go workout in the gym, play video games, cook, try new
            restaurants and food, and catch up with some shows.
            <br />
            <br />I appreciate your time for stopping by my page and hope you reach
            out to me via LinkedIn or my email so we can get in touch!
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
