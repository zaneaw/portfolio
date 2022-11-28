import { useState, useEffect } from 'react';
import Image from 'next/image';
import { InView, useInView } from 'react-intersection-observer';
import ProjectDisplay from './blocks/ProjectDisplay';
import workData from '../data/workData';
import projectsData from '../data/projectsData';

export default function Projects() {
    const [workList, setWorkList] = useState([]);
    const [projectsList, setProjectList] = useState([]);
    const [ref, inView] = useInView({
        triggerOnce: true,
        threshold: 1,
    });
    const [ref2, inView2] = useInView({
        triggerOnce: true,
        threshold: 1,
    });

    useEffect(() => {
        setWorkList(workData);
        setProjectList(projectsData);
    }, [])

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
            {workList.map((project, i) => {
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
                    inView2 ? 'animate-translateInUp' : 'opacity-0'
                }`}
                ref={ref2}
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
