import Image from "next/image";
import styles from "./about.module.css";
import { motion } from "framer-motion";

const textVariant = {
    hidden: { opacity: 0, scale: 0 },
    visible: {
        opacity: 1,
        scale: 1,
        transition: {
            scale: { duration: 0.3 },
            default: { duration: 1 },
        },
    },
};

export default function About() {

    const photos = [
        { text: "Theo", image: "/images/theo.jpg", alt: "most handsome French Bulldog (biased opinion)" },
        { text: "Cooking", image: "/images/cooking.jpg", alt: "cutting board with freshly chopped food on it" },
        { text: "Park", image: "/images/park.jpg", alt: "Me, my partner, and our dog, Theo in a park" },
        { text: "NYC", image: "/images/nyc.jpg", alt: "view of NYC skyscrapers" },
    ];

    return (
        <section className={`${styles.grid} secondaryBackground`} id="about">
            <motion.h2
                className={`${styles.about} sectionHeader`}
                initial={{ opacity: 0, scale: 0 }}
                animate={{
                    opacity: 1,
                    scale: 1,
                    transition: {
                        delay: 2,
                        scale: { duration: 0.3 },
                        default: { duration: 3 },
                    },
                }}
                viewport={{ once: true }}
            >
                About
            </motion.h2>
            <motion.p
                className={styles.aboutText}
                initial={{ opacity: 0, scale: 0 }}
                animate={{
                    opacity: 1,
                    scale: 1,
                    transition: {
                        delay: 2,
                        scale: { duration: 0.3 },
                        default: { duration: 3 },
                    },
                }}
                viewport={{ once: true }}
            >
                Hi there &#128075; I&apos;m Zane! I used to sell real estate in
                Charleston, SC. Following a dream, I moved to NYC to pursue my
                real estate career in the big city with all of the bright
                lights! I loved it so much that I quickly became the top solo
                agent at my company and started a team of agents that I managed!
                COVID struck almost exactly on my two-year anniversary of moving
                to the city and I realized it was time for a change... I had
                always loved computers and decided to take the plunge into
                learning to code. I&apos;ve learned SO much and fallen more in
                love with computers and technology as time has gone by. I
                enjoyed real estate, but I was never passionate about it.
                That&apos;s why I&apos;m teeming with excitement to continue my
                path in technology - because I&apos;m passionate about it! I
                can&apos;t wait to see what the future has in store for me.
            </motion.p>

            {photos.map((photo) => (
                <motion.div
                    key={photo.text}
                    whileHover={{ scale: 1.2, zIndex: 3 }}
                    className={`${
                        styles.image
                    } styles.${photo.text.toLowerCase()}`}
                    variants={textVariant}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                >
                    <Image
                        src={photo.image}
                        height="500px"
                        width="500px"
                        alt={photo.alt}
                    />
                </motion.div>
            ))}

            <motion.h3
                className={`${styles.personal} sectionHeader`}
                variants={textVariant}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
            >
                Personal
            </motion.h3>
            <motion.p
                className={styles.personalText}
                variants={textVariant}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
            >
                As you already know, I&apos;m Zane and I&apos;m a software engineer that
                used to sell real estate at the highest level. I have a lovely
                partner who has been extremely supportive throughout my career
                change - thank you! We have a very handsome French Bulldog whose
                name is Theo, he brings us so much joy and certainly keeps us
                laughing. Cooking is something that I enjoy very much. I cook
                everything from dinner to homemade sourdough bread. I mean, I
                love food! Who doesn&apos;t?
            </motion.p>
        </section>
    );
}
