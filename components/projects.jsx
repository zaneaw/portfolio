import styles from "./projects.module.css";
import { MdExitToApp } from "react-icons/md";
import { motion } from "framer-motion";

export default function Projects() {
    const textVariant = {
        hidden: { opacity: 0, scale: 0 },
        visible: {
            opacity: 1,
            scale: 1,
            transition: { duration: 0.5, staggerChildren: 0.5 },
        }
    };

    const childVariant = {
        hidden: { opacity: 0, scale: 0 },
        visible: {
            opacity: 1,
            scale: 1,
            transition: { duration: 1 },
        },
    };

    return (
        <motion.section
            className={`${styles.grid} primaryBackground`}
            id="projects"
        >
            <motion.h2
                className={`${styles.projects} sectionHeader`}
                variants={textVariant}
                initial="hidden"
                whileInView="visible"
                viewport="viewAmount"
            >
                Projects
            </motion.h2>
            <motion.article
                className={`${styles.article} ${styles.articleOne}`}
                variants={textVariant}
                initial="hidden"
                whileInView="visible"
                viewport="viewAmount"
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
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
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
                viewport="viewAmount"
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
                >
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Suscipit fugit quaerat modi perspiciatis omnis dolorum
                    voluptatibus blanditiis nisi eius, dolore totam aperiam, ad,
                    nulla culpa saepe quidem sequi beatae laudantium.
                </motion.p>
                <motion.a
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    href="https://github.com/zaneaw/notes-app"
                    target="_blank"
                    rel="noreferrer"
                    className={styles.articleLink}
                    variants={childVariant}
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
                viewport="viewAmount"
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
                >
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Suscipit fugit quaerat modi perspiciatis omnis dolorum
                    voluptatibus blanditiis nisi eius, dolore totam aperiam, ad,
                    nulla culpa saepe quidem sequi beatae laudantium.
                </motion.p>
                <motion.a
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    href="https://github.com/zaneaw/notes-app"
                    target="_blank"
                    rel="noreferrer"
                    className={styles.articleLink}
                    variants={childVariant}
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
        </motion.section>
    );
}
