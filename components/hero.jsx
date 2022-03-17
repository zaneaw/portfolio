import Image from "next/image";
import styles from "./hero.module.css";
import { FaTelegramPlane, FaDownload } from "react-icons/fa";
import { motion } from "framer-motion";

export default function Hero() {
    return (
        <div className="bgi">
            <section className={styles.grid}>
                <motion.h2 className={styles.hello} initial={{ x: "-100vw", opacity: 0 }} animate={{ x: 0, opacity: 1 }}>
                    Hello! I&apos;m Zane, Software Engineer
                </motion.h2>
                <h4 className={styles.detail}>
                    Meticulous, detail-oriented and self-motivated{" "}
                    <span className={styles.show}>
                        - My professional experience as a top-producing real
                        estate broker in NYC translates seamlessly into being a
                        great software engineer!
                    </span>
                </h4>
                <motion.a
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
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    className={`${styles.download} ${styles.buttons}`}
                    href="/downloads/resume_website.pdf"
                    download="zanesAwesomeResume"
                >
                    Download CV <FaDownload />
                </motion.a>
                <div className={styles.image}>
                    <Image
                        src="/images/hero-image.svg"
                        layout="responsive"
                        height="400px"
                        width="600px"
                        alt="image of a cartoon sitting on a computer desk with a computer next to them."
                    />
                </div>
            </section>
        </div>
    );
}
