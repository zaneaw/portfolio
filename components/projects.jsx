import { Image } from 'next/image';
import styles from './projects.module.css';
import { MdExitToApp } from 'react-icons/md';

export default function Projects() {
    const projectsList = [
        {
            title: 'Share-a-Cart.com',
            desc: 'Developed and updated new pages, components, and animations. Optimized site speed while focusing on the user experience and creating a completely responsive user interface with an emphasis on ease-of-use to improve click-through rate. Improved site speed and decreased bundle size. Streamlined the development process to make collaboration with other developers simpler. 1,000+ users every week!',
            sourceCode: '',
            youtube: '',
            liveSiteUrl: 'https://share-a-cart.com/',
            liveSiteImg: 'sac.jpg',
        },
        {
            title: 'LA Mountains',
            desc: "This project was completed in the React framework, NextJS. The task was to take a PSD file (Photoshop Document) and turn it into a responsive, single page web application. In addition to Next.js, I also used Sass and some Bootstrap as well. I think the project came out looking great! Don't forget to check out the live site for yourself.",
            sourceCode: 'https://github.com/zaneaw/la-mountains',
            youtube: '',
            liveSiteUrl: 'https://la-mountains.vercel.app',
            liveSiteImg: 'la-mntns.jpg',
        },
        {
            title: 'Pizza by Zane',
            desc: 'Built in React, this is a full-stack web application. I developed a backend using MongoDB and utilized JWT for user authentication. The stack involved in this site includes Redux, Bootstrap, Express, MongoDB, and more. Be sure to check out the video demo of the project!',
            sourceCode: 'https://github.com/zaneaw/conFusion',
            youtube: 'https://www.youtube.com/embed/iS4MRaI6DGU',
            liveSiteUrl: '',
            liveSiteImg: '',
        },
        {
            title: 'Forum Website',
            desc: "Full-Stack web application built using Django and MySQL. I implemented Django's MVC pattern to create an interactive, customized user experience. The project consists of user authentication, user customization, forum-like commenting, a system of 'liking' projects, AWS integration for use and storage of files, and more. It's hosted on Heroku, check it out!.",
            sourceCode: 'https://github.com/zaneaw/Portfolio-Site',
            youtube: '',
            liveSiteUrl: 'https://www.zane-wilson.com',
            liveSiteImg: 'zw-forum.jpg',
        },
        {
            title: 'Notes App',
            desc: 'Built in React JS. I utilized custom hooks to support a toggleable dark mode option as well as the use of local storage. When closed navigated back to, the users notes will persist.',
            sourceCode: 'https://github.com/zaneaw/notes-app',
            youtube: '',
            liveSiteUrl: 'https://zanes-notes-app.vercel.app/',
            liveSiteImg: 'notes-app.jpg',
        },
    ];

    return (
        <section className='pt-20 flex flex-col gap--y-8' id='projects'>
            <h2 className={`${styles.projects} sectionHeader`}>Projects</h2>
            {projectsList.map((project, i) => {
                return (
                    <article key={i} className={styles.article}>
                        <h4 className={styles.articleTitle}>{project.title}</h4>
                        <p className={styles.articleBody}>{project.desc}</p>
                        <div
                            className={
                                project.liveSiteUrl !== ''
                                    ? `${styles.articleLinksContainer}`
                                    : undefined
                            }
                        >
                            <a
                                href={project.sourceCode}
                                target='_blank'
                                rel='noreferrer'
                                className={styles.articleLink}
                            >
                                <p>
                                    Source Code <MdExitToApp />
                                </p>
                            </a>
                            {project.liveSiteUrl !== '' && (
                                <a
                                    href={project.liveSiteUrl}
                                    target='_blank'
                                    rel='noreferrer'
                                    className={styles.articleLinkLive}
                                >
                                    <p>
                                        Live Site <MdExitToApp />
                                    </p>
                                </a>
                            )}
                        </div>
                        <div
                            className={`${
                                project.youtube !== ''
                                    ? styles.videoContainer
                                    : styles.imgContainer
                            } ${styles.articleVideo}`}
                        >
                            {project.liveSiteUrl !== '' ? (
                                <a
                                    href={project.liveSiteUrl}
                                    target='_blank'
                                    rel='noreferrer'
                                >
                                    <img
                                        className={styles.imgLiveSite}
                                        src={`/images/${project.liveSiteImg}`}
                                        alt='Coming soon! *smiley face*'
                                    ></img>
                                </a>
                            ) : project.youtube !== '' ? (
                                <iframe
                                    className={styles.iframe}
                                    src={project.youtube}
                                    title='YouTube video player'
                                    frameBorder='0'
                                    allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
                                    allowFullScreen
                                ></iframe>
                            ) : (
                                <a
                                    href={project.sourceCode}
                                    target='_blank'
                                    rel='noreferrer'
                                >
                                    <img
                                        className={styles.img}
                                        src='images/coming-soon.jpg'
                                        alt='Coming soon! *smiley face*'
                                    ></img>
                                </a>
                            )}
                        </div>
                    </article>
                );
            })}
        </section>
    );
}
