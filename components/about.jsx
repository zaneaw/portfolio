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
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Unde
                excepturi veniam fugiat consequatur, quas quos inventore est
                exercitationem voluptatem, harum accusantium tenetur a ea nemo
                obcaecati aut maxime deleniti nulla magni blanditiis
                reprehenderit! Nisi, molestiae?
            </motion.p>

            {photos.map((photo) => (
                <motion.div
                    key={photo.text}
                    whileHover={{ scale: 1.2, zIndex: 3 }}
                    className={`${styles.image} styles.${photo.text.toLowerCase()}`}
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
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Explicabo corrupti et minima eius expedita dignissimos nisi
                eligendi quod deleniti provident aut, vero voluptate suscipit
                odio!
            </motion.p>
        </section>
    );
}
