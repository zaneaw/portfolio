import Image from "next/image";
import styles from "./hero.module.css";

export default function Hero() {
    return (
        <section className={styles.grid}>
            <h2 className={styles.hello}>
                Hello! I&apos;m Zane, Software Engineer
            </h2>
            <h4 className={styles.detail}>
                Meticulous, detail-oriented and self-motivated{" "}
                <span className={styles.show}>
                    - My professional experience as a top-producing real estate
                    broker in NYC translates seamlessly into software
                    development!
                </span>
            </h4>
            <div className={styles.buttons}>
                <button className={styles.contact}>Contact Me</button>
                <button className={styles.download}>Download CV</button>
            </div>
            <div className={styles.image}>
                <Image
                    src="/images/hero-image.svg"
                    layout="responsive"
                    height="400px"
                    width="600px"
                    alt="image of a cartoon sitting on a computer desk with a computer next to them."
                />
            </div>
        </section>
    );
}
