import { ParallaxBanner } from "react-scroll-parallax";

import classes from "./SecondBanner.module.css";

function SecondBanner() {
  return (
    <ParallaxBanner
      layers={[{ image: "/images/skills-image.png", speed: -30 }]}
      className={classes.img}
    />
  );
}

export default SecondBanner;
