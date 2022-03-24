import styles from "./projects.module.css";
import { MdExitToApp } from "react-icons/md";
import { motion } from "framer-motion";

export default function Projects() {
    const textVariant = {
        hidden: { opacity: 0, scale: 0 },
        visible: {
            opacity: 1,
            scale: 1,
            transition: { duration: 0.5, staggerChildren: 0.4 },
        },
        view: { visible: { once: true } },
    };

    const childVariant = {
        hidden: { opacity: 0, scale: 0 },
        visible: {
            opacity: 1,
            scale: 1,
            transition: {
                scale: { duration: 0.3 },
                default: { duration: 1 },
            },
        },
        hover: { scale: 1.1 },
        tap: { scale: 0.9 },
        view: { visible: { once: true } },
    };

    return (
        <section className={`${styles.grid} primaryBackground`} id="projects">
            <motion.h2
                className={`${styles.projects} sectionHeader`}
                variants={textVariant}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
            >
                Projects
            </motion.h2>
            <motion.article
                className={`${styles.article} ${styles.articleOne}`}
                variants={textVariant}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
            >
                <motion.h4
                    className={styles.articleTitle}
                    variants={childVariant}
                >
                    Notes Taking App
                </motion.h4>
                <motion.p
                    className={styles.articleBody}
                    variants={childVariant}
                    viewport={{ once: true }}
                >
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Suscipit fugit quaerat modi perspiciatis omnis dolorum
                    voluptatibus blanditiis nisi eius, dolore totam aperiam, ad,
                    nulla culpa saepe quidem sequi beatae laudantium.
                </motion.p>
                <motion.a
                    href="https://github.com/zaneaw/notes-app"
                    target="_blank"
                    rel="noreferrer"
                    className={styles.articleLink}
                    variants={childVariant}
                    whileHover="hover"
                    whileTap="tap"
                    viewport="view"
                >
                    View Source Code <MdExitToApp />
                </motion.a>
                <motion.div
                    className={`${styles.videoContainer} ${styles.articleVideo}`}
                    variants={childVariant}
                >
                    <iframe
                        className={styles.iframe}
                        src="https://www.youtube.com/embed/FFEjjDExoSs"
                        title="YouTube video player"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                    ></iframe>
                </motion.div>
            </motion.article>
            <motion.article
                className={`${styles.article} ${styles.articleTwo}`}
                variants={textVariant}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
            >
                <motion.h4
                    className={styles.articleTitle}
                    variants={childVariant}
                    viewport={{ once: true }}
                >
                    Notes Taking App
                </motion.h4>
                <motion.p
                    className={styles.articleBody}
                    variants={childVariant}
                    viewport={{ once: true }}
                >
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Suscipit fugit quaerat modi perspiciatis omnis dolorum
                    voluptatibus blanditiis nisi eius, dolore totam aperiam, ad,
                    nulla culpa saepe quidem sequi beatae laudantium.
                </motion.p>
                <motion.a
                    href="https://github.com/zaneaw/notes-app"
                    target="_blank"
                    rel="noreferrer"
                    className={styles.articleLink}
                    variants={childVariant}
                    whileHover="hover"
                    whileTap="tap"
                    viewport="view"
                >
                    View Source Code <MdExitToApp />
                </motion.a>
                <motion.div
                    className={`${styles.videoContainer} ${styles.articleVideo}`}
                    variants={childVariant}
                >
                    <iframe
                        className={styles.iframe}
                        src="https://www.youtube.com/embed/FFEjjDExoSs"
                        title="YouTube video player"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                    ></iframe>
                </motion.div>
            </motion.article>
            <motion.article
                className={`${styles.article} ${styles.articleThree}`}
                variants={textVariant}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
            >
                <motion.h4
                    className={styles.articleTitle}
                    variants={childVariant}
                    viewport={{ once: true }}
                >
                    Notes Taking App
                </motion.h4>
                <motion.p
                    className={styles.articleBody}
                    variants={childVariant}
                    viewport={{ once: true }}
                >
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Suscipit fugit quaerat modi perspiciatis omnis dolorum
                    voluptatibus blanditiis nisi eius, dolore totam aperiam, ad,
                    nulla culpa saepe quidem sequi beatae laudantium.
                </motion.p>
                <motion.a
                    href="https://github.com/zaneaw/notes-app"
                    target="_blank"
                    rel="noreferrer"
                    className={styles.articleLink}
                    variants={childVariant}
                    whileHover="hover"
                    whileTap="tap"
                    viewport="view"
                >
                    View Source Code <MdExitToApp />
                </motion.a>
                <motion.div
                    className={`${styles.videoContainer} ${styles.articleVideo}`}
                    variants={childVariant}
                >
                    <iframe
                        className={styles.iframe}
                        src="https://www.youtube.com/embed/FFEjjDExoSs"
                        title="YouTube video player"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                    ></iframe>
                </motion.div>
            </motion.article>
        </section>
    );
}
