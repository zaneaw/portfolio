import Image from 'next/image';
import { InView, useInView } from 'react-intersection-observer';
import ProjectDisplay from './blocks/ProjectDisplay';

export default function Projects() {
    const { ref, inView } = useInView({
        triggerOnce: true,
        threshold: 1,
    });
    // const [ ref, inView ] = useInView({
    //     triggerOnce: true,
    //     rootMargin: '-100px 0px',
    // });

    const workExperience = [
        {
            title: 'Share-a-Cart.com',
            desc: 'Develop and update new and existing pages, components, and animations while focusing on the user experience. Develop and design new, complex user interaction flows, such as a system to compare current cart items to other vendors in order to save users money and to increase conversion rate.',
            stack: ['Node.js', 'Tailwind CSS', 'jQuery', 'Express.js', 'EJS'],
            sourceCode: '',
            youtube: '',
            liveSiteUrl: 'https://share-a-cart.com/',
            liveSiteImg: 'sac.jpg',
            width: 100,
            height: 100,
        },
    ];

    const projectsList = [
        {
            title: 'Student Profiles',
            desc: 'Built with Next.js and Tailwind CSS. This site fetches data from an external API at build time to create a static site, iterates over the data to create dynamic and interactive components and also takes user input in the form of tags. I implemented memoization for expensive functions and developed a query system to search the database on one or more inputs.',
            stack: ['React.js', 'Next.js', 'Tailwind CSS', 'REST API'],
            sourceCode: 'https://github.com/zaneaw/student-profiles',
            youtube: '',
            liveSiteUrl: 'https://zane-student-profiles.vercel.app/',
            liveSiteImg: '',
            width: 100,
            height: 100,
        },
        // {
        //     title: 'Shopping List',
        //     desc: "Built with Next.js and Tailwind CSS. This site fetches data from an external API at build time to create a static site, iterates over the data to create dynamic and interactive components and also takes user input in the form of tags. I implemented memoization for expensive functions and developed a query system to search the database on one or more inputs.",
        //     stack: ['React Native'],
        //     sourceCode: 'https://github.com/zaneaw/ShoppingListApp',
        //     youtube: '',
        //     liveSiteUrl: '',
        //     liveSiteImg: '',
        //     width: 100,
        //     height: 100,
        // },
        {
            title: 'LA Mountains',
            desc: "This project was completed in the React framework, NextJS. The task was to take a PSD file and turn it into a mobile-friendly, responsive, single page web application. In addition to Next.js, I also used Sass and some Bootstrap as well.",
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
            desc: 'Built in React, this is a full-stack web application. I developed a backend using MongoDB and utilized JWT for user authentication. The stack involved in this site includes Redux, Bootstrap, Express, MongoDB, and more. Be sure to check out the video demo of the project.',
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
            desc: "Full-Stack web application built using Django and MySQL. I implemented Django's MVC pattern to create an interactive, customized user experience. The project consists of user authentication, user customization, forum-like commenting, a system of 'liking' projects, AWS integration for use and storage of files, and more. It's hosted on Heroku, check it out.",
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
            <div
                className={`flex flex-row flex-nowrap w-full after:h-[7px] after:w-full after:ml-2 after:relative after:top-6 md:after:top-8 after:border-y after:border-red-orange before:h-[7px] before:w-full before:mr-2 before:relative before:top-6 md:before:top-8 before:border-y before:border-red-orange ${
                    inView ? 'animate-translateInUp' : 'opacity-0'
                }`}
                ref={ref}
            >
                <h2 className='w-fit sm:whitespace-nowrap text-center text-primary text-4xl xs:text-5xl md:text-6xl lg:text-7xl font-monoCustom mb-4'>
                    Work Experience
                </h2>
            </div>
            {workExperience.map((project, i) => {
                return (
                    <InView as='div' key={i} threshold={0.25} triggerOnce>
                        {({ inView, ref }) => (
                            <div ref={ref}>
                                <ProjectDisplay
                                    project={project}
                                    isInView={inView}
                                />
                            </div>
                        )}
                    </InView>
                );
            })}

            <div
                className={`flex flex-row flex-nowrap w-full after:h-[7px] after:w-full after:ml-2 after:relative after:top-6 md:after:top-8 after:border-y after:border-red-orange before:h-[7px] before:w-full before:mr-2 before:relative before:top-6 md:before:top-8 before:border-y before:border-red-orange ${
                    inView ? 'animate-translateInUp' : 'opacity-0'
                }`}
                ref={ref}
            >
                <h2 className='w-fit whitespace-nowrap text-center text-primary text-4xl xs:text-5xl md:text-6xl lg:text-7xl font-monoCustom mb-4'>
                    Projects
                </h2>
            </div>

            {projectsList.map((project, i) => {
                return (
                    <InView as='div' key={i} threshold={0.25} triggerOnce>
                        {({ inView, ref }) => (
                            <div ref={ref}>
                                <ProjectDisplay
                                    project={project}
                                    isInView={inView}
                                />
                            </div>
                        )}
                    </InView>
                );
            })}
        </section>
    );
}
