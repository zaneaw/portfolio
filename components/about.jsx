import Image from 'next/image';
import EmblaCarousel from './carousel';
import { InView, useInView } from 'react-intersection-observer';

export default function About() {
    const { ref, inView } = useInView({
        triggerOnce: true,
        threshold: 0.25,
    })

    return (
        <section
            className={`scroll-mt-20 z-0 mt-20 border border-primary shadow-lg mb-6 p-4 xs:mx-6 md:mx-12 rounded-lg text-gray-light flex flex-col gap-y-8 justify-center items-center ${inView ? 'animate-translateInUp' : 'opacity-0'}`}
            id='about'
            ref={ref}
        >
            {/* <div className='flex flex-row flex-nowrap w-full mt-2 after:h-[7px] after:w-full after:ml-2 after:relative after:top-4 after:border-y after:border-red-orange before:h-[7px] before:w-full before:mr-2 before:relative before:top-4 before:border-y before:border-red-orange'>
                <h2 className='text-primary text-4xl font-monoCustom text-center w-fit whitespace-nowrap'>
                    About Me
                </h2>
            </div> */}
            <InView threshold={0.25} triggerOnce>
                {({ inView, ref }) => (
                    <div
                        ref={ref}
                        className={`${
                            inView ? 'animate-translateInUp' : 'opacity-0'
                        }`}
                    >
                        <h2 className='tracking-wide lg:tracking-wider text-primary text-3xl xs:text-4xl lg:text-5xl font-rampart mt-2 mb-8 text-center'>
                            About Me
                        </h2>
                        <p>
                            Hi there, I&apos;m Zane! I used to sell real estate
                            in Charleston, SC. Following a dream, I moved to NYC
                            to pursue my real estate career in the big city with
                            all the bright lights! I loved it so much that I
                            quickly became the top agent at my company - doing
                            the most deals while also having the most 5-star
                            client reviews. I became too busy to handle it all
                            on my own and started a team of agents that I
                            managed!
                            <br />
                            <br />
                            COVID struck almost exactly on my two-year
                            anniversary of moving to the city... During the 
                            lockdown, I realized that my passion, knowledge,
                            and skills for software development surpassed
                            my desire and passion for real estate. I&apos;m
                            teeming with excitement to continue my path in
                            technology. I can&apos;t wait to see what the 
                            future has in store for me.
                        </p>
                    </div>
                )}
            </InView>

            {/* {photos.map((photo) => (
                <div
                    key={photo.text}
                    className={`${
                        styles.image
                    } styles.${photo.text.toLowerCase()}`}
                >
                    <Image
                        src={photo.image}
                        height='500px'
                        width='500px'
                        alt={photo.alt}
                    />
                </div>
            ))} */}

            {/* <InView threshold={0.25} triggerOnce>
                {({ inView, ref }) => (
                    <div
                        ref={ref}
                        className={`${
                            inView ? 'animate-translateInUp' : 'opacity-0'
                        }`}
                    >
                        <h3 className='tracking-wide lg:tracking-wider text-primary text-3xl xs:text-4xl lg:text-5xl font-rampart mt-2 mb-8 text-center'>
                            Getting Professional
                        </h3>
                        <p>
                            Throughout my software development journey,
                            I&apos;ve invested a lot of time and energy into
                            becoming confident with several different languages.
                            Understanding the core principles of software
                            development and practicing and researching the
                            best methodologies to follow. I spend 
                        </p>
                    </div>
                )}
            </InView> */}
        </section>
    );
}
