import Image from "next/image";
import styles from "./hero.module.css";

export default function Hero() {
    return (
        <div className="bgi">
            <section className={styles.grid}>
                <h2 className={styles.hello}>
                    Hello! I&apos;m Zane, Software Engineer
                </h2>
                <h4 className={styles.detail}>
                    Meticulous, detail-oriented and self-motivated{" "}
                    <span className={styles.show}>
                        - My professional experience as a top-producing real
                        estate broker in NYC translates seamlessly into being
                        the best software engineer that I can be!
                    </span>
                </h4>
                <a
                    className={`${styles.contact} ${styles.buttons}`}
                    href="mailto:wilsonzanea@gmail.com?subject=Contacting%20You
                &body=I'd%20like%20to%20hire%20YOU!"
                    target="_blank"
                    rel="noreferrer"
                >
                    Contact Me
                </a>
                <a
                    className={`${styles.download} ${styles.buttons}`}
                    href="/downloads/resume_website.pdf"
                    download="zanesAwesomeResume"
                >
                    Download CV
                </a>
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
        </div>
    );
}
