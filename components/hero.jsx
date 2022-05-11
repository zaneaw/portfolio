import Image from "next/image";
import styles from "./hero.module.css";
import { FaTelegramPlane, FaDownload } from "react-icons/fa";
import { motion } from "framer-motion";

const containerVariant = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.4,
        },
    },
};

const itemVariant = {
    hidden: { opacity: 0, x: "-100vw" },
    visible: {
        opacity: 1,
        x: 0,
        transition: { type: "spring", mass: 0.3, damping: 9 },
    },
};

export default function Hero() {
    return (
        <div className="primaryBackground">
            <motion.div
                variants={containerVariant}
                initial="hidden"
                animate="visible"
                className="bgi"
            >
                <motion.section className={styles.grid}>
                    <motion.h2
                        className={styles.hello}
                        variants={itemVariant}
                        transition={{ delay: 0.2, duration: 1 }}
                    >
                        Hello! I&apos;m Zane, Software Engineer
                    </motion.h2>
                    <motion.h4 className={styles.detail} variants={itemVariant}>
                        Meticulous, detail-oriented and self-motivated{" "}
                        <motion.span className={styles.show}>
                            - My professional experience as a top-producing real
                            estate broker in NYC translates seamlessly into
                            being a great software engineer!
                        </motion.span>
                    </motion.h4>
                    <motion.div className={styles.buttonsContainer}>
                        <motion.a
                            variants={itemVariant}
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                            className={`${styles.contact} ${styles.buttons}`}
                            href="mailto:wilsonzanea@gmail.com?subject=Contacting%20You
                &body=I'd%20like%20to%20hire%20YOU!"
                            target="_blank"
                            rel="noreferrer"
                        >
                            Contact Me <FaTelegramPlane />
                        </motion.a>
                        <motion.a
                            variants={itemVariant}
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                            className={`${styles.download} ${styles.buttons}`}
                            href="/downloads/zanescv.pdf"
                            download="ZanesCV"
                        >
                            Download CV <FaDownload />
                        </motion.a>
                    </motion.div>
                    <motion.div variants={itemVariant} className={styles.image}>
                        <Image
                            src="/images/hero-image.svg"
                            height="400px"
                            width="600px"
                            alt="image of a cartoon sitting on a computer desk with a computer next to them."
                        />
                    </motion.div>
                </motion.section>
            </motion.div>
        </div>
    );
}
