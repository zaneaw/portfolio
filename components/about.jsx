import Image from "next/image";
import Head from "next/head";
// import { EmblaCarousel } from "./carousel";
import styles from "./about.module.css";

export default function About() {
    return (
        <section className={styles.grid}>
            <h2 className={styles.about}>About</h2>
            <p className={styles.aboutText}>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Unde
                excepturi veniam fugiat consequatur, quas quos inventore est
                exercitationem voluptatem, harum accusantium tenetur a ea nemo
                obcaecati aut maxime deleniti nulla magni blanditiis
                reprehenderit! Nisi, molestiae?
            </p>
            <div className={`${styles.image} ${styles.theo}`}>
                <Image
                    src="/images/theo.jpg"
                    height="250px"
                    width="250px"
                    alt=""
                />
            </div>
            <div className={`${styles.image} ${styles.cooking}`}>
                <Image
                    src="/images/cooking.jpg"
                    height="250px"
                    width="250px"
                    alt=""
                />
            </div>
            <div className={`${styles.image} ${styles.park}`}>
                <Image
                    src="/images/park.jpg"
                    height="250px"
                    width="250px"
                    alt=""
                />
            </div>
            <div className={`${styles.image} ${styles.nyc}`}>
                <Image
                    src="/images/nyc.jpg"
                    height="250px"
                    width="250px"
                    alt=""
                />
            </div>
            <h3 className={styles.personal}>Personal</h3>
            <p className={styles.personalText}>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Explicabo corrupti et minima eius expedita dignissimos nisi
                eligendi quod deleniti provident aut, vero voluptate suscipit
                odio!
            </p>
        </section>
    );
}
