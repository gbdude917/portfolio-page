import Image from "next/image";
import Link from "next/link";

import classes from "./ProjectCard.module.css";

interface Props {
  imgPath: string;
  link: string;
  alt: string;
}

function ProjectCard(props: Props) {
  return (
    <Link href={props.link} target="_blank">
      <div className={classes.wrapper}>
        <Image
          src={props.imgPath}
          height={500}
          width={500}
          alt={props.alt}
          className={classes.img}
        />
      </div>
    </Link>
  );
}

export default ProjectCard;
