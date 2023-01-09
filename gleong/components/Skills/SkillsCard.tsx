import classes from "./SkillsCard.module.css";

interface Props {
  children: string;
}

function SkillsCard(props: Props) {
  return <div className={classes.card}>{props.children}</div>;
}

export default SkillsCard;
