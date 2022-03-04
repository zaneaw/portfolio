import Image from "next/image";
import Link from "next/link";
import styles from "./projects.module.css";

export default function Projects() {
    return (
        <section className={styles.grid}>
            <h2 className={styles.projects}>Projects</h2>
            <article className={`${styles.article} ${styles.articleOne}`}>
                <h4 className={styles.articleTitle}>Notes Taking App</h4>
                <p className={styles.articleBody}>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Suscipit fugit quaerat modi perspiciatis omnis dolorum
                    voluptatibus blanditiis nisi eius, dolore totam aperiam, ad,
                    nulla culpa saepe quidem sequi beatae laudantium.
                </p>
                <a
                    href="https://github.com/zaneaw/notes-app"
                    target="_blank"
                    rel="noreferrer"
                    className={styles.articleLink}
                >
                    View Source Code
                </a>
                <div
                    className={`${styles.videoContainer} ${styles.articleVideo}`}
                >
                    <iframe
                        className={styles.iframe}
                        src="https://www.youtube.com/embed/FFEjjDExoSs"
                        title="YouTube video player"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                    ></iframe>
                </div>
            </article>
            <article className={`${styles.article} ${styles.articleTwo}`}>
                <h4 className={styles.articleTitle}>Notes Taking App</h4>
                <p className={styles.articleBody}>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Suscipit fugit quaerat modi perspiciatis omnis dolorum
                    voluptatibus blanditiis nisi eius, dolore totam aperiam, ad,
                    nulla culpa saepe quidem sequi beatae laudantium.
                </p>
                <a
                    href="https://github.com/zaneaw/notes-app"
                    target="_blank"
                    rel="noreferrer"
                    className={styles.articleLink}
                >
                    View Source Code
                </a>
                <div
                    className={`${styles.videoContainer} ${styles.articleVideo}`}
                >
                    <iframe
                        className={styles.iframe}
                        src="https://www.youtube.com/embed/FFEjjDExoSs"
                        title="YouTube video player"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                    ></iframe>
                </div>
            </article>
            <article className={`${styles.article} ${styles.articleThree}`}>
                <h4 className={styles.articleTitle}>Notes Taking App</h4>
                <p className={styles.articleBody}>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Suscipit fugit quaerat modi perspiciatis omnis dolorum
                    voluptatibus blanditiis nisi eius, dolore totam aperiam, ad,
                    nulla culpa saepe quidem sequi beatae laudantium.
                </p>
                <a
                    href="https://github.com/zaneaw/notes-app"
                    target="_blank"
                    rel="noreferrer"
                    className={styles.articleLink}
                >
                    View Source Code
                </a>
                <div
                    className={`${styles.videoContainer} ${styles.articleVideo}`}
                >
                    <iframe
                        className={styles.iframe}
                        src="https://www.youtube.com/embed/FFEjjDExoSs"
                        title="YouTube video player"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                    ></iframe>
                </div>
            </article>
        </section>
    );
}
