import Image from "next/image";

import classes from "./hero.module.css";

function Hero() {
  return (
    <section className={classes.hero}>
      <div className={classes.image}>
        <Image
          src="/images/site/vm-logo.white.png"
          alt="VM Logo"
          width={150}
          height={150}
        />
      </div>
      <h1>Hi, I'm Vedran</h1>
      <p>This is my programming blog - mostly about web development.</p>
    </section>
  );
}

export default Hero;
