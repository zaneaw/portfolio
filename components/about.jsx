import Image from 'next/image';
import EmblaCarousel from './carousel';
import { InView, useInView } from 'react-intersection-observer';

export default function About() {
    const { ref, inView } = useInView({
        triggerOnce: true,
        threshold: 0.25,
    })

    const photos = [
        {
            text: 'Theo',
            image: '/images/theo.jpg',
            alt: 'the most handsome French Bulldog (biased opinion)',
        },
        {
            text: 'Cooking',
            image: '/images/cooking.jpg',
            alt: 'cutting board with freshly chopped food on it',
        },
        {
            text: 'Park',
            image: '/images/park.jpg',
            alt: 'Me, my partner, and our dog, Theo in a park',
        },
        {
            text: 'NYC',
            image: '/images/nyc.jpg',
            alt: 'view of NYC skyscrapers',
        },
    ];

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
                        <h2 className='tracking-wide lg:tracking-wider text-primary text-4xl lg:text-5xl font-rampart mt-2 mb-8 text-center'>
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
                            anniversary of moving to the city and I knew it was
                            time for a change... I had always loved computers
                            and decided to take the plunge into learning to
                            code. I&apos;ve learned SO much and fallen more in
                            love with computers and technology as time has gone
                            by. I enjoyed real estate, but I was never
                            passionate about it. That&apos;s why I&apos;m
                            teeming with excitement to continue my path in
                            technology - because I&apos;m passionate about it! I
                            can&apos;t wait to see what the future has in store
                            for me.
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

            <InView threshold={0.25} triggerOnce>
                {({ inView, ref }) => (
                    <div
                        ref={ref}
                        className={`${
                            inView ? 'animate-translateInUp' : 'opacity-0'
                        }`}
                    >
                        <h3 className='tracking-wide lg:tracking-wider text-primary text-4xl lg:text-5xl font-rampart mt-2 mb-8 text-center'>
                            Getting Personal
                        </h3>
                        <p>
                            As you already know, I&apos;m Zane and I&apos;m a
                            software engineer that used to sell real estate in
                            NYC. I have a lovely partner who has been extremely
                            supportive throughout my career change - thank you!
                            We have a very handsome French Bulldog whose name is
                            Theo. He brings us so much joy and certainly keeps
                            us laughing with his quirky personality and stinky
                            toots.
                            <br />
                            <br />
                            Cooking is something that brings me great joy as
                            well. I cook everything from tofu with bokchoy and
                            cauliflower rice to homemade sourdough bread. I
                            mean... I love food! Who doesn&apos;t?
                        </p>
                    </div>
                )}
            </InView>
        </section>
    );
}
