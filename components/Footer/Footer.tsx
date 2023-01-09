import Link from "next/link";

import classes from "./Footer.module.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";

function Footer() {
  return (
    <footer className={classes.footer}>
      <Link href="https://github.com/gbdude917" target="_blank">
        <FontAwesomeIcon className={classes.icon} icon={faGithub} />
      </Link>
      <Link href="https://www.linkedin.com/in/gbleong/" target="_blank">
        <FontAwesomeIcon className={classes.icon} icon={faLinkedin} />
      </Link>
    </footer>
  );
}

export default Footer;
