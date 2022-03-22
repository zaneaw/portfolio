import { useEffect } from "react";
import Image from "next/image";
import styles from "./about.module.css";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

export default function About() {
    const { ref, inView } = useInView();
    const animation = useAnimation();

    useEffect(() => {
        if (inView) {
            animation.start("visible");
        }
        if (!inView) {
            animation.start("hidden");
        }
        console.log("useEffectHook = ", inView);
    }, [animation, inView]);

    const containerVariant = {
        hidden: { opacity: 0, x: "-100vw" },
        visible: { opacity: 1, x: 0 },
    };

    return (
        <motion.section
            ref={ref}
            className={`${styles.grid} secondaryBackground`}
            id="about"
        >
            <motion.h2
                className={`${styles.about} sectionHeader`}
                initial="hidden"
                animate={animation}
                variants={containerVariant}
            >
                About
            </motion.h2>
            <motion.p className={styles.aboutText}>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Unde
                excepturi veniam fugiat consequatur, quas quos inventore est
                exercitationem voluptatem, harum accusantium tenetur a ea nemo
                obcaecati aut maxime deleniti nulla magni blanditiis
                reprehenderit! Nisi, molestiae?
            </motion.p>
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
            <motion.h3 className={`${styles.personal} sectionHeader`}>
                Personal
            </motion.h3>
            <motion.p className={styles.personalText}>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Explicabo corrupti et minima eius expedita dignissimos nisi
                eligendi quod deleniti provident aut, vero voluptate suscipit
                odio!
            </motion.p>
        </motion.section>
    );
}
