import Image from "next/image";
import styles from "./about.module.css";
import { motion } from "framer-motion";

export default function About() {
    return (
        <section className={styles.grid} id="about">
            <h2 className={`${styles.about} sectionHeader`}>About</h2>
            <p className={styles.aboutText}>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Unde
                excepturi veniam fugiat consequatur, quas quos inventore est
                exercitationem voluptatem, harum accusantium tenetur a ea nemo
                obcaecati aut maxime deleniti nulla magni blanditiis
                reprehenderit! Nisi, molestiae?
            </p>
            <motion.div
                whileHover={{ scale: 1.4, zIndex: 1 }}
                className={`${styles.image} ${styles.theo}`}
            >
                <Image
                    priority
                    src="/images/theo.jpg"
                    height="500px"
                    width="500px"
                    alt=""
                />
            </motion.div>
            <motion.div
                whileHover={{ scale: 1.4, zIndex: 1 }}
                className={`${styles.image} ${styles.cooking}`}
            >
                <Image
                    src="/images/cooking.jpg"
                    height="500px"
                    width="500px"
                    alt=""
                />
            </motion.div>
            <motion.div
                whileHover={{ scale: 1.4, zIndex: 1 }}
                className={`${styles.image} ${styles.park}`}
            >
                <Image
                    src="/images/park.jpg"
                    height="500px"
                    width="500px"
                    alt=""
                />
            </motion.div>
            <motion.div
                whileHover={{ scale: 1.4, zIndex: 1 }}
                className={`${styles.image} ${styles.nyc}`}
            >
                <Image
                    src="/images/nyc.jpg"
                    height="500px"
                    width="500px"
                    alt=""
                />
            </motion.div>
            <h3 className={`${styles.personal} sectionHeader`}>Personal</h3>
            <p className={styles.personalText}>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Explicabo corrupti et minima eius expedita dignissimos nisi
                eligendi quod deleniti provident aut, vero voluptate suscipit
                odio!
            </p>
        </section>
    );
}
