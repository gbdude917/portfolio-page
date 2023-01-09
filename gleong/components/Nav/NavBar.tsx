import Link from "next/link";
import React from "react";

import classes from "./NavBar.module.css";

function NavBar() {
  return (
    <header className={classes.header}>
      <div>Gabriel Leong</div>
      <nav>
        <ul className={classes.list}>
          <li>
            <Link href="#about">About</Link>
          </li>
          <li>
            <Link href="#skills">Skills</Link>
          </li>
          <li>
            <Link href="#projects">Projects</Link>
          </li>
          <li>
            <Link href="#contact">Contact</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default NavBar;
