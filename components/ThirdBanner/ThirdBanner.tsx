import { ParallaxBanner } from "react-scroll-parallax";

import classes from "./ThirdBanner.module.css";

function ThirdBanner() {
  return (
    <ParallaxBanner
      layers={[{ image: "/images/project-image.png", speed: -30 }]}
      className={classes.img}
    />
  );
}

export default ThirdBanner;
