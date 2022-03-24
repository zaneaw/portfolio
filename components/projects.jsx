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

    const projectsList = [
        {
            key: 1,
            title: "Notes Taking App",
            desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit fugit quaerat modi perspiciatis omnis dolorum voluptatibus blanditiis nisi eius, dolore totam aperiam, ad, nulla culpa saepe quidem sequi beatae laudantium.",
            sourceCode: "https://github.com/zaneaw/notes-app",
            youtube: "https://www.youtube.com/embed/FFEjjDExoSs",
        },
        {
            key: 2,
            title: "Notes Taking App 1",
            desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit fugit quaerat modi perspiciatis omnis dolorum voluptatibus blanditiis nisi eius, dolore totam aperiam, ad, nulla culpa saepe quidem sequi beatae laudantium.",
            sourceCode: "https://github.com/zaneaw/notes-app",
            youtube: "https://www.youtube.com/embed/FFEjjDExoSs",
        },
        {
            key: 3,
            title: "Notes Taking App 2",
            desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit fugit quaerat modi perspiciatis omnis dolorum voluptatibus blanditiis nisi eius, dolore totam aperiam, ad, nulla culpa saepe quidem sequi beatae laudantium.",
            sourceCode: "https://github.com/zaneaw/notes-app",
            youtube: "https://www.youtube.com/embed/FFEjjDExoSs",
        },
    ];

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
            {projectsList.map((project, i) => {
                return (
                    <motion.article
                        key={project.key}
                        className={styles.article}
                        // className={`${styles.article} ${styles.article + i}`}
                        variants={textVariant}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                    >
                        <motion.h4
                            className={styles.articleTitle}
                            variants={childVariant}
                        >
                            {project.title}
                        </motion.h4>
                        <motion.p
                            className={styles.articleBody}
                            variants={childVariant}
                            viewport={{ once: true }}
                        >
                            {project.desc}
                        </motion.p>
                        <motion.a
                            href={project.sourceCode}
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
                                src={project.youtube}
                                title="YouTube video player"
                                frameBorder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen
                            ></iframe>
                        </motion.div>
                    </motion.article>
                );
            })}
        </section>
    );
}
