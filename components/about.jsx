import Image from 'next/image';
import styles from './about.module.css';

export default function About() {
    const photos = [
        {
            text: 'Theo',
            image: '/images/theo.jpg',
            alt: 'most handsome French Bulldog (biased opinion)',
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
        <section className={`${styles.grid} secondaryBackground`} id='about'>
            <h2 className={`${styles.about} sectionHeader`}>About</h2>
            <p className={styles.aboutText}>
                Hi there &#128075; I&apos;m Zane! I used to sell real estate in
                Charleston, SC. Following a dream, I moved to NYC to pursue my
                real estate career in the big city with all the bright lights! I
                loved it so much that I quickly became the top agent at my
                company - doing the most deals while also having the most 5-star
                client reviews. I became too busy to handle it all on my own and
                started a team of agents that I managed! COVID struck almost
                exactly on my two-year anniversary of moving to the city and I
                realized it was time for a change... I had always loved
                computers and decided to take the plunge into learning to code.
                I&apos;ve learned SO much and fallen more in love with computers
                and technology as time has gone by. I enjoyed real estate, but I
                was never passionate about it. That&apos;s why I&apos;m teeming
                with excitement to continue my path in technology - because
                I&apos;m passionate about it! I can&apos;t wait to see what the
                future has in store for me.
            </p>

            {photos.map((photo) => (
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
            ))}

            <h3 className={`${styles.personal} sectionHeader`}>Personal</h3>
            <p className={styles.personalText}>
                As you already know, I&apos;m Zane and I&apos;m a software
                engineer that used to sell real estate at the highest level. I
                have a lovely partner who has been extremely supportive
                throughout my career change - thank you! We have a very handsome
                French Bulldog whose name is Theo. He brings us so much joy and
                certainly keeps us laughing with his quirky personality and
                stinky toots &#128168;. Cooking is something that I enjoy very
                much. I cook everything from tofu with bokchoy and cauliflower
                rice 🥗 to homemade sourdough bread 🍞. I mean, I love food! Who
                doesn&apos;t?
            </p>
        </section>
    );
}
