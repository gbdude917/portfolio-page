import classes from "./Footer.module.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { faCheckSquare, faCoffee } from "@fortawesome/free-solid-svg-icons";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";

library.add(fab, faCheckSquare, faCoffee, faGithub, faLinkedin);

function Footer() {
  return (
    <footer className={classes.footer}>
      <FontAwesomeIcon className={classes.icon} icon={faGithub} />
      <FontAwesomeIcon className={classes.icon} icon={faLinkedin} />
    </footer>
  );
}

export default Footer;
