import { ParallaxBanner } from "react-scroll-parallax";

import classes from "./BannerIntro.module.css";

function BannerIntro() {
  return (
    <ParallaxBanner
      layers={[{ image: "/images/writing.jpg", speed: -30 }]}
      className={classes.img}
    >
      <section className={classes.text}>
        <h1>Hey there!</h1>
        <h2>I'm Gabriel - an aspiring frontend developer.</h2>
      </section>
    </ParallaxBanner>
  );
}

export default BannerIntro;
