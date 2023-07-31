import Image from "next/image";
import classes from "styles/hero.module.css";

export default function Hero() {
  return (
    <section className={classes.hero}>
      <div className={classes.image}>
        <Image
          src="/images/site/parsa.jpg"
          alt="An image showing Parsa"
          width={300}
          height={300}
          priority
        />
      </div>
      <h1>Hi, I'm Parsa</h1>
      <p>
        I blog about web development - especially frontend frameworks like React
        & Next
      </p>
    </section>
  );
}
