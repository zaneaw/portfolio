import Image from "next/image";
import styles from "./findMe.module.css";
import {
    FaGithub,
    FaEnvelope,
    FaLinkedinIn,
    FaTwitter,
    FaInstagram,
    FaFacebookF,
    FaYoutube,
} from "react-icons/fa";

import { SiGmail } from "react-icons/si";

export default function ContactMe() {
    return (
        <section className={styles.grid}>
            <h2 className={styles.findMe}>Find Me</h2>
            <div className={`${styles.bubble} ${styles.githubBubble}`}>
                <FaGithub className={`${styles.icon} ${styles.githubIcon}`} />
            </div>
            <div className={`${styles.bubble} ${styles.gmailBubble}`}>
                <SiGmail className={`${styles.icon} ${styles.gmailIcon}`} />
            </div>
            <div className={`${styles.bubble} ${styles.linkedInBubble}`}>
                <FaLinkedinIn
                    className={`${styles.icon} ${styles.linkedInIcon}`}
                />
            </div>
            <div className={`${styles.bubble} ${styles.twitterBubble}`}>
                <FaTwitter className={`${styles.icon} ${styles.twitterIcon}`} />
            </div>
            <div className={`${styles.bubble} ${styles.instagramBubble}`}>
                <FaInstagram
                    className={`${styles.icon} ${styles.instagramIcon}`}
                />
            </div>
            <div className={`${styles.bubble} ${styles.facebookBubble}`}>
                <FaFacebookF
                    className={`${styles.icon} ${styles.facebookIcon}`}
                />
            </div>
            <div className={`${styles.bubble} ${styles.youtubeBubble}`}>
                <FaYoutube className={`${styles.icon} ${styles.youtubeIcon}`} />
            </div>
        </section>
    );
}
