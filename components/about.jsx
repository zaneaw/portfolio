import Image from "next/image";
import styles from "./about.module.css";
import { motion } from "framer-motion";

const sectionVariant = {
    hidden: { opacity: 0, x: "-100vw" },
    visible: { opacity: 1, x: 0 },
};

const textVariant = {
    hidden: { opacity: 0, x: "-100vw" },
    visible: {
        opacity: 1,
        x: 0,
    },
};

export default function About() {
    return (
        <motion.section 
            initial="hidden"
            animate="visible"
            variants={sectionVariant}
            className={styles.grid} id="about">
            <motion.h2 variants={textVariant} className={`${styles.about} sectionHeader`}>About</motion.h2>
            <motion.p variants={textVariant} className={styles.aboutText}>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Unde
                excepturi veniam fugiat consequatur, quas quos inventore est
                exercitationem voluptatem, harum accusantium tenetur a ea nemo
                obcaecati aut maxime deleniti nulla magni blanditiis
                reprehenderit! Nisi, molestiae?
            </motion.p>
            <motion.div variants={textVariant}
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
            <motion.div variants={textVariant}
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
            <motion.div variants={textVariant}
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
            <motion.div variants={textVariant}
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
            <motion.h3 variants={textVariant} className={`${styles.personal} sectionHeader`}>Personal</motion.h3>
            <motion.p variants={textVariant} className={styles.personalText}>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Explicabo corrupti et minima eius expedita dignissimos nisi
                eligendi quod deleniti provident aut, vero voluptate suscipit
                odio!
            </motion.p>
        </motion.section>
    );
}
