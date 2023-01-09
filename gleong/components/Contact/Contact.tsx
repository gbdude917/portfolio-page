import Link from "next/link";

import classes from "./Contact.module.css";

function Contact() {
  return (
    <section className={classes.contact} id="contact">
      <div className={classes.contactHeader}>
        <h2>Contact</h2>
        <span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>

        <div className={classes.content}>
          The best way to reach and contact me is via{" "}
          <Link
            className={classes.link}
            href="https://www.linkedin.com/in/gbleong/"
            target="_blank"
          >
            Linkedin
          </Link>
          . I am open to talking about anything!
        </div>
      </div>
    </section>
  );
}

export default Contact;
