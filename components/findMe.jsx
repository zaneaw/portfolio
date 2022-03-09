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

export default function ContactMe() {
    return (
        <section className={styles.grid} id="contact">
            <h2 className={`${styles.findMe} sectionHeader`}>Find Me</h2>
            <a
                target="_blank"
                rel="noreferrer"
                href="https://github.com/zaneaw"
                className={`${styles.bubble} ${styles.githubBubble}`}
            >
                <FaGithub className={`${styles.icon} ${styles.githubIcon}`} />
            </a>
            <a
                target="_blank"
                rel="noreferrer"
                href="mailto:wilsonzanea@gmail.com?subject=Portfolio&body=Hello%20Zane..."
                className={`${styles.bubble} ${styles.gmailBubble}`}
            >
                <SiGmail className={`${styles.icon} ${styles.gmailIcon}`} />
            </a>
            <a
                target="_blank"
                rel="noreferrer"
                href="https://www.linkedin.com/in/zaneaw/"
                className={`${styles.bubble} ${styles.linkedInBubble}`}
            >
                <FaLinkedinIn
                    className={`${styles.icon} ${styles.linkedInIcon}`}
                />
            </a>
            <a
                target="_blank"
                rel="noreferrer"
                href="https://twitter.com/zane_ohh"
                className={`${styles.bubble} ${styles.twitterBubble}`}
            >
                <FaTwitter className={`${styles.icon} ${styles.twitterIcon}`} />
            </a>
            <a
                target="_blank"
                rel="noreferrer"
                href="https://www.instagram.com/zane_ohh/"
                className={`${styles.bubble} ${styles.instagramBubble}`}
            >
                <FaInstagram
                    className={`${styles.icon} ${styles.instagramIcon}`}
                />
            </a>
            <a
                target="_blank"
                rel="noreferrer"
                href="https://www.facebook.com/zaneohh/"
                className={`${styles.bubble} ${styles.facebookBubble}`}
            >
                <FaFacebookF
                    className={`${styles.icon} ${styles.facebookIcon}`}
                />
            </a>
            <a
                target="_blank"
                rel="noreferrer"
                href="https://www.youtube.com/channel/UCYCFZAEq-7qAwr8dMdqbw5Q"
                className={`${styles.bubble} ${styles.youtubeBubble}`}
            >
                <FaYoutube className={`${styles.icon} ${styles.youtubeIcon}`} />
            </a>
        </section>
    );
}
