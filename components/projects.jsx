/* eslint-disable @next/next/no-img-element */
import { Image } from "next/image";
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
            title: "LA Mountains",
            desc: "This project was completed in the React framework, NextJS. The task was to take a PSD file (Photoshop Document) and turn it into a responsive, single page web application. In addition to Next.js, I also used Sass and some Bootstrap as well. I think the project came out looking great! Don't forget to check out the live site for yourself.",
            sourceCode: "https://github.com/zaneaw/la-mountains",
            youtube: "",
            liveSiteUrl: "https://la-mountains.vercel.app",
            liveSiteImg: "la-mntns.jpg",
        },
        {
            title: "Pizza by Zane",
            desc: "Built in React, this is a full-stack web application. I developed a backend using MongoDB and utilized JWT for user authentication. The stack involved in this site includes Redux, Bootstrap, Express, MongoDB, and more. Be sure to check out the video demo of the project!",
            sourceCode: "https://github.com/zaneaw/conFusion",
            youtube: "https://www.youtube.com/embed/iS4MRaI6DGU",
            liveSiteUrl: "",
            liveSiteImg: "",
        },
        {
            title: "Forum Website",
            desc: "Full-Stack web application built using Django and MySQL. I implemented Django's MVC pattern to create an interactive, customized user experience. The project consists of user authentication, user customization, forum-like commenting, a system of 'liking' projects, AWS integration for use and storage of files, and more. It's hosted on Heroku, check it out!.",
            sourceCode: "https://github.com/zaneaw/Portfolio-Site",
            youtube: "",
            liveSiteUrl: "https://www.zane-wilson.com",
            liveSiteImg: "zw-forum.jpg",
        },
        {
            title: "Notes App",
            desc: "Built in React JS. I utilized custom hooks to support a toggleable dark mode option as well as the use of local storage. When closed navigated back to, the users notes will persist.",
            sourceCode: "https://github.com/zaneaw/notes-app",
            youtube: "",
            liveSiteUrl: "https://zanes-notes-app.vercel.app/",
            liveSiteImg: "notes-app.jpg",
        },
    ];

    return (
        <section
            className={`${styles.section} primaryBackground`}
            id="projects"
        >
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
                        key={i}
                        className={styles.article}
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
                        <motion.div className={project.liveSiteUrl !== "" ? `${styles.articleLinksContainer}` : undefined}>
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
                                <p>
                                    Source Code <MdExitToApp />
                                </p>
                            </motion.a>
                            {project.liveSiteUrl !== "" && <motion.a
                                href={project.liveSiteUrl}
                                target="_blank"
                                rel="noreferrer"
                                className={styles.articleLinkLive}
                                variants={childVariant}
                                whileHover="hover"
                                whileTap="tap"
                                viewport="view"
                            >
                                <p>
                                    Live Site <MdExitToApp />
                                </p>
                            </motion.a>}
                        </motion.div>
                        <motion.div
                            className={`${
                                project.youtube !== ""
                                    ? styles.videoContainer
                                    : styles.imgContainer
                            } ${styles.articleVideo}`}
                            variants={childVariant}
                        >
                            {project.liveSiteUrl !== "" ? (
                                <a
                                    href={project.liveSiteUrl}
                                    target="_blank"
                                    rel="noreferrer"
                                >
                                    <motion.img
                                        className={styles.imgLiveSite}
                                        src={`/images/${project.liveSiteImg}`}
                                        alt="Coming soon! *smiley face*"
                                        variants={childVariant}
                                        whileHover="hover"
                                        whileTap="tap"
                                        viewport="view"
                                    ></motion.img>
                                </a>
                            ) : project.youtube !== "" ? (
                                <iframe
                                    className={styles.iframe}
                                    src={project.youtube}
                                    title="YouTube video player"
                                    frameBorder="0"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                    allowFullScreen
                                ></iframe>
                            ) : (
                                <a
                                    href={project.sourceCode}
                                    target="_blank"
                                    rel="noreferrer"
                                >
                                    <motion.img
                                        className={styles.img}
                                        src="images/coming-soon.jpg"
                                        alt="Coming soon! *smiley face*"
                                        variants={childVariant}
                                        whileHover="hover"
                                        whileTap="tap"
                                        viewport="view"
                                    ></motion.img>
                                </a>
                            )}
                        </motion.div>
                    </motion.article>
                );
            })}
        </section>
    );
}
