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
            stack: ['React.js', 'Next.js', 'SASS', 'Bootstrap'],
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
            stack: ['React.js', 'MongoDB', 'Express', 'Redux', 'Bootstrap CSS'],
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
            className='scroll-mt-20 z-0 flex flex-col gap-y-8 justify-center items-center'
            id='work'
        >
            <div className='flex flex-row flex-nowrap w-full after:h-[7px] after:w-full after:ml-2 after:relative after:top-6 after:border-y after:border-red-orange before:h-[7px] before:w-full before:mr-2 before:relative before:top-6 before:border-y before:border-red-orange'>
                <h2 className='w-fit whitespace-nowrap text-center text-primary text-5xl font-monoCustom mb-12'>
                    My Work
                </h2>
            </div>
            
            {projectsList.map((project, i) => {
                return (
                    <article
                        key={i}
                        className='group hover:-translate-y-1 font-serifCustom relative overflow-hidden flex flex-col gap-2 xs:mx-6 px-4 py-2 mb-6 shadow-xl bg-primary-darker rounded-lg text-gray-light fill-gray-light transition-all duration-300 ease-in'
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
                            className='text-red-orange group-hover:text-pink-light text-xl xs:text-2xl w-fit font-monoCustom flex flex-row flex-nowrap gap-2 py-1 bg-right-bottom bg-gradient-to-l from-red-orange to-red-orange group-hover:from-pink-light group-hover:to-pink-light bg-[length:0%_2px] bg-no-repeat hover:bg-[length:100%_2px] transition-all duration-200 ease-in'
                            href={
                                project.liveSiteUrl
                                    ? project.liveSiteUrl
                                    : project.sourceCode
                            }
                        >
                            {project.title}
                        </a>

                        <p className='tracking-wide'>{project.desc}</p>

                        <div className='flex flex-row flex-wrap font-monoCustom text-base xs:text-lg gap-x-4 gap-y-1'>
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
                                        viewBox='0 0 496 512'
                                    >
                                        <path d='M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z' />
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
