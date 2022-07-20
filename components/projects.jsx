import Image from 'next/image';

export default function Projects() {
    const projectsList = [
        {
            title: 'Share-a-Cart.com',
            desc: 'Developed and updated new pages, components, and animations. Optimized site speed while focusing on the user experience and creating a completely responsive user interface with an emphasis on ease-of-use to improve click-through rate. Improved site speed and decreased bundle size. Streamlined the development process to make collaboration with other developers simpler. 1,000+ users every week!',
            stack: ['Node.js', 'Tailwind CSS', 'LottieFiles'],
            sourceCode: '',
            youtube: '',
            liveSiteUrl: 'https://share-a-cart.com/',
            liveSiteImg: 'sac.jpg',
            width: 100,
            height: 100,
        },
        {
            title: 'LA Mountains',
            desc: "This project was completed in the React framework, NextJS. The task was to take a PSD file and turn it into a responsive, single page web application. In addition to Next.js, I also used Sass and some Bootstrap as well. I think the project came out looking great! Don't forget to check out the live site for yourself.",
            stack: ['Next.js', 'SASS', 'Bootstrap'],
            sourceCode: 'https://github.com/zaneaw/la-mountains',
            youtube: '',
            liveSiteUrl: 'https://la-mountains.vercel.app',
            liveSiteImg: 'la-mntns.jpg',
            width: 100,
            height: 100,
        },
        {
            title: 'Pizza by Zane',
            desc: 'Built in React, this is a full-stack web application. I developed a backend using MongoDB and utilized JWT for user authentication. The stack involved in this site includes Redux, Bootstrap, Express, MongoDB, and more. Be sure to check out the video demo of the project!',
            stack: ['React', 'MongoDB', 'Express', 'Redux', 'Bootstrap'],
            sourceCode: 'https://github.com/zaneaw/conFusion',
            youtube: 'https://www.youtube.com/embed/iS4MRaI6DGU',
            liveSiteUrl: '',
            liveSiteImg: '',
            width: 100,
            height: 100,
        },
        {
            title: 'Forum Website',
            desc: "Full-Stack web application built using Django and MySQL. I implemented Django's MVC pattern to create an interactive, customized user experience. The project consists of user authentication, user customization, forum-like commenting, a system of 'liking' projects, AWS integration for use and storage of files, and more. It's hosted on Heroku, check it out!.",
            stack: ['Django', 'MySQL', 'AWS'],
            sourceCode: 'https://github.com/zaneaw/Portfolio-Site',
            youtube: '',
            liveSiteUrl: 'https://www.zane-wilson.com',
            liveSiteImg: 'zw-forum.jpg',
            width: 100,
            height: 100,
        },
        {
            title: 'Notes App',
            desc: 'Built in React JS. I utilized custom hooks to support a toggleable dark mode option as well as the use of local storage. When closed navigated back to, the users notes will persist.',
            stack: ['React.js'],
            sourceCode: 'https://github.com/zaneaw/notes-app',
            youtube: '',
            liveSiteUrl: 'https://zanes-notes-app.vercel.app/',
            liveSiteImg: 'notes-app.jpg',
            width: 100,
            height: 100,
        },
    ];

    return (
        <section
            className='z-0 flex flex-col gap-y-8 justify-center items-center'
            id='projects'
        >
            <h2 className='text-primary text-5xl font-rampart mb-12'>
                My Work
            </h2>
            {projectsList.map((project, i) => {
                return (
                    <article
                        key={i}
                        className='group hover:-translate-y-1 font-serifCustom relative overflow-hidden flex flex-col gap-2 mx-6 px-4 py-2 mb-6 shadow-xl bg-primary-darker rounded-lg text-gray-light fill-gray-light transition-all duration-300 ease-in'
                    >
                        {/* {project.liveSiteImg && (
                            <Image
                                className='-z-10 absolute opacity-5 group-hover:opacity-0 transition-all duration-300 ease-in'
                                src={`/images/${project.liveSiteImg}`}
                                layout='fill'
                                alt='Project Image'
                            />
                        )} */}
                        
                        <a
                            className='text-xl xs:text-2xl w-fit font-monoCustom flex flex-row flex-nowrap gap-2 py-1 text-red-orange bg-right-bottom bg-gradient-to-l from-red-orange to-red-orange bg-[length:0%_2px] bg-no-repeat hover:bg-[length:100%_2px] transition-all duration-200 ease-in'
                            href={
                                project.liveSiteUrl
                                    ? project.liveSiteUrl
                                    : project.sourceCode
                            }
                        >
                            {project.title}
                        </a>

                        <p className='tracking-wide'>{project.desc}</p>

                        <div className='flex flex-row flex-wrap font-monoCustom gap-x-4 gap-y-1'>
                            {project.stack.map((x, i) => {
                                return (
                                    <span
                                        className='hover:text-red-orange cursor-default'
                                        key={i}
                                    >
                                        {x}
                                    </span>
                                );
                            })}
                        </div>

                        <div className='absolute h-8 top-2 right-4 w-fit flex flex-row flex-nowrap gap-2 items-center justify-center'>
                            {project.sourceCode && (
                                <a
                                    href={project.sourceCode}
                                    target='_blank'
                                    rel='noreferrer'
                                    className=''
                                >
                                    <svg
                                        className='w-6 fill-primary hover:fill-primary-light transition-all duration-300 ease-out'
                                        xmlns='http://www.w3.org/2000/svg'
                                        viewBox='0 0 480 512'
                                    >
                                        <path d='M186.1 328.7c0 20.9-10.9 55.1-36.7 55.1s-36.7-34.2-36.7-55.1 10.9-55.1 36.7-55.1 36.7 34.2 36.7 55.1zM480 278.2c0 31.9-3.2 65.7-17.5 95-37.9 76.6-142.1 74.8-216.7 74.8-75.8 0-186.2 2.7-225.6-74.8-14.6-29-20.2-63.1-20.2-95 0-41.9 13.9-81.5 41.5-113.6-5.2-15.8-7.7-32.4-7.7-48.8 0-21.5 4.9-32.3 14.6-51.8 45.3 0 74.3 9 108.8 36 29-6.9 58.8-10 88.7-10 27 0 54.2 2.9 80.4 9.2 34-26.7 63-35.2 107.8-35.2 9.8 19.5 14.6 30.3 14.6 51.8 0 16.4-2.6 32.7-7.7 48.2 27.5 32.4 39 72.3 39 114.2zm-64.3 50.5c0-43.9-26.7-82.6-73.5-82.6-18.9 0-37 3.4-56 6-14.9 2.3-29.8 3.2-45.1 3.2-15.2 0-30.1-.9-45.1-3.2-18.7-2.6-37-6-56-6-46.8 0-73.5 38.7-73.5 82.6 0 87.8 80.4 101.3 150.4 101.3h48.2c70.3 0 150.6-13.4 150.6-101.3zm-82.6-55.1c-25.8 0-36.7 34.2-36.7 55.1s10.9 55.1 36.7 55.1 36.7-34.2 36.7-55.1-10.9-55.1-36.7-55.1z' />
                                    </svg>
                                </a>
                            )}
                            {project.liveSiteUrl && (
                                <a
                                    href={project.liveSiteUrl}
                                    target='_blank'
                                    rel='noreferrer'
                                    className=''
                                >
                                    <svg
                                        className='w-[22px] fill-primary hover:fill-primary-light transition-all duration-300 ease-out'
                                        xmlns='http://www.w3.org/2000/svg'
                                        viewBox='0 0 512 512'
                                    >
                                        <path d='M384 320c-17.67 0-32 14.33-32 32v96H64V160h96c17.67 0 32-14.32 32-32s-14.33-32-32-32L64 96c-35.35 0-64 28.65-64 64V448c0 35.34 28.65 64 64 64h288c35.35 0 64-28.66 64-64v-96C416 334.3 401.7 320 384 320zM488 0H352c-12.94 0-24.62 7.797-29.56 19.75c-4.969 11.97-2.219 25.72 6.938 34.88L370.8 96L169.4 297.4c-12.5 12.5-12.5 32.75 0 45.25C175.6 348.9 183.8 352 192 352s16.38-3.125 22.62-9.375L416 141.3l41.38 41.38c9.156 9.141 22.88 11.84 34.88 6.938C504.2 184.6 512 172.9 512 160V24C512 10.74 501.3 0 488 0z' />
                                    </svg>
                                </a>
                            )}
                            {project.youtube && (
                                <a
                                    href={project.youtube}
                                    target='_blank'
                                    rel='noreferrer'
                                    className=''
                                >
                                    <svg
                                        className='w-5 fill-primary hover:fill-primary-light transition-all duration-300 ease-out'
                                        xmlns='http://www.w3.org/2000/svg'
                                        viewBox='0 0 384 512'
                                    >
                                        <path d='M361 215C375.3 223.8 384 239.3 384 256C384 272.7 375.3 288.2 361 296.1L73.03 472.1C58.21 482 39.66 482.4 24.52 473.9C9.377 465.4 0 449.4 0 432V80C0 62.64 9.377 46.63 24.52 38.13C39.66 29.64 58.21 29.99 73.03 39.04L361 215z' />
                                    </svg>
                                </a>
                            )}
                        </div>
                    </article>
                );
            })}
        </section>
    );
}
