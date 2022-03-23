import Image from "next/image";
import styles from "./about.module.css";
import { motion } from "framer-motion";

export default function About() {
    const textVariant = {
        hidden: { opacity: 0, scale: 0 },
        visible: {
            opacity: 1,
            scale: 1,
            transition: { duration: 1 },
        },
        viewAmount: { amount: 0.1 },
    };

    return (
        <motion.section
            className={`${styles.grid} secondaryBackground`}
            id="about"
        >
            <motion.h2
                className={`${styles.about} sectionHeader`}
                variants={textVariant}
                initial="hidden"
                whileInView="visible"
                viewport="viewAmount"
            >
                About
            </motion.h2>
            <motion.p
                className={styles.aboutText}
                variants={textVariant}
                initial="hidden"
                whileInView="visible"
                viewport="viewAmount"
            >
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Unde
                excepturi veniam fugiat consequatur, quas quos inventore est
                exercitationem voluptatem, harum accusantium tenetur a ea nemo
                obcaecati aut maxime deleniti nulla magni blanditiis
                reprehenderit! Nisi, molestiae?
            </motion.p>
            <motion.div
                whileHover={{ scale: 1.2, zIndex: 3 }}
                className={`${styles.image} ${styles.theo}`}
                variants={textVariant}
                initial="hidden"
                whileInView="visible"
                viewport="viewAmount"
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
                whileHover={{ scale: 1.2, zIndex: 3 }}
                className={`${styles.image} ${styles.cooking}`}
                variants={textVariant}
                initial="hidden"
                whileInView="visible"
                viewport="viewAmount"
            >
                <Image
                    src="/images/cooking.jpg"
                    height="500px"
                    width="500px"
                    alt=""
                />
            </motion.div>
            <motion.div
                whileHover={{ scale: 1.2, zIndex: 3 }}
                className={`${styles.image} ${styles.park}`}
                variants={textVariant}
                initial="hidden"
                whileInView="visible"
                viewport="viewAmount"
            >
                <Image
                    src="/images/park.jpg"
                    height="500px"
                    width="500px"
                    alt=""
                />
            </motion.div>
            <motion.div
                whileHover={{ scale: 1.2, zIndex: 3 }}
                className={`${styles.image} ${styles.nyc}`}
                variants={textVariant}
                initial="hidden"
                whileInView="visible"
                viewport="viewAmount"
            >
                <Image
                    src="/images/nyc.jpg"
                    height="500px"
                    width="500px"
                    alt=""
                />
            </motion.div>
            <motion.h3
                className={`${styles.personal} sectionHeader`}
                variants={textVariant}
                initial="hidden"
                whileInView="visible"
                viewport="viewAmount"
            >
                Personal
            </motion.h3>
            <motion.p
                className={styles.personalText}
                variants={textVariant}
                initial="hidden"
                whileInView="visible"
                viewport="viewAmount"
            >
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Explicabo corrupti et minima eius expedita dignissimos nisi
                eligendi quod deleniti provident aut, vero voluptate suscipit
                odio!
            </motion.p>
        </motion.section>
    );
}
