import styles from "./findMe.module.css";
import {
    FaGithub,
    FaLinkedinIn,
    FaTwitter,
    FaInstagram,
    FaFacebookF,
    FaYoutube,
} from "react-icons/fa";
import { SiGmail } from "react-icons/si";
import { motion } from "framer-motion";

export default function ContactMe() {
    const itemVariant = {
        hidden: { opacity: 0, scale: 0 },
        visible: {
            opacity: 1,
            scale: 1,
            transition: { duration: 1 },
        },
        hover: { scale: 1.2 },
        tap: { scale: 0.9 },
        view: { visible: { once: true } },
    };

    return (
        <section className={`${styles.grid} primaryBackground`} id="contact">
            <motion.h2
                className={`${styles.findMe} sectionHeader`}
                variants={itemVariant}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
            >
                Find Me
            </motion.h2>
            <motion.a
                target="_blank"
                rel="noreferrer"
                href="https://github.com/zaneaw"
                className={`${styles.bubble} ${styles.githubBubble}`}
                variants={itemVariant}
                initial="hidden"
                whileInView="visible"
                whileHover="hover"
                whileTap="tap"
                viewport={{ once: true }}
            >
                <FaGithub className={`${styles.icon} ${styles.githubIcon}`} />
            </motion.a>
            <motion.a
                target="_blank"
                rel="noreferrer"
                href="mailto:wilsonzanea@gmail.com?subject=Portfolio&body=Hello%20Zane..."
                className={`${styles.bubble} ${styles.gmailBubble}`}
                variants={itemVariant}
                initial="hidden"
                whileInView="visible"
                whileHover="hover"
                whileTap="tap"
                viewport={{ once: true }}
            >
                <SiGmail className={`${styles.icon} ${styles.gmailIcon}`} />
            </motion.a>
            <motion.a
                target="_blank"
                rel="noreferrer"
                href="https://www.linkedin.com/in/zaneaw/"
                className={`${styles.bubble} ${styles.linkedInBubble}`}
                variants={itemVariant}
                initial="hidden"
                whileInView="visible"
                whileHover="hover"
                whileTap="tap"
                viewport={{ once: true }}
            >
                <FaLinkedinIn
                    className={`${styles.icon} ${styles.linkedInIcon}`}
                />
            </motion.a>
            <motion.a
                target="_blank"
                rel="noreferrer"
                href="https://twitter.com/zane_ohh"
                className={`${styles.bubble} ${styles.twitterBubble}`}
                variants={itemVariant}
                initial="hidden"
                whileInView="visible"
                whileHover="hover"
                whileTap="tap"
                viewport={{ once: true }}
            >
                <FaTwitter className={`${styles.icon} ${styles.twitterIcon}`} />
            </motion.a>
            <motion.a
                target="_blank"
                rel="noreferrer"
                href="https://www.instagram.com/zane_ohh/"
                className={`${styles.bubble} ${styles.instagramBubble}`}
                variants={itemVariant}
                initial="hidden"
                whileInView="visible"
                whileHover="hover"
                whileTap="tap"
                viewport={{ once: true }}
            >
                <FaInstagram
                    className={`${styles.icon} ${styles.instagramIcon}`}
                />
            </motion.a>
            <motion.a
                target="_blank"
                rel="noreferrer"
                href="https://www.facebook.com/zaneohh/"
                className={`${styles.bubble} ${styles.facebookBubble}`}
                variants={itemVariant}
                initial="hidden"
                whileInView="visible"
                whileHover="hover"
                whileTap="tap"
                viewport={{ once: true }}
            >
                <FaFacebookF
                    className={`${styles.icon} ${styles.facebookIcon}`}
                />
            </motion.a>
            <motion.a
                target="_blank"
                rel="noreferrer"
                href="https://www.youtube.com/channel/UCYCFZAEq-7qAwr8dMdqbw5Q"
                className={`${styles.bubble} ${styles.youtubeBubble}`}
                variants={itemVariant}
                initial="hidden"
                whileInView="visible"
                whileHover="hover"
                whileTap="tap"
                viewport={{ once: true }}
            >
                <FaYoutube className={`${styles.icon} ${styles.youtubeIcon}`} />
            </motion.a>
        </section>
    );
}
