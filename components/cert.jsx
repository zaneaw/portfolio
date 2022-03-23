import Head from "next/head";
import Image from "next/image";
import styles from "./cert.module.css";
import { motion } from "framer-motion";

export default function Certs() {
    const articleVariant = {
        hidden: { opacity: 0, scale: 0 },
        visible: {
            opacity: 1,
            scale: 1,
            transition: { duration: 1, staggerChildren: 1 },
        },
    };

    const textVariant = {
        hidden: { opacity: 0, scale: 0 },
        visible: {
            opacity: 1,
            scale: 1,
            transition: { duration: 1 },
        },
    };

    return (
        <section
            className={`${styles.grid} secondaryBackground`}
            id="certificates"
        >
            <motion.h2
                className={`${styles.certificates} sectionHeader`}
                variants={textVariant}
                initial="hidden"
                whileInView="visible"
            >
                Certificates
            </motion.h2>

            <motion.article
                className={`${styles.article} ${styles.react}`}
                variants={articleVariant}
                initial="hidden"
                whileInView="visible"
            >
                {/* <motion.h4 className={styles.certTitle}>
                    Full Stack Web Dev with React
                </motion.h4> */}
                <motion.a
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    href="/cert/react.pdf"
                    target="_blank"
                    className={`${styles.imageContainer} ${styles.reactImage}`}
                    variants={textVariant}
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
                </motion.a>
            </motion.article>

            <motion.article
                className={`${styles.article} ${styles.javascript}`}
                variants={articleVariant}
                initial="hidden"
                whileInView="visible"
            >
                {/* <h4 className={styles.certTitle}>
                    JavaScript Algorithms and Data Structures
                </h4> */}
                <motion.a
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    href="/cert/JScript.jpg"
                    target="_blank"
                    className={`${styles.imageContainer} ${styles.javascriptImage}`}
                    variants={textVariant}
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
                </motion.a>
            </motion.article>

            <motion.article
                className={`${styles.article} ${styles.django}`}
                variants={articleVariant}
                initial="hidden"
                whileInView="visible"
            >
                {/* <h4 className={styles.certTitle}>Django</h4> */}
                <motion.a
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    href="/cert/django.pdf"
                    target="_blank"
                    className={`${styles.imageContainer} ${styles.djangoImage}`}
                    variants={textVariant}
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
                </motion.a>
            </motion.article>

            <motion.article
                className={`${styles.article} ${styles.python}`}
                variants={articleVariant}
                initial="hidden"
                whileInView="visible"
            >
                {/* <h4 className={styles.certTitle}>
                    Scientific Computing with Python
                </h4> */}
                <motion.a
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    href="/cert/python.png"
                    target="_blank"
                    className={`${styles.imageContainer} ${styles.pythonImage}`}
                    variants={textVariant}
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
                </motion.a>
            </motion.article>
        </section>
    );
}
