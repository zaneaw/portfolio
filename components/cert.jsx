import Head from "next/head";
import Image from "next/image";
import styles from "./cert.module.css";

export default function Certs() {
    return (
        <section className={styles.grid}>
            <h2 className={styles.certificates}>Certificates</h2>

            <article className={`${styles.article} ${styles.react}`}>
                <h4 className={styles.certTitle}>
                    Full Stack Web Dev. with ReactJS
                </h4>
                <a
                    href="/cert/react.pdf"
                    target="_blank"
                    className={styles.imageContainer}
                >
                    <Image
                        src="/images/mern.png"
                        width="1600"
                        height="900"
                        alt=""
                    />
                    <small className={styles.small}>
                        (click &#9757; to view details)
                    </small>
                </a>
            </article>

            <article className={`${styles.article} ${styles.javascript}`}>
                <h4 className={styles.certTitle}>
                    JavaScript Algorithms and Data Structures
                </h4>
                <a
                    href="/cert/JScript.jpg"
                    target="_blank"
                    className={styles.imageContainer}
                >
                    <Image
                        src="/images/js-logo.png"
                        width="1052"
                        height="1052"
                        alt=""
                    />
                    <small className={styles.small}>
                        (click &#9757; to view details)
                    </small>
                </a>
            </article>

            <article className={`${styles.article} ${styles.django}`}>
                <h4 className={styles.certTitle}>Django</h4>
                <a
                    href="/cert/django.pdf"
                    target="_blank"
                    className={styles.imageContainer}
                >
                    <Image
                        src="/images/djgreenbg.png"
                        width="1200"
                        height="546"
                        alt=""
                    />
                    <small className={styles.small}>
                        (click &#9757; to view details)
                    </small>
                </a>
            </article>

            <article className={`${styles.article} ${styles.python}`}>
                <h4 className={styles.certTitle}>
                    Scientific Computing with Python
                </h4>
                <a
                    href="/cert/python.png"
                    target="_blank"
                    className={styles.imageContainer}
                >
                    <Image
                        src="/images/python-logo-small.png"
                        width="1200"
                        height="1200"
                        alt=""
                    />
                    <small className={styles.small}>
                        (click &#9757; to view details)
                    </small>
                </a>
            </article>
        </section>
    );
}
